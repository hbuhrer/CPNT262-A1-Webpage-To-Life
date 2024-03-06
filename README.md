# Course: CPNT-262

Assignment Name: Bring a Webpage to Life.

Name: Hendrich Buhrer

# What is SafeCSS?

SafeCSS is a secure CSS framework that prioritizes cyber security in web development. It provides developers with a secure, reliable, and feature-rich toolkit for building modern websites and applications.

## Features

- **Typography:** Uses three custom typefaces: Play (700 weight) and Poiret One for headings, and Titillium Web for general text.
- **Colors:** Utilizes black (#000000), white (#FFFFFF), sky blue (#87CEEB), and emerald green (#50C878) for colors.
- **Navigation:** Includes a responsive navigation bar with anchor tags for smooth scrolling.
- **Header and Footer:** Features a header with a large background image and a footer with copyright information.
- **Mobile Menu Toggle:** Implements a mobile menu toggle button for smaller screens.
- **Dark Mode Toggle:** Provides a dark mode toggle button with localStorage for persistence.
- **Content Sections:** Includes multiple sections with different background colors and text content.
- **Matrix Rain Effect:** Implements a Matrix-style raining effect in the background using a canvas element.
- **Card Layout:** Generates a card layout using JavaScript from an array of objects.
- **Form:** Includes a form for newsletter sign-up with Formspree integration.
- **Toggle Functionality:** Toggles between light and dark mode, and toggles the mobile menu open and closed.
- **Responsive Design:** Ensures the website is responsive across different screen sizes.
- **Accessibility:** Includes accessibility features for screen readers and ensures usability for all users.
- **Code Organization:** Organizes CSS and JavaScript into separate files for maintainability.

## Implementation

- **Typography:** Uses Play and Poiret One for headings, and Titillium Web for text.
- **Colors:** Utilizes black, white, sky blue, emerald green, and shades of gray for dark mode.
- **Navigation Bar:** Includes a logo, title, and mobile menu toggle button.
- **Header and Footer:** Features a header with a background image and a footer with copyright information.
- **Mobile Menu Toggle:** Implements a toggle button for opening and closing the mobile menu.
- **Dark Mode Toggle:** Provides a toggle button for switching between light and dark mode.
- **Content Sections:** Includes several sections with different background colors and text content.
- **Matrix Rain Effect:** Implements a Matrix-style raining effect using a canvas element.
- **Card Layout:** Generates a card layout using JavaScript from an array of objects.
- **Form:** Includes a form for newsletter sign-up with Formspree integration.
- **Toggle Functionality:** Toggles between light and dark mode, and toggles the mobile menu open and closed.
- **Responsive Design:** Ensures the website is responsive across different screen sizes.
- **Accessibility:** Includes accessibility features for screen readers and ensures usability for all users.
- **Code Organization:** Organizes CSS and JavaScript into separate files for maintainability.

## Bugs and Issues

- Bug Edit (Mar 6, 2024): My js script for removing hover on touch devices is not working on some mobile browsers (Safari), and there is a good solution to be implemented here: 

https://stackoverflow.com/questions/23885255/how-to-remove-ignore-hover-css-style-on-touch-devices 

Will implement the detect touch via JS and prepend CSS :hover rules using a class like body.hasHover when possible to fix this issue the right way. - HB

Nothing significant other than a missed draw call from v1 of the matrix js effect that was making it reload like crazy when scrolling on mobile, removing that mitigated the issue, but will still get a reload when the animation hits the top of a mobile device. This is an open issue that will be fixed before production. I also had to add:

body::selection {
    background-color: transparent;
    color: hsl(240, 100%, 50%);
  }

because the darkmode checkbox toggle was highlighting the nav bar if you clicked too fast. The solution worked and this issue is now closed.




## Credits

SafeCSS is based on Tailwind CSS and was created by Hendrich Buhrer. Connect with us on [GitHub](https://github.com/safecss) and [LinkedIn](https://www.linkedin.com/in/hendrich-bührer/).

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
