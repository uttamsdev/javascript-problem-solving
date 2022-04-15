document.getElementById('btn').addEventListener('click',()=>{
    const mark = document.getElementById('mark').value;
    const result = document.getElementById('result');

    if(mark >= 80 && mark <= 100){
        result.innerText = 'A+'
    }
    else if(mark >= 75 && mark <= 79){
        result.innerText = 'A';
    }
    else if(mark >= 70 && mark <= 74){
        result.innerText = 'A-';
    }
    else if(mark >= 65 && mark <= 69){
        result.innerText = 'B+';
    }
    else if(mark >= 60 && mark <= 64){
        result.innerText = 'B-';
    }
    else if(mark >= 55 && mark <= 59){
        result.innerText = 'D';
    }
    else if(mark >= 50 && mark <= 54){
       result.innerText = 'C';
    }
    else if(mark < 40){
        result.innerText = 'F';
    }
    else{
         result.innerText = '';
    }
})