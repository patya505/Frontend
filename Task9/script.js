let img = document.querySelector('.card img');
let love = document.querySelector('.card i');

img.addEventListener('dblclick', function () {

    // show + zoom
    love.style.opacity = '1';
    love.style.transform = 'translate(-50%, -50%) scale(1)';

    // hide after animation
    setTimeout(() => {
        love.style.opacity = '0';
        love.style.transform = 'translate(-50%, -50%) scale(0)';
    }, 500);

    console.log("double clicked");
});
