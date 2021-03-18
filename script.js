window.onload=function(){
   let gameContainer = document.getElementById('game');
   let count = 0;//
    initGame();
    function initGame(){
    for ( let i=0; i<9; i++) {
        gameContainer.innerHTML+='<div class="block"></div>';
        }
    }


gameContainer.onclick = function(event){
    console.log(event)
    makeMove(event)
}
function makeMove(event){
    console.log("makeMove");
    let symbol = '';
    if (event.target.className === 'block'){
        if (count%2 == 0)
        symbol = 'x';
        else
        symbol='0';
        event.target.innerHTML = symbol;
        if (count >=3){
            //checkWinner(); // перевірка переможця
        }
        count++; //збільшуємо лічильник на 1
    }
}

}
