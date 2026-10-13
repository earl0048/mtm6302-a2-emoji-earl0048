// My list of emoji codes
const emojiCodes = [
    128512, // Grinning face
    128514, // Laughing face
    128525, // Heart eyes
    128526, // Sunglasses face
    128640, // Rocket
    127775, // Star
    127881, // Party popper
    128049, // Cat
    128054, // Dog
    127829, // Pizza
    127822, // Green apple
    129409  // Lion
];

// Finding the gallery in the HTML
const gallery = document.querySelector("#emoji-gallery");

// Showing the number of emojis I want
function showEmojis(count = emojiCodes.length) {

    // Clearing the old emojis
    gallery.innerHTML = "";

    // Going through the emoji list
    for (let i = 0; i < count; i++) {

        // Getting the current emoji code
        const emojiCode = emojiCodes[i];

        // Making a new card
        const card = document.createElement("div");
        card.classList.add("emoji-card");

        // Turning the code into an emoji
        const emoji = document.createElement("div");
        emoji.classList.add("emoji");
        emoji.textContent = String.fromCodePoint(emojiCode);

        // Showing the emoji code
        const code = document.createElement("p");
        code.textContent = emojiCode;

        // Putting the emoji and code inside the card
        card.appendChild(emoji);
        card.appendChild(code);

        // Adding the card to the gallery
        gallery.appendChild(card);
    }
}

// Showing all the emojis when the page opens
showEmojis();