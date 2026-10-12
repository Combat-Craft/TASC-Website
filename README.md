# TASC Website

## Overview
The TASC Website is the official online platform for the organization. It shares TASC’s story, journey, and mission while highlighting the projects developed so far along with detailed information about each one. The site features both upcoming and past events, introduces team captains, leads, and sub-teams, and provides opportunities for new members to join. It also showcases current sponsors, includes information on how to become a sponsor, and offers multiple ways to get in touch with the team. The website is built using **React** to provide a modern, responsive, and dynamic user experience.

## Tests

Install the Playwright browser once with `npx playwright install chromium`, then
run the browser smoke tests with `npm run test:e2e`. The tests verify that the
site's routed pages render, primary navigation works, and unknown routes show
the not-found page.

## CI/CD

GitHub Actions runs `npm ci`, installs Chromium, and runs `npm run check`,
`npm run build`, and `npm run test:e2e` on pull requests targeting `main` and on
pushes to `main`.

To deploy the site with Netlify, connect this GitHub repository to a Netlify
site and set `main` as the production branch. The existing `netlify.toml`
configures the build command (`npm run build`) and publishes `dist/public`.
Enable deploy previews in Netlify if you want preview deployments for pull
requests. Once connected, Netlify deploys production changes pushed to `main`;
GitHub Actions independently type-checks, builds, and runs browser tests.
