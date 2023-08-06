(() => {
  'use strict';

  // Get the form element
  const form = document.querySelector('.needs-validation');

  // Function to handle form submission
  function handleFormSubmission(event) {
    event.preventDefault();
    if (!form.checkValidity()) {
      event.stopPropagation();
      form.classList.add('was-validated');
    } else {
      // Your code to handle the form submission goes here.
      // For example, you can display the Bootstrap modal.
      const successModal = new bootstrap.Modal(document.getElementById('successModal'));
      successModal.show();

      // You can reset the form if needed
      resetForm();
    }
  }

  // Function to reset the form elements and remove validation classes
  function resetForm() {
    form.reset();
    form.classList.remove('was-validated');
  }

  // Attach the handleFormSubmission function to the form's submit event
  form.addEventListener('submit', handleFormSubmission);
})();