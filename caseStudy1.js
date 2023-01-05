// Khai bao doi tuong cau hoi va dap an

function playGame(number, questionContent, answerA, answerB, answerC, answerD, correctAnswer){
    this.number= number;
    this.questionContent= questionContent;
    this.answerA= answerA;
    this.answerB= answerB;
    this.answerC= answerC;
    this.answerD= answerD;
    this.correctAnswer= correctAnswer;
}

let questions= [
    new playGame("Question 1: ", "Which is the fourth planet from the Sun in the Solar System?", "Saturn", "Earth", "Mars", "Jupiter", "Mars"),
    new playGame("Question 2: ", "Which below is not a natural resource?", "Coal", "Electricity", "Water", "Forest", "Electricity"),
    new playGame("Question 3: ", "Which country has the most islands on the world?", "Philippines", "Japan", "Sweden", "Indonesia", "Sweden"),
    new playGame("Question 4: ", "Which year did the Second World War end?", "1942", "1943", "1944", "1945", "1945"),
    new playGame("Question 5: ", "Which country that invented the tank?", "United Kingdom", "Germany", "France", "United States", "United Kingdom"),
    new playGame("Question 6: ", "Which below is not a type of terrain?", "Highland", "Delta", "River", "Karst", "River"),
    new playGame("Question 7: ", "The biggest island on the world is _____?", "Greenland", "Honshu", "Madagascar", "Great Britain", "Greenland"),
    new playGame("Question 8: ", "How many allotropes of carbon are there?", "4", "3", "2", "1", "4"), 
    new playGame("Question 9: ", "Choose the animal that is different from others?", "Whale", "Shark", "Dolphin", "Navy seal", "Shark"),
    new playGame("Question 10: ", "He _____(smoke) for many hours yesterday.", "has", "had", "has smoked", "had smoked", "had smoked")
];



// Ham in ra man hinh cau hoi + dap an + so diem

var score= 0;
var maxScore= questions.length;
function display (board){
    let showScreen =
        `<div class="showQuestion">
        <div id="question">
            <p class="number">${board.number}</p>
            <p class="content">${board.questionContent}</p>
        </div>
        <div id="answer">
            <div class="answer">
                <button id="answerA" class="${board.correctAnswer}" onclick="toChoose('${board.answerA}','answerA')" style="font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif">A. <span>${board.answerA}</span></button>
            </div>
            <div class="answer">
                <button id="answerB" class="${board.correctAnswer}" onclick="toChoose('${board.answerB}','answerB')" style="font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif">B. <span>${board.answerB}</span></button>
            </div>
            <div class="answer">
                <button id="answerC" class="${board.correctAnswer}" onclick="toChoose('${board.answerC}','answerC')" style="font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif">C. <span>${board.answerC}</span></button>
            </div>
            <div class="answer">
                <button id="answerD" class="${board.correctAnswer}" onclick="toChoose('${board.answerD}','answerD')" style="font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif">D. <span>${board.answerD}</span></button>
            </div>
        </div>
        <div class="score">
            <p id="showScore"></p>
        </div>
        </div>`;
    document.getElementById("showQuestion").innerHTML = showScreen;
    document.getElementById("showScore").innerHTML = "Score: "+score+"/"+questions.length;
}



// Ham nhan su kien onclick cua 2 button START va RESTART

function toStart(){
    score= 0;
    numberQuestion= 0;
    display(questions[numberQuestion]);  
    document.querySelector("#btnStart").disabled = true;
    document.querySelector("#btnRestart").disabled = false;
}

function toRestart(){
    alert("Are you SURE to want to RESTART?");
    toStart();
}



// Ham hien thi hieu ung chuyen tiep

function transitionNext(){
    display(questions[numberQuestion]);
    document.getElementById("showScore").innerHTML = "Score: "+score+"/"+questions.length;
}

function transitionEnd(){
    alert ("You have finished all the questions! Your score is: "+score+"/"+questions.length);
}



// Ham hien thi tuong tac khi chon dap an

let flag = true;
function toChoose(answer, elementId){
    document.querySelector("#"+elementId).disabled = true;
    if (answer == questions[numberQuestion].correctAnswer){
        document.getElementById("answerA").disabled = true;
        document.getElementById("answerB").disabled = true;
        document.getElementById("answerC").disabled = true;
        document.getElementById("answerD").disabled = true;        
        if (flag == true){
            score++;
        }        
        document.getElementById("showScore").innerHTML = "Score: "+score+"/"+questions.length;
        
        if (numberQuestion == ((questions.length)-1)){
            document.querySelector("#"+elementId).style.background="rgb(150, 237, 0)";
            const end = setTimeout (transitionEnd, 1500);
        } else{    
            flag = true;
            document.querySelector("#"+elementId).style.background="rgb(150, 237, 0)";
            numberQuestion++;
            const next = setTimeout(transitionNext, 1500);
        }
    } else{
        flag = false;
        document.getElementById("showScore").innerHTML = "Score: "+score+"/"+questions.length;
        document.querySelector("#"+elementId).style.background="rgb(255, 70, 70)";
    }
    //        let elements= document.getElementsByTagName("span");  
    //        for (let i=0; i<=elements.length; i++){
    //            if (elements[i].innerText == questions[numberQuestion].correctAnswer){
    //                elements[i].parentElement.style.background="rgb(150, 237, 0)"; 
    //            } 
    //        }
}   
