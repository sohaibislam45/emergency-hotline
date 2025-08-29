const heartCountEl = document.getElementById("heart-count");

let heartCount = 0;

// select all heart icons inside cards
const heartIcons = document.getElementsByClassName("card-heart");

// loop through each heart icon
for (let icon of heartIcons) {
    icon.addEventListener("click", function () {
        // toggle active state
        if (this.classList.contains("fa-solid")) {
            this.classList.remove("fa-solid");
            this.classList.add("fa-regular");
            heartCount--;
        } else {
            this.classList.remove("fa-regular");
            this.classList.add("fa-solid");
            heartCount++;
        }
        heartCountEl.innerText = heartCount;
    });
}

// coin management feature
const coinCountEl = document.getElementById("coin-count");
let coins = 100;
coinCountEl.innerText = coins;

// call buttons feature
const callButtons = document.getElementsByClassName("card-call");

for (let callBtn of callButtons) {
    callBtn.addEventListener("click", function () {
        const card = this.closest(".card");
        const serviceName = card.getElementsByClassName("service-name")[0].innerText;
        const serviceNumber = card.getElementsByClassName("service-number")[0].innerText;

        if (coins < 20) {
            alert("Not enough coins to make a call!");
            return;
        }

        coins -= 20;
        coinCountEl.innerText = coins;

        alert("📞... Calling " + serviceName + " (" + serviceNumber + ")");

        const historyContainer = document.getElementById("call-history");
        const now = new Date();
        const hours = now.getHours();
        const minutes = now.getMinutes().toString().padStart(2, '0');
        const seconds = now.getSeconds().toString().padStart(2, '0');
        const ampm = hours >= 12 ? 'PM' : 'AM';
        const formattedHours = hours % 12 || 12;
        const timeStr = formattedHours + ":" + minutes + ":" + seconds + " " + ampm;

        const div = document.createElement("div");
        div.className = "flex justify-between items-center bg-[#fafafa] p-3 mt-2 rounded-lg";

        div.innerHTML = `
            <div>
                <h1 class="text-lg font-bold max-w-[215px]">${serviceName}</h1>
                <p class="text-lg text-[#5c5c5c]">${serviceNumber}</p>
            </div>
            <p>${timeStr}</p>
        `;

        historyContainer.prepend(div);
    });
}


// clear history funtionality
const clearHistoryBtn = document.getElementById("clear-history");
const callHistoryList = document.getElementById("call-history");

clearHistoryBtn.addEventListener("click", function () {
    callHistoryList.innerHTML = ""; 
    alert("Call history cleared!");
});



// copy button functionality

let copyCount = 0;
const copyButtons = document.getElementsByClassName("btn");

const copyCountSpan = document.getElementById("copy-count");

for (let copyBtn of copyButtons) {
    copyBtn.addEventListener("click", function () {
        if (this.innerText.includes("Copy")) {
            const card = this.closest(".card");
            const serviceName = card.getElementsByClassName("service-name")[0].innerText;
            const serviceNumber = card.getElementsByClassName("service-number")[0].innerText;

            // copy to clipboard
            navigator.clipboard.writeText(serviceNumber);

            copyCount++;
            copyCountSpan.innerText = copyCount;
            alert("Copied " + serviceName + " (" + serviceNumber + ") to clipboard!");
        }
    });
}
