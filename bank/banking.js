// banking.js

document.getElementById('Deposit-button').addEventListener
('click', function () {
    const inputfeild = document.getElementById('Deposit-input');
    const feild = inputfeild.value;
    
    const PreviousTotal=document.getElementById('Deposit-total');
    const currentAmount=PreviousTotal.innerText;
    const newamount=parseFloat(currentAmount)+parseFloat(feild);
    PreviousTotal.innerText=newamount;

    const BalancedTotal=document.getElementById('Balace-Total');

    const PreBtotal=BalancedTotal.innerText;
    const finalTotal= parseFloat(PreBtotal)+parseFloat(feild)
    BalancedTotal.innerText=finalTotal;

    
    
    inputfeild.value='';
});


document.getElementById('Withdraw-button').addEventListener('click', function () {
    const WithdraeInput=document.getElementById('withdraw-input');
    const Withdrawevalue= parseFloat(WithdraeInput.value);
    
    const withdtraweTotal=document.getElementById('Withdrawe-Total');
    const currenWithdrawe= parseFloat( withdtraweTotal.innerText);

    const TotalWithdraw= Withdrawevalue+currenWithdrawe;
    withdtraweTotal.innerText=TotalWithdraw;
    WithdraeInput.value='';

   const BalaceTotal=document.getElementById('Balace-Total');
   const CurrenBalace= parseFloat(BalaceTotal.innerText);
   const CurrentTotalBalance= CurrenBalace-Withdrawevalue;
   BalaceTotal.innerText=CurrentTotalBalance;

    
} )



