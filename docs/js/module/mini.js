

const btn =document.querySelectorAll('.outer-square ')

export function Mini(){
    if(document.querySelectorAll('.section6-list ')){

        document.querySelectorAll('.section6-list ').forEach(li => {
            li.addEventListener('click', () => {
                // Удаляем активный класс с кнопок
                document.querySelectorAll('.section6-list ').forEach(btn => btn.classList.remove('active'));

                // Добавляем активный класс на текущую нажатую кнопку
                li.classList.add('active');

                // Получаем target блок для отображения
                const target = li.getAttribute('data-target');

                // Скрываем все блоки с контентом
                document.querySelectorAll('.section6__left').forEach(content => content.classList.remove('active'));

                // Показываем выбранный блок
                document.getElementById(target).classList.add('active');
            });
        });
}
//     if(document.querySelectorAll('.documentation-category-button ')){

//         document.querySelectorAll('.documentation-category-button ').forEach(button => {
//             button.addEventListener('click', () => {
//                 // Удаляем активный класс с кнопок
//                 document.querySelectorAll('.documentation-category-button ').forEach(btn => btn.classList.remove('active'));

//                 // Добавляем активный класс на текущую нажатую кнопку
//                 button.classList.add('active');

//                 // Получаем target блок для отображения
//                 const target = button.getAttribute('data-target');

//                 // Скрываем все блоки с контентом
//                 document.querySelectorAll('.documentation__down').forEach(content => content.classList.remove('active'));

//                 // Показываем выбранный блок/////
//                 document.getElementById(target).classList.add('active');
//             });
//         });
// }
}