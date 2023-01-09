// Знаходим елементи на сторінці
const btnMinus = document.querySelector('[data-action="minus"]');
const btnPlus = document.querySelector('[data-action="plus"]');
const counter = document.querySelector('[data-counter]');


// Відстежуєм клік на кнопку btnMinus
btnMinus.addEventListener('click', function(){


    // Перевірям текст в щотчику чи більший він 1
    if ( parseInt(counter.innerText) > 1 ) {
        // Зменшуєм текст щотчика на 1
        counter.innerText = --counter.innerText
    }    

    
})


// // Відстежуєм клік на кнопку btnPlus
btnPlus.addEventListener('click', function(){
    // Збільшуєм текст щотчика на 1
    counter.innerText = ++counter.innerText;
})