// Mobile menu toggle
function toggleMenu() {
    document.getElementById('navList').classList.toggle('show');
}

// Tab functionality
function openTab(tabId, btn) {
    document.querySelectorAll('.tab-content').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    document.getElementById(tabId).classList.add('active');
    btn.classList.add('active');
}

// Demo sign-in
function handleSignIn(e) {
    e.preventDefault();
    const email = document.getElementById('email')?.value;
    if (email) {
        localStorage.setItem('bghc_user', JSON.stringify({
            email: email,
            name: 'Patient User',
            nhs: '123 456 7890',
            signedIn: true
        }));
        window.location.href = 'appointments.html';
    }
}

// Demo sign-out
function handleSignOut() {
    localStorage.removeItem('bghc_user');
    window.location.href = 'index.html';
}

// Check sign-in status and update header
function updateAuthUI() {
    const user = JSON.parse(localStorage.getItem('bghc_user') || 'null');
    const headerRight = document.querySelector('.header-right');
    if (user && user.signedIn && headerRight) {
        headerRight.innerHTML = `
            <span style="font-size:0.9rem;color:#425563;">Welcome, ${user.name}</span>
            <a href="#" onclick="handleSignOut()" class="btn btn-outline">Sign Out</a>
        `;
    }
}

// Registration form demo
function handleRegister(e) {
    e.preventDefault();
    const name = document.getElementById('firstName')?.value + ' ' + document.getElementById('lastName')?.value;
    alert('Registration submitted successfully! We will contact you within 5 working days to confirm your registration at Bethnal Green Health Centre.');
}

// Appointment booking demo
function handleBookAppointment(e) {
    e.preventDefault();
    alert('Appointment request submitted! You will receive a confirmation via SMS or email shortly.');
}

// Self-referral form demo
function handleReferral(e) {
    e.preventDefault();
    alert('Your self-referral has been submitted. The service will contact you within 10 working days.');
}

// Contact form demo
function handleContact(e) {
    e.preventDefault();
    alert('Thank you for your message. We will respond within 2 working days.');
}

// Init
document.addEventListener('DOMContentLoaded', updateAuthUI);
