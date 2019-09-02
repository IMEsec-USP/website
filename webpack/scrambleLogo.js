let characters =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
let charactersLength = characters.length;

let letter = [];
let scramble = [];

for (let i = 0; i < 5; i++) {
  letter[i] = document.getElementById("splash--logo-letter-" + i);
  scramble[i] = setInterval(function() {
    letter[i].innerHTML = characters.charAt(
      Math.floor(Math.random() * charactersLength)
    );
  }, 80);
}

let logo = "IMEsec";
for (let i = 0; i < 5; i++)
  setTimeout(function() {
    letter[i].innerHTML = logo.charAt(i);
    clearInterval(scramble[i]);
  }, 2000 + 250 * i);
