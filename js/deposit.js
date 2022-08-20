document.getElementById('btn-deposit').addEventListener('click', function(){
    const depositField = document.getElementById('deposit-field');
    const newDepositAmount = parseFloat(depositField.value) ;
    const depositTotalElement = document.getElementById('deposit-total');
    const previousDepositTotal = parseFloat(depositTotalElement.innerText);
    depositTotalElement.innerText = previousDepositTotal + newDepositAmount;

    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotal = parseFloat(balanceTotalElement.innerText);
     balanceTotalElement.innerText = newDepositAmount + previousBalanceTotal;

    depositField.value = '';

})