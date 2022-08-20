document.getElementById('btn-withdraw').addEventListener('click',function(){
    const withdrawField = document.getElementById('withdraw-field');
    const newWithDrawAmount = parseFloat(withdrawField.value);
    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawTotal = parseFloat(withdrawTotalElement.innerText);

    
    
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotal = parseFloat(balanceTotalElement.innerText);
    if(newWithDrawAmount> previousBalanceTotal){
        alert('Baap Er Bank E Ato Tk Nai');
        return;
    }
    withdrawTotalElement.innerText = previousWithdrawTotal + newWithDrawAmount;
     balanceTotalElement.innerText = previousBalanceTotal - newWithDrawAmount;

    withdrawField.value = '';
})