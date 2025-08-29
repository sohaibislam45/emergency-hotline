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
