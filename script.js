document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Thank you! I will reply to you shortly.');
    document.getElementById('contactForm').reset();
});
