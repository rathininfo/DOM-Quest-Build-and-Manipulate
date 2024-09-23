document.getElementById('donate-btn').addEventListener('click', function(){
    const donatedMoney = getDonateAmountValue('input-donate-money');

    if (isNaN(donatedMoney)) {
        alert('Please enter a valid number.');
        return;
    }

    if (donatedMoney === '') {
        alert('Input cannot be empty.');
        return;
    }


    else if(donatedMoney <= 0){
        alert('Please enter a positive number.');
        return;
    }
   
    const accountBalance = getTotalDonateAmount('donation-account-Balance');
    let mainBalance = parseFloat(accountBalance);
    let totalDonate = parseFloat(donatedMoney);

    if(mainBalance < totalDonate){
        alert('You have not enough money to donate');
        return;
    }
    
    const totalAccountBalanced = mainBalance - totalDonate;
    document.getElementById('donation-account-Balance').innerText = totalAccountBalanced ;
    const showDonatedMoney = getTotalDonateAmount('total-donated-amount');
    const totalDonatedAmount = totalDonate + parseFloat(showDonatedMoney);
    document.getElementById('total-donated-amount').innerText = totalDonatedAmount ;  

})