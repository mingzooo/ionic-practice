const calculateBtn = document.querySelector('ion-button');
const heightInput = document.getElementById('height-input');
const weightInput = document.getElementById('weight-input');

const calculateBmi = () =>{
    const EnteredHeight = +heightInput.value; //+ : string => number
    const EnteredWeight = +weightInput.value;

    const bmi = EnteredWeight / (EnteredHeight * EnteredHeight);

    console.log(bmi);
};

calculateBtn.addEventListener('click', calculateBmi);