
function addUser(){
    pr1= document.getElementById("player1_name_input").value;
    pr2= document.getElementById("player2_name_input").value;
    localStorage.setItem("mudgal", pr1);
    localStorage.setItem("sharma", pr2);
    window.location = "game_page.html";
}