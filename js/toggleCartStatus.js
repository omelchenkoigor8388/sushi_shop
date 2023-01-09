function toggleCartStatus() {

    const cartWrapper = document.querySelector('.cart-wrapper');
    //отримуєм кількість елементів в корзині
    //console.log(cartWrapper.children.length);
    const cartEmptyBadge = document.querySelector('[data-cart-empty]');
    const orderForm = document.querySelector('#order-form'); 



    if( cartWrapper.children.length > 0 ) {
        console.log('корзина повна')
        cartEmptyBadge.classList.add('none');
        orderForm.classList.remove('none');
    } else {
        console.log('корзина пуста')
        cartEmptyBadge.classList.remove('none');
        orderForm.classList.add('none');
    }
}