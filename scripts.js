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
            }, 3000);
        }).catch(err => {
            console.error('Failed to copy: ', err);
        });
    });
});

