// selection button show modal
var showModal = document.querySelector('.show-modal');
// selection element class modal
var modal = document.querySelector('.modal');
// selection span close
var spanClose = document.querySelector('.close');

// Add Trigger Action If Click Span Close
spanClose.addEventListener('click', function() {
  modal.style.display = 'none';
});

// Action Show Modal
var actionShowModal = function () {
  modal.style.display = 'block';
};

// Add Trigger Action If Click Button Show Modal
showModal.addEventListener('click', function() {
  actionShowModal();
});