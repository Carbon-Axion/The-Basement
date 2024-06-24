<<<<<<< HEAD
// scripts.js

document.addEventListener('DOMContentLoaded', function() {
    const copyButton = document.querySelector('.copy-domain-btn');
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = 'Domain copied to clipboard!';
    document.body.appendChild(notification);

    copyButton.addEventListener('click', function() {
        const domain = 'example.com'; // Replace with your domain
        navigator.clipboard.writeText(domain).then(() => {
            notification.classList.add('show');
            setTimeout(() => {
                notification.classList.remove('show');
=======
document.addEventListener('DOMContentLoaded', function () {
    const copyButton = document.querySelector('.copy-domain-btn');
    const copyNotification = document.getElementById('copy-notification');

    copyButton.addEventListener('click', function () {
        const domain = 'thebasementgaming.com';
        navigator.clipboard.writeText(domain).then(() => {
            copyNotification.classList.add('show');
            setTimeout(() => {
                copyNotification.classList.remove('show');
>>>>>>> 2138f95c9aa978cf9aaa10f5fe0e99db3990624f
            }, 3000);
        }).catch(err => {
            console.error('Failed to copy: ', err);
        });
    });
<<<<<<< HEAD
});

=======
});
>>>>>>> 2138f95c9aa978cf9aaa10f5fe0e99db3990624f
