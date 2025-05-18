document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const game = params.get("game")?.toUpperCase(); // Normalize casing

  const gameTitle = document.getElementById("game-title");
  const gameDetails = document.getElementById("game-details");

  const gameInfo = {
    PUBG: {
      title: "PUBG",
      description: `
        <strong>History:</strong> PlayerUnknown's Battlegrounds, developed by PUBG Corporation and released in 2017, helped pioneer the battle royale genre. It was inspired by mods for ARMA and gained massive popularity for its realistic gunplay and survival mechanics.<br><br>
        <strong>Gameplay Mechanics:</strong> 100 players drop onto an island, scavenge for weapons, and fight to survive. The play area shrinks over time, forcing players into confrontations. It emphasizes tactical movement, realistic shooting, and strategic positioning.
      `,
      embed: `<div class="tenor-gif-embed" data-postid="16186710" data-share-method="host" data-aspect-ratio="1.77778" data-width="100%">
                <a href="https://tenor.com/view/winner-winner-chicken-dinner-pubg-match-finished-gif-16186710">Winner Winner Chicken Dinner Pubg GIF</a> from 
                <a href="https://tenor.com/search/winner+winner+chicken+dinner-gifs">Winner Winner Chicken Dinner GIFs</a>
              </div>`
    },
    FORTNITE: {
      title: "Fortnite",
      description: `
        <strong>History:</strong> Fortnite launched in 2017 by Epic Games and rapidly became a cultural phenomenon. Originally a co-op survival game, the battle royale mode skyrocketed in popularity due to its colorful style and frequent updates.<br><br>
        <strong>Gameplay Mechanics:</strong> Players drop onto an island and gather weapons while building structures for defense or mobility. The last player or team standing wins. Its unique building mechanic and themed events set it apart from other shooters.
      `,
      embed: `<div class="tenor-gif-embed" data-postid="13566591" data-share-method="host" data-aspect-ratio="1.77515" data-width="100%">
                <a href="https://tenor.com/view/landing-space-to-skydive-glider-gliding-fortnite-gif-13566591">Landing Space To Skydive GIF</a> from 
                <a href="https://tenor.com/search/landing-gifs">Landing GIFs</a>
              </div>`
    },
    FIFA: {
      title: "FIFA 24",
      description: `
        <strong>History:</strong> The FIFA series, created by EA Sports, has delivered realistic football simulations since 1993. FIFA 24 continues the tradition with new features, enhanced graphics, and updated team rosters.<br><br>
        <strong>Gameplay Mechanics:</strong> Offers multiple game modes like Career, Ultimate Team, and Pro Clubs. Realistic ball physics, AI behavior, and tactical controls let players experience real-world football action with licensed teams and players.
      `,
      embed: `<div class="tenor-gif-embed" data-postid="16231555" data-share-method="host" data-aspect-ratio="1.77778" data-width="100%">
                <a href="https://tenor.com/view/fifa-game-football-goal-kick-gif-16231555">Fifa Game GIF</a> from 
                <a href="https://tenor.com/search/fifa-gifs">Fifa GIFs</a>
              </div>`
    },
    COD: {
      title: "Call of Duty",
      description: `
        <strong>History:</strong> Call of Duty debuted in 2003 as a WWII shooter and evolved into a multi-era FPS franchise. With subseries like Modern Warfare and Black Ops, it's known for intense campaigns and competitive multiplayer.<br><br>
        <strong>Gameplay Mechanics:</strong> Fast-paced combat with customizable loadouts, killstreaks, and various game modes. Warzone introduced battle royale elements, contracts, and large-scale battles, making it a top-tier FPS experience.
      `,
      embed: `<div class="tenor-gif-embed" data-postid="24091232" data-share-method="host" data-aspect-ratio="1.77778" data-width="100%">
                <a href="https://tenor.com/view/firing-gun-call-of-duty-pacific-gameplay-aim-and-shoot-shooting-gif-24091232">Firing Gun Call Of Duty GIF</a> from 
                <a href="https://tenor.com/search/firing+gun-gifs">Firing Gun GIFs</a>
              </div>`
    }
  };

  if (game && gameInfo[game]) {
    const info = gameInfo[game];
    gameTitle.textContent = info.title;
    gameDetails.innerHTML = `
      ${info.embed}
      <p>${info.description}</p>
    `;

    const script = document.createElement("script");
    script.src = "https://tenor.com/embed.js";
    script.async = true;
    document.body.appendChild(script);
  } else {
    gameTitle.textContent = "Game Not Found";
    gameDetails.innerHTML = "<p>The selected game could not be found.</p>";
  }
});
