document.getElementById('blog-btn').addEventListener('click',function(event){
    window.location.href = "http://127.0.0.1:5500/about.html"
})

const historyBtn = getElementById('history-btn');
const donationBtn = getElementById('donation-btn');
const cardContainer = getElementById('card-container');
const historySection = getElementById('history-section');


historyBtn.addEventListener('click',function(event){
    historyBtn.style.backgroundColor = "#B4F461"
    donationBtn.style.backgroundColor ="white"
    donationBtn.style.color = "black"
    donationBtn.style.border = "1px solid gray"
    cardContainer.classList.add('hidden');
    historySection.classList.remove('hidden')
})


donationBtn.addEventListener('click',function(){
    donationBtn.style.backgroundColor = "#B4F461"
    historyBtn.style.backgroundColor = "white"
    historyBtn.style.color = "black"
    historyBtn.style.border = "1px solid gray"
    cardContainer.classList.remove('hidden')
    historySection.classList.add('hidden')
})

function getElementById (id){
   return document.getElementById(id)
}