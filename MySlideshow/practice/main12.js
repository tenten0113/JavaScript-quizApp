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


//「前へ」ボタンを取得
const prev = document.getElementById('prev'); //入力
prev.addEventListener('click',()=>{
  let target = currentIndex -1; //処理
  if(target < 0){ //副作用
    target = images.length -1;
  }
  document.querySelectorAll('.thumbnails > li')[target].click(); //出力
});

//スライドショー関数
function playSlideshow(){
  setTimeout(() =>{
    next.click();
  playSlideshow();
 },1000);
}


//プレイボタンを押したらスライドショーが始まる
const play = document.getElementById('play');
play.addEventListener('click',()=>{
  playSlideshow();
})


}