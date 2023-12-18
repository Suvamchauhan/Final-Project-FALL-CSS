// To xecute code when the DOM content is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // To Select all elements with the class 'see-more'
    const seeMoreButtons = document.querySelectorAll('.see-more');
  
    // Loop through each 'see-more' button
    seeMoreButtons.forEach(button => {
      // To Add a click event listener to each button
      button.addEventListener('click', function() {
        // To Get the value of the 'data-target' attribute from the button
        const targetId = button.getAttribute('data-target');
        // To Get the element with the ID obtained from the 'data-target'
        const targetDropdown = document.getElementById(targetId);
  
        // To Toggle display of dropdown content
        if (targetDropdown.style.display === 'none') {
          targetDropdown.style.display = 'block'; // Show the dropdown if it's hidden
        } else {
          targetDropdown.style.display = 'none'; // Hide the dropdown if it's visible
        }
      });
    });
  });
  