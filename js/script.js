const name = "Kohaku";
const nameContainer = document.getElementById("nameContainer");
let forward = true;
function animateName(index) {
    if (forward) {
        if (index <= name.length) {
            nameContainer.textContent = name.substring(0, index) + "_";
            setTimeout(() => {
                animateName(index + 1);
            }, 200); // Typing speed
        } else {
            forward = false;
            setTimeout(() => {
                animateName(index - 1);
            }, 1000); // Delay before erasing
        }
    } else {
        if (index >= 0) {
            nameContainer.textContent = name.substring(0, index) + "_";
            setTimeout(() => {
                animateName(index - 1);
            }, 100); // Erasing speed
        } else {
            forward = true;
            setTimeout(() => {
                animateName(0);
            }, 1000); // Delay before typing again
        }
    }
}

// Start animation
animateName(0);

const loading = "Loading Assets";
const nameLoading = document.getElementById("Loading");
let maju = true;
function animateName1(index) {
    if (maju) {
        if (index <= name.length) {
            nameLoading.textContent = name.substring(0, index) + "_";
            setTimeout(() => {
                animateName1(index + 1);
            }, 200); // Typing speed
        } else {
            maju = false;
            setTimeout(() => {
                animateName1(index - 1);
            }, 1000); // Delay before erasing
        }
    } else {
        if (index >= 0) {
            nameLoading.textContent = name.substring(0, index) + "_";
            setTimeout(() => {
                animateName1(index - 1);
            }, 100); // Erasing speed
        } else {
            forward = true;
            setTimeout(() => {
                animateName1(0);
            }, 1000); // Delay before typing again
        }
    }
}

// Start animation
animateName1(0);