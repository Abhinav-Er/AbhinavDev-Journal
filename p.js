document.addEventListener('DOMContentLoaded', () => {

    const addBtn = document.getElementById('addBtn');
    const journalFeed = document.getElementById('journalFeed');

    addBtn.addEventListener('click', () => {

        const title = document.getElementById('entryTitle').value.trim();
        const content = document.getElementById('entryContent').value.trim();
        const tag = document.getElementById('entryTag').value;
        const date = new Date().toLocaleDateString();

        if (title === '' || content === '') {
            alert('Please fill out all fields!');
            return;
        }

        const entryCard = document.createElement('div');
        entryCard.classList.add('journal-card');

        entryCard.innerHTML = `
            <h3>${title} <span class="tag">${tag}</span></h3>
            <p class="date">Logged on: ${date}</p>
            <p>${content}</p>
            <button class="delete-btn">Delete</button>
        `;

        journalFeed.prepend(entryCard);

        // Clear inputs
        document.getElementById('entryTitle').value = '';
        document.getElementById('entryContent').value = '';

        // Delete functionality
        entryCard.querySelector('.delete-btn').addEventListener('click', () => {
            entryCard.remove();
        });

    });

});