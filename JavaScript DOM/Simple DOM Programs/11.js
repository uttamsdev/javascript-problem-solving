document.getElementById('btn').addEventListener('click',()=>{
    document.getElementById('result').innerHTML = '';
    const num1 = document.getElementById('num1').value;
    const num2 = document.getElementById('num2').value;
    const num1Value = parseInt(num1);
    const num2Value = parseInt(num2);

    if(num1Value > num2Value) {
        alert('Please give first number small and second number large');
        return;
    }
    const div = document.getElementById('result');
    for(let i = num1Value; i <= num2Value; i++){
        const span = document.createElement('span');
        span.innerText = `${i}  `;
        div.appendChild(span);
    }
})