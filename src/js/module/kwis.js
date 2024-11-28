let currentQuestion = 0; // Индекс текущего вопроса
const questions = document.querySelectorAll(".question"); // Выбираем все вопросы
const nextBtn = document.getElementById("kwis-button"); // Кнопка "Далее"

// Функция для отображения текущего вопроса
export function kwis(index) {
  questions.forEach((q, i) => {
    // Показываем только текущий вопрос, остальные скрываем
    q.style.display = i === index ? "block" : "none";
  });

  // Изменяем текст кнопки: "Далее" или "Получить подбор" для последнего вопроса
  nextBtn.textContent =
    index === questions.length - 1 ? "Получить подбор" : "Далее";
}

// Слушатель события для кнопки "Далее"
nextBtn.addEventListener("click", () => {
  if (currentQuestion < questions.length - 1) {
    // Переключаемся на следующий вопрос
    currentQuestion++;
    kwis(currentQuestion);
  } else {
    // Логика для последнего вопроса (например, отправка данных)
    console.log("Ваши ответы отправлены!");
    // Здесь вы можете добавить другую логику, например, отправить данные
  }
});

// Изначально отображаем первый вопрос
kwis(currentQuestion);
