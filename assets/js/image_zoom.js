document.addEventListener('DOMContentLoaded', function() {
  const imageContainers = document.querySelectorAll('.image-container');
  
  imageContainers.forEach(imageContainer => {
    const zoomableImage = imageContainer.querySelector('.image-zoom');
    
    zoomableImage.addEventListener('click', function() {
      const zoomedImageContainer = document.createElement('div');
      zoomedImageContainer.classList.add('zoomed-image');
      document.body.style.overflow = 'hidden';

      const zoomedImg = document.createElement('img');
      zoomedImg.src = this.src;

      zoomedImageContainer.appendChild(zoomedImg);
      document.body.appendChild(zoomedImageContainer);

      zoomedImageContainer.addEventListener('click', function() {
        document.body.removeChild(this);
        document.body.style.overflow = 'auto';
      });
    });
  });
});
