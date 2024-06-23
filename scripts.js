document.addEventListener('DOMContentLoaded', function() {
    const copyButton = document.querySelector('.copy-domain-btn');

    copyButton.addEventListener('click', function() {
        const domain = 'mc.thebasement.app'; // Replace with your domain
        navigator.clipboard.writeText(domain);
        alert('Domain copied to clipboard!');
    });
});
