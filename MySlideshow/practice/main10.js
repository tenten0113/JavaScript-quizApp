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

/*サムネイルを表示する
サムネイルの画像をクリックしたらメイン画像が切り替わる
*/
images.forEach((image,index) =>{

  //サムネイルをクリックするとメイン画像が切り替わる
  li.addEventListener('click',()=>{
    /*
    currentクラスを移動させるには、
    ①サムネイル画像を取得しておく
    ②現在クリックされたものからクラスを取り除く
    ③currentIndexは前にどの画像が選択されたかをここで保存している
    ④再設定した番号の該当する画像を選択表示にする
    */
    mainImage.src = image;
    const thumbnails = document.querySelectorAll('.thumbnails > li');
    thumbnails[currentIndex].classList.remove('current');
    currentIndex = index;
    thumbnails[currentIndex].classList.add('current');
  })

});


}