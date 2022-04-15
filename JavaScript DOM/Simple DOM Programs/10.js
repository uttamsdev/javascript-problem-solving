document.getElementById('submit').addEventListener('click',()=>{
    const number = document.getElementById('number').value;
    const result = document.getElementById('result');
    if(number === ''){
         result.innerText = 'Input filed is empty';
    }
    else if(number >= 50){
        result.innerText = 'You are allowed';
    }

    else if(number < 50){
        result.innerText = 'You are not allowed';
    }
    else{
        result.innerText = '';
    }

})