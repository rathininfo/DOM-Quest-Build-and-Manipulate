function handleDonation(event){
    const balance = document.getElementById('donation-account-Balance');
    const card = event.target.closest('.donate-card');
    const cardId = card.getAttribute('data-card-id');
    const donationInput = card.querySelector('.donation-input');

    const currentDonationAmount = card.querySelector('.current-donation'); // Use querySelector
    let currentDonation = parseFloat(currentDonationAmount.innerText) || 0; // Handle NaN

    const donationBalance  = balance.innerText;
    const donationAmount = donationInput.value;
   
    if (isNaN(donationAmount)) {
        alert('Invalid Donation Amount');
        return;
    }

    if (donationAmount === '') {
        alert('Input field is empty');
        return;
    }

    else if(donationAmount <= 0){
        alert('Please enter a positive number.');
        return;
    }
   
    let mainBalance = parseFloat(donationBalance);
    let totalDonate = parseFloat(donationAmount);

    if(mainBalance < totalDonate){
        alert('You have not enough money to donate');
        return;
    }

    // donation amount will decrease 
    const totalAccountBalanced = mainBalance - totalDonate;
    document.getElementById('donation-account-Balance').innerText = totalAccountBalanced ;
    // donation amount will increase 
const totalDonatedAmount = currentDonation + totalDonate;
currentDonationAmount.innerText = totalDonatedAmount;
    

     // Function to open the modal
    const modal = document.getElementById('my_modal_1');
    modal.showModal(); // Open the modal

}

document.querySelectorAll('.donate-button').forEach(button => {
    button.addEventListener('click', handleDonation);
});

