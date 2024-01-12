function openLightbox(imageSrc) {
    const lightbox = document.createElement('div');
    lightbox.className = 'lightbox';
    
    const image = document.createElement('img');
    image.src = imageSrc;
    
    lightbox.appendChild(image);
    document.body.appendChild(lightbox);
    
    lightbox.addEventListener('click', () => {
        document.body.removeChild(lightbox);
    });
}
