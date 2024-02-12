function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  const offset = 110; // Pixels before the element is in view
  return (
    rect.top >= 0 - offset &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) + offset &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

document.addEventListener("scroll", function () {
  const aboutMeText = document.querySelector(".about-me-text");
  const aboutMePaintings = document.querySelector(".about-me-paintings");

  if (isInViewport(aboutMeText)) {
    aboutMeText.classList.add("enter-left");
  }

  if (isInViewport(aboutMePaintings)) {
    aboutMePaintings.classList.add("enter-right");
  }
});

document.addEventListener("DOMContentLoaded", () => {
  document.querySelector(".img-box").classList.add("enter-right");
  document.querySelector(".text-box").classList.add("enter-left");
});
