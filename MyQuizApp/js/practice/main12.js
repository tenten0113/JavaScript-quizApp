'use strict';
{
/*
正解ならクラスを追加
*/ 


  //正誤判定をする関数
  function checkAnswer(li) {
    if(li.textContent === quizSet[currentNum].c[0]){
      li.classList.add('correct');
    }else{
      li.classList.add('wrong');
    }
  }



}