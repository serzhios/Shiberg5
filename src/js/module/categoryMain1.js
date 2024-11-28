// const buttons = document.querySelectorAll('.section7-categories-list');



export function categoryMain1(){
    if(document.querySelectorAll('.section7-categories-list')){

        document.querySelectorAll('.section7-categories-list').forEach(button => {
            button.addEventListener('click', () => {
                // Удаляем активный класс с кнопок
                document.querySelectorAll('.section7-categories-list').forEach(btn => btn.classList.remove('active'));

                // Добавляем активный класс на текущую нажатую кнопку
                button.classList.add('active');

                // Получаем target блок для отображения
                const target = button.getAttribute('data-target');

                // Скрываем все блоки с контентом
                document.querySelectorAll('.section7__right').forEach(content => content.classList.remove('active'));

                // Показываем выбранный блок
                document.getElementById(target).classList.add('active');
            });
        });
}
    if(document.querySelectorAll('.answer-categories-list')){

        document.querySelectorAll('.answer-categories-list').forEach(button => {
            button.addEventListener('click', () => {
                // Удаляем активный класс с кнопок
                document.querySelectorAll('.answer-categories-list').forEach(btn => btn.classList.remove('active'));

                // Добавляем активный класс на текущую нажатую кнопку
                button.classList.add('active');

                // Получаем target блок для отображения
                const target = button.getAttribute('data-target');

                // Скрываем все блоки с контентом
                document.querySelectorAll('.answer__right').forEach(content => content.classList.remove('active'));

                // Показываем выбранный блок
                document.getElementById(target).classList.add('active');
            });
        });
}
}


