document.getElementById('input').addEventListener('keyup',()=>{
    const input = document.getElementById('input').value;
    const result = document.getElementById('result');
    const inputValue = input.toLowerCase();
    if (inputValue === 'brilliant') {
        result.innerText = 'The Student is more active and sincere.';
    }
    else if(inputValue === 'better'){
        result.innerText = 'The Student is trying to join extra curricular activities.';
    }
    else if(inputValue === 'good'){
        result.innerText = 'The Student is learning about extra curricular activities';
    }
    else if(inputValue === 'nothing'){
        result.innerText = 'The Student is not joining any extra curricular activities Yet';
    }
    else{
        result.innerText = '';
    }
})