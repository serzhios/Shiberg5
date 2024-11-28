
export function dropdownMenu(){
    if(document.querySelectorAll('.dropdown-section ')){
        const logo = document.querySelector('.logo-img');
        let isLogoBig = false;
        document.getElementById('menuButton').addEventListener('click', function() {
            const menu = document.getElementById('menu');

            // const
            if (menu.classList.contains('hidden') && !isLogoBig) {
                logo.style.width = '203px';
                logo.style.height ='36px';
                // logo.style.marginRight= "20px"
                // logo.style.margin = '10px 20px 30px 40px';
                isLogoBig = true;
                menu.classList.remove('hidden');
            } else {
                logo.style.width = '107px';
                logo.style.height ='19px';
                isLogoBig = false;
                menu.classList.add('hidden');
            }
        });
}
}