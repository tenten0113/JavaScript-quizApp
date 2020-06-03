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
  //画像を配列で用意してあげる
  const images = [
    'img/pic00.png',
    'img/pic01.png',
    'img/pic02.png',
    'img/pic03.png',
    'img/pic04.png',
    'img/pic05.png',
    'img/pic06.png',
    'img/pic07.png',
  ];
  let currentIndex = 0;//管理番号
  let isPlaying = false;

  const mainImage = document.getElementById('main');
  mainImage.src = images[currentIndex];

/*サムネイルを表示する
サムネイルの画像をクリックしたらメイン画像が切り替わる
*/
images.forEach((image,index) =>{
  const img = document.createElement('img');
  img.src = image;

  const li = document.createElement('li');
  if(index === currentIndex){
    li.classList.add('current');
  }
  //サムネイルをクリックするとメイン画像が切り替わる
  li.addEventListener('click',()=>{
    mainImage.src = image;
    const thumbnails = document.querySelectorAll('.thumbnails > li');
    thumbnails[currentIndex].classList.remove('current');
    currentIndex = index;
    thumbnails[currentIndex].classList.add('current');
  })

  li.appendChild(img);
  document.querySelector('.thumbnails').appendChild(li);
});

//「次へ」ボタンを取得
const next = document.getElementById('next'); //入力
next.addEventListener('click',()=>{
  let target = currentIndex +1; //処理
  if(target === images.length){ //副作用
    target = 0;
  }
  document.querySelectorAll('.thumbnails > li')[target].click(); //出力
});

//「前へ」ボタンを取得
const prev = document.getElementById('prev'); //入力
prev.addEventListener('click',()=>{
  let target = currentIndex -1; //処理
  if(target < 0){ //副作用
    target = images.length -1;
  }
  document.querySelectorAll('.thumbnails > li')[target].click(); //出力
});

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