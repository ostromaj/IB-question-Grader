window.QUESTION_DATA = [
  {
    "id": "a1-cache-4",
    "topic": "A.1 Computer fundamentals",
    "title": "Cache memory and processor performance",
    "question": "Explain two ways in which cache memory can improve processor performance.",
    "marks": 4,
    "command_term": "Explain",
    "source_note": "Original IB-style practice question aligned to the first-assessment-2027 Computer Science course.",
    "markscheme": [
      {
        "mark": 1,
        "point": "Cache stores frequently/recently used instructions or data close to the processor."
      },
      {
        "mark": 2,
        "point": "This reduces the need to access slower main memory."
      },
      {
        "mark": 3,
        "point": "A shorter access time reduces processor waiting/stalls."
      },
      {
        "mark": 4,
        "point": "This can increase instruction throughput / overall processing performance."
      }
    ]
  },
  {
    "id": "a1-os-3",
    "topic": "A.1 Computer fundamentals",
    "title": "Operating system responsibilities",
    "question": "Describe three functions of an operating system.",
    "marks": 3,
    "command_term": "Describe",
    "source_note": "Original IB-style practice question aligned to the first-assessment-2027 Computer Science course.",
    "markscheme": [
      {
        "mark": 1,
        "point": "Manages processes/CPU scheduling."
      },
      {
        "mark": 2,
        "point": "Manages memory allocation and virtual memory."
      },
      {
        "mark": 3,
        "point": "Manages files/devices/user interaction/security; award any one valid distinct function for the third mark."
      }
    ]
  },
  {
    "id": "a2-routing-4",
    "topic": "A.2 Networks",
    "title": "Packet routing",
    "question": "Explain how packets can travel from a client device to a server across a network.",
    "marks": 4,
    "command_term": "Explain",
    "source_note": "Original IB-style practice question aligned to the first-assessment-2027 Computer Science course.",
    "markscheme": [
      {
        "mark": 1,
        "point": "Data is divided into packets with addressing information."
      },
      {
        "mark": 2,
        "point": "Routers inspect destination information and select a next hop/path."
      },
      {
        "mark": 3,
        "point": "Different packets may take different routes."
      },
      {
        "mark": 4,
        "point": "Packets are reassembled/ordered at the destination and missing/corrupt data may be retransmitted where the protocol supports it."
      }
    ]
  },
  {
    "id": "a3-db-4",
    "topic": "A.3 Databases",
    "title": "Primary and foreign keys",
    "question": "Explain the role of primary keys and foreign keys in a relational database.",
    "marks": 4,
    "command_term": "Explain",
    "source_note": "Original IB-style practice question aligned to the first-assessment-2027 Computer Science course.",
    "markscheme": [
      {
        "mark": 1,
        "point": "A primary key uniquely identifies each record in a table."
      },
      {
        "mark": 2,
        "point": "Primary-key values must be unique (and normally non-null)."
      },
      {
        "mark": 3,
        "point": "A foreign key references a key in another/related table."
      },
      {
        "mark": 4,
        "point": "Foreign keys support relationships/referential integrity between tables."
      }
    ]
  },
  {
    "id": "a4-overfit-4",
    "topic": "A.4 Machine learning",
    "title": "Overfitting",
    "question": "Explain what overfitting is and describe one way it can be reduced when developing a machine-learning model.",
    "marks": 4,
    "command_term": "Explain / Describe",
    "source_note": "Original question for new curriculum material. Machine learning is part of the first-assessment-2027 course.",
    "markscheme": [
      {
        "mark": 1,
        "point": "Overfitting occurs when a model learns training-data detail/noise too closely."
      },
      {
        "mark": 2,
        "point": "The model performs well on training data but generalizes poorly to unseen data."
      },
      {
        "mark": 3,
        "point": "Award for one valid mitigation such as regularization, simpler model, more representative training data, cross-validation, pruning, dropout, or early stopping."
      },
      {
        "mark": 4,
        "point": "Explains how the chosen mitigation improves generalization/reduces fitting to noise."
      }
    ]
  },
  {
    "id": "a4-bias-4",
    "topic": "A.4 Machine learning",
    "title": "Bias in training data",
    "question": "Explain two ways biased training data can affect a machine-learning system.",
    "marks": 4,
    "command_term": "Explain",
    "source_note": "Original question for new curriculum material.",
    "markscheme": [
      {
        "mark": 1,
        "point": "Training data can underrepresent/overrepresent groups or situations."
      },
      {
        "mark": 2,
        "point": "This can lead to systematically less accurate predictions for some groups/inputs."
      },
      {
        "mark": 3,
        "point": "Historical bias in labels/examples can be learned and reproduced by the model."
      },
      {
        "mark": 4,
        "point": "This can create unfair/discriminatory outcomes or unreliable decisions in deployment."
      }
    ]
  },
  {
    "id": "b1-decomp-3",
    "topic": "B.1 Computational thinking",
    "title": "Decomposition",
    "question": "Describe how decomposition can help solve a complex computational problem.",
    "marks": 3,
    "command_term": "Describe",
    "source_note": "Original IB-style practice question aligned to the first-assessment-2027 Computer Science course.",
    "markscheme": [
      {
        "mark": 1,
        "point": "Breaks a complex problem into smaller subproblems/modules."
      },
      {
        "mark": 2,
        "point": "Each subproblem can be designed/tested/solved more independently."
      },
      {
        "mark": 3,
        "point": "Solutions can then be combined, improving manageability/reuse/debugging."
      }
    ]
  },
  {
    "id": "b2-trace-4",
    "topic": "B.2 Programming",
    "title": "Trace an algorithm",
    "question": "A program repeatedly checks each value in a list and keeps the largest value seen so far. Explain how this algorithm finds the maximum value and state one edge case that should be tested.",
    "marks": 4,
    "command_term": "Explain",
    "source_note": "Original IB-style programming practice question; language-neutral for Java/Python preparation.",
    "markscheme": [
      {
        "mark": 1,
        "point": "Initializes a current maximum from a valid list value."
      },
      {
        "mark": 2,
        "point": "Compares each subsequent item with the current maximum."
      },
      {
        "mark": 3,
        "point": "Updates the current maximum whenever a larger value is found and returns it after the traversal."
      },
      {
        "mark": 4,
        "point": "States one valid edge case such as a single-item list, all equal values, all negative values, or an empty list if the specification permits it."
      }
    ]
  },
  {
    "id": "b2-debug-4",
    "topic": "B.2 Programming",
    "title": "Debugging strategy",
    "question": "Explain two techniques a programmer can use to locate a logic error in a program.",
    "marks": 4,
    "command_term": "Explain",
    "source_note": "Original IB-style programming practice question.",
    "markscheme": [
      {
        "mark": 1,
        "point": "Identifies a valid technique such as trace table, debugger/breakpoint, logging, unit testing, or print tracing."
      },
      {
        "mark": 2,
        "point": "Explains how technique 1 reveals incorrect state/control flow/output."
      },
      {
        "mark": 3,
        "point": "Identifies a second distinct valid technique."
      },
      {
        "mark": 4,
        "point": "Explains how technique 2 helps isolate the source of the logic error."
      }
    ]
  },
  {
    "id": "b3-encap-4",
    "topic": "B.3 Object-oriented programming",
    "title": "Encapsulation",
    "question": "Explain how encapsulation can improve the design of an object-oriented program.",
    "marks": 4,
    "command_term": "Explain",
    "source_note": "Original IB-style practice question aligned to the first-assessment-2027 Computer Science course.",
    "markscheme": [
      {
        "mark": 1,
        "point": "Encapsulation groups data/state with the methods that operate on it."
      },
      {
        "mark": 2,
        "point": "Internal representation can be hidden/restricted from direct external access."
      },
      {
        "mark": 3,
        "point": "Controlled interfaces/methods protect invariants or validate changes."
      },
      {
        "mark": 4,
        "point": "This reduces coupling and makes maintenance/testing/change safer."
      }
    ]
  },
  {
    "id": "b4-stack-4",
    "topic": "B.4 Abstract data types (HL)",
    "title": "Stack operations",
    "question": "Describe how a stack operates and explain one situation in which a stack is an appropriate data structure.",
    "marks": 4,
    "command_term": "Describe / Explain",
    "source_note": "Original HL IB-style practice question aligned to the first-assessment-2027 Computer Science course.",
    "markscheme": [
      {
        "mark": 1,
        "point": "A stack follows last-in, first-out (LIFO) ordering."
      },
      {
        "mark": 2,
        "point": "Push adds an item to the top and pop removes/returns the top item."
      },
      {
        "mark": 3,
        "point": "Provides a valid use such as function calls, undo history, expression evaluation, DFS, or browser back history."
      },
      {
        "mark": 4,
        "point": "Explains why LIFO behavior matches the chosen situation."
      }
    ]
  },
  {
    "id": "a1-cpu-5",
    "topic": "A.1 Computer fundamentals",
    "title": "CPU components and instruction cycle",
    "question": "Explain how the control unit, arithmetic logic unit and registers work together during the fetch-decode-execute cycle.",
    "marks": 5,
    "command_term": "Explain",
    "source_note": "Original IB-style practice question aligned to the first-assessment-2027 Computer Science course.",
    "markscheme": [
      {
        "mark": 1,
        "point": "The program counter/registers hold addresses or data needed for the next instruction."
      },
      {
        "mark": 2,
        "point": "The control unit fetches the instruction from memory and coordinates data movement."
      },
      {
        "mark": 3,
        "point": "The instruction is decoded by the control unit."
      },
      {
        "mark": 4,
        "point": "The ALU performs arithmetic or logical operations when required."
      },
      {
        "mark": 5,
        "point": "Results/state are stored in registers or memory and the cycle continues."
      }
    ]
  },
  {
    "id": "a1-virtual-4",
    "topic": "A.1 Computer fundamentals",
    "title": "Virtual memory",
    "question": "Explain why an operating system may use virtual memory and one disadvantage of doing so.",
    "marks": 4,
    "command_term": "Explain",
    "source_note": "Original IB-style practice question aligned to the first-assessment-2027 Computer Science course.",
    "markscheme": [
      {
        "mark": 1,
        "point": "Virtual memory uses secondary storage to extend available memory when RAM is insufficient."
      },
      {
        "mark": 2,
        "point": "It allows larger/more programs to run than would fit entirely in physical memory."
      },
      {
        "mark": 3,
        "point": "Data/pages must be moved between RAM and secondary storage."
      },
      {
        "mark": 4,
        "point": "This is slower than RAM and can reduce performance, especially with frequent paging."
      }
    ]
  },
  {
    "id": "a1-binary-4",
    "topic": "A.1 Computer fundamentals",
    "title": "Binary representation",
    "question": "Explain why computers represent data using binary and describe one consequence of using a fixed number of bits to represent integers.",
    "marks": 4,
    "command_term": "Explain / Describe",
    "source_note": "Original IB-style practice question aligned to the first-assessment-2027 Computer Science course.",
    "markscheme": [
      {
        "mark": 1,
        "point": "Digital hardware has two stable states that map naturally to 0 and 1."
      },
      {
        "mark": 2,
        "point": "Binary allows reliable representation and processing by electronic circuits."
      },
      {
        "mark": 3,
        "point": "A fixed number of bits limits the range of representable integer values."
      },
      {
        "mark": 4,
        "point": "Values outside the range may cause overflow/wraparound/error depending on the system."
      }
    ]
  },
  {
    "id": "a2-protocols-4",
    "topic": "A.2 Networks",
    "title": "Network protocols",
    "question": "Explain why network protocols are necessary when devices communicate across a network.",
    "marks": 4,
    "command_term": "Explain",
    "source_note": "Original IB-style practice question aligned to the first-assessment-2027 Computer Science course.",
    "markscheme": [
      {
        "mark": 1,
        "point": "Protocols define agreed rules/formats for communication."
      },
      {
        "mark": 2,
        "point": "They specify how data is structured/transmitted/interpreted."
      },
      {
        "mark": 3,
        "point": "They allow devices from different vendors/systems to interoperate."
      },
      {
        "mark": 4,
        "point": "They can also define error handling, addressing, sequencing, or acknowledgements."
      }
    ]
  },
  {
    "id": "a2-clientserver-4",
    "topic": "A.2 Networks",
    "title": "Client-server architecture",
    "question": "Explain two advantages of a client-server network for a school compared with storing all resources locally on each computer.",
    "marks": 4,
    "command_term": "Explain",
    "source_note": "Original IB-style practice question aligned to the first-assessment-2027 Computer Science course.",
    "markscheme": [
      {
        "mark": 1,
        "point": "Centralized storage/services can be managed from one location."
      },
      {
        "mark": 2,
        "point": "This simplifies backups, updates, permissions, or administration."
      },
      {
        "mark": 3,
        "point": "Users can access shared resources from multiple client devices."
      },
      {
        "mark": 4,
        "point": "Central authentication/permissions can improve consistency and control."
      }
    ]
  },
  {
    "id": "a2-encryption-5",
    "topic": "A.2 Networks",
    "title": "Encryption in transit",
    "question": "A student logs into a school portal over the internet. Explain why encryption is important for this communication and how it reduces risk.",
    "marks": 5,
    "command_term": "Explain",
    "source_note": "Original IB-style practice question aligned to the first-assessment-2027 Computer Science course.",
    "markscheme": [
      {
        "mark": 1,
        "point": "Login credentials and session data may travel across networks that are not trusted."
      },
      {
        "mark": 2,
        "point": "Encryption converts readable data into ciphertext."
      },
      {
        "mark": 3,
        "point": "An interceptor without the key should not be able to understand the captured data."
      },
      {
        "mark": 4,
        "point": "This reduces the risk of credentials or personal information being exposed."
      },
      {
        "mark": 5,
        "point": "Encryption does not by itself prevent all attacks; endpoint/authentication/security controls are still needed."
      }
    ]
  },
  {
    "id": "a2-dns-3",
    "topic": "A.2 Networks",
    "title": "Domain name system",
    "question": "Describe the role of DNS when a user enters a website address into a browser.",
    "marks": 3,
    "command_term": "Describe",
    "source_note": "Original IB-style practice question aligned to the first-assessment-2027 Computer Science course.",
    "markscheme": [
      {
        "mark": 1,
        "point": "DNS translates a human-readable domain name into an IP address."
      },
      {
        "mark": 2,
        "point": "The client queries a DNS resolver/server when the address is not already cached."
      },
      {
        "mark": 3,
        "point": "The resulting IP address is used to contact the destination server."
      }
    ]
  },
  {
    "id": "a3-normalization-5",
    "topic": "A.3 Databases",
    "title": "Database normalization",
    "question": "Explain how normalization can improve the design of a relational database.",
    "marks": 5,
    "command_term": "Explain",
    "source_note": "Original IB-style practice question aligned to the first-assessment-2027 Computer Science course.",
    "markscheme": [
      {
        "mark": 1,
        "point": "Normalization organizes data into related tables based on dependencies."
      },
      {
        "mark": 2,
        "point": "It reduces unnecessary duplication/redundancy."
      },
      {
        "mark": 3,
        "point": "It can reduce update/insert/delete anomalies."
      },
      {
        "mark": 4,
        "point": "Keys/relationships preserve links between separated data."
      },
      {
        "mark": 5,
        "point": "This improves consistency/integrity and maintainability of the database."
      }
    ]
  },
  {
    "id": "a3-query-4",
    "topic": "A.3 Databases",
    "title": "Database query",
    "question": "A school wants to find all students in grade 11 whose attendance is below 90%. Describe how a database query could produce this result.",
    "marks": 4,
    "command_term": "Describe",
    "source_note": "Original IB-style practice question aligned to the first-assessment-2027 Computer Science course.",
    "markscheme": [
      {
        "mark": 1,
        "point": "Select/retrieve records from the relevant student/attendance table(s)."
      },
      {
        "mark": 2,
        "point": "Use a condition filtering grade/year to 11."
      },
      {
        "mark": 3,
        "point": "Use a condition filtering attendance to values below 90%."
      },
      {
        "mark": 4,
        "point": "Return/display only records that satisfy both conditions, using joins if data are in multiple tables."
      }
    ]
  },
  {
    "id": "a3-index-4",
    "topic": "A.3 Databases",
    "title": "Database indexing",
    "question": "Explain one benefit and one cost of adding an index to a frequently searched database field.",
    "marks": 4,
    "command_term": "Explain",
    "source_note": "Original IB-style practice question aligned to the first-assessment-2027 Computer Science course.",
    "markscheme": [
      {
        "mark": 1,
        "point": "An index stores an additional searchable structure based on field values."
      },
      {
        "mark": 2,
        "point": "It can reduce the amount of data that must be scanned and speed up retrieval."
      },
      {
        "mark": 3,
        "point": "The index requires additional storage."
      },
      {
        "mark": 4,
        "point": "Inserts/updates/deletes may be slower because the index must also be maintained."
      }
    ]
  },
  {
    "id": "a3-integrity-4",
    "topic": "A.3 Databases",
    "title": "Data integrity",
    "question": "Explain two ways a database management system can help maintain data integrity.",
    "marks": 4,
    "command_term": "Explain",
    "source_note": "Original IB-style practice question aligned to the first-assessment-2027 Computer Science course.",
    "markscheme": [
      {
        "mark": 1,
        "point": "Validation/domain constraints restrict invalid data values."
      },
      {
        "mark": 2,
        "point": "Explains how this prevents inconsistent/invalid entries."
      },
      {
        "mark": 3,
        "point": "Primary/foreign key constraints, transactions, or access controls can maintain valid relationships/changes."
      },
      {
        "mark": 4,
        "point": "Explains how the chosen control prevents inconsistency or unauthorized corruption."
      }
    ]
  },
  {
    "id": "a4-supervised-4",
    "topic": "A.4 Machine learning",
    "title": "Supervised learning",
    "question": "Explain how labelled training data are used in supervised machine learning.",
    "marks": 4,
    "command_term": "Explain",
    "source_note": "Original question for new curriculum material.",
    "markscheme": [
      {
        "mark": 1,
        "point": "Each training example contains input features and a known target/label."
      },
      {
        "mark": 2,
        "point": "The model makes predictions from the inputs."
      },
      {
        "mark": 3,
        "point": "Predictions are compared with known labels and the model is adjusted to reduce error."
      },
      {
        "mark": 4,
        "point": "The trained model is then used to predict labels/values for unseen inputs."
      }
    ]
  },
  {
    "id": "a4-train-test-4",
    "topic": "A.4 Machine learning",
    "title": "Training and test data",
    "question": "Explain why a machine-learning dataset should be divided into separate training and test sets.",
    "marks": 4,
    "command_term": "Explain",
    "source_note": "Original question for new curriculum material.",
    "markscheme": [
      {
        "mark": 1,
        "point": "The training set is used to fit/learn model parameters."
      },
      {
        "mark": 2,
        "point": "The test set is kept separate from training."
      },
      {
        "mark": 3,
        "point": "Testing on unseen data estimates how well the model generalizes."
      },
      {
        "mark": 4,
        "point": "Using the same data for both would give an overly optimistic/biased estimate of performance."
      }
    ]
  },
  {
    "id": "a4-metrics-5",
    "topic": "A.4 Machine learning",
    "title": "Model evaluation",
    "question": "A classifier has high overall accuracy but performs poorly for a small minority class. Explain why accuracy alone may be misleading and identify one additional measure or approach that could help evaluate the model.",
    "marks": 5,
    "command_term": "Explain",
    "source_note": "Original question for new curriculum material.",
    "markscheme": [
      {
        "mark": 1,
        "point": "Overall accuracy combines all predictions into one proportion."
      },
      {
        "mark": 2,
        "point": "A large majority class can dominate the score."
      },
      {
        "mark": 3,
        "point": "The model may therefore appear accurate while missing many minority-class cases."
      },
      {
        "mark": 4,
        "point": "Identifies a valid additional measure/approach such as precision, recall, F1, confusion matrix, per-class accuracy, balanced accuracy."
      },
      {
        "mark": 5,
        "point": "Explains how the chosen measure reveals performance for the minority class or class-specific errors."
      }
    ]
  },
  {
    "id": "b1-abstraction-4",
    "topic": "B.1 Computational thinking",
    "title": "Abstraction",
    "question": "Explain how abstraction helps a programmer solve a complex problem.",
    "marks": 4,
    "command_term": "Explain",
    "source_note": "Original IB-style practice question aligned to the first-assessment-2027 Computer Science course.",
    "markscheme": [
      {
        "mark": 1,
        "point": "Abstraction focuses on relevant features of a problem."
      },
      {
        "mark": 2,
        "point": "Unnecessary implementation/detail is hidden or ignored."
      },
      {
        "mark": 3,
        "point": "This reduces complexity and makes the problem easier to reason about."
      },
      {
        "mark": 4,
        "point": "It can support reusable models/interfaces/functions that work across similar situations."
      }
    ]
  },
  {
    "id": "b1-algorithm-5",
    "topic": "B.1 Computational thinking",
    "title": "Algorithm design process",
    "question": "Describe a systematic process a programmer could use to design and refine an algorithm before coding it.",
    "marks": 5,
    "command_term": "Describe",
    "source_note": "Original IB-style practice question aligned to the first-assessment-2027 Computer Science course.",
    "markscheme": [
      {
        "mark": 1,
        "point": "Clarify the problem, inputs, outputs and constraints."
      },
      {
        "mark": 2,
        "point": "Decompose the problem into smaller steps/subproblems."
      },
      {
        "mark": 3,
        "point": "Represent the solution using pseudocode, diagrams, or another algorithmic form."
      },
      {
        "mark": 4,
        "point": "Trace/test the algorithm with normal, boundary and exceptional cases."
      },
      {
        "mark": 5,
        "point": "Refine/correct the algorithm before or during implementation."
      }
    ]
  },
  {
    "id": "b1-patterns-3",
    "topic": "B.1 Computational thinking",
    "title": "Pattern recognition",
    "question": "Describe how recognizing patterns can reduce the effort needed to solve a family of related computational problems.",
    "marks": 3,
    "command_term": "Describe",
    "source_note": "Original IB-style practice question aligned to the first-assessment-2027 Computer Science course.",
    "markscheme": [
      {
        "mark": 1,
        "point": "Identify similarities/common structure among related problems."
      },
      {
        "mark": 2,
        "point": "Develop a common/general solution or reusable component based on those similarities."
      },
      {
        "mark": 3,
        "point": "Apply/adapt the same approach to multiple instances rather than solving each from scratch."
      }
    ]
  },
  {
    "id": "b1-testing-4",
    "topic": "B.1 Computational thinking",
    "title": "Test design",
    "question": "Explain why normal, boundary and exceptional test data are all useful when evaluating a computational solution.",
    "marks": 4,
    "command_term": "Explain",
    "source_note": "Original IB-style practice question aligned to the first-assessment-2027 Computer Science course.",
    "markscheme": [
      {
        "mark": 1,
        "point": "Normal data checks expected operation for typical valid inputs."
      },
      {
        "mark": 2,
        "point": "Boundary data checks behavior at limits/edges of valid ranges."
      },
      {
        "mark": 3,
        "point": "Exceptional/invalid data checks how the solution handles inputs outside expected rules."
      },
      {
        "mark": 4,
        "point": "Together they provide broader evidence that the solution is robust/correct."
      }
    ]
  },
  {
    "id": "b2-loop-5",
    "topic": "B.2 Programming",
    "title": "Loop selection",
    "question": "Explain when a programmer might choose a count-controlled loop instead of a condition-controlled loop, and give one example of each.",
    "marks": 5,
    "command_term": "Explain",
    "source_note": "Original IB-style programming practice question for Java/Python preparation.",
    "markscheme": [
      {
        "mark": 1,
        "point": "A count-controlled loop is suitable when the number of repetitions is known/determined in advance."
      },
      {
        "mark": 2,
        "point": "Provides a valid count-controlled example."
      },
      {
        "mark": 3,
        "point": "A condition-controlled loop is suitable when repetition continues until/while a condition changes."
      },
      {
        "mark": 4,
        "point": "Provides a valid condition-controlled example."
      },
      {
        "mark": 5,
        "point": "Clearly distinguishes the stopping logic of the two loop types."
      }
    ]
  },
  {
    "id": "b2-functions-4",
    "topic": "B.2 Programming",
    "title": "Functions and parameters",
    "question": "Explain two advantages of using functions with parameters in a program.",
    "marks": 4,
    "command_term": "Explain",
    "source_note": "Original IB-style programming practice question for Java/Python preparation.",
    "markscheme": [
      {
        "mark": 1,
        "point": "Functions encapsulate a task/operation into a named reusable unit."
      },
      {
        "mark": 2,
        "point": "This reduces duplicated code and can simplify maintenance/testing."
      },
      {
        "mark": 3,
        "point": "Parameters allow the same function to work with different input values."
      },
      {
        "mark": 4,
        "point": "This improves generality/reuse/modularity compared with hard-coded values."
      }
    ]
  },
  {
    "id": "b2-search-6",
    "topic": "B.2 Programming",
    "title": "Linear and binary search",
    "question": "Compare linear search and binary search for finding a target value in a list.",
    "marks": 6,
    "command_term": "Compare",
    "source_note": "Original IB-style programming practice question for Java/Python preparation.",
    "markscheme": [
      {
        "mark": 1,
        "point": "Linear search checks items sequentially until the target is found or the list ends."
      },
      {
        "mark": 2,
        "point": "Linear search can be used on unsorted data."
      },
      {
        "mark": 3,
        "point": "Binary search repeatedly halves the search interval."
      },
      {
        "mark": 4,
        "point": "Binary search requires sorted data."
      },
      {
        "mark": 5,
        "point": "Binary search is generally more efficient for large sorted lists."
      },
      {
        "mark": 6,
        "point": "Linear search may be simpler or preferable for small/unsorted datasets where sorting/preparation is not justified."
      }
    ]
  },
  {
    "id": "b2-recursion-5",
    "topic": "B.2 Programming",
    "title": "Recursion",
    "question": "Explain how recursion works and why a recursive algorithm needs a base case.",
    "marks": 5,
    "command_term": "Explain",
    "source_note": "Original IB-style programming practice question for Java/Python preparation.",
    "markscheme": [
      {
        "mark": 1,
        "point": "A recursive function/method calls itself, directly or indirectly."
      },
      {
        "mark": 2,
        "point": "Each call works on a smaller/simpler instance or progresses toward termination."
      },
      {
        "mark": 3,
        "point": "The base case stops further recursive calls."
      },
      {
        "mark": 4,
        "point": "Without a reachable base case the calls can continue indefinitely/until stack exhaustion."
      },
      {
        "mark": 5,
        "point": "Results are returned/combined as calls finish and unwind."
      }
    ]
  },
  {
    "id": "b2-validation-4",
    "topic": "B.2 Programming",
    "title": "Input validation",
    "question": "Explain how input validation can improve the reliability of a program and describe one validation technique.",
    "marks": 4,
    "command_term": "Explain / Describe",
    "source_note": "Original IB-style programming practice question for Java/Python preparation.",
    "markscheme": [
      {
        "mark": 1,
        "point": "Validation checks whether input satisfies expected rules before processing."
      },
      {
        "mark": 2,
        "point": "This reduces errors or invalid program states caused by unsuitable input."
      },
      {
        "mark": 3,
        "point": "Describes a valid technique such as range, type, length, format, presence, or lookup check."
      },
      {
        "mark": 4,
        "point": "Explains how the chosen check prevents or handles invalid input."
      }
    ]
  },
  {
    "id": "b3-inherit-5",
    "topic": "B.3 Object-oriented programming",
    "title": "Inheritance",
    "question": "Explain how inheritance can be used to model related classes in an object-oriented program.",
    "marks": 5,
    "command_term": "Explain",
    "source_note": "Original IB-style OOP practice question aligned to the first-assessment-2027 Computer Science course.",
    "markscheme": [
      {
        "mark": 1,
        "point": "A subclass/derived class is based on a superclass/base class."
      },
      {
        "mark": 2,
        "point": "The subclass can inherit attributes and/or methods."
      },
      {
        "mark": 3,
        "point": "Common behavior can be defined once in the superclass."
      },
      {
        "mark": 4,
        "point": "The subclass can add or override specialized behavior."
      },
      {
        "mark": 5,
        "point": "This supports reuse and models an is-a relationship between related types."
      }
    ]
  },
  {
    "id": "b3-polymorphism-4",
    "topic": "B.3 Object-oriented programming",
    "title": "Polymorphism",
    "question": "Explain how polymorphism can make an object-oriented program easier to extend.",
    "marks": 4,
    "command_term": "Explain",
    "source_note": "Original IB-style OOP practice question aligned to the first-assessment-2027 Computer Science course.",
    "markscheme": [
      {
        "mark": 1,
        "point": "Different classes can provide their own implementation of a common method/interface."
      },
      {
        "mark": 2,
        "point": "Code can interact with objects through the common type/interface."
      },
      {
        "mark": 3,
        "point": "The correct implementation is selected for the actual object."
      },
      {
        "mark": 4,
        "point": "New subclasses/types can often be added with fewer changes to existing client code."
      }
    ]
  },
  {
    "id": "b3-composition-4",
    "topic": "B.3 Object-oriented programming",
    "title": "Composition",
    "question": "Explain how composition differs from inheritance when designing object-oriented software.",
    "marks": 4,
    "command_term": "Explain",
    "source_note": "Original IB-style OOP practice question aligned to the first-assessment-2027 Computer Science course.",
    "markscheme": [
      {
        "mark": 1,
        "point": "Composition builds a class/object from instances of other classes."
      },
      {
        "mark": 2,
        "point": "It represents a has-a relationship."
      },
      {
        "mark": 3,
        "point": "Inheritance represents an is-a relationship where a subclass derives from a superclass."
      },
      {
        "mark": 4,
        "point": "Composition can provide flexibility by delegating behavior to contained objects without creating a subtype."
      }
    ]
  },
  {
    "id": "b3-constructor-3",
    "topic": "B.3 Object-oriented programming",
    "title": "Constructors",
    "question": "Describe the purpose of a constructor in an object-oriented program.",
    "marks": 3,
    "command_term": "Describe",
    "source_note": "Original IB-style OOP practice question aligned to the first-assessment-2027 Computer Science course.",
    "markscheme": [
      {
        "mark": 1,
        "point": "A constructor runs when a new object is created/instantiated."
      },
      {
        "mark": 2,
        "point": "It initializes the object's state/attributes."
      },
      {
        "mark": 3,
        "point": "It may use parameters to set initial values or ensure the object starts in a valid state."
      }
    ]
  },
  {
    "id": "b4-queue-4",
    "topic": "B.4 Abstract data types (HL)",
    "title": "Queue operations",
    "question": "Describe how a queue operates and explain one situation in which a queue is appropriate.",
    "marks": 4,
    "command_term": "Describe / Explain",
    "source_note": "Original HL IB-style practice question aligned to the first-assessment-2027 Computer Science course.",
    "markscheme": [
      {
        "mark": 1,
        "point": "A queue follows first-in, first-out (FIFO) ordering."
      },
      {
        "mark": 2,
        "point": "Enqueue adds an item at the rear and dequeue removes/returns the front item."
      },
      {
        "mark": 3,
        "point": "Provides a valid use such as print jobs, task scheduling, customer requests, or breadth-first search."
      },
      {
        "mark": 4,
        "point": "Explains why FIFO behavior matches the chosen situation."
      }
    ]
  },
  {
    "id": "b4-tree-5",
    "topic": "B.4 Abstract data types (HL)",
    "title": "Binary trees",
    "question": "Explain how a binary search tree can support efficient searching when it is reasonably balanced.",
    "marks": 5,
    "command_term": "Explain",
    "source_note": "Original HL IB-style practice question aligned to the first-assessment-2027 Computer Science course.",
    "markscheme": [
      {
        "mark": 1,
        "point": "Each node stores a value and references to at most two child nodes."
      },
      {
        "mark": 2,
        "point": "Values smaller than a node are placed in one subtree and larger values in the other, according to the chosen ordering rule."
      },
      {
        "mark": 3,
        "point": "Searching compares the target with the current node."
      },
      {
        "mark": 4,
        "point": "Each comparison can eliminate an entire subtree from consideration."
      },
      {
        "mark": 5,
        "point": "When the tree is reasonably balanced, far fewer nodes may need to be checked than in a sequential search."
      }
    ]
  },
  {
    "id": "b4-graph-5",
    "topic": "B.4 Abstract data types (HL)",
    "title": "Graphs",
    "question": "A navigation system represents locations and roads. Explain why a graph is an appropriate abstract data type for this problem.",
    "marks": 5,
    "command_term": "Explain",
    "source_note": "Original HL IB-style practice question aligned to the first-assessment-2027 Computer Science course.",
    "markscheme": [
      {
        "mark": 1,
        "point": "Locations can be represented as vertices/nodes."
      },
      {
        "mark": 2,
        "point": "Roads/connections can be represented as edges."
      },
      {
        "mark": 3,
        "point": "Edges can store weights such as distance or travel time."
      },
      {
        "mark": 4,
        "point": "Graphs can represent multiple connections and cycles unlike simple linear structures."
      },
      {
        "mark": 5,
        "point": "Graph algorithms can be used to explore routes or find suitable/shortest paths."
      }
    ]
  },
  {
    "id": "b4-linked-4",
    "topic": "B.4 Abstract data types (HL)",
    "title": "Linked structures",
    "question": "Explain one advantage and one disadvantage of using a linked list instead of an array for storing a changing collection of items.",
    "marks": 4,
    "command_term": "Explain",
    "source_note": "Original HL IB-style practice question aligned to the first-assessment-2027 Computer Science course.",
    "markscheme": [
      {
        "mark": 1,
        "point": "Linked lists can grow/shrink dynamically without requiring one contiguous block of storage."
      },
      {
        "mark": 2,
        "point": "Insertions/deletions can be efficient when the relevant node/reference is known."
      },
      {
        "mark": 3,
        "point": "Random indexed access is not direct and may require traversal from the beginning."
      },
      {
        "mark": 4,
        "point": "Extra memory is required for references/pointers and traversal can reduce performance."
      }
    ]
  }
];
