
export function answerMain1(){
    if(document.querySelectorAll('.section7-faq-question')){

        document.querySelectorAll('.section7-faq-question').forEach(button => {
            button.addEventListener('click', () => {
                const answer = button.nextElementSibling;
                const icon = button.querySelector('.toggle-icon');

                if (answer.style.display === "block") {
                    answer.style.display = "none";
                    icon.textContent = "+";
                } else {
                    answer.style.display = "block";
                    icon.textContent = "−";
                }
            });
        });

    }
    if(document.querySelectorAll('.answer-faq-question')){

        document.querySelectorAll('.answer-faq-question').forEach(button => {
            button.addEventListener('click', () => {
                const answer = button.nextElementSibling;
                const icon = button.querySelector('.toggle-icon');

                if (answer.style.display === "block") {
                    answer.style.display = "none";
                    icon.textContent = "+";
                } else {
                    answer.style.display = "block";
                    icon.textContent = "−";
                }
            });
        });

    }
}

