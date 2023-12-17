# Webmaker Internship FE Task

<img width="1266" alt="image" src="https://github.com/SarathAdhi/Webmaker-Frontend-Task/assets/91727830/e23e5803-3458-49af-aa65-453fc9a7d315">

## 🚀 Project Structure

```text
/
 ┣ 📂public
 ┃ ┣ 📂assets
 ┃ ┃ ┣ 📂footer
 ┃ ┃ ┃ ┣ 📜background.svg
 ┃ ┃ ┃ ┣ 📜dribbble.svg
 ┃ ┃ ┃ ┣ 📜facebook.svg
 ┃ ┃ ┃ ┣ 📜github.svg
 ┃ ┃ ┃ ┣ 📜linkedin.svg
 ┃ ┃ ┃ ┣ 📜twitter.svg
 ┃ ┃ ┃ ┗ 📜wellfound.svg
 ┃ ┃ ┣ 📂hero-section
 ┃ ┃ ┃ ┣ 📜adobe.svg
 ┃ ┃ ┃ ┣ 📜amazon.svg
 ┃ ┃ ┃ ┣ 📜background.svg
 ┃ ┃ ┃ ┣ 📜slack.svg
 ┃ ┃ ┃ ┣ 📜spotify.svg
 ┃ ┃ ┃ ┣ 📜zapier.svg
 ┃ ┃ ┃ ┗ 📜zoom.svg
 ┃ ┃ ┣ 📂pricing
 ┃ ┃ ┃ ┣ 📜background.svg
 ┃ ┃ ┃ ┗ 📜tick-bulletin.svg
 ┃ ┃ ┣ 📂recent-work
 ┃ ┃ ┃ ┣ 📜arrow-right.svg
 ┃ ┃ ┃ ┣ 📜Frame-1.png
 ┃ ┃ ┃ ┣ 📜Frame-2.png
 ┃ ┃ ┃ ┣ 📜Frame-3.png
 ┃ ┃ ┃ ┗ 📜Frame-4.png
 ┃ ┃ ┣ 📂testimonial
 ┃ ┃ ┃ ┣ 📜Avatar.png
 ┃ ┃ ┃ ┗ 📜company-logo.svg
 ┃ ┃ ┣ 📜close.svg
 ┃ ┃ ┣ 📜logo.svg
 ┃ ┃ ┗ 📜menu.svg
 ┃ ┣ 📂fonts
 ┃ ┃ ┣ 📜Satoshi-Variable.ttf
 ┃ ┃ ┣ 📜Satoshi-Variable.woff
 ┃ ┃ ┗ 📜Satoshi-Variable.woff2
 ┃ ┗ 📜favicon.svg
 ┣ 📂src
 ┃ ┣ 📂components
 ┃ ┃ ┣ 📂navbar
 ┃ ┃ ┃ ┣ 📜index.astro
 ┃ ┃ ┃ ┣ 📜Navlinks.astro
 ┃ ┃ ┃ ┣ 📜SideNavbar.astro
 ┃ ┃ ┃ ┗ 📜TopNavbar.astro
 ┃ ┃ ┣ 📂ui
 ┃ ┃ ┃ ┣ 📜Accordian.astro
 ┃ ┃ ┃ ┣ 📜AccordianItem.astro
 ┃ ┃ ┃ ┗ 📜Button.astro
 ┃ ┃ ┗ 📜TickIconSvg.astro
 ┃ ┣ 📂layouts
 ┃ ┃ ┣ 📜PageLayout.astro
 ┃ ┃ ┗ 📜SectionLayout.astro
 ┃ ┣ 📂modules
 ┃ ┃ ┗ 📂home
 ┃ ┃ ┃ ┣ 📜FaqSection.astro
 ┃ ┃ ┃ ┣ 📜FooterSection.astro
 ┃ ┃ ┃ ┣ 📜HowItWorksSection.astro
 ┃ ┃ ┃ ┣ 📜index.astro
 ┃ ┃ ┃ ┣ 📜LandingSection.astro
 ┃ ┃ ┃ ┣ 📜PricingSection.astro
 ┃ ┃ ┃ ┣ 📜RecentWorkSection.astro
 ┃ ┃ ┃ ┗ 📜TestimonialSection.astro
 ┃ ┣ 📂pages
 ┃ ┃ ┗ 📜index.astro
 ┃ ┣ 📂styles
 ┃ ┃ ┗ 📜global.css
 ┃ ┣ 📂utils
 ┃ ┃ ┗ 📜tw-merge.ts
 ┃ ┗ 📜env.d.ts
 ┣ 📜.gitignore
 ┣ 📜astro.config.mjs
 ┣ 📜data.config.ts
 ┣ 📜package-lock.json
 ┣ 📜package.json
 ┣ 📜README.md
 ┣ 📜tailwind.config.mjs
 ┗ 📜tsconfig.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## Getting started

First, install all the required dependencies

```bash
npm install
# or
yarn install
```

Now, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:4321](http://localhost:4321) with your browser to see the result.
