const titleDiv = document.querySelector(".myname");
const detailsDiv = document.querySelector(".iam");
const collegeDiv = document.querySelector(".undergrad");
const tl = anime.timeline({
  easing: "easeOutExpo",
  duration: 500
});

tl.add({
  targets: titleDiv,
  scale: 1.3
})
  .add({
    targets: titleDiv,
    scale: 1
  })
  .add({
    targets: detailsDiv,
    translateX: "-5%",
    opacity: 0
  })
  .add({
    targets: detailsDiv,
    translateX: "0%",
    opacity: 1
  },"-=400")
  .add({
    targets: collegeDiv,
    opacity: 1
  });
