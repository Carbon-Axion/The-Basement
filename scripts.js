document.addEventListener('DOMContentLoaded', (event) => {
    const notification = document.getElementById('copy-notification');

    // Function to handle copying text to clipboard and showing notification
    function copyToClipboard(text) {
        navigator.clipboard.writeText(text).then(() => {
            notification.classList.add('show');
            setTimeout(() => {
                notification.classList.remove('show');
            }, 2000);
        });
    }

    // Event listeners for the buttons
    document.getElementById('copy-java').addEventListener('click', () => {
        copyToClipboard('example-minecraft.com'); // Replace with the actual domain
    });

    document.getElementById('copy-bedrock').addEventListener('click', () => {
        copyToClipboard('another-minecraft.com'); // Replace with the actual domain

        document.getElementById('copy-tf2').addEventListener('click', () => {
            copyToClipboard('another-minecraft.com'); // Replace with the actual domain
    });
});
