document.addEventListener('DOMContentLoaded', function(){

  const imgContainers = document.querySelectorAll(".image-container");

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