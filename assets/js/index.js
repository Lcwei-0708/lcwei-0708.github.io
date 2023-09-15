document.addEventListener('DOMContentLoaded', function(){

  const imgContainers = document.querySelectorAll(".image-container");
  const imgElement = document.querySelector('.image-container img');
  const heroBg = getComputedStyle(document.documentElement).getPropertyValue('--hero-bg-load');
  const imageUrl = heroBg.match(/url\(['"]?([^'"]+)['"]?\)/)[1];

  imgElement.src = imageUrl;

  imgContainers.forEach(imgContainer => {
    const img = imgContainer.querySelector("img");

    function loaded() {
      imgContainer.classList.add("loaded");
    }

    if (img.complete) {
      loaded();
    } else {
      img.addEventListener("load", loaded);
    }
  });
});