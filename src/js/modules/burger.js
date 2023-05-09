const burger = (menuSelector, burgerSelector) => {
    const menuEl = document.querySelector(menuSelector),
          burgerEl = document.querySelector(burgerSelector);

    burgerEl.addEventListener('click', () => {
        if (menuEl.style.display == 'none') {
            menuEl.style.display = 'block';        
        } else {
            menuEl.style.display = 'none';
        }
    });

    window.addEventListener('resize', () => {
        if (window.screen.availWidth >= 992) {
            menuEl.style.display = 'none';
        }
    })
};
 
export default burger;