window.onload = function() {
    const noBtn = document.getElementById("noBtn");
    const card = document.querySelector(".card");
    const floatContainer = document.getElementById("float-container");

    // No button moves randomly
    function randomMove() {
      const maxX = card.clientWidth - noBtn.offsetWidth;
      const maxY = card.clientHeight - noBtn.offsetHeight;

      const x = Math.random() * maxX;
      const y = Math.random() * maxY;

      noBtn.style.left = x + "px";
      noBtn.style.top = y + "px";
    }
    setInterval(randomMove, 700);

    // Floating hearts & flowers
    const emojis = ["❤️", "💖", "💘", "🌸", "🌹", "🌷", "💐"];
    function createFloatItem() {
      const item = document.createElement("div");
      item.classList.add("float-item");
      item.innerHTML = emojis[Math.floor(Math.random() * emojis.length)];

      // Full screen width
      item.style.left = Math.random() * window.innerWidth + "px";
      item.style.fontSize = Math.random() * 18 + 18 + "px";
      item.style.animationDuration = Math.random() * 4 + 6 + "s";

      floatContainer.appendChild(item);

      setTimeout(() => item.remove(), 10000);
    }
    setInterval(createFloatItem, 240);

    // YES click
    window.yesClick = function() {
      document.body.innerHTML = `
      <div style="
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:center;
        height:80vh;
        background:linear-gradient(135deg,#ff416c,#ff4b2b);
        color:white;
        text-align:center;
        padding:20px;
      ">
        <h1>💖 Yayyy Ishika !! I knew it 😍💖</h1>
        <img 
          src="https://media.giphy.com/media/3oriO0OEd9QIDdllqo/giphy.gif"
          style="width:260px; margin-top:20px; border-radius:22px;"
        >
        <p style="font-size:20px; margin-top:15px;">🌹 I love you baby !! 🌹</p>
      </div>
      `;
    }
}
