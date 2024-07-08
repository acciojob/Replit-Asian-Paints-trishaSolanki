document.addEventListener('DOMContentLoaded', () => {
  // Get references to HTML elements
  const changeButton = document.getElementById('change_button');
  const resetButton = document.getElementById('Reset_button');
  const blockIdInput = document.getElementById('block_id');
  const colourIdInput = document.getElementById('colour_id');

  // Function to change the color of a grid item based on block ID
  changeButton.addEventListener('click', () => {
    const blockId = parseInt(blockIdInput.value.trim(), 10);
    const color = colourIdInput.value.trim();

    // Check if the block ID is valid and the color is a valid color
    if (blockId >= 1 && blockId <= 9 && /^#[0-9A-Fa-f]{6}$|^#[0-9A-Fa-f]{3}$/.test(color)) {
      // Reset all grid items to transparent
      document.querySelectorAll('.grid-item').forEach(item => {
        item.style.backgroundColor = 'transparent';
      });

      // Set the background color of the selected grid item
      const block = document.getElementById(blockId);
      if (block) {
        block.style.backgroundColor = color;
      }
    } else {
      alert('Please enter a valid Block ID (1-9) and a valid color (e.g., #ff0000 or #f00).');
    }
  });

  // Function to reset all grid items to transparent
  resetButton.addEventListener('click', () => {
    document.querySelectorAll('.grid-item').forEach(item => {
      item.style.backgroundColor = 'transparent';
    });
  });
});
