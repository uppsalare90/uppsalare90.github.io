
let playerNBMListMpo = [];

let playerNBMListFpo = [];

window.onload = async () => {
  await fetchTournamentPlayers("https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=61835&Division=MPO");
  await fetchTournamentPlayers("https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=39561&Division=MA1");
  await fetchTournamentPlayers("https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=39561&Division=MPO");
  await fetchTournamentPlayers("https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=85115&Division=MA1");

  await fetchTournamentPlayers("https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=61835&Division=FPO");
  await fetchTournamentPlayers("https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=39561&Division=FPO");
  await fetchTournamentPlayers("https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=85115&Division=FA1");

  renderPlayerList();
    };


async function fetchTournamentPlayers(url) {
    try {
    const resp = await fetch(url, { headers: { Accept: "application/json" } });

    if (!resp.ok) throw new Error(`Felaktig statuskod: ${resp.status}`);
    const data = await resp.json();

    const scores = data?.data?.scores;
    if (!Array.isArray(scores) || !scores.length) {
      return;
    }

    const divisionMatch = url.match(/Division=([A-Za-z0-9]+)/);
    const division = divisionMatch ? divisionMatch[1].toUpperCase() : "";

    const isFDivision = division.startsWith("F");

    for (const s of scores) {
      const name = s.Name;
      const pdgaNum = s.PDGANum;
      const rating = s.Rating ?? null;

      if (!rating || isNaN(rating)) continue;

      if (isFDivision) {
        const existsF = playerNBMListFpo.some(p => p.pdgaNum === pdgaNum);
        if (!existsF) playerNBMListFpo.push({ name, pdgaNum, rating });
      } else {
        const existsMpo = playerNBMListMpo.some(p => p.pdgaNum === pdgaNum);
        if (!existsMpo) playerNBMListMpo.push({ name, pdgaNum, rating });
      }
    }
  } catch (err) {
    console.error("Fel vid hämtning av spelare:", err);
  }
}

function renderPlayerList() {
  // MPO
  playerNBMListMpo.sort((a, b) => (b.rating ?? 0) - (a.rating ?? 0));
  const listDiv = document.getElementById("playerList");

  if (!playerNBMListMpo.length) {
    listDiv.innerHTML = `<p style="font-weight:bold;">⚠️ Inga spelardata hittades.⚠️</p>`;
  } else {
    const rows = playerNBMListMpo.map((p, i) => `
      <tr>
        <td>${i + 1}</td>
        <td>${p.pdgaNum !== "—" ? `<a href="https://www.pdga.com/player/${p.pdgaNum}" target="_blank">${p.name}</a>` : p.name}</td>
        <td>${p.pdgaNum ?? "—"}</td>
        <td>${p.rating ?? "—"}</td>
      </tr>
    `).join("");

    listDiv.innerHTML = `
      <table>
        <thead>
          <tr><th># MPO</th><th>Name</th><th>PDGA</th><th>Rating</th></tr>
        </thead>
        <tbody>${rows}</tbody>
      </table>
    `;
  }

  // FPO 
  playerNBMListFpo.sort((a, b) => (b.rating ?? 0) - (a.rating ?? 0));
  const listDivFpo = document.getElementById("playerListFpo");

  if (!playerNBMListFpo.length) {
    listDivFpo.innerHTML = `<p style="font-weight:bold;">⚠️ Inga F-divisionsspelare hittades.⚠️</p>`;
  } else {
    const rowsFpo = playerNBMListFpo.map((p, i) => `
      <tr>
        <td>${i + 1}</td>
        <td>${p.pdgaNum !== "—" ? `<a href="https://www.pdga.com/player/${p.pdgaNum}" target="_blank">${p.name}</a>` : p.name}</td>
        <td>${p.pdgaNum ?? "—"}</td>
        <td>${p.rating ?? "—"}</td>
      </tr>
    `).join("");

    listDivFpo.innerHTML = `
      <table>
        <thead>
          <tr><th>#FPO</th><th>Name</th><th>PDGA</th><th>Rating</th></tr>
        </thead>
        <tbody>${rowsFpo}</tbody>
      </table>
    `;
  }
}
