//JavaScript for Dark Mode -->

document.getElementById('darkModeToggle').addEventListener('click', function () {
  document.body.classList.toggle('dark-mode');
  document.body.classList.toggle('light-mode');
  if (document.body.classList.contains('dark-mode')) {
    this.textContent = 'Light Mode';
  } else {
    this.textContent = 'Dark Mode';
  }
});



