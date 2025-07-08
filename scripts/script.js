
const Ghostframe = {
  init: () => {
    console.log("🚀 Ghostframe active across all pages");
    
    // Load units for vault page
    if (document.getElementById("vault")) {
      Ghostframe.loadUnits();
    }
    
    // Initialize any page-specific features
    Ghostframe.initPageFeatures();
  },

  loadUnits: async () => {
    try {
      const res = await fetch('../data/femme-units.json');
      const units = await res.json();
      Ghostframe.renderVault(units);
    } catch (err) {
      console.error("Failed to load units:", err);
      // Fallback with demo units
      Ghostframe.renderVault([
        {name: "Pulse Vixen", aura: "Soft Glow", tier: "basic"},
        {name: "Neon Unit", aura: "Bright Pulse", tier: "myth"},
        {name: "Crystal Femme", aura: "Neon Flash", tier: "basic"}
      ]);
    }
  },

  renderVault: (units) => {
    const vault = document.getElementById("vault");
    if (!vault) return;

    vault.innerHTML = units.map(unit => `
      <div class="unit ${unit.tier}">
        <h3>${unit.name}</h3>
        <p>Aura: ${unit.aura}</p>
        <button onclick="selectUnit('${unit.name}')" style="margin-top: 1rem; padding: 0.5rem 1rem; background: #d94cff; color: white; border: none; border-radius: 20px; cursor: pointer;">Select</button>
      </div>
    `).join('');

    Ghostframe.lockVault(units);
  },

  lockVault: (units) => {
    const vault = document.getElementById("vault");
    if (!vault) return;

    const lockedTiers = ["myth"];

    units.forEach((unit, i) => {
      if (lockedTiers.includes(unit.tier)) {
        const unitEl = vault.children[i];
        if (unitEl) {
          unitEl.style.filter = "blur(6px)";
          unitEl.innerHTML += `<p style="color:red;font-weight:bold;">🔒 Locked - Upgrade to Access</p>`;
        }
      }
    });
  },

  initPageFeatures: () => {
    // Add hover effects to nav links
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
      link.addEventListener('mouseenter', function() {
        this.style.color = '#ff70ff';
      });
      link.addEventListener('mouseleave', function() {
        this.style.color = '#d94cff';
      });
    });
  }
};

// Interactive functions for different pages
function selectUnit(unitName) {
  alert(`✨ Selected: ${unitName}\n\nRedirecting to checkout...`);
  window.location.href = 'checkout.html';
}

function applyStudio(type) {
  alert(`🎯 Studio Application: ${type}\n\nThank you for your interest! We'll review your application.`);
  console.log(`Studio application submitted: ${type}`);
}

function buildUnit() {
  const name = document.getElementById('unitName')?.value || 'Untitled Unit';
  const type = document.getElementById('unitType')?.value || 'intro';
  const aura = document.getElementById('auraLevel')?.value || 'soft-glow';
  const description = document.getElementById('description')?.value || 'No description';
  
  alert(`🔧 Building Unit:\n\nName: ${name}\nType: ${type}\nAura: ${aura}\nDescription: ${description}\n\nUnit created successfully!`);
  console.log('Unit built:', {name, type, aura, description});
}

function purchase(plan) {
  alert(`💳 Purchasing ${plan.toUpperCase()} plan!\n\nRedirecting to payment...`);
  console.log(`Purchase initiated: ${plan}`);
}

function deployUnits() {
  alert(`🚀 Deploying Units...\n\n✅ Deployment successful!\n\nYour units are now live on the WUPTV platform.`);
  console.log('Units deployed successfully');
}

// Initialize on page load
window.onload = () => {
  Ghostframe.init();
};
