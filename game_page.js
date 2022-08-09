mudgal= localStorage.getItem("mudgal");
sharma= localStorage.getItem("sharma");
score_player1 = 0;
score_player2 = 0;
document.getElementById("player1_name").innerHTML= mudgal + " : " ;
document.getElementById("player2_name").innerHTML= sharma + " : " ;
document.getElementById("player1_score").innerHTML= score_player1;
document.getElementById("player2_score").innerHTML= score_player2;
document.getElementById("player_question").innerHTML= " QUESTION TURN" + " :  " + mudgal ;
document.getElementById("player_answer").innerHTML= " ANSWER TURN" + " :  " + sharma ;

function send(){
    get_word = document.getElementById("word").value;
    word = get_word.toLowerCase();
    console.log("word in lowerCase = " + word);
    charAt1 = word.charAt(1);
    console.log(charAt1);
    length_divide_2 = Math.floor(word.length/2);
    charAt2 = word.charAt(length_divide_2);
    console.log(charAt2);
    length_minus_1 = word.length - 1;
    charAt3 = word.charAt(length_minus_1);
    console.log(charAt3);
    remove_charAt1 = word.replace(charAt1, "_");
    remove_charAt2 = remove_charAt1.replace(charAt2, "_");
    remove_charAt3 = remove_charAt2.replace(charAt3, "_");
    console.log(remove_charAt3);
    question_word = "<h4 id='word_display'> Q.   "+ remove_charAt3+ "</h4>";
    input_box = "<br>Answer  :  <input type= 'text'  id= 'input_check_box'>";
    check_button = "<br><br><button class='btn btn-info'   onclick = 'check()'>Check</button>";
    row = question_word + input_box + check_button;
    document.getElementById("output").innerHTML = row;
    document.getElementById("word").value= " ";
}
question_turn = "player1";
answer_turn = "player2";
function check()
{
    get_answer = document.getElementById("input_check_box").value;
    ans = get_answer.toLowerCase();
    console.log("answer = " + ans);
if(ans == word){
if(answer_turn == "player1" ){
    score_player1 = score_player1 +1;
    document.getElementById("player1_score").innerHTML = score_player1;
}
else{
    score_player2 = score_player2 +1;
    document.getElementById("player2_score").innerHTML = score_player2;
}
}
if(question_turn == "player1"){
    question_turn = "player2";
    document.getElementById("player_question").innerHTML= " QUESTION TURN" + " :  " + sharma;
}
else{
    question_turn = "player1"; 
    document.getElementById("player_question").innerHTML= " QUESTION TURN" + " :  " + mudgal ;
}
if(answer_turn == "player1"){
    answer_turn = "player2";
    document.getElementById("player_answer").innerHTML= " ANSWER TURN" + " :  " + sharma;
}
else{
    answer_turn = "player1"; 
    document.getElementById("player_answer").innerHTML= " ANSWER TURN" + " :  " + mudgal ;
}
document.getElementById("output").innerHTML = "";
}