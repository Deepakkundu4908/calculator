document.querySelectorAll('.button').forEach(button => {
    button.addEventListener('click', () => {
        const display = document.getElementById('display');
        const value = button.textContent;
        if (value === 'C') {
            display.value = '';
        } else if (value === '=') {
            try {
                display.value = eval(display.value);    
            } catch {
                display.value = 'Error';
            }
        }
        else {
            display.value += value;
        }
    });
});