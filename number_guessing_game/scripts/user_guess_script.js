const correctNumber = Math.floor(Math.random() * 100) + 1;
document.getElementById('user-input').value = null;
console.log(correctNumber);
let attempts = 0;

document.getElementById('user-guess-button').addEventListener('click', function() {
    const userInput = document.getElementById('user-input').value;
    
    if (userInput > 100 || userInput < 1) {
        alert('Enter a number between 1 and 100!');
    } else {
        attempts++;

        document.getElementById('result').style.display = 'block';
        
        if (userInput == correctNumber) {
            document.getElementById('result').innerHTML = `Congratulations! You guessed the correct number in ${attempts} attempts.`;
        } else if (userInput < correctNumber) {
            document.getElementById('result').innerHTML = 'Too low! Try again.';
        } else {
            document.getElementById('result').innerHTML = 'Too high! Try again.';
        }
    }
   
})