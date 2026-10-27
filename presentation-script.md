# Three-Minute Portfolio Presentation Script

*About 390 words; approximately three minutes at a steady speaking pace.*

## Script

Hi, today I’m going to explain how I built my personal portfolio page using HTML and CSS. The HTML creates the content and structure, and the CSS controls how that content looks. The page uses a separate stylesheet called `profilestye.css`, connected in the head of `profile.html`.

At the top of the HTML, the document type tells the browser to use modern HTML. The `html` element sets the language to English. Inside `head`, the character setting supports common text characters, the viewport setting helps the page fit different screen sizes, and the title is what appears in the browser tab. The visible page content goes inside `body`.

The navigation bar is inside a `nav` element. It has links to the About, Education, Experience, Projects, Skills, and Contact sections. Each link points to an `id` on a section farther down the same page, so clicking it takes the visitor to that section.

The introduction is in a `header`. It shows my profile photo next to my name, student and career information, a few skill labels, and links to GitHub and LinkedIn. The main content is inside `main`, and each topic is in its own `section`. The Education and Experience sections use headings, dates, roles, and lists. The Projects section has three project descriptions. The Skills section groups tools and languages into categories.

The Contact section contains a form with fields for a name, email, and message. The labels are connected to their fields with matching `for` and `id` values, which helps identify what each field is for. The `required` attribute asks the browser to check that each field is filled in. Right now, the form is only a visual example: it does not send a message because it has no form-processing service connected. At the bottom, the `footer` contains copyright and project information.

The CSS file begins with rules for the whole page, such as the font, text color, dark background, and line spacing. A selector like `body` targets the body element, while a class selector like `.card` targets any element with that class. The card rule gives sections a slightly lighter background, a border, rounded corners, padding, and space below them. Other rules style headings, links, skill labels, project sections, and form fields. Hover rules change the appearance of links and the button when the visitor points at them. The `timeline-header` uses Flexbox to place a heading and date next to each other.

Finally, the media query applies a couple of layout changes when the screen is 600 pixels wide or less, making the navigation and timeline easier to view on smaller screens. Overall, I used HTML to organize the information and CSS to make it readable and consistent. Thank you.
