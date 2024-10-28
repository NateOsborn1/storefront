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

// Handle Portfolio Form Submission
const portfolioForm = document.getElementById('portfolio-form');
const portfolioPosts = document.getElementById('portfolio-posts');

portfolioForm.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const imageInput = document.getElementById('image-input');
    const descriptionInput = document.getElementById('description-input');
    
    const file = imageInput.files[0];
    const reader = new FileReader();
    
    reader.onload = function(e) {
        const postDiv = document.createElement('div');
        postDiv.classList.add('portfolio-post');
        
        const img = document.createElement('img');
        img.src = e.target.result;
        img.alt = "Portfolio Image";
        img.style.maxWidth = "100%";
        img.style.height = "auto";
        
        const description = document.createElement('p');
        description.textContent = descriptionInput.value;
        
        postDiv.appendChild(img);
        postDiv.appendChild(description);
        
        portfolioPosts.appendChild(postDiv);
        
        // Clear the form inputs
        portfolioForm.reset();
    };
    
    if (file) {
        reader.readAsDataURL(file);
    }
});
