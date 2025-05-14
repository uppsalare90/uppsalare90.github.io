let playerList = [];
const playerPdgaId = ["75216", "77535", "77547", "85229", "92342", "98755", "99121", "106897", "107746", "107764", "183456", "200855","259085", "289988","292238"];

window.onload = async () => {
  for (const id of playerPdgaId) {
    await fetchAndAddPlayer(id);
  }
  renderPlayerList();
};

async function fetchAndAddPlayer(playerId) {
  console.log(playerList.length);
  const proxyUrl = 'https://api.allorigins.win/get?url=';
  const targetUrl = `https://www.pdga.com/player/${playerId}`;

  try {
    const response = await fetch(proxyUrl + encodeURIComponent(targetUrl));
    const data = await response.json();

    const parser = new DOMParser();
    const doc = parser.parseFromString(data.contents, 'text/html');

    const nameElement = doc.querySelector('h1.page-title, h1.title');
    const ratingElement = doc.querySelector('li.current-rating');

    const name = nameElement?.textContent.trim().replace(/\s+/g, ' ');
    
    const ratingText = ratingElement?.textContent.trim();
    const cleanWords = ratingText?.split(" ");
    const rating = parseInt(cleanWords?.[2], 10);
    

  let upOrDown = '<span style="color: gray;">➖</span>';
  const changeRaw = cleanWords?.[3];
  const change = parseInt(changeRaw, 10);

  if (!isNaN(change)) {
    if (change > 0) {
      upOrDown = `<span style="color: green;">⬆️ +${change}</span>`;
    } else if (change < 0) {
      upOrDown = `<span style="color: red;">⬇️ ${change}</span>`;
    } else {
      upOrDown = '➖ 0';
    }
  } else {
    upOrDown = '❔'; 
  }
    
    if (name && ratingText && !isNaN(rating)) {
      const exists = playerList.find(player => player.name === name);
      if (!exists) {
        console.log("New player: " + name);
        playerList.push({ name, rating, upOrDown, id: playerId });
        playerList.sort((a, b) => b.rating - a.rating);
      }
    }
  } catch (error) {
    console.error(`Error fetching player ${playerId}:`, error);
  }
}

function renderPlayerList() {
  const listDiv = document.getElementById('playerList');

  if (playerList.length === 0) {
    listDiv.innerHTML = '<p style="color: red; font-weight: bold;">⚠️ Failed to fetch player data from PDGA. Please try again later.</p>';
    return;
  }

  playerList.sort((a, b) => b.rating - a.rating);

  let tableHTML = `
    <table>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Rating</th>
          <th>Up/Down</th>
        </tr>
      </thead>
      <tbody>
        ${playerList.map((player, index) => `
          <tr>
            <td>${index + 1}</td>
            <td><a href="https://www.pdga.com/player/${player.id}" target="_blank" style="color: #004080; text-decoration: none;">${player.name}</a></td>
            <td>${player.rating}</td>
            <td>${player.upOrDown}</td>
          </tr>
        `).join('')}
      </tbody>
    </table>
  `;
  listDiv.innerHTML = tableHTML;
}
