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


function humanChoice(){
    let hChoice='';

    let propmt= prompt("please enter r for Rock, p for Paper, or s for Scissors", 'r, s, p...');

    if (propmt== 's'){
        hChoice= 'Paper'
    }
    else if (propmt== 'r'){
        hChoice= 'Rock'
    }
    else if( propmt== 'p'){
        hChoice= 'Paper'
    }
    else{
        hChoice= prompt("please enter r for Rock, p for Paper, or s for Scissors", 'r, s, p...');

    }

    return hChoice

}



let playGame=(rounds)=>{
    let compScore=0;
    let humanScore=0;

    function playRound(humanChoice,computerChoice){
        var winner='';
    
        if (humanChoice== "Rock" && computerChoice=="Rock"  ){
            winner='Tie';
            compScore+=1;
            humanScore+=1;
    
    
        } 
        if (humanChoice== "Rock" && computerChoice=="Paper"){
            winner='Computer wins --> paper';
            compScore+=1;
    
        } 
        if (humanChoice== "Rock" && computerChoice=='Scissors'){
            winner= 'You win --> Rock ';
            humanScore+=1;
    
        } 
        if (humanChoice== "Paper" && computerChoice=="Paper"  ){
            winner='Tie';
            compScore+=1;
            humanScore+=1;
    
        } 
        if (humanChoice== "Paper" && computerChoice=="Rock"){
            winner='You win --> paper';
            humanScore+=1;
    
    
        } 
        if (humanChoice== "Paper" && computerChoice=='Scissors'){
            winner= 'Computer wins --> Rock ';
            compScore+=1;
    
        } 
        if (humanChoice== "Scissors" && computerChoice=="Scissors"  ){
            winner='Tie';
            compScore+=1;
            humanScore+=1;
    
    
        } 
        if (humanChoice== "Scissors" && computerChoice=="Paper"){
            winner='You win --> paper';
            humanScore+=1;
    
    
        } 
        if (humanChoice== "Scissors" && computerChoice=='Rock'){
            winner= 'Computer wins --> Rock ';
            compScore+=1;
    
        } 
    
        return [winner, compScore, humanScore]
    
    }

    for (let i=0; i<rounds; i++){
        // human=;
        // computer= func2;
    
        console.log(playRound(humanChoice(), computerChoice()));
    }
}






playGame(5);
//console.log(playRound(humanChoice(),computerChoice()))
// humanChoice();
// computerChoice();

