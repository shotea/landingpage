document.addEventListener('DOMContentLoaded', function() {
    const showSignupBtn = document.getElementById('showSignupBtn');
    const signupFormContainer = document.getElementById('signupFormContainer');
    
    showSignupBtn.addEventListener('click', function() {
        if (signupFormContainer.style.display === 'none') {
            signupFormContainer.style.display = 'block';
            showSignupBtn.textContent = 'Hide Sign Up Form';
        } else {
            signupFormContainer.style.display = 'none';
            showSignupBtn.textContent = 'Sign Up Now';
        }
    });

    document.getElementById('signupForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the form from submitting

        // Clear previous error messages
        document.getElementById('usernameError').textContent = '';
        document.getElementById('emailError').textContent = '';
        document.getElementById('passwordError').textContent = '';

        // Get form values
        const username = document.getElementById('username').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        let valid = true;

        // Validate username
        if (username.length < 5) {
            valid = false;
            document.getElementById('usernameError').textContent = 'Username must be at least 5 characters long.';
        }

        // Validate email
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if (!emailPattern.test(email)) {
            valid = false;
            document.getElementById('emailError').textContent = 'Please enter a valid email address.';
        }

        // Validate password
        if (password.length < 8) {
            valid = false;
            document.getElementById('passwordError').textContent = 'Password must be at least 8 characters long.';
        }

        if (valid) {
            // If all validations pass, submit the form
            this.submit();
        }
    });
});
