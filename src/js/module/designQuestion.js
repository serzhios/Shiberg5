
export function designQuestion(){
    if(document.querySelectorAll('.design-question-faq-question')){

        document.querySelectorAll('.design-question-faq-question').forEach(button => {
            button.addEventListener('click', () => {
                const answer = button.nextElementSibling;
                const icon = button.querySelector('.toggle-icon');


                document.querySelectorAll('.design-question-faq-answer').forEach(otherAnswer => {
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