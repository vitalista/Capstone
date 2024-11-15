// HeadComponent.js

export class HeadComponent {
    constructor() {
        this.head = document.head || document.getElementsByTagName('head')[0];
    }

    // Method to set the page title
    setTitle(title) {
        const titleTag = document.createElement('title');
        titleTag.textContent = title;
        this.head.appendChild(titleTag);
    }

    // Method to add a meta tag
    addMeta(attributes) {
        const metaTag = document.createElement('meta');
        for (let key in attributes) {
            metaTag.setAttribute(key, attributes[key]);
        }
        this.head.appendChild(metaTag);
    }

    // Method to add a stylesheet link
    addStylesheet(href) {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = href;
        this.head.appendChild(link);
    }

    // Method to add a script
    addScript(src, isAsync = false, isDefer = true) {
        const script = document.createElement('script');
        script.src = src;
        script.async = isAsync;
        script.defer = isDefer;
        this.head.appendChild(script);
    }

    // Method to load all components at once
    loadHeadComponents(options) {
        const { title, metas, stylesheets, scripts } = options;

        // Set title if provided
        if (title) {
            this.setTitle(title);
        }

        // Add meta tags if provided
        if (metas && Array.isArray(metas)) {
            metas.forEach(meta => this.addMeta(meta));
        }

        // Add stylesheets if provided
        if (stylesheets && Array.isArray(stylesheets)) {
            stylesheets.forEach(href => this.addStylesheet(href));
        }

        // Add scripts if provided
        if (scripts && Array.isArray(scripts)) {
            scripts.forEach(script => this.addScript(script));
        }
    }
}
