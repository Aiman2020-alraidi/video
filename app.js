const switchBtn = document.querySelector(".switch-btn");
const videoContainer = document.querySelector(".video-container");

console.log(switchBtn);
switchBtn.addEventListener("click", (e) => {
  if (e.currentTarget.classList.contains("slide")) {
    e.currentTarget.classList.remove("slide");
    videoPlay();
  } else {
    e.currentTarget.classList.add("slide");
    videoPause();
  }
});

const videoPlay = (e) => {
  videoContainer.play();
};

const videoPause = (e) => {
  videoContainer.pause();
};
