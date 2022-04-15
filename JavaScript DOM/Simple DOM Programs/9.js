document.getElementById('btn').addEventListener('click',()=>{
    const age = document.getElementById('age').value;
    if(age < 18){
        alert('Age must be grater than or equal to 18')
    }
})