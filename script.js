document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    const container = document.querySelector('.container');
    const congratsContainer = document.querySelector('.congrats-container');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        container.style.display = 'none';
        congratsContainer.style.display = 'block';
    });
});