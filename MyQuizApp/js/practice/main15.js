'use strict';
{
/*
ボタンの有効・無効を切り替える
一度解答すると青くなるけど、そのあとの問題で解答していなくてもボタンが青いままでおかしい不具合をなおす
*/ 




  
  //リストを追加し、問題文の選択肢を一つずつリストに書き出す処理
  function setQuiz() {
    isAnswered = false;
    question.textContent = quizSet[currentNum].q;

    while(choices.firstChild){
     choices.removeChild(choices.firstChild);
    }
    
    const shuffledChoices = shuffle([...quizSet[currentNum].c]);
    
    shuffledChoices.forEach(choice => {
    const li = document.createElement('li');
    li.textContent = choice;

    li.addEventListener('click', () => {
     checkAnswer(li);
    });
    choices.appendChild(li);
  });

  if(currentNum === quizSet.length -1){
    btn.textContent = 'Show Score';
  }
}
  
  setQuiz();

  //ボタンクリックで次の問題が表示される

  btn.addEventListener('click',() =>{
    if(btn.classList.contains('disabled')){
     return;
    }
    btn.classList.add('disabled');
    currentNum++;
    setQuiz();
  });


}