const data = window.QUESTION_DATA;
const topicSelect=document.getElementById("topic");
const qSelect=document.getElementById("question");
const questionText=document.getElementById("questionText");
const topicBadge=document.getElementById("topicBadge");
const marksBadge=document.getElementById("marksBadge");
const commandBadge=document.getElementById("commandBadge");
const sourceNote=document.getElementById("sourceNote");
const answer=document.getElementById("answer");
const results=document.getElementById("results");
const loading=document.getElementById("loading");

const topics=[...new Set(data.map(q=>q.topic))];
topics.forEach(t=>{const o=document.createElement("option");o.value=t;o.textContent=t;topicSelect.appendChild(o)});

function currentQuestion(){return data.find(q=>q.id===qSelect.value)}
function populateQuestions(){
  qSelect.innerHTML="";
  data.filter(q=>q.topic===topicSelect.value).forEach(q=>{
    const o=document.createElement("option");o.value=q.id;o.textContent=q.title;qSelect.appendChild(o)
  });
  renderQuestion();
}
function renderQuestion(){
  const q=currentQuestion(); if(!q)return;
  questionText.textContent=q.question;
  topicBadge.textContent=q.topic;
  marksBadge.textContent=`${q.marks} marks`;
  commandBadge.textContent=q.command_term;
  sourceNote.textContent=q.source_note;
  results.classList.add("hidden");
}
topicSelect.addEventListener("change",populateQuestions); qSelect.addEventListener("change",renderQuestion);
populateQuestions();

document.querySelectorAll(".tab").forEach(btn=>btn.addEventListener("click",()=>{
  document.querySelectorAll(".tab").forEach(b=>b.classList.remove("active"));
  document.querySelectorAll(".panel").forEach(p=>p.classList.remove("active"));
  btn.classList.add("active");
  document.getElementById(btn.dataset.tab+"Panel").classList.add("active");
}));

const canvas=document.getElementById("drawingCanvas"), ctx=canvas.getContext("2d");
ctx.lineWidth=3;ctx.lineCap="round";ctx.strokeStyle="#111827";
let drawing=false,last=null;
function pos(e){const r=canvas.getBoundingClientRect(),p=e.touches?e.touches[0]:e;return {x:(p.clientX-r.left)*(canvas.width/r.width),y:(p.clientY-r.top)*(canvas.height/r.height)}}
function start(e){drawing=true;last=pos(e);e.preventDefault()}
function move(e){if(!drawing)return;const p=pos(e);ctx.beginPath();ctx.moveTo(last.x,last.y);ctx.lineTo(p.x,p.y);ctx.stroke();last=p;e.preventDefault()}
function end(){drawing=false;last=null}
["mousedown","touchstart"].forEach(x=>canvas.addEventListener(x,start,{passive:false}));
["mousemove","touchmove"].forEach(x=>canvas.addEventListener(x,move,{passive:false}));
["mouseup","mouseleave","touchend"].forEach(x=>canvas.addEventListener(x,end));
document.getElementById("clearCanvas").onclick=()=>ctx.clearRect(0,0,canvas.width,canvas.height);

function rows(items, empty){
  if(!items||!items.length)return `<p class="tiny">${empty}</p>`;
  return items.map(x=>`<div class="mark-row"><strong>Mark ${x.mark}</strong><span>${x.reason}</span></div>`).join("");
}
document.getElementById("submitBtn").addEventListener("click",async()=>{
  const q=currentQuestion();
  const drawActive=document.querySelector('[data-tab="draw"]').classList.contains("active");
  const drawing=drawActive?canvas.toDataURL("image/png"):null;
  loading.classList.remove("hidden"); results.classList.add("hidden");
  try{
    const r=await fetch("/api/grade",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({question_id:q.id,answer:answer.value,drawing})});
    const out=await r.json(); if(!r.ok)throw new Error(out.error||"Unable to grade.");
    document.getElementById("strictScore").textContent=`${out.strict_score}/${out.max_marks}`;
    document.getElementById("balancedScore").textContent=`${out.balanced_score}/${out.max_marks}`;
    document.getElementById("generousScore").textContent=`${out.generous_score}/${out.max_marks}`;
    document.getElementById("awarded").innerHTML=rows(out.awarded_marks,"No marks awarded yet.");
    document.getElementById("missed").innerHTML=rows(out.missed_marks,"Full marks — nothing missing.");
    document.getElementById("overall").textContent=out.overall_feedback||"";
    document.getElementById("improve").textContent=out.how_to_improve||"";
    document.getElementById("confidence").textContent=`Grading confidence: ${out.confidence||"not stated"} • ${out.disclaimer||""}`;
    results.classList.remove("hidden"); results.scrollIntoView({behavior:"smooth"});
  }catch(e){alert(e.message)}finally{loading.classList.add("hidden")}
});
