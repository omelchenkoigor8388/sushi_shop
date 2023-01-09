// Відстежуєм клік по любому елементу на сторінці
window.addEventListener('click', function (event) {

    let counter;

    //перевірям чи був клік по плюсу чи мінусу
    if(event.target.dataset.action === 'plus' || event.target.dataset.action === 'minus'){
            //Знаходим div всього щотчика 
        const counterWrapper = event.target.closest('.counter-wrapper');
        
            //Знаходим число щотчика
        counter = counterWrapper.querySelector('[data-counter]');
    }

    //Перевірям чи є елемент по якому клікнули,елементом Плюс
    if (event.target.dataset.action === 'plus') {

        counter.innerText = ++counter.innerText

    }

    //Перевірям чи є елемент по якому клікнули,елементом Мінус
    if (event.target.dataset.action === 'minus') {

        // Перевірям текст в щотчику чи більший він 1
        if ( parseInt(counter.innerText) > 1 ) {
            // Зменшуєм текст щотчика на 1
            counter.innerText = --counter.innerText

        }else if(event.target.closest('.cart-wrapper') && parseInt(counter.innerText) === 1 ) {
            //удаляєм товар з корзини
            event.target.closest('.cart-item').remove();

            //відображення корзини пуста/повна
		    toggleCartStatus();

            calcCartPriceAndDelivery();

        }
        
    }

    //перевірям клік на мінус або плюс
    if(event.target.hasAttribute('data-action') && event.target.closest('.cart-wrapper')){
        calcCartPriceAndDelivery();
    }
});

