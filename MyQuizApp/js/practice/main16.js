'use strict';
{
/*
問題が最後までいったら正答数を表示する
正答数をスコアで管理する
正答数を増やす
*/ 


  //今何問目か

  let score = 0;




  //正誤判定をする関数
  function checkAnswer(li) {
    if(isAnswered){
      return;
    }
    
    isAnswered = true;

    if(li.textContent === quizSet[currentNum].c[0]){
      li.classList.add('correct');
      score++;
    }else{
      li.classList.add('wrong');
    }

    btn.classList.remove('disabled');
  }



  //ボタンクリックで次の問題が表示される

  btn.addEventListener('click',() =>{
    if(btn.classList.contains('disabled')){
     return;
    }
    btn.classList.add('disabled');

    if(currentNum === quizSet.length  -1){
     console.log(`Score: ${score} / ${quizSet.length}`);
    }else{
      currentNum++;
      setQuiz();
    }
  });


}