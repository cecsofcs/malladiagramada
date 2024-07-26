document.addEventListener('DOMContentLoaded', () => {
    const subjects = document.querySelectorAll('.subject');
    subjects.forEach(subject => {
        subject.addEventListener('click', () => {
            if (!subject.classList.contains('approved')) {
                subject.classList.add('approved');
                const credits = parseInt(subject.getAttribute('data-credits'));
                const module = subject.parentElement;
                const creditsElement = module.querySelector('.credits');
                const currentCredits = parseInt(creditsElement.textContent);
                creditsElement.textContent = currentCredits + credits;
            }
        });
    });
});
