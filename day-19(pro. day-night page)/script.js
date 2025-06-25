  const toggleInput = document.getElementById('dn');
    toggleInput.disabled = false;
    let mode = localStorage.getItem('mode');
    if (mode === 'dark') {
      document.body.classList.add('dark-mode');
      toggleInput.checked = true;
    } else {
      document.body.classList.remove('dark-mode');
      toggleInput.checked = false;
    }
    toggleInput.addEventListener('change', function() {
      if (toggleInput.checked) {
        document.body.classList.add('dark-mode');
        localStorage.setItem('mode', 'dark');
      } else {
        document.body.classList.remove('dark-mode');
        localStorage.setItem('mode', 'light');
      }
    });