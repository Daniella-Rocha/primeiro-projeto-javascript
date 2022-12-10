import initModal from './modules/modal.js'

let btnSubmit = document.querySelector('#btn-submit');
let btnClear = document.querySelector('#btn-clear')
const weightInput = document.querySelector('#peso');
const heightInput = document.querySelector('#altura');
const divResult = document.querySelector('.div-result');



function calculator(weight, height) {
    const imc = (weight / (height * height)).toFixed(1);
    showResult(imc)
    return imc
}


const showResult = (imc) => {
    divResult.classList.toggle('.soft')
    document.querySelector('.imcUser')?.remove();
    divResult.style.display = 'flex';
    const yourResult = document.createElement('p');
    yourResult.classList.add('imcUser');
    divResult.appendChild(yourResult);


    const newImcFormat = imc.replace('.', ',');
    const mensagem = `Se imc é: `

    if (imc < 20) {
        yourResult.innerText = `${mensagem} ${newImcFormat}.\n Você está abaixo do peso!`
        return;

    } if (imc > 20 && imc <= 25) {
        yourResult.innerText = `${mensagem} ${newImcFormat}.\n Você está no Peso Ideal!`
        return;

    } if (imc > 25 && imc <= 30) {
        yourResult.innerText = `${mensagem} ${newImcFormat}.\n Você está acima do seu peso ideal.`
        imcUser.style.color = '#ed0707'
        return;

    } if (imc > 30 && imc <= 40) {
        yourResult.innerText = `${mensagem} ${newImcFormat}.\n Você está muito acima do seu peso ideal.`
        return;

    }

    yourResult.innerText = `${mensagem} ${newImcFormat}.`

}

function claerInputs() {
    weightInput.value = '';
    heightInput.value = '';
}

btnSubmit.addEventListener('click', (e) => {
    e.preventDefault()
    const weight = +weightInput.value.replace(',', '.');
    const height = +heightInput.value.replace(',', '.');
    calculator(weight, height);

});

btnClear.addEventListener('click', (e) => {
    e.target.preventDefault()
    claerInputs();
})




initModal();


