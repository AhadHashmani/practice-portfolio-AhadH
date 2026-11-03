# Three-Minute Portfolio Presentation Script

*About 400 words; approximately three minutes at a steady speaking pace.*

## Script

Hi, today I’m going to explain how I built my personal portfolio page using HTML, CSS, and a small amount of JavaScript. The HTML creates the content and structure, the CSS controls how it looks, and JavaScript adds a few interactive touches. The page uses a separate stylesheet called `profilestye.css` and a script called `portfolio.js`.

At the top of the HTML, the document type tells the browser to use modern HTML. The `html` element sets the language to English. Inside `head`, the character setting supports common text characters, the viewport setting helps the page fit different screen sizes, and the title is what appears in the browser tab. The visible page content goes inside `body`.

The navigation bar is inside a `nav` element. It has links to the About, Education, Experience, Projects, Skills, and Contact sections. Each link points to an `id` on a section farther down the same page, so clicking it takes the visitor to that section.

The introduction is in a `header`. It shows my profile photo next to my name, a short description of my work, a few skill labels, and links to my experience and email. A side panel highlights my current Togetherwork role. The main content is inside `main`, and each topic is in its own `section`. The Education section presents my current studies, while Experience uses headings, dates, roles, company logos, and lists. The Togetherwork entry describes building Power BI and Sigma dashboards, translating reporting needs from different teams, and participating in product planning. The Projects section has three project descriptions, and the Skills section groups tools and languages into categories.

The Contact section provides direct email, LinkedIn, and GitHub links instead of a form that would need a separate service to send messages. At the bottom, the `footer` contains copyright and project information.

The CSS begins with a small set of custom color variables for the dark background, cards, text, and teal accent. This makes the color scheme easier to keep consistent. A selector like `body` targets the whole page, while a class selector like `.card` targets elements with that class. The cards use subtle borders, rounded corners, and spacing to separate sections without adding clutter. The experience and project areas use CSS Grid and Flexbox to arrange information neatly. Hover and focus styles help show which links are interactive.

Finally, media queries change the layout on smaller screens so the columns stack and the navigation fits a phone. The JavaScript updates a progress line as I scroll, highlights the section currently in view, reveals content as it enters the screen, and shows a back-to-top button farther down the page. These effects use browser observers and request animation frames instead of a large library. A reduced-motion setting limits animation for visitors who prefer it. Overall, HTML organizes the portfolio, CSS creates its responsive design, and JavaScript makes browsing feel more interactive. Thank you.
