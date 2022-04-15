const sum = (num1, num2) => {
    const result = parseFloat(num1) + parseFloat(num2);
    return result;
}
const subtraction = (num1, num2) => {
    const result = parseFloat(num1) - parseFloat(num2);
    return result;
}
const multiplication = (num1, num2) => {
    const result = parseFloat(num1) * parseFloat(num2);
    return result;
}
const division = (num1, num2) => {
    const result = parseFloat(num1) / parseFloat(num2);
    return result.toFixed(3);
}
document.getElementById('btn').addEventListener('click',()=>{
    const operation = document.getElementById('select-operation').value;
    const num1 = document.getElementById('num1').value;
    const num2 = document.getElementById('num2').value;
    

    if(num1 === '' || num2 === ''){
        alert('Input field cannot be empty...');
        return;
    }
    if(operation === 'Sum'){
        const result = sum(num1,num2);
        document.getElementById('result').innerText = 'Sum of these two number = '+ result;
    }
    else if( operation === 'Subtraction'){
         const result = subtraction(num1, num2);
        document.getElementById('result').innerText = 'Subtraction of these two number = '+ result;
    }
    else if( operation === 'Multiplication'){
         const result = multiplication(num1, num2);
        document.getElementById('result').innerText = 'Multiplication of these two number= '+ result;
    }
    else if( operation === 'Division'){
         const result = division(num1, num2);
        document.getElementById('result').innerText = 'Division of this two number = '+ result;
    }
})