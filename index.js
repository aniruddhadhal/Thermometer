const tepmLode = () => {
    let tem = document.getElementById('tm');
    tem.innerHTML = "&#xf2cb";
    tem.style.color = "yellow";


    setTimeout(() => {
        tem.innerHTML = "&#xf2ca";


    }, 1000);

    setTimeout(() => {
        tem.innerHTML = "&#xf2c9";

    }, 2000);
    setTimeout(() => {
        tem.innerHTML = "&#xf2c8";

    }, 3000);
    setTimeout(() => {
        tem.innerHTML = "&#xf2c7";
        tem.style.color = "red";

    }, 4000);

}

tepmLode();

setInterval(tepmLode, 5000);