// banking.js

document.getElementById('Deposit-button').addEventListener
('click', function () {
    const inputfeild = document.getElementById('Deposit-input');
    const feild = inputfeild.value;
    
    const depositTotal=document.getElementById('Deposit-total');
    depositTotal.innerText=feild;
    inputfeild.value='';
})