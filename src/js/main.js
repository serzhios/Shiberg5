import {sliderMain1} from "./module/sliderMain1.js"
import {sliderMain2} from "./module/sliderMain2.js"
// import {sliderMain3} from "./module/sliderMain3.js"
import { answerMain1 } from "./module/answerMaein1.js";
import { categoryMain1 } from "./module/categoryMain1.js";
import{documMain1} from "./module/documMain1.js"
import { thumbnailMain } from "./module/thumbnailMain.js";
import{sliderMain4} from "./module/sliderMain4.js"
import { quiz } from "./module/quiz.js";

import { dropDown1 } from "./module/dropDown1.js";


import {dropdownMenu} from "./module/dropdownMenu.js"
// import { delyveryToggle } from "./module/delyvery.js";
import { catalogBtn } from "./module/catalogBtn.js";
import{catalogSlider} from "./module/catalogSlider.js"
import {reviewsSlider1} from "./module/reviewsSlider1.js"
import {stageSlider} from "./module/stageSlider.js"
import { testWebP } from "./module/testWebP.js";
import {Mini} from "./module/mini.js"
import { optionSlide } from "./module/optionSlide.js";
import { writeSlider } from "./module/writeSleder.js";
import { designSlider } from "./module/designSlider.js";
import {designQuestion} from "./module/designQuestion.js"
// import {optionMiniSlider} from "./module/optionMiniSlider.js";
document.querySelectorAll('.section6-list').forEach(function(item) {
    item.addEventListener('click', function() {
        this.classList.toggle('active'); // Добавляем/удаляем класс "active" при клике
    });
});


testWebP(function (support) {
    if (support == true) {
      document.querySelector('body').classList.add('webp');
      console.log("выполнился webp")
    }else{
      document.querySelector('body').classList.add('no-webp');
    }
  });
// function toggle(selected) {
//     const options = document.querySelectorAll('.toggle-option');
//     options.forEach(option => {
//         option.classList.remove('active');
//         option.classList.add('inactive');
//     });
//     selected.classList.add('active');
//     selected.classList.remove('inactive');
// }

// const buttons = document.querySelectorAll('.section7-categories-list');

// buttons.forEach(button => {
//     button.addEventListener('click', () => {
//         // Удаляем класс "active" у всех кнопок
//         buttons.forEach(btn => btn.classList.remove('active'));
//         // Добавляем класс "active" к нажатой кнопке
//         button.classList.add('active');
//     });
// });
// toggle()





// Функция для отображения текущего вопроса
// export function kwis(index) {
//   if(document.querySelectorAll(".kwis-conteiner")){
//     questions.forEach((q, i) => {
//       // Показываем только текущий вопрос, остальные скрываем
//       q.style.display = i === index ? "block" : "none";
//     });

//     // Изменяем текст кнопки: "Далее" или "Получить подбор" для последнего вопроса
//     nextBtn.textContent =
//       index === questions.length - 2 ? "ОТПРАВИТЬ" : "ДАЛЕЕ ";
//     nextBtn.textContent =
//       index === questions.length - 1 ? "" : "ДАЛЕЕ ";

//   }

// }

// // Слушатель события для кнопки "Далее"
// nextBtn.addEventListener("click", () => {
//   if (currentQuestion < questions.length - 1) {
//     // Переключаемся на следующий вопрос
//     currentQuestion++;
//     kwis(currentQuestion);
//   } else {
//     // Логика для последнего вопроса (например, отправка данных)
//     console.log("Ваши ответы отправлены!");
//     // Здесь вы можете добавить другую логику, например, отправить данные
//   }
// });

// Изначально отображаем первый вопрос
// kwis(currentQuestion);

answerMain1()
sliderMain1()
sliderMain2()
// sliderMain3()
categoryMain1()
documMain1()
thumbnailMain()
sliderMain4()

if(document.querySelector('#quiz-1')){
  quiz()
}

if(document.querySelectorAll('.drop-down-1')) {
  dropDown1()
}

dropdownMenu()
// delyveryToggle()
catalogBtn()
catalogSlider()
reviewsSlider1()
stageSlider()
Mini()
optionSlide()
writeSlider()
// optionMiniSlider()
designSlider()
designQuestion()
