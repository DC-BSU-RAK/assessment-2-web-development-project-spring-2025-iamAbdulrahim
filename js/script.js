document.addEventListener("DOMContentLoaded", () => {
  const select = document.getElementById("game-select");
  const result = document.getElementById("review-result");

  function updateReview(value) {
    let output = "";

    switch (value) {
      case "PUBG":
        output = `
          <h3>PUBG Mobile</h3>
          <p><strong>Rating:</strong> 4.5/5</p>
          <p>Tactical realism and thrilling gameplay. Great weapon selection, competitive matches, and iconic maps like Erangel make PUBG a fan favorite.</p>
        `;
        break;
      case "Fortnite":
        output = `
          <h3>Fortnite</h3>
          <p><strong>Rating:</strong> 4.6/5</p>
          <p>Colorful, fast-paced fun with creative building. Regular events and skins keep players coming back for more.</p>
        `;
        break;
      case "FIFA":
        output = `
          <h3>FIFA 24</h3>
          <p><strong>Rating:</strong> 4.3/5</p>
          <p>Authentic football gameplay with licensed teams, immersive modes like Career and Ultimate Team, and stunning graphics.</p>
        `;
        break;
      case "COD":
        output = `
          <h3>Call of Duty</h3>
          <p><strong>Rating:</strong> 4.4/5</p>
          <p>Fast-paced, cinematic shooting action with a variety of multiplayer and story-driven content. A long-running favorite for FPS fans.</p>
        `;
        break;
    }

    result.innerHTML = output;
  }

  // Show review for initially selected game on page load
  updateReview(select.value);

  // Update review on select change
  select.addEventListener("change", () => {
    updateReview(select.value);
  });
});
