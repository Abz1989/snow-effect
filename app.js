createSnowFlake();

function createSnowFlake() {
    const snow_flake = document.createElement('i');
    snow_flake.classList.add('.fa-solid');
    snow_flake.classList.add('.fa-snowflake');
    snow_flake.style.left = Math.random() * window.innerWidth + 'px';


    body.append.Child(snow_flake);
}