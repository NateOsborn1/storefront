// Example: Add recent updates
const updates = [
    "Launched new product!",
    "Updated portfolio with new projects.",
    "Started a new blog series."
];

const updatesList = document.getElementById('updates-list');

updates.forEach(update => {
    const li = document.createElement('li');
    li.textContent = update;
    updatesList.appendChild(li);
});
