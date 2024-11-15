// app.js
import { HeadComponent } from './HeadComponent.js';

document.addEventListener('DOMContentLoaded', () => {
    const headComponent = new HeadComponent();

    // Define the head components for a particular page
    const headOptions = {
        title: 'My Awesome Page',
        metas: [
            { name: 'description', content: 'This is a sample page with reusable head components.' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
            { property: 'og:title', content: 'My Awesome Page' },
            { property: 'og:description', content: 'A reusable head component demonstration.' }
        ],
        stylesheets: [
            'styles.css', // External CSS file
            'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css' // External CDN
        ],
        scripts: [
            'https://cdn.jsdelivr.net/npm/vue@2.6.14/dist/vue.js', // External JS library
            'app.js' // Local JavaScript file
        ]
    };

    // Load head components dynamically
    headComponent.loadHeadComponents(headOptions);
});
