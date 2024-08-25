// purgecss.config.js
module.exports = {
    content: ['./layouts/index.html', './assets/js/main.js'], // Adjust the paths according to your project structure
    css: ['./assets/css/main.css'], // Your original CSS file
    output: './post_purge.css', // The output file
    safelist: [''], 
  }
  