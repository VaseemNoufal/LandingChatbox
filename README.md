# ChatVase Landing Page

A modern, conversion-focused landing page for ChatVase - an AI-powered chat widget for websites. Built with HTML, Tailwind CSS, and JavaScript.

## Features

- Responsive design that works on all devices
- Modern glassmorphism UI with dark theme
- Interactive chat widget simulation
- Smooth scroll animations
- Intersection Observer for scroll-based animations
- Mobile-first approach

## Technologies Used

- HTML5
- Tailwind CSS (via CDN)
- Vanilla JavaScript
- Google Fonts (Inter)

## Getting Started

1. Clone the repository
2. Open `index.html` in your browser
3. No build process required - it's ready to go!

## Project Structure

```
├── index.html          # Main HTML file
├── script.js           # JavaScript for interactivity
└── README.md          # Project documentation
```

## Customization

### Colors
The color scheme can be modified in the Tailwind configuration within `index.html`:

```javascript
tailwind.config = {
    theme: {
        extend: {
            colors: {
                primary: '#6366f1',    // Main accent color
                secondary: '#8b5cf6',  // Secondary accent color
                dark: '#0f172a',       // Background color
            }
        }
    }
}
```

### Content
- Update the chat messages in `script.js` to customize the demo conversation
- Modify the features, testimonials, and other content in `index.html`
- Adjust the animation timings in `script.js` as needed

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT License - feel free to use this template for your own projects! 