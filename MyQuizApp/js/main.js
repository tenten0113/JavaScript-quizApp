'use strict';
{
/*
問題文を定義し、クイズと選択肢を追加する


ボタンはグレー
/////////////（true/falseで分岐↑↓）
nextボタンが青くなる
*/ 

  //再代入を必要とない変数を宣言し、取得する
  const question = document.getElementById('question');
  const choices = document.getElementById('choices');
  const btn = document.getElementById('btn');
  const result = document.getElementById('result');
  const scoreLabel = document.querySelector('#result > p');
  
  //問題文を持つ配列を定義する
  const quizSet = shuffle([
    {q: '世界で一番大きな湖は?', c:['カスピ海','カリブ海','琵琶湖']},
    {q: '2の8乗は?', c:['256','64','1024']},
    {q: '次のうち、最初にリリースされた言語は?', c:['Python','PHP','Java Script']}
  ]);
  //今何問目か
  let currentNum = 0;
  let isAnswered;
  let score = 0;


  

//問題をシャッフルする関数を用意する
  function shuffle(arr) {
    
    for (let i = arr.length - 1; i > 0 ; i--){
    const j = Math.floor(Math.random() * (i + 1));
    [arr[j],arr[i]] = [arr[i],arr[j]];
    }
    return arr;
  }

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

  
  //リストを追加し、問題文の選択肢を一つずつリストに書き出す処理
  function setQuiz() {
    isAnswered = false; //副作用

    question.textContent = quizSet[currentNum].q;
    //副作用-----------------
    while(choices.firstChild){
     choices.removeChild(choices.firstChild);
    }
    //----------------------
    
    //処理
    const shuffledChoices = shuffle([...quizSet[currentNum].c]);
    shuffledChoices.forEach(choice => {
    const li = document.createElement('li');
    li.textContent = choice;

    li.addEventListener('click', () => {
     checkAnswer(li);
    });
    choices.appendChild(li);//出力
  });

  if(currentNum === quizSet.length -1){//処理
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