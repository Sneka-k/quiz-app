
const quizData = [
    {
      
      question:"A train running at the speed of 60 km/hr crosses a pole in 9 seconds. What is the length of the train?",
      options: [
          "120 metres",
          "180 metres",
          "324 metres",
          "150 metres"
    
      ],
      answer: 4
    }, 
    
    {
        question: "Synonyms : CORPULENT'?",
        options: [     
             "Lean",
             "Gaunt",
             "Emaciated",
             "Obese"
         
        ],
        answer: 4
      },
      {
        question: "Synonyms :  BRIEF'?",
         options: [  
         Limited,
         Small,
         Little,
         Short
        
        ],
        answer: 4
      },
      {
        question: "Look at this series: 7, 10, 8, 11, 9, 12, ... What number should come next?",
        options: [
           "4",
           "22",
           "10",
           "12"
        ],
        answer: 3
      },
      {
        question: "Look at this series: 22, 21, 23, 22, 24, 23, ... What number should come next?",
        options: [
           "22",
           "24",
           "44",
           "25"
        ],
        answer: 4
      },
      {
        question: "Look at this series: 53, 53, 40, 40, 27, 27, ... What number should come next?",
        options: [
           "12",
           "14",
           "27",
           "53"
        ],
        answer: 2
      },
      {
        question: "SCD, TEF, UGH, ____, WKL?",
        options: [
           "CMN",
           "VIJ",
           "UJI",
           "CMN"
        ],
        answer: 2
    },
      {
        question: "FAG, GAF, HAI, IAH, ____?",
        options: [
           "JAK",
           "CAK",
           "HAK",
           "JAI"
        ],
        answer: 1
      },
      {
        question: "Antonyms :  ENORMOUS?",
        options: [
           "tiny",
           "soft",
           "tin",
           "hard"
        ],
        answer: 1
      },
      {
        question: "A is two years older than B who is twice as old as C. If the total of the ages of A, B and C be 27, then how old is B?",
        options: [
           "53",
           "11",
           "12",
           "14"
      ],
        answer: 2
      }
  ];
  
  
  
  const questionContainer = document.getElementById("question-container");
  const questionElement = document.getElementById("question");
  const optionsElement = document.getElementById("options");
  const submitButton = document.getElementById("submit");
  const congratulationsPopup = document.getElementById("congratulations-popup");
  const scoreElement = document.getElementById("score");
  const totalElement = document.getElementById("total");
  const contactButton = document.getElementById("contact-button");
  
  let currentQuestionIndex = 0;
  let score = 0;
  
  loadQuestion();
  
  function loadQuestion() {
    const currentQuestion = quizData[currentQuestionIndex];
    questionElement.innerText = currentQuestion.question;
  
    optionsElement.innerHTML = "";
    for (let i = 0; i < currentQuestion.options.length; i++) {
      const optionButton = document.createElement("button");
      optionButton.innerText = currentQuestion.options[i];
      optionButton.classList.add("option");
      optionButton.addEventListener("click", checkAnswer);
      optionsElement.appendChild(optionButton);
    }
  }
  
  function checkAnswer(e) {
    const selectedOption = e.target;
    const currentQuestion = quizData[currentQuestionIndex];
  
    const selectedAnswer = Array.from(optionsElement.children).indexOf(selectedOption) + 1;
  
    if (selectedAnswer === currentQuestion.answer) {
      selectedOption.classList.add("correct");
      score++;
    } else {
      selectedOption.classList.add("wrong");
    }
  
    disableOptions();
  
    if (currentQuestionIndex === quizData.length - 1) {
      submitButton.innerText = "Finish";
    }
  
    currentQuestionIndex++;
    submitButton.disabled = false;
    submitButton.addEventListener("click", nextQuestion);
  }
  
  function disableOptions() {
    const optionButtons = Array.from(optionsElement.children);
    optionButtons.forEach((button) => {
      button.disabled = true;
      if (!button.classList.contains("correct")) {
        button.classList.add("disabled");
      }
    });
  }
  
  function nextQuestion() {
    submitButton.removeEventListener("click", nextQuestion);
  
    if (currentQuestionIndex < quizData.length) {
      loadQuestion();
      submitButton.disabled = true;
      removeOptionClasses();
    } else {
      showCongratulationsPopup();
    }
  }
  
  function removeOptionClasses() {
    const optionButtons = Array.from(optionsElement.children);
    optionButtons.forEach((button) => {
      button.classList.remove("correct", "wrong", "disabled");
    });
  }
  
  function showCongratulationsPopup() {
    questionContainer.style.display = "none";
    congratulationsPopup.style.display = "flex";
    scoreElement.textContent = score;
    totalElement.textContent = quizData.length;
  }
  
  contactButton.addEventListener("click", function () {
    window.location.href = "https://www.linkedin.com/in/-aro-barath-chandru--12725622a/?originalSubdomain=in";
    console.log("Contact button clicked!");
  })
