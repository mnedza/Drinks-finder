const input = document.querySelector('input'); 
const liList = document.querySelectorAll('li');

const showDrink = () => {
    liList.forEach(drink => {
        if(drink.textContent.toLowerCase().indexOf(input.value.toLowerCase()) !== -1 ) {
            drink.style.display = 'block';
        } else {
            drink.style.display = 'none';
        }
    });
};

input.addEventListener('keyup', showDrink);