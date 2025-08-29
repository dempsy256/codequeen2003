document.addEventListener('DOMContentLoaded', () => {
    const submitButton = document.querySelector('.submit-button');

    submitButton.addEventListener('click', (event) => {
        // Prevent the default form submission
        event.preventDefault();

        // Get the password and confirm password input fields
        const passwordInput = document.getElementById('password');
        const confirmPasswordInput = document.getElementById('confirm-password');

        // Get the values from the input fields
        const password = passwordInput.value;
        const confirmPassword = confirmPasswordInput.value;

        // Get a reference to the hero div to display messages
        const hero = document.querySelector('.hero');

        // Function to display an error message
        function showErrorMessage(message) {
            // Check if an error message already exists and remove it
            const existingError = document.querySelector('.error-message');
            if (existingError) {
                existingError.remove();
            }

            // Create a new div for the error message
            const errorMessageDiv = document.createElement('div');
            errorMessageDiv.className = 'error-message';
            errorMessageDiv.textContent = message;

            // Insert the error message before the submit button
            hero.insertBefore(errorMessageDiv, submitButton);
        }

        // Function to remove any existing error messages
        function clearErrorMessages() {
            const existingError = document.querySelector('.error-message');
            if (existingError) {
                existingError.remove();
            }
        }

        // Validate the password length
        if (password.length < 8) {
            showErrorMessage('Password must be at least 8 characters long.');
            passwordInput.focus();
            return; // Stop the function here
        }

        // Check if passwords match
        if (password !== confirmPassword) {
            showErrorMessage('Password and Confirm Password do not match.');
            confirmPasswordInput.focus();
            return; // Stop the function here
        }

        // If all checks pass, clear any existing errors and proceed with submission logic
        clearErrorMessages();
        
        // At this point, you can proceed with the form submission logic, 
        // for example, by making an API call to register the user.
        alert('Validation successful! Form can be submitted.');
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const submitButton = document.querySelector('.submit-button');

    submitButton.addEventListener('click', (event) => {
        event.preventDefault();

        // Get all required input fields
        const passwordInput = document.getElementById('password');
        const confirmPasswordInput = document.getElementById('confirm-password');
        const termsCheckbox = document.getElementById('terms');

        const password = passwordInput.value;
        const confirmPassword = confirmPasswordInput.value;

        const hero = document.querySelector('.hero');

        function showErrorMessage(message) {
            const existingError = document.querySelector('.error-message');
            if (existingError) {
                existingError.remove();
            }
            const errorMessageDiv = document.createElement('div');
            errorMessageDiv.className = 'error-message';
            errorMessageDiv.textContent = message;
            hero.insertBefore(errorMessageDiv, submitButton);
        }

        function clearErrorMessages() {
            const existingError = document.querySelector('.error-message');
            if (existingError) {
                existingError.remove();
            }
        }

        // --- Validation Logic ---

        // 1. Validate password length
        if (password.length < 8) {
            showErrorMessage('Password must be at least 8 characters long.');
            passwordInput.focus();
            return;
        }

        // 2. Check if passwords match
        if (password !== confirmPassword) {
            showErrorMessage('Password and Confirm Password do not match.');
            confirmPasswordInput.focus();
            return;
        }

        // 3. Check if terms and conditions are accepted
        if (!termsCheckbox.checked) {
            showErrorMessage('You must accept the terms and conditions.');
            return;
        }

        // --- If all checks pass ---
        clearErrorMessages();
        alert('Validation successful! Form can be submitted.');
    });
});

// Add to your existing assignment.js file

// Add to your existing assignment.js file

document.addEventListener('DOMContentLoaded', () => {
    const submitButton = document.querySelector('.submit-button');
    const togglePasswordButtons = document.querySelectorAll('.toggle-password');

    togglePasswordButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetId = button.getAttribute('data-target');
            const targetInput = document.getElementById(targetId);

            // Toggle the type attribute
            const type = targetInput.getAttribute('type') === 'password' ? 'text' : 'password';
            targetInput.setAttribute('type', type);

            // Toggle the eye icon based on the state
            if (type === 'password') {
                button.textContent = '👁️'; // Eye open
            } else {
                button.textContent = '🙈'; // Eye closed
            }
        });
    });

    // --- Your existing validation logic ---
    submitButton.addEventListener('click', (event) => {
        event.preventDefault();

        const passwordInput = document.getElementById('password');
        const confirmPasswordInput = document.getElementById('confirm-password');
        const termsCheckbox = document.getElementById('terms');

        const password = passwordInput.value;
        const confirmPassword = confirmPasswordInput.value;

        const hero = document.querySelector('.hero');

        function showErrorMessage(message) {
            const existingError = document.querySelector('.error-message');
            if (existingError) {
                existingError.remove();
            }
            const errorMessageDiv = document.createElement('div');
            errorMessageDiv.className = 'error-message';
            errorMessageDiv.textContent = message;
            hero.insertBefore(errorMessageDiv, submitButton);
        }

        function clearErrorMessages() {
            const existingError = document.querySelector('.error-message');
            if (existingError) {
                existingError.remove();
            }
        }

        if (password.length < 8) {
            showErrorMessage('Password must be at least 8 characters long.');
            passwordInput.focus();
            return;
        }

        if (password !== confirmPassword) {
            showErrorMessage('Password and Confirm Password do not match.');
            confirmPasswordInput.focus();
            return;
        }

        if (!termsCheckbox.checked) {
            showErrorMessage('You must accept the terms and conditions.');
            return;
        }

        clearErrorMessages();
        alert('Validation successful! Form can be submitted.');
    });
});