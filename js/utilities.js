document.getElementById('blog-btn').addEventListener('click', function (event) {
    window.location.href = "http://127.0.0.1:5500/about.html"
})

const historyBtn = getElementById('history-btn');
const donationBtn = getElementById('donation-btn');
const cardContainer = getElementById('card-container');
const historySection = getElementById('history-section');



historyBtn.addEventListener('click', function (event) {
    historyBtn.style.backgroundColor = "#B4F461"
    donationBtn.style.backgroundColor = "white"
    donationBtn.style.color = "black"
    donationBtn.style.border = "1px solid gray"
    cardContainer.classList.add('hidden');
    historySection.classList.remove('hidden')
})


donationBtn.addEventListener('click', function () {
    donationBtn.style.backgroundColor = "#B4F461"
    historyBtn.style.backgroundColor = "white"
    historyBtn.style.color = "black"
    historyBtn.style.border = "1px solid gray"
    cardContainer.classList.remove('hidden')
    historySection.classList.add('hidden')
})

const donateBtn = document.getElementsByClassName('donate-btn');

for (const btn of donateBtn) {
    btn.addEventListener('click', function (event) {
        let donateAmount = event.target.parentNode.children[3].value;
        const title = event.target.parentNode.children[1].innerText;
        const targetBalance = getElementById('target-balance').innerText;
        const converTargetBalance = parseInt(targetBalance);

        if (isNaN(donateAmount) || donateAmount === "" || donateAmount > converTargetBalance) {
            return alert('Please Enter Valid Number')
        }
        else {
            const converDonateAmount = parseInt(donateAmount);
            const totalAmount = event.target.parentNode.children[0].children[1].innerText;
            const converTotalAmount = parseInt(totalAmount)
            const subTotal = converDonateAmount + converTotalAmount;
            const lastTotal = event.target.parentNode.children[0].children[1].innerText = subTotal;
            let input = event.target.parentNode.children[3];
            input.value = '';
            alert(`${converDonateAmount} tk donate successfully total balance  ${subTotal} tk`)

            const remainingBalance = converTargetBalance - converDonateAmount;
            console.log(remainingBalance)
            document.getElementById('target-balance').innerText = remainingBalance;


            // history sectioin
            const historyContent = getElementById('history-content')
            const time = new Date()

            const div = document.createElement('div')
            div.style.border = "1px solid gray"
            div.style.marginBottom = "15px"
            div.style.borderRadius = "10px";
            div.style.padding = "10px";
            
            const p = document.createElement("p")
            p.style.fontSize = "20px"
            p.style.fontFamily="bold"
            const p2 = document.createElement('p')
            p.innerText = `${converDonateAmount} tk donate by  ${title} total balance ${subTotal}`;
            p2.innerText = time;
            div.appendChild(p)
            div.appendChild(p2)

            historyContent.appendChild(div)


        }

    })
}






function getElementById(id) {
    return document.getElementById(id)
}