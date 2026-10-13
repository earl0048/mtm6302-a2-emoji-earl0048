// My list of emoji codes
const emojiCodes = [
    128518, // Laughing Face😆
    128557, // Crying Face😭
    128523, // Face with Tears of Joy😋
    128526, // Smiling Face with Sunglasses😎
    128564, // Sleeping Face😴
    128570, // Grinning Cat😺
    128054, // Dog🐶
    128128, // Skull💀
    128125, // Alien👽
    127809, // Maple Leaf🍁
    128520,  // Smiling Face with Horns😈
    129782  // Hands making a heart 🫶
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