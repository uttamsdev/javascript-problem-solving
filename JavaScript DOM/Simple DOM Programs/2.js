document.getElementById('num').addEventListener('keyup', () => {
    const value = document.getElementById('num').value;
    if (value <= 0) {
        document.location.reload(true);
    }
    const result = document.getElementById('inputs');
    for (let i = 1; i <= value; i++) {
        const input = document.createElement('input');
        input.setAttribute('class', 'input-field');
        result.appendChild(input);
    }
})

const array = [];
document.getElementById('max-min').addEventListener('click', () => {
    const value = document.getElementById('num').value;
    for (let i = 0; i < value; i++) {
        const result = document.getElementsByClassName('input-field')[i].value;
        array.push(parseInt(result));

    }
    const maxNumber = Math.max(...array);
    const minNumber = Math.min(...array);

    document.getElementById('result').innerHTML = `Maximum number is: ${maxNumber}  <br>   Minimum number is: ${minNumber}`;
})