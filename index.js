let imgs = document.querySelectorAll('.item');
let dots = document.querySelectorAll('.dot')
let index = 0;
imgs.forEach((value, index) => {
    value.style.left = index * 100 + '%';
});

setInterval(() => {
    index++;
    if(index === imgs.length)
        index = 0;
    document.querySelector('#slide').style.left = '-' + index * 100 + '%';
    document.querySelector('.active').classList.remove('active')
    dots[index].classList.add('active')
}, 3000);

window.onscroll = () => {
    const navBar = document.getElementsByTagName('header').item(0);
    if(document.documentElement.scrollTop > 100)
        navBar.classList.add('hide')
    else if(document.documentElement.scrollTop <= 500)
        navBar.classList.remove('hide')

}