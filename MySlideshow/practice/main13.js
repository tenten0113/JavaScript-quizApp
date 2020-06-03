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

let isPlaying = false;
let timeoutId;

//スライドショー関数
function playSlideshow(){
  timeoutId = setTimeout(() =>{
    next.click();
  playSlideshow();
 },1000);
}


//プレイボタンを押したらスライドショーが始まる
const play = document.getElementById('play');
play.addEventListener('click',()=>{
  if(isPlaying === false){
    playSlideshow();
    play.textContent = 'Pause';
  } else {
    clearTimeout(timeoutId);
    play.textContent = 'Play';
  }
  isPlaying = !isPlaying;
})


}