let img1 = document.getElementById('img1');
var img2 = document.getElementById('img2');
var link3 = document.getElementById('img3');
let fun = function()  {
   alert('Hello') 
}
img1.addEventListener('click',fun);
img2.addEventListener('mouseover',fun);
img3.addEventListener('mouseover',fun);