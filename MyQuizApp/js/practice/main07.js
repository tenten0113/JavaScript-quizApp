'use strict';
{
/*
問題文を定義し、クイズと選択肢を追加する
*/ 

  //再代入を必要とない変数を宣言し、取得する
  const question = document.getElementById('question');
  const choices = document.getElementById('choices');
  const btn = document.getElementById('btn');
  
  //問題文を持つ配列を定義する
  const quizSet = [
    {q: 'what is A?', c:['A0','A1','A2']},
    {q: 'what is B?', c:['B0','B1','B2']},
    {q: 'what is C?', c:['C0','C1','C2']}
  ];
  //今何問目か
  let currentNum = 0;

  question.textContent = quizSet[currentNum].q;

  quizSet[currentNum].c.forEach(choice => {
   const li = document.createElement('li');
   li.textContent = choice;
   choices.appendChild(li);
  });









}