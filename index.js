window.onload = function() {
    show(0);
}
// creating an array and passing the number, questions, options, and answers
let questions = [
    {
    numb: 1,
    question: "What does HTML stand for?",
    answer: "Hyper Text Markup Language",
    options: [
      "Hyper Text Preprocessor",
      "Hyper Text Markup Language",
      "Hyper Text Multiple Language",
      "Hyper Tool Multi Language"
    ]
  },
    {
    numb: 2,
    question: "What does CSS stand for?",
    answer: "Cascading Style Sheet",
    options: [
      "Common Style Sheet",
      "Colorful Style Sheet",
      "Computer Style Sheet",
      "Cascading Style Sheet"
    ]
  },
    {
    numb: 3,
    question: "What does PHP stand for?",
    answer: "Hypertext Preprocessor",
    options: [
      "Hypertext Preprocessor",
      "Hypertext Programming",
      "Hypertext Preprogramming",
      "Hometext Preprocessor"
    ]
  },
    {
    numb: 4,
    question: "What does SQL stand for?",
    answer: "Structured Query Language",
    options: [
      "Stylish Question Language",
      "Stylesheet Query Language",
      "Statement Question Language",
      "Structured Query Language"
    ]
  },
    {
    numb: 5,
    question: "What does XML stand for?",
    answer: "eXtensible Markup Language",
    options: [
      "eXtensible Markup Language",
      "eXecutable Multiple Language",
      "eXTra Multi-Program Language",
      "eXamine Multiple Language"
    ]
  }
];

function submitForm(e) {
    e.preventDefault();
    let name = document.forms["welcome_form"]["name"].value;

    localStorage.setItem("name",name);

    location.href = "quiz.html";
  
}

let question_count = 0;
let score = 0;

function next() {
    let user_answer = document.querySelector("li.option.active").innerHTML;
    console.log(user_answer);
    if(user_answer == questions[question_count].answer){
        score++;
        localStorage.setItem("score",score);
    }
    console.log(score);
    
    if(question_count == questions.length-1){
        location.href = "final.html";
        return;
    }
    question_count++;
    show(question_count);
    //console.log(question_count);
}

function show(count) {
    let question = document.getElementById("questions");

    //question.innerHTML = "<h2>"+questions[count].question+"</h2>";
    question.innerHTML = `<h2>${count+1}) ${questions[count].question}</h2>
    <ul class="option_group">
    <li class="option">${questions[count].options[0]}</li>
    <li class="option">${questions[count].options[1]}</li>
    <li class="option">${questions[count].options[2]}</li>
    <li class="option">${questions[count].options[3]}</li>
    </ul>
    `;
    toggleActive();
}

function toggleActive() {
    let option = document.querySelectorAll("li.option");

    for(let i = 0; i < option.length; i++){
        option[i].onclick = function(){
            for(let j = 0; j < option.length; j++){
                if(option[j].classList.contains("active")){
                    option[j].classList.remove("active");
                }
            }
            option[i].classList.add("active");
        }
    }
}