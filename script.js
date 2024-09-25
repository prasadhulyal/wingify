document.querySelector('.demo-form').addEventListener('submit', function (event) {
    event.preventDefault();

    // Clear previous errors
    clearErrors();

    let hasError = false;

    // Validate Email
    const emailInput = document.getElementById('email');
    const email = emailInput.value;
    if (email === "") {
        showError('emailError', "Please add a valid email address");
        emailInput.classList.add('error-border'); // Add error border
        hasError = true;
    }

    // Validate Demo Date (Date, Month, Year)
    const dateInput = document.getElementById('date');
    const monthInput = document.getElementById('month');
    const yearInput = document.getElementById('year');
    const date = dateInput.value;
    const month = monthInput.value;
    const year = yearInput.value;
    if (date === "" || month === "" || year === "") {
        showError('dateError', "Please enter a valid date");
        dateInput.classList.add('error-border'); // Add error border
        monthInput.classList.add('error-border'); // Add error border
        yearInput.classList.add('error-border'); // Add error border
        hasError = true;
    }

    // Validate Department
    const departmentInput = document.getElementById('department');
    const department = departmentInput.value;
    if (department === "") {
        showError('departmentError', "Please select a field");
        departmentInput.classList.add('error-border'); // Add error border
        hasError = true;
    }

    // If no errors, process the form (you can add form submission here)
    if (!hasError) {
        alert("Demo requested successfully!");
    }
});

// Show error message
function showError(id, message) {
    const errorElement = document.getElementById(id);
    errorElement.style.display = 'block';
    errorElement.textContent = message;
}

// Clear all error messages
function clearErrors() {
    const errors = document.querySelectorAll('.error');
    errors.forEach(function (error) {
        error.style.display = 'none';
    });

    // Remove error border class from all inputs
    const inputs = document.querySelectorAll('input, select');
    inputs.forEach(function (input) {
        input.classList.remove('error-border');
    });
}
