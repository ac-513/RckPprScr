// commputer choice functionn, rand choice

function computerChoice (){
    let cChoice="";

    let rNum= Math.random();

    if (rNum>=0 && rNum<=0.25){
        cChoice= 'Rock'
    }
    else if(rNum>0.25 && rNum<=.5){
        cChoice= 'Paper'

    }
    else if(rNum>.5 && rNum<= 0.99){
        cChoice="Scissors"
    }
    else{
        cChoice= 'error'

    }

    return cChoice;

}

//help from -->https://stackoverflow.com/questions/70747536/how-to-check-if-a-button-is-clicked-inside-an-if-statement?answertab=createdasc#tab-top

function humanChoice(choiz){
    let hChoice='';


    if (choiz=='p'){
        hChoice= 'Paper'
        // console.log(hChoice)
    }
    else if (choiz=='r'){
        hChoice= 'Rock'
    }
    else if(choiz=='s'){
        hChoice= 'Scissors'
    }

    return hChoice

}



let playGame=()=>{
    var winner='';
    let compScore=0;
    let humanScore=0;

    function playRound(humanChoice,computerChoice){

    
        if (humanChoice== "Rock" && computerChoice=="Rock"  ){
            winner='Tie, both recieve points!';
            compScore+=1;
            humanScore+=1;
    
        } 
        if (humanChoice== "Rock" && computerChoice=="Paper"){
            winner='Computer wins --> paper covers rock';
            compScore+=1;
    
        } 
        if (humanChoice== "Rock" && computerChoice=='Scissors'){
            winner= 'You win --> rock beats scissors ';
            humanScore+=1;
    
        } 
        if (humanChoice== "Paper" && computerChoice=="Paper"  ){
            winner='Tie, both recieve points!';
            compScore+=1;
            humanScore+=1;
    
        } 
        if (humanChoice== "Paper" && computerChoice=="Rock"){
            winner='You win --> paper covers rock';
            humanScore+=1;
    
    
        } 
        if (humanChoice== "Paper" && computerChoice=='Scissors'){
            winner= 'Computer wins --> scissors cuts paper ';
            compScore+=1;
    
        } 
        if (humanChoice== "Scissors" && computerChoice=="Scissors"  ){
            winner='Tie, both recieve points!';
            compScore+=1;
            humanScore+=1;
    
    
        } 
        if (humanChoice== "Scissors" && computerChoice=="Paper"){
            winner='You win --> scissors cuts paper';
            humanScore+=1;
    
    
        } 
        if (humanChoice== "Scissors" && computerChoice=='Rock'){
            winner= 'Computer wins --> Rock ';
            compScore+=1;
    
        } 
    
        return [winner, compScore, humanScore]
    
    }

    playRound(humanChoice(), computerChoice());
    // return [winner, compScore, humanScore]
    document.getElementById("txt").innerHTML= winner;
    document.getElementsByClassName("humanCounter").innerHTML= humanScore;
    document.getElementsByClassName("computerCounter").innerHTML= compScore;

}


    



    // for (let i=0; i<5; i++){
    //     // human=;
    //     // computer= func2;
    
    //     console.log(playRound(humanChoice(), computerChoice()));
    // }







// code by richardCodes

document.getElementById('rockBtn').addEventListener('click', function(){
    document.querySelector('.outcomeSign').style.display='flex';
});
document.getElementById('paperBtn').addEventListener('click', function(){
    document.querySelector('.outcomeSign').style.display='flex';
});
document.getElementById('scissorBtn').addEventListener('click', function(){
    document.querySelector('.outcomeSign').style.display='flex';
});


document.getElementById('restartBtn').addEventListener("click", function(){
    document.querySelector('.outcomeSign').style.display='none';
    document.querySelector(".humanCounter").innerHTML = '0';
    document.querySelector(".computerCounter").innerHTML = '0';
    

});









playGame();






/*

if (document.getElementById('paperBtn').clicked){
    console.log('paper me')
    }
    
    let pBtn=document.getElementById('paperBtn');
    let rBtn=document.getElementById('rockBtn')
    let sBtn=document.getElementById('scissorBtn')
////////////////////////

console.log(playRound(humanChoice(),computerChoice()))
humanChoice();
computerChoice();

////////////////////////////

    // for (let i=0; i<rounds; i++){
    //     // human=;
    //     // computer= func2;
    
    //     console.log(playRound(humanChoice(), computerChoice()));
    // }



    //////////////////////////////////

    const cliq= document.querySelector('#restartBtn');
cliq.addEventListener("click", ()=>{
    console.log("ive been clicked");
});
////////////////////////////////////////

// add eventlistener to a button:, changes the css (style), specifically display w keyword dislpay
// dont need to add .notation for getElembyID , just the name 

*/