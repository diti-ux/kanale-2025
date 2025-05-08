window.onload = function() {
    setMode('dark');
  }
  
  function setMode(mode) {
    document.body.classList.remove('dark-mode', 'light-mode', 'terminal-mode');
    if (mode === 'dark') {
      document.body.classList.add('dark-mode');
    } else if (mode === 'light') {
      document.body.classList.add('light-mode');
    } else if (mode === 'terminal') {
      document.body.classList.add('terminal-mode');
    }
  }
  
  function copyLink(link, btnElement) {
    navigator.clipboard.writeText(link).then(() => {
      btnElement.textContent = "Copied";
      btnElement.style.backgroundColor = "#008000";
      setTimeout(() => {
        btnElement.textContent = "Copy";
        btnElement.style.backgroundColor = "#28a745";
      }, 2000);
    }).catch(err => {
      alert("Ndodhi një gabim: " + err);
    });
  }
  
  function shfaqListat() {
    document.getElementById("iptv").style.display = "block";
    document.getElementById("iptv").scrollIntoView({ behavior: 'smooth' });
  }
  
  function shfaqInfo() {
    document.getElementById("infoBox").style.display = "block";
  }
  
  function mbyllInfo() {
    document.getElementById("infoBox").style.display = "none";
  }
  
  function toggleSidebar(event) {
    event.stopPropagation();
  
    const hamburger = document.getElementById('hamburger');
    if (hamburger.classList.contains('hidden')) return;
  
    const existingSidebar = document.getElementById('modeSidebar');
    if (existingSidebar) {
      existingSidebar.remove();
      return;
    }
  
    const sidebar = document.createElement('div');
    sidebar.id = 'modeSidebar';
    sidebar.innerHTML = `
      <button onclick="setMode('light')">Light Mode</button><br>
      <button onclick="setMode('dark')">Dark Mode</button><br>
      <button onclick="setMode('terminal')">Terminal Mode</button>
    `;
    document.body.appendChild(sidebar);
    document.addEventListener('click', closeSidebar);
  }
  
  function closeSidebar(event) {
    const sidebar = document.getElementById('modeSidebar');
    if (sidebar && !sidebar.contains(event.target)) {
      sidebar.remove();
      document.removeEventListener('click', closeSidebar);
    }
  }
  
  window.addEventListener('scroll', () => {
    const hamburger = document.getElementById('hamburger');
    if (window.scrollY > 50) {
      hamburger.classList.add('hidden');
      closeSidebar();
    } else {
      hamburger.classList.remove('hidden');
    }
  });
  