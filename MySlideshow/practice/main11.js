"use strict";
/*
スライドショーを作ってみよう

一番上にメインの画像がある
プレイボタンがあって、前後に進めるボタンがある
0～7枚のサムネイルスライドがある
Playを押すと自動でメイン画像が切り替わる、pauseになる
7枚目までいくと止まる
サムネイルをクリックすると画像が切り替わったり


*/
{


//「次へ」ボタンを取得
const next = document.getElementById('next'); //入力
next.addEventListener('click',()=>{
  let target = currentIndex +1; //処理
  if(target === images.length){ //副作用
    target = 0;
  }
  document.querySelectorAll('.thumbnails > li')[target].click(); //出力
  
})


}