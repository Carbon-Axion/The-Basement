document.addEventListener('DOMContentLoaded', function () {
    const copyButton = document.querySelector('.copy-domain-btn');
    const copyNotification = document.getElementById('copy-notification');

    copyButton.addEventListener('click', function () {
        const domain = 'thebasementgaming.com';
        navigator.clipboard.writeText(domain).then(() => {
            copyNotification.classList.add('show');
            setTimeout(() => {
                copyNotification.classList.remove('show');
            }, 3000);
        }).catch(err => {
            console.error('Failed to copy: ', err);
        });
    });
});