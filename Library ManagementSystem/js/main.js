// scripts.js

document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const contactNumber = document.getElementById('contactNumber').value;
    const membershipType = document.getElementById('membershipType').value;

    // Basic validation checks
    if (firstName && lastName && email && password && contactNumber && membershipType) {
        alert(`Thank you, ${firstName} ${lastName}, for signing up!`);
        // In real application, handle form submission to server here
    } else {
        alert('Please fill in all the required fields.');
    }
});
// scripts.js

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Basic validation checks
    if (email && password) {
        alert(`Login successful for ${email}!`);
        // In a real application, you would send the email and password to a server for validation
    } else {
        alert('Please enter your email and password.');
    }
});


// scripts.js

// Function to search loans
function searchLoan() {
    const query = document.getElementById('search').value.toLowerCase();
    const rows = document.querySelectorAll('#loanTable tbody tr');
    rows.forEach(row => {
        const cells = row.querySelectorAll('td');
        const match = Array.from(cells).some(cell => cell.textContent.toLowerCase().includes(query));
        row.style.display = match ? '' : 'none';
    });
}

// Function to view/edit loan details (navigate to loan details page)
function viewLoanDetails(loanID) {
    // Redirect to loan details page
    window.location.href = `loan-details.html?loanID=${loanID}`;
}

// Function to issue a new loan (navigate to issue loan page)
function issueNewLoan() {
    window.location.href = 'issue-loan.html';
}

// Function to save loan details
function saveLoanDetails() {
    alert('Loan details saved!');
    // Implement save logic here
}

// Function to mark a loan as returned
function markAsReturned() {
    alert('Loan marked as returned!');
    // Implement return logic here
}

// Function to calculate fine for overdue loans
function calculateFine() {
    alert('Fine calculated!');
    // Implement fine calculation logic here
}

// Function to handle cancel action on issue loan page
function cancelIssueLoan() {
    window.location.href = 'loan-list.html';
}
// scripts.js

function searchStaff() {
    // Implement staff search logic
    alert('Searching staff...');
}

function viewStaffDetails(staffID) {
    // Redirect to staff details page
    window.location.href = `staff-details.html?staffID=${staffID}`;
}

function addNewStaff() {
    // Redirect to add/edit staff page
    window.location.href = 'staff-add-edit.html';
}

function saveStaffDetails() {
    alert('Staff details saved!');
    // Implement save logic here
}

function cancelAddEditStaff() {
    window.location.href = 'staff-list.html';
}

function searchReservation() {
    // Implement reservation search logic
    alert('Searching reservations...');
}

function viewReservationDetails(reservationID) {
    // Redirect to reservation details page
    window.location.href = `reservation-details.html?reservationID=${reservationID}`;
}

function saveReservationDetails() {
    alert('Reservation details saved!');
    // Implement save logic here
}

function fulfillCancelReservation() {
    alert('Reservation fulfilled or canceled!');
    // Implement fulfill/cancel logic here
}

function searchFine() {
    // Implement fine search logic
    alert('Searching fines...');
}

function viewFineDetails(fineID) {
    // Redirect to fine details page
    window.location.href = `fine-details.html?fineID=${fineID}`;
}

function saveFineDetails() {
    alert('Fine details saved!');
    // Implement save logic here
}

function markAsPaid() {
    alert('Fine marked as paid!');
    // Implement mark as paid logic here
}

function addNewCategory() {
    // Redirect to add/edit category page
    window.location.href = 'category-add-edit.html';
}

function cancelAddEditCategory() {
    window.location.href = 'category-list.html';
}

function addNewPublisher() {
    // Redirect to add/edit publisher page
    window.location.href = 'publisher-add-edit.html';
}

function cancelAddEditPublisher() {
    window.location.href = 'publisher-list.html';
}

function generateReport(type) {
    alert(`Generating ${type} report...`);
    // Implement report generation logic
}

function exportReport(format) {
    alert(`Exporting report to ${format.toUpperCase()}...`);
    // Implement export logic
}

function editProfile() {
    alert('Edit profile clicked!');
    // Implement edit profile logic
}

function changePassword() {
    alert('Change password clicked!');
    // Implement change password logic
}
// scripts.js

function searchBook() {
    // Implement book search logic
    alert('Searching books...');
}

function viewBookDetails(bookID) {
    // Redirect to book details page
    window.location.href = `book-details.html?bookID=${bookID}`;
}

function addNewBook() {
    // Redirect to add/edit book page
    window.location.href = 'book-add-edit.html';
}

function saveBookDetails() {
    alert('Book details saved!');
    // Implement save logic here
}

function cancelAddEditBook() {
    window.location.href = 'book-list.html';
}



