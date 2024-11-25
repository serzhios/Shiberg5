export function thumbnailMain(){
    if(document.querySelectorAll('.section9__right-video-thumbnails')){

        const thumbnails = document.querySelectorAll('.section9-trumbnails');
        const mainVideo = document.getElementById('main-video');

        thumbnails.forEach(thumbnail => {
            thumbnail.addEventListener('click', function () {
                // Убираем активный класс со всех миниатюр
                thumbnails.forEach(t => t.classList.remove('active'));

                // Добавляем активный класс на текущую миниатюру
                this.classList.add('active');

                // Получаем ID видео
                const videoId = this.getAttribute('data-video-id');

                // Меняем источник видео
                mainVideo.src = `https://www.youtube.com/embed/${videoId}`;
            });
        });
}
}
