let num = window.prompt('number of input: ');
            const array = [];
            for (let i = 0; i < num; i++) {
                const input = window.prompt('Enter index ' + i + ' value');
                array.push(input);
            }

            array.sort((a, b) => b - a);
            document.getElementById('result').innerText = ` Array sort in descending order: {${array}} `;