var sidenav = document.querySelector(".side-navbar")
function shownavbar() {
    sidenav.style.left = "0%"
}
function closenavbar() {
    sidenav.style.left = "-60%"
}


// Populate cities based on selected state
$('#state').on('change', function () {
    const state = $(this).val();
    let cities = '<option value="">Select a state first</option>';
    if (state === 'TamilNadu') {
        cities += '<option value="Chennai">Chennai</option><option value="Coimbatore">Coimbatore</option>';
    } else if (state === 'Kerala') {
        cities += '<option value="Kochi">Kochi</option><option value="Trivandrum">Trivandrum</option>';
    }
    $('#city').html(cities);
});

////////////////register page////////////
$(document).ready(function () {
    // Clear error messages function
    function clearErrorMessages() {
        $('.error').text('');
    }

    // Validate first name
    $('#firstName').on('blur', function () {
        const firstName = $(this).val().trim();
        const namePattern = /^[a-zA-Z]+$/; // Allow only alphabetic characters
        if (firstName === '') {
            $('#firstNameError').text('First name is required.');
        } else if (!namePattern.test(firstName)) {
            $('#firstNameError').text('First name can only contain letters.');
        } else {
            $('#firstNameError').text('');
        }
    });

    // Validate last name
    $('#lastName').on('blur', function () {
        const lastName = $(this).val().trim();
        const namePattern = /^[a-zA-Z]+$/; // Allow only alphabetic characters
        if (lastName === '') {
            $('#lastNameError').text('Last name is required.');
        } else if (!namePattern.test(lastName)) {
            $('#lastNameError').text('Last name can only contain letters.');
        } else {
            $('#lastNameError').text('');
        }
    });

    // Validate date of birth
    $('#dob').on('blur', function () {
        const dob = $(this).val();
        if (dob === '') {
            $('#dobError').text('Date of birth is required.');
        } else {
            $('#dobError').text('');
        }
    });

    // Validate age
    $('#age').on('blur', function () {
        const age = $(this).val().trim();
        if (age === '' || isNaN(age)) {
            $('#ageError').text('Valid age is required.');
        } else {
            $('#ageError').text('');
        }
    });

    // Validate gender
    $('input[name="gender"]').on('blur', function () {
        const gender = $('input[name="gender"]:checked').val();
        if (!gender) {
            $('#genderError').text('Gender is required.');
        } else {
            $('#genderError').text('');
        }
    });

    // Validate email
    $('#email').on('blur', function () {
        const email = $(this).val().trim();
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailPattern.test(email)) {
            $('#emailError').text('Please enter a valid email address.');
        } else {
            $('#emailError').text('');
        }
    });

    // Validate phone number
    $('#phone').on('blur', function () {
        const phone = $(this).val().trim();
        const phonePattern = /^[0-9]{10}$/; // 10 digits only
        if (!phonePattern.test(phone)) {
            $('#phoneError').text('Phone number must be exactly 10 digits and contain only numbers.');
        } else {
            $('#phoneError').text('');
        }
    });

    // Validate address
    $('#address').on('blur', function () {
        const address = $(this).val().trim();
        if (address === '') {
            $('#addressError').text('Address is required.');
        } else {
            $('#addressError').text('');
        }
    });

    // Validate state
    $('#state').on('blur', function () {
        const state = $(this).val();
        if (state === '') {
            $('#stateError').text('State is required.');
        } else {
            $('#stateError').text('');
        }
    });

    // Validate city
    $('#city').on('blur', function () {
        const city = $(this).val();
        if (city === '' || city === 'Select a state first') {
            $('#cityError').text('City is required.');
        } else {
            $('#cityError').text('');
        }
    });

    // Validate username
    $('#username').on('blur', function () {
        const username = $(this).val().trim();
        if (username === '') {
            $('#usernameError').text('Username is required.');
        } else {
            $('#usernameError').text('');
        }
    });

    // Validate password
    $('#password').on('blur', function () {
        const password = $(this).val().trim();
        if (password.length < 8) {
            $('#passwordError').text('Password must be at least 8 characters.');
        } else {
            $('#passwordError').text('');
        }
    });

    // Validate confirm password
    $('#confirmPassword').on('blur', function () {
        const confirmPassword = $(this).val().trim();
        const password = $('#password').val().trim();
        if (confirmPassword !== password) {
            $('#confirmPasswordError').text('Passwords do not match.');
        } else {
            $('#confirmPasswordError').text('');
        }
    });

    // Submit form if valid
    $('#registrationForm').on('submit', function (event) {
        clearErrorMessages();
        let isValid = true;

        $('#registrationForm input').blur();

        if ($('.error').text() !== '') {
            isValid = false;
        }

        if (!isValid) {
            event.preventDefault();
        }
    });

    // Calculate age based on date of birth
    $('#dob').on('change', function () {
        const dob = new Date($(this).val());
        const today = new Date();
        let age = today.getFullYear() - dob.getFullYear();
        const m = today.getMonth() - dob.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < dob.getDate())) {
            age--;
        }
        $('#age').val(age);
    });
});


///////////////login page///////////////
$(document).ready(function () {
    const loginForm = $('form');
    const emailInput = $('input[type="email"]');
    const passwordInput = $('input[type="password"]');
    const emailError = $('#email-error');
    const passwordError = $('#password-error');

    // Validate email
    emailInput.on('blur', function () {
        const email = $(this).val().trim();
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailPattern.test(email)) {
            emailError.text('Please enter a valid email address.');
        } else {
            emailError.text('');
        }
    });

    // Validate password
    passwordInput.on('blur', function () {
        const password = $(this).val().trim();
        if (password.length < 8) {
            passwordError.text('Password must be at least 8 characters.');
        } else {
            passwordError.text('');
        }
    });

    // Submit form if valid
    loginForm.on('submit', function (event) {
        event.preventDefault();

        emailInput.blur();
        passwordInput.blur();

        if (emailError.text() === '' && passwordError.text() === '') {
            loginForm.off('submit').submit();
        }
    });
});
