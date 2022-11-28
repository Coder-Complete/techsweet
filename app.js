const progressBarContainer = document.querySelector(".progress-bar-container");
const progressBar = document.querySelector(".progress-bar");
const filled = document.querySelector(".filled");
const displayTextTitle = document.querySelector(".display-text--title");
const displayText = document.querySelector(".display-text");
const milestones = document.querySelector(".milestones");

const milestonesData = [
  {
    title: "How does the internet work?",
    description: "You cant do shit without this.",
  },
  {
    title: "HTML and CSS",
    description:
      "These are the barebones of frontend development. We believe frontend is the best place to start because displaying your backend expertise still requires you to have a frontend. Also we want to get to React.js as quickly as possible since its a very hirable skill.",
  },
  {
    title: "JavaScript + DOM Manipulation",
    description: "Start making your websites interactive.",
  },
  {
    title: "APIs, Data, and Asynchronous JavaScript",
    description:
      "This serves as a great window into how a frontend communicates with a backend.",
  },
  {
    title: "React.js",
    description: "This is a very hirable skill.",
  },
  {
    title: "Applying to jobs",
    description: "You are now eligible for frontend positions.",
  },
  {
    title: "Backend",
    description: "Time to learn how full-stack apps get created.",
  },
  {
    title: "Full-Stack Capstone",
    description: "In-depth project that will be the highlight of your resume.",
  },
  {
    title: "Deployment, Authentication, Testing, Infrastructure, and Security",
    description:
      "Through doing projects, you will learn about these remaining topics.",
  },
];

const numMilestones = milestonesData.length;

// create the milestone dots
// for (let i = 1; i <= numMilestones; i++) {
//   let newMilestone = document.createElement("div");
//   newMilestone.className = "milestone inactive";
//   newMilestone.style.left = `${(100 / numMilestones) * i}%`;
//   document.querySelector(".milestones").append(newMilestone);
// }

// progressBarContainer.addEventListener("scroll", (e) => {
//   let newFilledWidth = 100 * ((e.target.scrollLeft * 2) / e.target.scrollWidth);
//   newFilledWidth = newFilledWidth > 100 ? 100 : newFilledWidth;
//   filled.style.width = `${newFilledWidth}%`;

//   function determineMilestoneIndexBasedOnScrollPercentage(percentage) {
//     if (percentage >= 100) return -1;
//     let percentagePerMilestone = 100 / numMilestones;
//     let howManyTimesDivisor = Math.floor(percentage / percentagePerMilestone);
//     return howManyTimesDivisor;
//   }

//   let index = determineMilestoneIndexBasedOnScrollPercentage(newFilledWidth);

//   if (index === -1) {
//     // last bullet
//     displayTextTitle.textContent = "You're hired!";
//     displayText.textContent = "Congratulations.";
//     milestones.children[milestones.children.length - 1].classList.remove(
//       "inactive"
//     );
//   } else {
//     displayTextTitle.textContent = milestonesData[index].title;
//     displayText.textContent = milestonesData[index].description;
//   }

//   // TODO: only do this if pass milestone
//   // if (milestones.children[index].classList.contains("inactive")) {
//   milestones.children[index].classList.remove("inactive");
//   // } else if (index !== 0) {
//   //   milestones.children[index].classList.add("inactive");
//   // }
// });

// left: 37, up: 38, right: 39, down: 40,
// spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36
// var keys = { 37: 1, 38: 1, 39: 1, 40: 1 };

// function preventDefault(e) {
//   e.preventDefault();
// }

// function preventDefaultForScrollKeys(e) {
//   if (keys[e.keyCode]) {
//     preventDefault(e);
//     return false;
//   }
// }

// // modern Chrome requires { passive: false } when adding event
// var supportsPassive = false;
// try {
//   window.addEventListener(
//     "test",
//     null,
//     Object.defineProperty({}, "passive", {
//       get: function () {
//         supportsPassive = true;
//       },
//     })
//   );
// } catch (e) {}

// var wheelOpt = supportsPassive ? { passive: false } : false;
// var wheelEvent =
//   "onwheel" in document.createElement("div") ? "wheel" : "mousewheel";

// // call this to Disable
// function disableScroll() {
//   window.addEventListener("DOMMouseScroll", preventDefault, false); // older FF
//   window.addEventListener(wheelEvent, preventDefault, wheelOpt); // modern desktop
//   window.addEventListener("touchmove", preventDefault, wheelOpt); // mobile
//   window.addEventListener("keydown", preventDefaultForScrollKeys, false);
// }

// // call this to Enable
// function enableScroll() {
//   window.removeEventListener("DOMMouseScroll", preventDefault, false);
//   window.removeEventListener(wheelEvent, preventDefault, wheelOpt);
//   window.removeEventListener("touchmove", preventDefault, wheelOpt);
//   window.removeEventListener("keydown", preventDefaultForScrollKeys, false);
// }

// window.onscroll = () => {
//   const scrollPadding = 60;
//   const pathSectionBounds = document
//     .querySelector("#the-path")
//     .getBoundingClientRect();
//   const topOfPathSection = pathSectionBounds.top;
//   // const bottomOfPathSection = pathSectionBounds.bottom;
//   // let once = true;
//   if (topOfPathSection - scrollPadding <= 0) {
//     console.log("hi");
//     // if (once) {
//     //   let x = window.scrollX;
//     //   let y = window.scrollY;
//     //   window.scrollTo(x, y);
//     //   disableScroll();
//     //   setTimeout(() => enableScroll(), 3000);
//     //   once = false;
//     // }
//   }
// };

const spaceHolder = document.querySelector(".space-holder");
const horizontal = document.querySelector(".horizontal");
spaceHolder.style.height = `${calcDynamicHeight(horizontal)}px`;

function calcDynamicHeight(ref) {
  const vw = window.innerWidth;
  const vh = window.innerHeight;
  const objectWidth = ref.scrollWidth;
  return objectWidth - vw + vh + 15; // 15 is the padding (in pixels) desired on the right side of the .cards container. This can be set to whatever your styles dictate
}

window.addEventListener("scroll", () => {
  const sticky = document.querySelector(".sticky");
  horizontal.style.transform = `translateX(-${sticky.offsetTop}px)`;
});

window.addEventListener("resize", () => {
  spaceHolder.style.height = `${calcDynamicHeight(horizontal)}px`;
});

/* loop testimonials */
const testimonialData = [
  {
    image: "assets/ryan.jpg",
    name: "Ryan M.",
    text: "Working with Jared has really helped me learn to code. The flexibility of his program is a huge benefit as he keeps you moving forward without feeling pressured to move on before you have a good grasp of things. Another thing I really appreciate about Jared is that he’s always available to help with concepts or even specific debugging or coding problems. It is a huge asset when learning to have someone you can contact and ask specific questions and you know they’ll get back to you within a few hours at most. The layout and pace of the program is very good but the availability is incredibly beneficial and valuable. I know I wouldn’t be where I am on my programming journey without the help Jared has provided.",
  },
  {
    image: "assets/vy.jpeg",
    name: "Vy T.",
    text: " Enrolling into Jared’s program is the best investment I have made so far. I always wanted to switch my career to technology, but I just really didn’t know where to start, and Jared gave me a very clear path that has worked out perfectly while I am still able to maintain my full time job. Even after only a couple weeks into the program I already saw the difference in my coding skill. With his knowledge, support and passion in teaching, I do believe I will achieve my goal very fast and I would love to recommend Jared to anyone who is seeking a technology career.",
  },
  {
    image: "assets/yana.jpeg",
    name: "Yana P.",
    text: " Jared is great. I was in doubt if I should start this new career path but he was so helpful and was able to answer all my questions. I’m enjoying working with him and he is very encouraging. Would highly recommend him to everyone!",
  },
  {
    image: "assets/dee.jpeg",
    name: "Dee H.",
    text: "Meeting Jared was nothing less than a miracle for me! I was stumped for months, and he went above and beyond to help. What started off as an introductory meeting turned out to be the sign I had been asking for as a beginner, that I was on the right track and to not give up! He was informative, inquisitive, and so patient with me while I tried to explain to him my situation. I loved working with Jared and definitely recommend you do too.",
  },
];
