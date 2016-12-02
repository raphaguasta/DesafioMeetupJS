Array.from(document.querySelectorAll('.box')).forEach(el => {
    el.onclick = () => {
        el.style.height = 0;
        el.style.opacity = 0.9;
    };
    el.addEventListener('transitionend', () => el.remove())
});