document.querySelector('.btn-primary').addEventListener('click', event =>{
    const counterWrapper = document.querySelectorAll('.cart-item');
    
    counterWrapper.forEach((el) => {
        let name = el.querySelector('.cart-item__title');
        let number = el.querySelector('.items__current');
        let sum = el.querySelector('.price__currency');
        
        let text = name.textContent + ' \nкількість : ' + number.textContent +'шт.' + ' \nціні : ' + sum.textContent;

        var token = '5610797462:AAG8xBcl76SAh3B2luqzlOGLfIMBFHQU_uE';
        var chat_id = -881956514;
        var url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=${text}`
    
        let api = new XMLHttpRequest();
        api.open("GET", url, true);
        api.send();

    });

    let sumPrise = document.querySelector('.total-price');
    let sumPriseText =' Всього : ' + sumPrise.textContent;

    alert('Ваше замовлення прийняте')

    var token = '5610797462:AAG8xBcl76SAh3B2luqzlOGLfIMBFHQU_uE';
    var chat_id = -881956514;
    var url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=${sumPriseText}`

    let api = new XMLHttpRequest();
    api.open("GET", url, true);
    api.send();

    

});

