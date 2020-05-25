'use strict';
{
/*
解答状況の管理をisAnsweredで処理する
*/ 


  //今何問目か
  let currentNum = 0;
  let isAnswered;

  
  //正誤判定をする関数
  function checkAnswer(li) {
    if(isAnswered){
      return;
    }
    isAnswered = true;

    if(li.textContent === quizSet[currentNum].c[0]){
      li.classList.add('correct');
    }else{
      li.classList.add('wrong');
    }
  }

  
  //リストを追加し、問題文の選択肢を一つずつリストに書き出す処理
  function setQuiz() {
    isAnswered = false;
    question.textContent = quizSet[currentNum].q;
    
    const shuffledChoices = shuffle([...quizSet[currentNum].c]);
    
    shuffledChoices.forEach(choice => {
    const li = document.createElement('li');
    li.textContent = choice;

    li.addEventListener('click', () => {
     checkAnswer(li);
    });
    choices.appendChild(li);
  });
}
  

}