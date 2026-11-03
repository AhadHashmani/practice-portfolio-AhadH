# Three-Minute Portfolio Presentation Script

*About 400 words; approximately three minutes at a steady speaking pace.*

## Script

Hi, today I’m going to explain my portfolio, which I built with HTML, CSS, and a small amount of JavaScript. The HTML organizes the content, CSS controls the visual design, and JavaScript adds small interactive touches.

At the top of the HTML, the document type tells the browser to use modern HTML. The `html` element sets the language to English. Inside `head`, the character setting supports common text characters, the viewport setting helps the page fit different screen sizes, and the title is what appears in the browser tab. The visible page content goes inside `body`.

The navigation bar is inside a `nav` element. It has links to the About, Education, Experience, Projects, Skills, and Contact sections. Each link points to an `id` on a section farther down the same page, so clicking it takes the visitor to that section.

The introduction is in a `header`. It shows my profile photo, business-operations and analytics focus, links, and a summary of highlights from my resume. The main content is inside `main`, and each topic has its own `section`. Education lists my UT Austin degrees and GPA. Experience is organized by company, role, dates, and accomplishments. It includes my current Togetherwork product and data role, FIFA World Cup operations, FoodScope analytics and marketing, and Axiom financial analytics and data engineering. Projects include a modular ETL and data-quality framework. The skills section groups analytics tools, business operations, and automation.

The leadership section describes my National Data Lead role with the Ismaili Student Network and lists my certifications, Eagle Scout recognition, and relevant work availability. The contact section provides direct email, phone, LinkedIn, and GitHub links. At the bottom, the `footer` contains copyright and project information.

The CSS begins with a small set of custom color variables for the dark background, cards, text, and teal accent. This makes the color scheme easier to keep consistent. A selector like `body` targets the whole page, while a class selector like `.card` targets elements with that class. The cards use subtle borders, rounded corners, and spacing to separate sections without adding clutter. The experience and project areas use CSS Grid and Flexbox to arrange information neatly. Hover and focus styles help show which links are interactive.

Finally, media queries change the layout on smaller screens. The JavaScript updates a progress line while scrolling, highlights the current section, reveals content as it enters view, and adds a back-to-top button. A reduced-motion setting helps visitors who prefer fewer animations. Overall, the page presents the experience clearly while using responsive HTML, CSS, and JavaScript. Thank you.
