'use strict';
{
/*
描画処理関係を関数野中にまとめ、正誤判定をする関数を用意する
リストをクリックしたときに関数を呼び出す
最後に関数を呼び出す
*/ 



  //正誤判定をする関数
  function checkAnswer(li) {
    if(li.textContent === quizSet[currentNum].c[0]){
      console.log('correct');
    }else{
      console.log('wrong');
    }
  }

  
  //リストを追加し、問題文の選択肢を一つずつリストに書き出す処理
  function setQuiz() {
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
  
  setQuiz();


}