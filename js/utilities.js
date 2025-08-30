document.getElementById('blog-btn').addEventListener('click',function(event){
    window.location.href = "http://127.0.0.1:5500/about.html"
})

const historyBtn = getElementById('history-btn');
const donationBtn = getElementById('donation-btn');
const cardContainer = getElementById('card-container');
const historySection = getElementById('history-section');


historyBtn.addEventListener('click',function(){
    console.log('hello history')
    cardContainer.classList.add('hidden');
    historySection.classList.remove('hidden')
})


// donationBtn.addEventListener('click',function(){
//     cardContainer.classList.remove('hidden')
//     historySection.classList.add('hidden')
// })

function getElementById (id){
   return document.getElementById(id)
}