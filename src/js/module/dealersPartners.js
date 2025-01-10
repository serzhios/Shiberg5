// const buttons = document.querySelectorAll('.section7-categories-list');



export function dealersPartners(){
    if(document.querySelectorAll('.partners-region-button')){

        document.querySelectorAll('.partners-region-button').forEach(button => {
            button.addEventListener('click', () => {
                // Удаляем активный класс с кнопок
                document.querySelectorAll('.partners-region-button').forEach(btn => btn.classList.remove('active'));

                // Добавляем активный класс на текущую нажатую кнопку
                button.classList.add('active');

                // Получаем target блок для отображения
                const target = button.getAttribute('data-target');

                // Скрываем все блоки с контентом
                document.querySelectorAll('.dealers-partners-block-right').forEach(content => content.classList.remove('active'));

                // Показываем выбранный блок
                document.getElementById(target).classList.add('active');
            });
        });
}
    if(document.getElementById('options')){
        const selectElement = document.getElementById('options');

        selectElement.addEventListener('change', (event) => {
            const targetOption = event.target.selectedOptions[0]; // Получаем выбранный <option>
            const targetId = targetOption.getAttribute('data-target'); // Берём значение data-target

            // Скрываем все блоки с id, начинающимися с "block"
            document.querySelectorAll('.dealers-partners-block-right').forEach((block) => {
                block.style.display = 'none';
            });

            // Показываем блок с id из data-target, если такой существует
            if (targetId) {
                const targetBlock = document.getElementById(targetId);
                if (targetBlock) {
                    targetBlock.style.display = 'block';
                }
            }
        });
}
//     if(document.querySelectorAll('.answer-categories-list')){

//         document.querySelectorAll('.answer-categories-list').forEach(button => {
//             button.addEventListener('click', () => {
//                 // Удаляем активный класс с кнопок
//                 document.querySelectorAll('.answer-categories-list').forEach(btn => btn.classList.remove('active'));

//                 // Добавляем активный класс на текущую нажатую кнопку
//                 button.classList.add('active');

//                 // Получаем target блок для отображения
//                 const target = button.getAttribute('data-target');

//                 // Скрываем все блоки с контентом
//                 document.querySelectorAll('.answer__right').forEach(content => content.classList.remove('active'));

//                 // Показываем выбранный блок
//                 document.getElementById(target).classList.add('active');
//             });
//         });
// }
}


