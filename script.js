const quizData = [
    {
        question: "Děti nosí čáp.",
        a: "pravda",
        b: "lež",
        
        correct: "b",
    },
    {
      question: "Slovo se skládá z čísel.",
      a: "pravda",
      b: "lež",
      
      correct: "b",
  },
  {
    question: "Pivo, víno a likéry obsahují alkohol.",
    a: "pravda",
    b: "lež",
    
    correct: "a",
},
{
  question: "Jíme proto, abychom dodali tělu živiny a energii.",
  a: "pravda",
  b: "lež",
  
  correct: "a",
},{
  question: "Slon je nejznámější evropská ryba.",
  a: "pravda",
  b: "lež",
  
  correct: "b",
},
{
question: "Kamna slouží k vytápění domů.",
a: "pravda",
b: "lež",

correct: "a",
},{
  question: "Kartáčkem si čistíme zuby, aby se nám neskazili.",
  a: "pravda",
  b: "lež",
  
  correct: "a",
},
{
question: "Káva je nápoj, který se vaří z mouky.",
a: "pravda",
b: "lež",

correct: "b",
},{
  question: "Klokani patří mezi vačnatce.",
  a: "pravda",
  b: "lež",
  
  correct: "a",
},
{
question: "Knihovna je sbírka palačinek.",
a: "pravda",
b: "lež",

correct: "b",
},{
  question: "Klíště je malý, ale nebezpečný roztoč.",
  a: "pravda",
  b: "lež",
  
  correct: "a",
},
{
question: "Komiksem jsou nazývány kreslené příběhy.",
a: "pravda",
b: "lež",

correct: "a",
},{
  question: "Kompas je jednoduchý přístroj k určení světových stran.",
  a: "pravda",
  b: "lež",
  
  correct: "a",
},
{
question: "Kopřiva je malá kočka.",
a: "pravda",
b: "lež",

correct: "b",
},{
  question: "Křečkové jsou hlodavci s hustým kožíškem.",
  a: "pravda",
  b: "lež",
  
  correct: "a",
},
{
question: "Květiny jsou okrasné rostliny.",
a: "pravda",
b: "lež",

correct: "a",
},{
  question: "Slunečnice jsou vodní ptáci.",
  a: "pravda",
  b: "lež",
  
  correct: "b",
},
{
question: "Láhev je nádoba ze skla, keramiky, kovu nebo plastu, která se plní kapalinami.",
a: "pravda",
b: "lež",

correct: "a",
},{
  question: "Běžné léky, vitaminy a bylinkové čaje si můžeme koupit na diskotéce.",
  a: "pravda",
  b: "lež",
  
  correct: "b",
},
{
question: "Když jsme nemocní, jdeme k lékaři.",
a: "pravda",
b: "lež",

correct: "a",
},
    
  ];
  
  const quiz = document.getElementById('quiz')
  const answerEls = document.querySelectorAll('.answer')
  const questionEl = document.getElementById('question')
  const result = document.getElementById('resultquestion')
  const a_text = document.getElementById('a_text')
  const b_text = document.getElementById('b_text')
  
  const submitBtn = document.getElementById('submit')
  
  let currentQuiz = 0
  let score = 0
  
  loadQuiz()
  
  function loadQuiz() {
    deselectAnswers()
  
    const currentQuizData = quizData[currentQuiz]
  
    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
   
  }
  
  function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
  }
  
  function getSelected() {
    let answer
  
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
  
    return answer
  }
  let answers= []; 
  submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    
    if(answer) { answers.push(answer);
            console.log(answers);}
  
    if(answer) {
        if(answer === quizData[currentQuiz].correct) {
            score++;
            
            
        }
        
        currentQuiz++;
        
  
        if(currentQuiz < quizData.length) {
            loadQuiz()
        } else {
            
            
  /* 
  */
           let results= quizData.map ((question,i) => 
           
           
           ` 
                <div class="${quizData[i].correct===answers[i]?
                    "correct": "false" } quiz-header ">
                <h2 id="question">${question.question}</h2>
                <ul id="resultquestion"  >
                  <li >
                    <input type="radio" name="answer" id="a" class="answer">
                    <label for="a" id="a_text">${question.a}</label>
                  </li>
        
                  <li>
                    <input type="radio" name="answer" id="b" class="answer">
                    <label for="b" id="b_text">${question.b}</label>
                  </li>
        
                  
                  <li>
                  <h4>Správná odpověď: ${question[quizData[i].correct]}</h4>
                <h4>Vybral jsi: ${question[answers[i]]}</h4>
  
                
                  </li>
                  
                </ul>
              </div>`
                
                )
  
  //                 result.classList.add("correct")
  // /* 
                
  
                /* quizData.forEach ((question,i) =>
                 quizData[i].correct===answers[i]?
                  result.classList.add("correct")  : result.classList.add("false") 
                 ) */
            
         
  
  
            quiz.innerHTML = `
                <h2>Získal jsi ${score} bodů z ${quizData.length}.</h2>
               
  
                
                
               
    
                ${results}
  
  
                
  
                <button onclick="location.reload()">Znovu zkusit</button>
            `
        
        
        }
    }
  })