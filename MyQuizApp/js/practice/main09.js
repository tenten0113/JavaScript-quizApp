'use strict';
{
/*
シャッフルのアルゴリズム関数をつくる
*/ 



  function shuffle(arr) {
    
    for(let i = arr.length - 1;i > 0 ;i--){
    const j = Math.floor(Math.random() * (i + 1));
    [arr[j],arr[i]] = [arr[i],arr[j]];
    }
    return arr;
  }


}