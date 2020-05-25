'use strict';
{
/*
選択肢をシャッフルする
*/ 


  const shuffledChoices = shuffle([...quizSet[currentNum].c]);

  shuffledChoices.forEach(choice => {
    console.log(quizSet[currentNum].c);
   const li = document.createElement('li');
   li.textContent = choice;
   choices.appendChild(li);
  });









}