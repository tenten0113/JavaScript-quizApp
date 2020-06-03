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

//サムネイルを表示する
images.forEach(image =>{
  const img = document.createElement('img');
  img.src = image;

  const li = document.createElement('li');
  li.appendChild(img);
  document.querySelector('.thumbnails').appendChild(li);
})


}