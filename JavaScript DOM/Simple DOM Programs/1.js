const addTwo = (num1, num2) => {
    const sum = parseFloat(num1) + parseFloat(num2);
    return sum;

}
document.getElementById('sum').addEventListener('click', () => {
    const num1 = document.getElementById('num1').value;
    const num2 = document.getElementById('num2').value;
    const result = addTwo(num1, num2);
    if(result){
        document.getElementById('result').innerText = 'Sum of two number is: ' + result.toFixed(3);
    }
})