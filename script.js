let sayac = 0;
const btn  = document.getElementById("btn");
const sayi = document.getElementById("sayi");

btn.onclick = function() {
  sayac = sayac + 1;
  sayi.textContent = sayac;
};