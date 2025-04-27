const allImages = document.getElementById('allimages');

allImages.addEventListener('click', function(e) {
    console.log('You clicked on the UL (allimages)');
});

const firstImage = document.querySelector('img');

firstImage.addEventListener('click', function(e) {
    e.stopPropagation();
    console.log('You clicked on the IMG');
});

