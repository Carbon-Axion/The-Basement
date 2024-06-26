document.addEventListener('DOMContentLoaded', () => {
    const copyButtons = document.querySelectorAll('.copy-domain-btn');
    const notification = document.getElementById('copy-notification');

    copyButtons.forEach(button => {
        button.addEventListener('click', () => {
            const domainText = "Your Domain Text"; // Replace with actual domain text
            navigator.clipboard.writeText(domainText).then(() => {
                notification.classList.add('show');
                setTimeout(() => {
                    notification.classList.remove('show');
                }, 3000);
            });

            // Remove focus from the clicked button
            button.blur();

            // Trigger animation class for copying effect
            button.classList.add('copying');
            setTimeout(() => {
                button.classList.remove('copying');
            }, 1000); // Adjust timing to match your CSS animation duration
        });

        // Remove copying class when focus is lost
        button.addEventListener('focusout', () => {
            button.classList.remove('copying');
        });
    });


});
