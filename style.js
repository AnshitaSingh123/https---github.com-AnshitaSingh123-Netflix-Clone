const languageSelect = document.getElementById('languageSelect');

// Change text color to black when the dropdown is clicked
languageSelect.addEventListener('click', function() {
  this.style.color = 'black';
});

// Revert text color when the dropdown is no longer focused
languageSelect.addEventListener('blur', function() {
  this.style.color = '';
});