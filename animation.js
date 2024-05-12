document.querySelector("button").onclick = function () {
  document.querySelector(".animated__1").style.left = "450px";
  document.querySelector(".animated__2").style.left = "450px";
  document.querySelector(".animated__3").style.left = "450px";
  document.querySelector(".animated__4").style.left = "450px";
  document.querySelector(".animated__5").style.left = "450px";
};
document.querySelectorAll("button")[1].onclick = function () {
  document.querySelector(".animated__1").style.left = "0px";
  document.querySelector(".animated__2").style.left = "0px";
  document.querySelector(".animated__3").style.left = "0px";
  document.querySelector(".animated__4").style.left = "0px";
  document.querySelector(".animated__5").style.left = "0px";
};
document.querySelectorAll(".btn")[0].onclick = function () {
  document.querySelector(".item1_format").style.left = "500px";
  document.querySelector(".item2_format").style.left = "500px";
  document.querySelector(".item3_format").style.left = "500px";
  document.querySelector(".item1_format").style.backgroundColor = "green";
  document.querySelector(".item2_format").style.backgroundColor = "#a32d2d ";
  document.querySelector(".item3_format").style.backgroundColor = "#f3f705";
};
document.querySelectorAll(".btn")[1].onclick = function () {
  document.querySelector(".item1_format").style.left = "0px";
  document.querySelector(".item2_format").style.left = "0px";
  document.querySelector(".item3_format").style.left = "0px";
  document.querySelector(".item1_format").style.backgroundColor = "#a32d2d";
  document.querySelector(".item2_format").style.backgroundColor = "#f3f705";
  document.querySelector(".item3_format").style.backgroundColor = "green";
};
// Закрепелние материала анимация
document.querySelector(".btn_block-anim").onclick = function () {
  document.querySelector(".block-anim-fon").classList.add("block-anim_keyfr");
  document.querySelector(".block-anim-fon").style = "border-radius:50%; width:200px; height:200px"; 
};
