# Deployment Guide

This guide provides instructions for deploying the Pet Name Generator to various hosting platforms.

## Local Development

### Option 1: Direct File Opening
Simply open `index.html` in your web browser. This works for basic testing but may have limitations with some features.

### Option 2: Local Server (Recommended)
For the best development experience, use a local server:

#### Using Python (if installed):
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

#### Using Node.js:
```bash
# Install http-server globally
npm install -g http-server

# Run the server
http-server -p 8000 -o
```

#### Using PHP (if installed):
```bash
php -S localhost:8000
```

Then open `http://localhost:8000` in your browser.

## Web Hosting Deployment

### GitHub Pages
1. Push your code to a GitHub repository
2. Go to repository Settings > Pages
3. Select source branch (usually `main` or `master`)
4. Your site will be available at `https://username.github.io/repository-name`

### Netlify
1. Drag and drop your project folder to [Netlify](https://netlify.com)
2. Or connect your GitHub repository for automatic deployments
3. Your site will be available at a Netlify subdomain

### Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` in your project directory
3. Follow the prompts to deploy

### Firebase Hosting
1. Install Firebase CLI: `npm install -g firebase-tools`
2. Login: `firebase login`
3. Initialize: `firebase init hosting`
4. Deploy: `firebase deploy`

### Traditional Web Hosting
1. Upload all files to your web server's public directory
2. Ensure `index.html` is in the root directory
3. Access via your domain name

## File Structure for Deployment

Ensure your deployment includes these files:
```
Pet-Name-Generator/
├── index.html          # Main application
├── styles.css          # Styles
├── script.js           # JavaScript functionality
├── README.md           # Documentation
├── LICENSE             # License
└── package.json        # Project metadata
```

## Browser Compatibility

The application is compatible with:
- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## Performance Optimization

For production deployment, consider:

1. **Minification**: Minify CSS and JavaScript files
2. **Compression**: Enable gzip compression on your server
3. **Caching**: Set appropriate cache headers
4. **CDN**: Use a CDN for faster loading

## Security Considerations

- The application runs entirely in the browser
- No server-side processing required
- Local storage is used for favorites (client-side only)
- No external API calls or data transmission

## Troubleshooting

### Common Issues:

1. **CORS Errors**: Use a local server instead of opening files directly
2. **Local Storage Not Working**: Ensure HTTPS or localhost for secure contexts
3. **Fonts Not Loading**: Check internet connection for Google Fonts
4. **Icons Not Showing**: Verify Font Awesome CDN is accessible

### Testing:

Use the included `test.html` file to verify functionality:
1. Open `test.html` in your browser
2. Run the automated tests
3. Check browser compatibility
4. Verify all features work correctly

## Support

If you encounter issues:
1. Check the browser console for errors
2. Verify all files are present and accessible
3. Test with different browsers
4. Ensure JavaScript is enabled
