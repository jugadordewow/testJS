
function wordsCounter(selector, target, trigger){
    const input = document.querySelector(selector),
          output = document.querySelector(target),
          btn = document.querySelector(trigger);
    btn.onclick = function(e){
        let wordsCount = input.value.split(' ').length;
        let symbolsCount = input.value.length;
        let lettersCount = input.value;
        let letters = [];

        for(let i = 0; i < lettersCount.length; i++){
            if(lettersCount[i] !== ' ' && lettersCount[i] !== '?' && lettersCount[i] !== '!' && lettersCount[i] !== '.' && lettersCount[i] !== ','){
                letters.push(lettersCount[i]);
            }
        }
        let reg1 = /[аоиеёэыуюя]/g;
        let reg2 = /[цкнгшщзхъфвпрлджчсмтьб]/g;
        let arr1 = input.value.toLowerCase().match(reg1);
        let arr2 = input.value.toLowerCase().match(reg2);



        output.innerHTML = 'Количество символов: ' + symbolsCount + '<br>Количество слов: '+wordsCount + '<br>Количество букв: '+ letters.length + '<br>Количество гласных: '+ arr1.length + '<br>Колиество согласных: ' + arr2.length;

    }
}

function cleaner(target, trigger){
    const fieldTarget = document.querySelector(target),
          btn = document.querySelector(trigger);
    btn.onclick = function(e){
        fieldTarget.value = '';
    }
}

wordsCounter('.text-area', '.test-output',  '.btn');
cleaner('.text-area', '.btn-clean');
// Создать html страницу с функционалом на JS
// Создать на странице элемент для ввода нескольких строк текста.
// Если пользователь вводит в поле текст (пишет или делает вставку из буфера обмена)  сбоку отображается статистика по тексту
//
// количество гласных е
// количество согласных е
// количество слов e
// количество символов e
// количество букв e
//
// топ 3 повторяющихся слов и их количество в тексте
// Подсветка всех повторяющихся слов или однокоренных.
// Кнопка очистить поле ввода
// Можно использовать любые технологии и библиотеки кроме jQuery
//
//
// Срок выполнения не более 7 дней с момента получения задания
