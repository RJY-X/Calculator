const input = document.getElementById('inputBox');
const buttons = document.querySelectorAll('button');

let string = "";

buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        const buttonText = e.target.innerHTML;

        if (buttonText === '=') {
            try {
                if (string.includes("/0")) {
                    input.value = "Error: Division by zero";
                    string = "";
                } else {
                    string = eval(string);
                    input.value = string;
                }
            } catch (error) {
                input.value = "Error";
                string = "";
            }
        } else if (buttonText === 'AC') {
            string = "";
            input.value = string;
        } else if (buttonText === 'DEL') {
            string = string.substring(0, string.length - 1);
            input.value = string;
        } else {
            string += buttonText;
            input.value = string;
        }
    });
});