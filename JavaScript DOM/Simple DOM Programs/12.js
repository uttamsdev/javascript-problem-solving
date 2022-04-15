let num = 49;
            const div = document.getElementById('result');
            while(num >= 1){
                const span = document.createElement('span');
                span.innerText = `${num}  `;
                div.appendChild(span);
                num = num - 1;
            }