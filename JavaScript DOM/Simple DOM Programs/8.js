for(let i = 1; i <= 200; i++){
    const div = document.getElementById('result');
    if(i % 2 == 0){
        const span = document.createElement('span');
        span.innerText = `${i}   `;
        div.appendChild(span);
    }
}