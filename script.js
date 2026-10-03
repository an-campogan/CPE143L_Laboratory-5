const themeRadios = document.querySelectorAll('input[name="theme"]');

themeRadios.forEach(radio => {
  radio.addEventListener('change', (event) => {
    if (event.target.value === 'dark') {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  });
});
