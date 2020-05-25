'use strict';
{
/*
スコアを表示するリザルトを呼び出す
*/ 

  //再代入を必要とない変数を宣言し、取得する

  const result = document.getElementById('result');
  const scoreLabel = document.querySelector('#result > p');
  
  

  //ボタンクリックで次の問題が表示される

  btn.addEventListener('click',() =>{
    if(btn.classList.contains('disabled')){
     return;
    }
    btn.classList.add('disabled');

    if(currentNum === quizSet.length  -1){
    //  console.log(`Score: ${score} / ${quizSet.length}`);
     scoreLabel.textContent= `Score: ${score} / ${quizSet.length}`;
     result.classList.remove('hidden');
    }else{
      currentNum++;
      setQuiz();
    }
  });


}