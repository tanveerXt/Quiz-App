const questions = [
   


    {
        question: ' pagal Ladki kon hai?',
        answers: [
            { Text: 'Ayat', correct: true },
            { Text: 'Inayat', correct: false },
            { Text: 'Fiza', correct: false },
            { Text: 'Aliya', correct: false },
        ]
    },
    {
        question: 'Which is the largest coffee-producing state of india ?' ,
        answers: [
            {Text : 'Kerala',correct:false},
            {Text : 'Tamil Nadu',correct:false},
            {Text : 'Karnataka',correct:true},
            {Text : 'Bihar',correct:false},
    
        ]
    },
    


    {
        question: 'Which of the following is the capital of Arunachal Pardesh',
        answers: [
            { Text: 'Itangar', correct: true },
            { Text: ' Dispur', correct: false },
            { Text: 'Imphal', correct: false },
            { Text: 'Panaji', correct: false },
        ]
    },
    

    {
        question: 'Which of the following states is not located in the north ?',
        answers: [
            { Text: 'Jharkhand', correct: true },
            { Text: 'Jammu & Kashmir', correct: false },
            { Text: 'Himachal Pradesh', correct: false },
            { Text: 'Kolkata', correct: false },
        ]
    },
    {
        question: 'Which state has the largest area ?',
        answers: [
            {Text : 'Uttar Pradesh',correct:false},
        {Text : 'Madhya Pradesh',correct:false},
        {Text : 'Maharashrta',correct:false},
        {Text : 'Rajasthan',correct:true},
        ]
    },
    {
        question: 'Which state has the largest population ?',
        answers: [
            {Text : 'Uttar Pradesh',correct:true},
        {Text : 'Bihar',correct:false},
        {Text : 'Delhi',correct:false},
        {Text : 'Andra Pradesh',correct:false},
        ]
    },
    {
        question: ' What is the Population of Bihar as per 2001 census?',
        answers: [
            {Text : '85 Million',correct:false},
            {Text : '86 Million',correct:false},
            {Text : '34 Million',correct:false},
            {Text : '83 Million',correct:true},
        ]
    },
    {
        question: ' Which district of Bihar is known as  Silk city ?',
        answers: [
            {Text : 'Bhojpur',correct:false},
            {Text : 'Bhagalpur',correct:true},
            {Text : 'Banka',correct:false},
            {Text : 'Saran',correct:false},
            {Text : 'none of  the above',correct:false},
    ]    },
    {
        question: ' Javascript is an ______ language  ?',
        answers: [
            {Text : 'Object-Oriented',correct:true},
        {Text : 'Object-based',correct:false},
        {Text : 'Procedural',correct:false},
        {Text : 'none of the above',correct:false},

    ]    },
    {
        question: '  Which of the following keywords is used to define a variable in Javascript ?',
        answers: [
            {Text : 'var',correct:false},
            {Text : 'let',correct:false},
            {Text : 'const',correct:false},
            {Text : 'All are correct',correct:true},

    ]    },
    {
        question: ' When the switch statements matches the expression with the given labels, how is the comparison done?',
        answers: [
            {Text : 'Both the datatype & the result of the expression are compared',correct:true},
        {Text : 'Only the datatype of the expression is compared ',correct:false},
        {Text : 'None of the above',correct:false},
        {Text : 'Only the value of the expression is compared',correct:false},

    ]    },
    {
        question: '  Upon encountring empty statements , what dose the Javascript interpreter do?',
        answers: [
            {Text : 'Throws an error',correct:false},
            {Text : 'Ignores the statements',correct:true},
            {Text : 'Give a warning',correct:false},
            {Text : 'None of  this',correct:false},

    ]    },
    {
        question: ' When an operator`s value is null, the typeof returned by the unary operator is?',
        answers: [
            {Text : 'Undefined',correct:false},
            {Text : 'boolean',correct:false},
            {Text : 'Object',correct:true},
            {Text : 'Integer',correct:false},
    

    ]    },
    {
        question: ' Which is the longest river in the world?',
        answers: [
            {Text : 'Ganga',correct:false},
            {Text : 'Nile',correct:true},
            {Text : 'Amazon',correct:false},
            {Text : 'Niger',correct:false},
    

    ]    }






];

const questionElement=document.getElementById('question');
const answerbutton=document.getElementById("answer-button");
const nextbutton=document.getElementById("next");

let currentQuestionindex = 0;
let score=0;
 function startQuiz(){
    currentQuestionindex =0;
    score=0;
    nextbutton.innerHTML="Next"
    showquestion();

 }

 function showquestion (){

    resetState();
    let currentQuestion =questions[currentQuestionindex];
    let questionNO=currentQuestionindex+1;
   
    questionElement.innerHTML=questionNO+"."+currentQuestion.question;
currentQuestion.answers.forEach(answer=>{
    const button =document.createElement("button");
    button.innerHTML=answer.Text;
    button.classList.add("btn");
    answerbutton.appendChild(button);
    if(answer.correct){
        button.dataset.correct=answer.correct
    }

    button.addEventListener("click",selectAnswer);
    



}) 
}

function resetState(){
    nextbutton.style.display="none"
    while (answerbutton.firstChild){
        answerbutton.removeChild(answerbutton.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn=e.target;
   
    const isCorrect=selectedBtn.dataset.correct==='true'
   
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;

    }else{
        selectedBtn.classList.add("incorrect")
    }
    Array.from(answerbutton.children).forEach(button=>{
       if(button.dataset.correct==="true"){
        button.classList.add("correct");

       }
       button.disabled = "true" 
        
    })

    nextbutton.style.display= "block";


}
function showScore(){
    resetState();
    questionElement.innerHTML=`You score is ${score} out of ${questions.length}!`
    nextbutton.innerHTML="play Again"
    nextbutton.style.display='block'


}


function handleNextButton(){
    currentQuestionindex++;
    if(currentQuestionindex<questions.length){
        showquestion();

    }
    else{
        showScore();

    }
}


nextbutton.addEventListener("click",()=>{
    if(currentQuestionindex < questions.length){
        handleNextButton();

    }
    else{
        startQuiz();
    }
})
startQuiz();



// const questionElement = document.getElementById('question');
// const answerbuttons = document.getElementById('answerbutton');
// const nextbutton = document.getElementById('next');

// let currentQuestionindex = 0;
// let score = 0;
// function startQuiz() {
//     currentQuestionindex = 0;
//     score = 0;
//     nextbutton.innerHTML = 'next'
//     showQuestion();
// }
// function showQuestion() {

    
//     let currentQuestion = questions[currentQuestionindex];
//     let questionNO = currentQuestionindex + 1;
//     questionElement.innerHTML = questionNO + "." + currentQuestion.question;

//     currentQuestion.answers.array.forEach(answer => {

//         const button =document.createElement('button')
//         button.innerHTML=answer.Text;
//         button.classList.add('btn');
//         answerbuttons.appendChild(button);
//     });
// }


// startQuiz();
