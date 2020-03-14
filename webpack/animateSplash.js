import anime from "animejs";


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
  easing: "linear"
});

tl.add({
  duration: 1500
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
