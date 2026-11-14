const playerNBMListMpo = new Map();
const playerNBMListFpo = new Map();
const countryNames = {
  DK: "Denmark",
  EE: "Estonia",
  FI: "Finland",
  IS: "Iceland",
  LV: "Latvia",
  LT: "Lithuania",
  NO: "Norway",
  SE: "Sweden"
};

const tournamentUrls = [
  // Men's division
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=61835&Division=MPO",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=39561&Division=MA1",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=39561&Division=MPO",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=85115&Division=MA1",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=107613&Division=MPO",

  // Women's division
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=61835&Division=FPO",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=39561&Division=FPO",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=85115&Division=FA1",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=107613&Division=FPO"
];

const fetchRetryAttempts = 3;
const fetchRetryDelayMs = 1000;

window.addEventListener("load", async () => {
  const loadingScreen = document.getElementById("loadingScreen");

  try {
    document
      .getElementById("countryFilter")
      ?.addEventListener("change", renderPlayerList);

    const requestResults = await Promise.all(
      tournamentUrls.map(fetchTournamentPlayers)
    );

    renderPlayerList();
    showRequestFailureMessage(requestResults.filter(success => !success).length);
  } finally {
    if (loadingScreen) {
      loadingScreen.hidden = true;
    }
  }
});

function showRequestFailureMessage(failedRequestCount) {
  if (!failedRequestCount) {
    return;
  }

  const status = document.getElementById("requestStatus");
  if (status) {
    status.textContent =
      `${failedRequestCount} data requests failed. The ranking may be incomplete. Reload the page to retry.`;
    status.hidden = false;
  }
}

async function fetchTournamentPlayers(url) {
  let scores;

  for (let attempt = 1; attempt <= fetchRetryAttempts; attempt++) {
    try {
      const resp = await fetch(url, {
        headers: {
          Accept: "application/json"
        }
      });

      if (!resp.ok) {
        throw new Error(`Felaktig statuskod: ${resp.status}`);
      }

      const data = await resp.json();
      if (!Array.isArray(data?.data?.scores)) {
        throw new Error("Svaret innehåller ingen giltig scores-lista.");
      }

      scores = data.data.scores;
      break;
    } catch (err) {
      if (attempt === fetchRetryAttempts) {
        console.error(
          "Kunde inte hämta spelardata efter flera försök:",
          url,
          err
        );
        return false;
      }

      console.warn(
        `API-anrop misslyckades; försöker igen om ${fetchRetryDelayMs} ms (${attempt}/${fetchRetryAttempts - 1} återförsök):`,
        url,
        err
      );
      await new Promise(resolve => setTimeout(resolve, fetchRetryDelayMs));
    }
  }

  if (!scores.length) {
    return true;
  }

  const divisionMatch = url.match(/Division=([A-Za-z0-9]+)/);
  const division = divisionMatch
    ? divisionMatch[1].toUpperCase()
    : "";

  const isFDivision = division.startsWith("F");

  for (const player of scores) {
    const name = player.Name ?? "—";
    const pdgaNum = String(player.PDGANum ?? "");
    const rating = player.Rating ?? null;
    const country = normalizeCountryCode(
      player.Country ?? player.CountryCode ?? player.country ?? player.countryCode
    );

    if (
      rating === null ||
      rating === "" ||
      isNaN(rating)
    ) {
      continue;
    }

    const playerData = {
      name,
      pdgaNum,
      rating,
      country
    };

    const playerList = isFDivision ? playerNBMListFpo : playerNBMListMpo;
    const existingPlayer = playerList.get(pdgaNum);

    if (!existingPlayer) {
      playerList.set(pdgaNum, playerData);
    } else if (!existingPlayer.country && country) {
      existingPlayer.country = country;
    }
  }

  return true;
}


function renderPlayerList() {
  const listDiv = document.getElementById("playerList");
  const listDivFpo = document.getElementById("playerListFpo");
  const countryFilter = document.getElementById("countryFilter");
  const allPlayers = [
    ...playerNBMListMpo.values(),
    ...playerNBMListFpo.values()
  ];

  populateCountryFilter(countryFilter, allPlayers);
  const selectedCountry = countryFilter?.value ?? "";

  const mpoPlayers = Array.from(playerNBMListMpo.values())
    .filter(player => !selectedCountry || player.country === selectedCountry)
    .sort((a, b) => (b.rating ?? 0) - (a.rating ?? 0));

  const fpoPlayers = Array.from(playerNBMListFpo.values())
    .filter(player => !selectedCountry || player.country === selectedCountry)
    .sort((a, b) => (b.rating ?? 0) - (a.rating ?? 0));


  if (!mpoPlayers.length) {
    listDiv.innerHTML = `
      <p style="font-weight:bold;">
        ${selectedCountry ? "No Men players found for this country." : "No player data found."}
      </p>
    `;
  } else {
    listDiv.innerHTML = `
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>PDGA</th>
            <th>Country</th>
            <th>Rating</th>
          </tr>
        </thead>
        <tbody>
          ${createRows(mpoPlayers)}
        </tbody>
      </table>
    `;
  }

  if (!fpoPlayers.length) {
    listDivFpo.innerHTML = `
      <p style="font-weight:bold;">
        ${selectedCountry ? "No Women players found for this country." : "No Women division players found."}
      </p>
    `;
  } else {
    listDivFpo.innerHTML = `
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>PDGA</th>
            <th>Country</th>
            <th>Rating</th>
          </tr>
        </thead>
        <tbody>
          ${createRows(fpoPlayers)}
        </tbody>
      </table>
    `;
  }
}


function populateCountryFilter(select, players) {
  if (!select) {
    return;
  }

  const selectedCountry = select.value;
  const countries = [...new Set(players.map(player => player.country).filter(Boolean))]
    .sort();

  select.innerHTML = `
    <option value="">All countries</option>
    ${countries.map(country => `
      <option value="${country}">${country} - ${countryNames[country] ?? country}</option>
    `).join("")}
  `;

  if (countries.includes(selectedCountry)) {
    select.value = selectedCountry;
  }
}

function normalizeCountryCode(value) {
  const country = String(value ?? "").trim().toUpperCase();
  return /^[A-Z]{2}$/.test(country) ? country : "";
}


function createRows(players) {
  return players.map((player, index) => `
    <tr>
      <td>${index + 1}</td>
      <td>
        <a
          href="https://www.pdga.com/player/${player.pdgaNum}"
          target="_blank"
          rel="noopener noreferrer"
        >
          ${escapeHtml(player.name)}
        </a>
      </td>
      <td>${player.pdgaNum || "—"}</td>
      <td>${player.country || "—"}</td>
      <td>${player.rating ?? "—"}</td>
    </tr>
  `).join("");
}


function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

