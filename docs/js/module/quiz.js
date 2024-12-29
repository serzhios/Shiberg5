export function quiz() {
  const quizContainer = document.querySelector(".main-quiz__box-questions");
  const formContainer = document.querySelector(".main-quiz__sending");
  const quizLeft = document.querySelector(".main-quiz__left");
  const questions = document.querySelectorAll(".quiz-question");
  const nextButton = document.querySelector(".quiz-btn");
  const counterCurrent = document.querySelector(".quiz-counter span:first-child");
  const counterTotal = document.querySelector(".quiz-counter span:last-child");
  let currentQuestionIndex = 0;

  // Функция форматирования числа в двузначный формат
  const formatNumber = (number) => String(number).padStart(2, "0");

  // Устанавливаем общее количество вопросов в счетчике
  counterTotal.textContent = formatNumber(questions.length);

  // Функция обновления счетчика
  const updateCounter = () => {
    counterCurrent.textContent = formatNumber(currentQuestionIndex + 1);
  };

  // Функция проверки наличия выбранного инпута
  const checkInputs = () => {
    const activeQuestion = questions[currentQuestionIndex];
    const inputs = activeQuestion.querySelectorAll("input");
    const isAnyChecked = Array.from(inputs).some(input => input.checked);
    nextButton.classList.toggle("disabled", !isAnyChecked);
  };

  // Обновление текста кнопки на последнем вопросе
  const updateButtonText = () => {
    const isLastQuestion = currentQuestionIndex === questions.length - 1;
    const buttonText = nextButton.querySelector("span");
    buttonText.textContent = isLastQuestion ? "ОТПРАВИТЬ" : "ДАЛЕЕ";
  };

  // Обработчик нажатия на кнопку
  const handleNextButtonClick = () => {
    if (nextButton.classList.contains("disabled")) return;

    const activeQuestion = questions[currentQuestionIndex];
    activeQuestion.classList.remove("active");

    if (currentQuestionIndex < questions.length - 1) {
      // Переход к следующему вопросу
      currentQuestionIndex++;
      const nextQuestion = questions[currentQuestionIndex];
      nextQuestion.classList.add("active");
      updateButtonText();
    } else {
      // Переход к форме отправки
      quizContainer.style.display = "none";
      formContainer.classList.add("active");
    }

    if (currentQuestionIndex === 1) {
      quizLeft.style.display = "none";
    }

    updateCounter(); // Обновить текущий вопрос в счетчике
    checkInputs(); // Проверить состояние инпутов для нового вопроса
  };

  // Инициализация
  questions[currentQuestionIndex].classList.add("active");
  updateCounter();
  checkInputs();
  updateButtonText();

  // Добавление событий
  nextButton.addEventListener("click", (event) => {
    event.preventDefault();
    handleNextButtonClick();
  });

  questions.forEach((question, index) => {
    const inputs = question.querySelectorAll("input");
    inputs.forEach(input => {
      input.addEventListener("change", () => {
        if (index === currentQuestionIndex) {
          checkInputs();
        }
      });
    });
  });
}
