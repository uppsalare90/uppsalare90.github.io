const playerWorldDeafListMpo = new Map();
const playerWorldDeafListFpo = new Map();
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
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=19499&Division=MPO",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=17849&Division=MPO",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=14665&Division=MPO",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=13148&Division=MPO",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=13220&Division=MPO",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=11480&Division=MPO",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=11206&Division=MPO",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=10251&Division=MPO",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=7093&Division=MPO",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=4537&Division=MPO",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=3782&Division=MPO",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=105180&Division=MPO",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=93562&Division=MPO",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=92384&Division=MPO",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=87762&Division=MPO",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=88312&Division=MPO",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=84301&Division=MPO",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=85115&Division=MA1",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=85115&Division=MPO",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=82717&Division=MPO",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=77104&Division=MPO",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=80590&Division=MPO",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=77153&Division=MPO",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=68176&Division=MPO",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=65679&Division=MPO",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=68076&Division=MPO",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=65957&Division=MPO",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=60047&Division=MPO",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=57517&Division=MPO",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=61835&Division=MPO",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=55604&Division=MPO",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=60887&Division=MPO",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=55750&Division=MPO",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=48767&Division=MPO",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=49835&Division=MPO",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=39561&Division=MA1",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=39561&Division=MPO",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=36928&Division=MPO",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=35206&Division=MPO",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=35337&Division=MPO",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=35138&Division=MPO",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=32138&Division=MPO",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=26450&Division=MPO",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=107613&Division=MPO",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=19499&Division=FPO",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=17849&Division=FPO",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=14665&Division=FPO",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=13148&Division=FPO",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=13220&Division=FPO",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=11480&Division=FPO",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=11206&Division=FPO",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=10251&Division=FPO",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=7093&Division=FPO",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=4537&Division=FPO",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=3782&Division=FPO",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=105180&Division=FPO",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=93562&Division=FPO",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=92384&Division=FPO",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=87762&Division=FPO",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=88312&Division=FPO",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=84301&Division=FPO",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=85115&Division=FA1",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=85115&Division=FPO",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=82717&Division=FPO",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=77104&Division=FPO",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=80590&Division=FPO",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=77153&Division=FPO",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=68176&Division=FPO",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=65679&Division=FPO",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=68076&Division=FPO",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=65957&Division=FPO",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=60047&Division=FPO",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=57517&Division=FPO",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=61835&Division=FPO",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=55604&Division=FPO",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=60887&Division=FPO",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=55750&Division=FPO",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=48767&Division=FPO",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=49835&Division=FPO",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=39561&Division=FPO",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=36928&Division=FPO",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=35206&Division=FPO",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=35337&Division=FPO",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=35138&Division=FPO",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=32138&Division=FPO",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=26450&Division=FPO",
  "https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=107613&Division=FPO"
];

window.addEventListener("load", async () => {
  document
    .getElementById("countryFilter")
    ?.addEventListener("change", renderPlayerList);

  await Promise.all(
    tournamentUrls.map(fetchTournamentPlayers)
  );

  renderPlayerList();
});

async function fetchTournamentPlayers(url) {
  try {
    const resp = await fetch(url, {
      headers: {
        Accept: "application/json"
      }
    });

    if (!resp.ok) {
      throw new Error(`Invalid status code: ${resp.status}`);
    }

    const data = await resp.json();
    const scores = data?.data?.scores;

    if (!Array.isArray(scores) || !scores.length) {
      return;
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

      const playerList = isFDivision
        ? playerWorldDeafListFpo
        : playerWorldDeafListMpo;
      const existingPlayer = playerList.get(pdgaNum);

      if (!existingPlayer) {
        playerList.set(pdgaNum, playerData);
      } else if (!existingPlayer.country && country) {
        existingPlayer.country = country;
      }
    }
  } catch (err) {
    console.error(
      "Could not fetch player data:",
      url,
      err
    );
  }
}

function renderPlayerList() {
  const listDiv = document.getElementById("playerList");
  const listDivFpo = document.getElementById("playerListFpo");
  const countryFilter = document.getElementById("countryFilter");
  const allPlayers = [
    ...playerWorldDeafListMpo.values(),
    ...playerWorldDeafListFpo.values()
  ];

  populateCountryFilter(countryFilter, allPlayers);
  const selectedCountry = countryFilter?.value ?? "";

  const mpoPlayers = Array.from(playerWorldDeafListMpo.values())
    .filter(player => !selectedCountry || player.country === selectedCountry)
    .sort((a, b) => (b.rating ?? 0) - (a.rating ?? 0));

  const fpoPlayers = Array.from(playerWorldDeafListFpo.values())
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
