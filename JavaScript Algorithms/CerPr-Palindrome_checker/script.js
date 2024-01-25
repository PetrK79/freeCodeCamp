const textIn = document.getElementById('text-input');
const checkBtn = document.getElementById('check-btn');
const result = document.getElementById('result');

const checkPalindrome = input => {
    const originalInput = input;

    if (input === '') {
        alert("Please input a value");
        return;
    }
   

    const lowerCaseInput = input.replace(/[^A-Za-z0-9]/gi, '').toLowerCase();
    console.log(lowerCaseInput);
    const revereseInput = [...lowerCaseInput].reverse().join('');
    console.log(revereseInput);
     
    if (lowerCaseInput === revereseInput) {
        result.innerHTML = `<strong>${originalInput}</strong> is a palindrome`;
    }
    else {
        result.innerHTML = `<strong>${originalInput}</strong> is not a palindrome`;
    }

};

checkBtn.addEventListener('click', () => {
    result.innerHTML = ``;
    checkPalindrome(textIn.value);
    textIn.value = '';
  });
