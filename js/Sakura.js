var cardsDom = document.getElementById('cards') //获取图片数组
var images = cardsDom.getElementsByTagName('img'); //获取图片数量
var len = images.length - 1; //图片数组的长度，即用作计算每张图片按Y轴旋转的角度
var deg = Math.floor(360 / len);
for (var i=0; i<len; i++){
    images[i].style = 'transform : rotateY(' + deg * i + 'deg) translateZ(300px)';
}
var x = 0;
setInterval(function(){
    cardsDom.style.transform = "rotateX(-10deg) rotateY("+ (x++)*0.2+"deg)";
},30);