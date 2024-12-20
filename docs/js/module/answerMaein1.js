
export function answerMain1(){
    if(document.querySelectorAll('.section7-faq-question')){

        document.querySelectorAll('.section7-faq-question').forEach(button => {
            button.addEventListener('click', () => {
                const answer = button.nextElementSibling;
                const icon = button.querySelector('.toggle-icon');


                document.querySelectorAll('.section7-faq-answer').forEach(otherAnswer => {
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

    }
    // if(document.querySelectorAll('.answer-faq-question')){

    //     document.querySelectorAll('.answer-faq-question').forEach(button => {
    //         button.addEventListener('click', () => {
    //             const answer = button.nextElementSibling;
    //             const icon = button.querySelector('.toggle-icon');


    //             document.querySelectorAll('.answer-faq-question').forEach(otherAnswer => {
    //                 if (otherAnswer !== answer) {
    //                     otherAnswer.style.display = "none";
    //                     const otherIcon = otherAnswer.previousElementSibling.querySelector('.toggle-icon');
    //                     if (otherIcon) otherIcon.textContent = "+";
    //                 }
    //             });

    //             // if (answer.style.display === "block") {
    //             //     answer.style.display = "none";
    //             //     icon.textContent = "+";

    //             // }
    //             // else {
    //             //     answer.style.display = "block";
    //             //     icon.textContent = "−";
    //             // }
    //         });
    //     });
    //     // if (answer.style.display === "block") {
    //     //     answer.style.display = "none";
    //     //     icon.textContent = "+";

    //     // }
    //     // else {
    //     //     answer.style.display = "block";
    //     //     icon.textContent = "−";
    //     // }

    // }
}

