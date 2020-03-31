// function init() {
//   const slides = document.querySelectorAll(".slide");
//   const pages = document.querySelectorAll(".page");
//   const radialGradiet = [
//     `radial-gradient(#163462,#000106)`,
//     `radial-gradient(#4e3022,#161616)`,
//     `radial-gradient(#068C04,#000106)`
//   ];

//   //Tracker

//   let current = 0;

//   slides.forEach((slide, index) => {
//     slide.addEventListener("click", function() {
//       changeDots(this);
//       nextSlide(index);
//     });
//   });

//   function changeDots(dot) {
//     slides.forEach(slide => {
//       slide.classList.remove("active");
//       dot.classList.add("active");
//     });
//   }

//   function nextSlide(pageNumber) {
//     const nextPage = pages[pageNumber];
//     const currentPage = pages[current];
//     // current = pageNumber;
//     const nextLeft = nextPage.querySelector(".hero .model-left");
//     const nextRight = nextPage.querySelector(".hero .model-right");
//     const currentLeft = currentPage.querySelector(".hero .model-left");
//     const currentRight = currentPage.querySelector(".hero .model-right");
//     const nextText = nextPage.querySelector(".details");
//     const portfolio = document.querySelector(".portfolio");

//   }

// }

// init();
document.onreadystatechange = function() {
  if (document.readyState !== "complete") {
    document.querySelector("body").style.visibility = "hidden";
    document.querySelector(".loaderr").style.visibility = "visible";
  } else {
    document.querySelector(".loaderr").style.display = "none";
    document.querySelector("body").style.visibility = "visible";
  }
};


const textpath = document.querySelector("#text-path");
const leftImg = document.querySelectorAll(".model-left");
const rightImg = document.querySelectorAll(".model-right");
const titles = document.querySelectorAll("#hover");
const nav_opener = document.querySelector(".menu");
const nav_open = document.querySelector("#nav-open");
// const images = document.querySelectorAll(".hero");

function updateTextPathOffset(offset) {
  textpath.setAttribute("startOffset", offset);
}

function onSccoll() {
  requestAnimationFrame(function() {
    updateTextPathOffset(window.scrollY * 0.5 + 20);
  });
}

window.addEventListener("scroll", onSccoll);

const observer1 = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting == true) {
      entry.target.classList.add("animate");
    } else {
      entry.target.classList.remove("animate");
    }
    // console.log(entry.index());
  });
});

const LeftImg = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting == true) {
      entry.target.classList.add("down");
    } else {
      entry.target.classList.remove("down");
    }
  });
});
const RightImg = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting == true) {
      entry.target.classList.add("up");
    } else {
      entry.target.classList.remove("up");
    }
  });
});

titles.forEach(title => {
  observer1.observe(title);
});

leftImg.forEach(img => {
  LeftImg.observe(img);
});

rightImg.forEach(img => {
  RightImg.observe(img);
});

//javascript for nav-open

let isNavOpen = false;
nav_opener.addEventListener("click", function() {
  if (!isNavOpen) {
    document.getElementById("nav-open").style.transform = "translateY(0%)";
    document
      .getElementById("menubar")
      .setAttribute(
        "d",
        "M26.6667 40L0 13.3333L13.3333 0L40 26.6667L66.6667 0L80 13.3333L53.3333 40L80 66.6667L66.6667 80L40 53.3333L13.3333 80L0 66.6667L26.6667 40Z"
      );
    document.getElementById("menubar").style.fill = "black";
    isNavOpen = true;
  } else {
    document.getElementById("nav-open").style.transform = "translateY(-100%)";
    document.getElementById("menubar").style.fill = "#f7f7f7";
    document
      .getElementById("menubar")
      .setAttribute("d", "M0 0h100v20H0zM0 30h100v20H0zM0 60h100v20H0z");
    isNavOpen = false;
  }

  isNavOpen ? false : true;
});

// const slides = document.querySelectorAll(".slide");

// slides.forEach((slide, index) => {
//   slide.addEventListener("click", function() {
//     changeDots(this);
//     nextSlide(index);
//   });
// });

// function changeDots(dot) {
//   slides.forEach(slide => {

//     slide.classList.remove("active");
//     dot.classList.add("active");
//   });
// }

// changeDots();
