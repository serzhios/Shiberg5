export function dealersQuestion(){
    if(document.querySelectorAll('.dealers-question-faq-question')){

        document.querySelectorAll('.dealers-question-faq-question').forEach(button => {
            button.addEventListener('click', () => {
                const answer = button.nextElementSibling;
                const icon = button.querySelector('.toggle-icon');


                document.querySelectorAll('.dealers5r academy-video__block-question-faq-answer').forEach(otherAnswer => {
                    if (otherAnswer !== answer) {
                        otherAnswer.style.display = "none";
                        const otherIcon = otherAnswer.previousElementSibling.querySelector('.toggle-icon');
                        if (otherIcon) otherIcon.textContent = "+";
                    }
                });
                if (answer.style.display === "block") {
                    answer.style.display = "none";
                    icon.textContent = "+";
                } else {
                    answer.style.display = "block";
                    icon.textContent = "−";
                }
            });
        });

    }}