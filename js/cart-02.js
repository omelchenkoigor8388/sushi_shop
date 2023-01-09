const cartWrapper =  document.querySelector('.cart-wrapper');

//відстежуєм клік на всій сторінці
window.addEventListener('click', function (event) {

	//якщо клік був по кнопкі 'додати до корзини'
    if (event.target.hasAttribute('data-cart')) {

		//знаходим карточку в середині якох був здійснений клік
        const card = event.target.closest('.card');
        
        const productInfo = {
            id: card.dataset.id,
            imgSrc: card.querySelector('.product-img').getAttribute('src'),
            title: card.querySelector('.item-title').innerText,
            itemsInBox: card.querySelector('[data-items-in-box]').innerText,
            weight: card.querySelector('.price__weight').innerText,
            price: card.querySelector('.price__currency').innerText,
            counter: card.querySelector('[data-counter]').innerText,
        };

		//перевірям чи є цей товар в корзині
		const itemInCart = cartWrapper.querySelector(`[data-id="${productInfo.id}"]`);

		//якщо товар вже є в корзині
		if(itemInCart) {
			const counterElement = itemInCart.querySelector('[data-counter]')
			counterElement.innerText = parseInt(counterElement.innerText) + parseInt(productInfo.counter);
		}else{

        	const cartItemHTML = `<div class="cart-item" data-id="${productInfo.id}">
								<div class="cart-item__top">
									<div class="cart-item__img">
										<img src="${productInfo.imgSrc}" alt="${productInfo.title}">
									</div>
									<div class="cart-item__desc">
										<div class="cart-item__title">${productInfo.title}</div>
										<div class="cart-item__weight">${productInfo.itemsInBox} / ${productInfo.weight}</div>

										<!-- cart-item__details -->
										<div class="cart-item__details">

											<div class="items items--small counter-wrapper">
												<div class="items__control" data-action="minus">-</div>
												<div class="items__current" data-counter="">${productInfo.counter}</div>
												<div class="items__control" data-action="plus">+</div>
											</div>

											<div class="price">
												<div class="price__currency">${productInfo.price}</div>
											</div>

										</div>
										<!-- // cart-item__details -->

									</div>
								</div>
								</div>`;

			//відображаєм товар в корзині
        	cartWrapper.insertAdjacentHTML('beforeend', cartItemHTML);

		}

		//скидаєм щотчик коли він показує 1
		card.querySelector('[data-counter]').innerText = '1';

		//відображення корзини пуста/повна
		toggleCartStatus();

		//сума товарів в корзині
		calcCartPriceAndDelivery();
    }
})