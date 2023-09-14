document.addEventListener('DOMContentLoaded', function(){

  const imgContainers = document.querySelectorAll(".image-container");

  imgContainers.forEach(imgContainer => {
    const img = imgContainer.querySelector("img");

    function loaded() {
      imgContainer.classList.add("loaded");
      setTimeout(function() {
        imgContainer.style.backgroundImage = 'none';
      }, 300);
    }

    if (img.complete) {
      loaded();
    } else {
      img.addEventListener("load", loaded);
    }
  });

});