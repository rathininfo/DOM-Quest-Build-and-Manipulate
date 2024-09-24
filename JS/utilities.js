function showSectionById(id){
    document.getElementById('allCards').classList.add('hidden');
    document.getElementById('history-section').classList.add('hidden');
    document.getElementById(id).classList.remove('hidden');

}

document.getElementById('history-btn').addEventListener('click', function(){
    const historyBtn = showSectionById('history-section');
    historyBtn.classList.add('bg-buttonColor');
})

document.getElementById('donation-btn').addEventListener('click', function(){
    showSectionById('allCards')
})

document.querySelectorAll('.btn-color-change').forEach(button => {
    button.addEventListener('click', function() {
        // Remove 'bg-buttonColor' from all buttons
        document.querySelectorAll('.btn-color-change').forEach(btn => {
            btn.classList.remove('bg-buttonColor');
        });
        
        // Add 'bg-buttonColor' to the clicked button
        this.classList.add('bg-buttonColor');
    });
});

function GoToHomePage()
{
  window.location = 'index.html';   
}

function goToBlog()
{
  window.location = 'blog.html';   
}

