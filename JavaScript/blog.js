// Get all category buttons and sections
const categoryButtons = document.querySelectorAll('.category-btn');
const categorySections = document.querySelectorAll('.category-section');

// Add event listener for each category button
categoryButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons
        categoryButtons.forEach(btn => btn.classList.remove('active'));
        
        // Add active class to the clicked button
        button.classList.add('active');
        
        // Get the selected category from the button's data attribute
        const selectedCategory = button.getAttribute('data-category');
        
        // Show the corresponding section and hide the others
        categorySections.forEach(section => {
            if (section.getAttribute('data-category') === selectedCategory || selectedCategory === 'all') {
                section.style.display = 'block';
            } else {
                section.style.display = 'none';
            }
        });
    });
});

// Initially, show all content (default category view)
window.addEventListener('DOMContentLoaded', () => {
    categorySections.forEach(section => {
        section.style.display = 'block'; // Show all sections by default
    });
});
