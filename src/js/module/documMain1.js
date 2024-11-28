
export function documMain1(){
    if(document.querySelectorAll('.section8-category-button ')){

        document.querySelectorAll('.section8-category-button ').forEach(button => {
            button.addEventListener('click', () => {
                // Удаляем активный класс с кнопок
                document.querySelectorAll('.section8-category-button ').forEach(btn => btn.classList.remove('active'));

                // Добавляем активный класс на текущую нажатую кнопку
                button.classList.add('active');

                // Получаем target блок для отображения
                const target = button.getAttribute('data-target');

                // Скрываем все блоки с контентом
                document.querySelectorAll('.section8__down').forEach(content => content.classList.remove('active'));

                // Показываем выбранный блок
                document.getElementById(target).classList.add('active');
            });
        });
}
    if(document.querySelectorAll('.documentation-category-button ')){

        document.querySelectorAll('.documentation-category-button ').forEach(button => {
            button.addEventListener('click', () => {
                // Удаляем активный класс с кнопок
                document.querySelectorAll('.documentation-category-button ').forEach(btn => btn.classList.remove('active'));

                // Добавляем активный класс на текущую нажатую кнопку
                button.classList.add('active');

                // Получаем target блок для отображения
                const target = button.getAttribute('data-target');

                // Скрываем все блоки с контентом
                document.querySelectorAll('.documentation__down').forEach(content => content.classList.remove('active'));

                // Показываем выбранный блок/////
                document.getElementById(target).classList.add('active');
            });
        });
}
}