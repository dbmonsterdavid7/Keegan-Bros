# Deployment Instructions for Hostinger

Your website is now configured as a modern Single Page Application (SPA) with clean URLs. To deploy it to Hostinger, follow these steps:

## 1. Prepare your build
Run the build command locally or in your CI/CD environment:
```bash
npm run build
```
This will create a `dist` folder containing all your production-ready files.

## 2. Upload to Hostinger
1. Log in to your Hostinger hPanel.
2. Go to **Websites** and then **Manage** for your domain.
3. Open the **File Manager**.
4. Navigate to the `public_html` directory.
5. Upload the **contents** of your `dist` folder into `public_html`.
   - Ensure the `.htaccess` file is also uploaded (it should be in your `dist` folder after building).

## 3. SEO and Routing
The included `.htaccess` file ensures that:
- Any direct URL access (e.g., `yoursite.com/services`) is correctly routed to your React app.
- You have clean URLs without the `#` character.

## 4. HTTPS (Recommended)
Make sure you enable a free SSL certificate in the Hostinger panel to ensure your site is secure (`https://`).

## File Structure Highlights
- `/src/pages`: Individual page components.
- `/src/components/layout`: Global elements like Header (Navbar), Footer, and Layout wrapper.
- `/src/data`: Centralized data and constants.
- `/public/.htaccess`: Routing configuration for Apache servers (Hostinger).
