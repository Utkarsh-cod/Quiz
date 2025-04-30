const questions = [
    {
      question: "What is the capital of India?",
      options: ["Mumbai", "Delhi", "Chennai", "Kolkata"],
      answer: "Delhi"
    },
    {
      question: "What is 2 + 2?",
      options: ["3", "4", "5", "22"],
      answer: "4"
    }
  ];
  
  let current = 0;
  
  function loadQuestion() {
    const q = questions[current];
    document.getElementById("question").textContent = q.question;
    document.getElementById("options").innerHTML = "";
    q.options.forEach(opt => {
      const btn = document.createElement("button");
      btn.textContent = opt;
      btn.onclick = () => checkAnswer(opt);
      document.getElementById("options").appendChild(btn);
    });
  }
  
  function checkAnswer(selected) {
    const correct = questions[current].answer;
    alert(selected === correct ? "Correct!" : `Wrong! Answer: ${correct}`);
  }
  
  document.getElementById("nextBtn").onclick = () => {
    current++;
    if (current < questions.length) loadQuestion();
    else alert("Quiz Over!");
  };
  
  loadQuestion();
  