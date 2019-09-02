import anime from "animejs";

anime({
  targets: ".imesec-lock--st1",
  translateX: 40,
  duration: 0
});

let tl = anime.timeline({
  easing: "easeOutExpo"
});

tl.add({
  duration: 1000
});

tl.add({
  targets: ".splash--logo",
  opacity: [0, 1],
  duration: 1000,
  easing: "easeOutQuart"
});

tl.add({
  duration: 1500
});

tl.add({
  targets: ".imesec-lock--st1",
  translateX: 0,
  duration: 800
});

tl.add({
  targets: ".splash--subtitle",
  opacity: [0, 1],
  duration: 1000
});

tl.add({
  targets: ".header",
  opacity: [0, 1],
  duration: 1000
});
