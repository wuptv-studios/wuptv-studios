
const Ghostframe = {
  init: () => {
    console.log("Ghostframe active");
    Ghostframe.loadUnits();
    Ghostframe.deployWhisper();
  },

  loadUnits: async () => {
    try {
      const res = await fetch('data/femme-units.json');
      const units = await res.json();
      Ghostframe.renderVault(units);
    } catch (err) {
      console.error("Failed to load units:", err);
    }
  },

  renderVault: (units) => {
    const vault = document.getElementById("vault");
    if (!vault) return;

    vault.innerHTML = units.map(unit => `
      <div class="unit ${unit.tier}">
        <h3>${unit.name}</h3>
        <p>Aura: ${unit.aura}</p>
      </div>
    `).join('');

    Ghostframe.lockVault(units);
  },

  lockVault: (units) => {
    const vault = document.getElementById("vault");
    if (!vault) return;

    const lockedTiers = ["myth"]; // Customize this list

    units.forEach((unit, i) => {
      if (lockedTiers.includes(unit.tier)) {
        const unitEl = vault.children[i];
        unitEl.style.filter = "blur(6px)";
        unitEl.innerHTML += `<p style="color:red;font-weight:bold;">🔒 Locked - Upgrade to Access</p>`;
      }
    });
  },

  deployWhisper: () => {
    const deploy = document.createElement("div");
    deploy.style.marginTop = "2rem";
    deploy.innerHTML = `
      <h2>🚀 Deploy Tips</h2>
      <p>Try using <strong>Pulse Vixen</strong> as a looping intro for Shorts or TikTok.</p>
      <p>Best aura: <em>Soft Glow</em>. CTA: "Start With Presence."</p>
    `;
    document.body.appendChild(deploy);
  }
};

window.onload = () => {
  Ghostframe.init();
};
