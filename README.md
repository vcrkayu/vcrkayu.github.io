# Vedant Ranganathan Engineering Portfolio

A responsive static portfolio written from Vedant's supplied engineering portfolio, with a layout inspired by https://shyambatchu.com/.

## Open the website

This repository is ready for GitHub Pages. Under Settings → Pages, choose GitHub Actions as the publishing source. The included workflow publishes `dist` whenever `main` changes, or when run manually. No package installation, build step, or deployment secret is needed.

Open `dist/index.html` in a browser. The site needs no installation or build step. For hosting, upload everything inside `dist` to a static web host.

## Add your pictures

The HTP tank picture and EP thruster assembly drawing are already included. Their previews use square frames: the tank preview removes surrounding blank space, and the EP preview focuses on the isometric assembly. Click the tank picture to view the complete original, or the EP drawing to open the original PDF. Both previews also work with JavaScript disabled.

The remaining portrait, geothermal, and C-clamp spaces are ready for your pictures. The solenoid project is a text-only entry.

1. Put your image files in `dist/images`.
2. Open `dist/script.js` in a text editor.
3. Fill in the matching entries at the top, for example:

```js
const IMAGE_PATHS = {
  portrait: "images/portrait.jpg",
  thermal: "images/htp-tank.png",
  xenon: "images/ep-thruster-drawing.png",
  geothermal: "images/geothermal-cycle.png",
  clamp: "images/clamp.jpg"
};
```

Keep any entry empty to retain its placeholder. Use the exact filename, including capitalization and extension. Landscape images around 1200 × 800 work well for remaining project spaces. A portrait around 800 × 900 works well for the introduction. The two included project previews have tailored square crops; adjust the thermal and xenon image rules at the end of `dist/styles.css` when replacing them with differently composed pictures.

Update the matching image's `alt` text in `dist/index.html` if your picture depicts something different. Images replace their placeholders after loading; unavailable files keep the placeholders visible. When replacing either of the two included images with a new filename, also update that image's `src` in `dist/index.html` and its full-size link, if applicable.

## Edit the text and appearance

- `dist/index.html`: introduction, projects, experience, education, and image descriptions.
- `dist/styles.css`: colors, typography, spacing, and responsive layouts.
- `dist/script.js`: image paths, project disclosure labels, and navigation highlighting.

Project cards, headings, resume entries, and contact details gently fade and rise into view once as you scroll. Paired desktop cards have a short stagger. The effect respects reduced-motion preferences, keyboard navigation, and direct project links; content remains visible when JavaScript is disabled and when printing. Adjust the `.scroll-reveal` rules at the end of `dist/styles.css` to change the timing or distance.

Each project has a native expandable description that also works without JavaScript. The text preserves the source's distinction between individual contributions and group outcomes, and between preliminary feasibility and verified performance.

The project gallery separates Manastu internship work from university projects with a heading and divider. The resume section follows Education, Technical Experience, and Other Experience, in that order.

## Resume logos

The McGill University, Manastu, MIAE, and McGill Formula Electric entries use the organizations' logos, stored in `dist/images/logos`. The Flight Student entry uses a small plane symbol. Logo sources:

- Manastu Space: [official site icon](https://cdn.prod.website-files.com/68b580b2018322e7548f79e0/69a91c3fd8eb84d67c766bb7_MS-Pitch-Favicon-256px.png).
- McGill University: red M from the [official McGill Athletics website](https://mcgillathletics.ca/sports/2012/12/6/206124201.aspx), using its [scoreboard logo SVG](https://dxbhsrqyrr690.cloudfront.net/sidearm.nextgen.sites/mcgill.sidearmsports.com/images/responsive_2023/scoreboard-logo.svg).
- McGill Institute for Aerospace Engineering: [McGill MIAE](https://www.mcgill.ca/miae/) and its [official logo](https://www.mcgill.ca/miae/files/miae/moriarty_branding_img.png).
- McGill Formula Electric: [official team website](https://www.mcgillformulaelectric.com/) and its [header logo](https://images.squarespace-cdn.com/content/v1/59de78513e00beafdbad4e50/1564757283773-UHXMQZJIR00CX4RT4CZC/mfe+copy.png?format=1500w).

Logos identify the organizations listed in the resume; they remain the property of their respective organizations.

## Sunset background

The background is a CSS gradient blending soft lavender, pink, and peach, with no background image. Edit the three colors in the `body:before` rule near the end of `dist/styles.css` to customize it. Dark navy body text, larger supporting labels, and 17px main text with generous line spacing keep it readable. The gradient fills the viewport behind the content and is omitted when printing.

Contact details, education dates, additional experience, leadership, and flight training come from the supplied resume. The original resume is included unchanged at `dist/downloads/Vedant_Ranganathan_Resume.pdf`. Replace that file to update the download.

The resume's email annotation points to `mailto:x@x.com`; the website's contact link uses the correct visible address, `vedant.ranganathan@mail.mcgill.ca`. Project copy follows the engineering portfolio's detailed qualifications where its description of validation differs from the resume.

## October 2026 update

Added Recovery Structures membership in McGill Rocket Team (September 2026–Present), updated the introduction, and rewrote the project descriptions in a conversational context–work–approach–result flow. Internship and university projects have separate section headings. The resume download is the supplied Vedant_Ranganathan_CV.pdf.

McGill Rocket Team logo: SVG from the footer of the [official team website](https://www.mcgillrocketteam.com/), accessed October 3, 2026.
