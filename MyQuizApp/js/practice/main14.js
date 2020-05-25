'use strict';
{
/*
選択肢を選んだらボタンが押せるようになり、次の問題が表示される。
一問目の選択肢が消え、新しい問題が表示される。

*/ 

  



  //正誤判定をする関数にNEXTボタンが押せるようになる処理を追加
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

    btn.classList.remove('disabled');
  }

  
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
}
  
  setQuiz();

  //ボタンクリックで次の問題が表示される

  btn.addEventListener('click',() =>{
    currentNum++;
    setQuiz();
  });


}