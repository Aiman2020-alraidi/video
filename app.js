const switchBtn = document.querySelector(".switch-btn");
const videoContainer = document.querySelector(".video-container");
const loading = document.querySelector(".loading");

console.log(switchBtn);
window.addEventListener("DOMContentLoaded", () => {
  switchBtn.addEventListener("click", (e) => {
    if (e.currentTarget.classList.contains("slide")) {
      e.currentTarget.classList.remove("slide");
      videoContainer.play();
    } else {
      e.currentTarget.classList.add("slide");
      videoPause();
    }
  });
});
// const videoPlay = (e) => {
//   videoContainer.play();
// };

const videoPause = (e) => {
  videoContainer.pause();
};

// loading when site is load
window.addEventListener("load", (e) => {
  loading.classList.add("hide-loading");
});
