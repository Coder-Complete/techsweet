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
for (let i = 1; i <= numMilestones; i++) {
  let newMilestone = document.createElement("div");
  newMilestone.className = "milestone inactive";
  newMilestone.style.left = `${(100 / numMilestones) * i}%`;
  document.querySelector(".milestones").append(newMilestone);
}

progressBarContainer.addEventListener("scroll", (e) => {
  let newFilledWidth = 100 * ((e.target.scrollLeft * 2) / e.target.scrollWidth);
  newFilledWidth = newFilledWidth > 100 ? 100 : newFilledWidth;
  filled.style.width = `${newFilledWidth}%`;

  function determineMilestoneIndexBasedOnScrollPercentage(percentage) {
    if (percentage >= 100) return -1;
    let percentagePerMilestone = 100 / numMilestones;
    let howManyTimesDivisor = Math.floor(percentage / percentagePerMilestone);
    return howManyTimesDivisor;
  }

  let index = determineMilestoneIndexBasedOnScrollPercentage(newFilledWidth);

  if (index === -1) {
    // last bullet
    displayTextTitle.textContent = "You're hired!";
    displayText.textContent = "Congratulations.";
    milestones.children[milestones.children.length - 1].classList.remove(
      "inactive"
    );
  } else {
    displayTextTitle.textContent = milestonesData[index].title;
    displayText.textContent = milestonesData[index].description;
  }

  // TODO: only do this if pass milestone
  // if (milestones.children[index].classList.contains("inactive")) {
  milestones.children[index].classList.remove("inactive");
  // } else if (index !== 0) {
  //   milestones.children[index].classList.add("inactive");
  // }
});
