# cubicit.net

Redesign of [Cubic Technologies](https://www.cubicit.net), still live on Squarespace.

This repo holds the v1 editorial mockup and the planning docs behind it. Copy is draft. Facts without brackets come from the live site. `[PROOF]` and `[TBD]` wait on Cubic.

## View the mockup

From the repo root:

```bash
python3 -m http.server 8765 --directory docs/mockup
```

Open [http://127.0.0.1:8765/index.html](http://127.0.0.1:8765/index.html).

Pages are static HTML. They share `docs/mockup/assets/cubic.css` and `docs/mockup/assets/cubic.js` (header, Practices panel, footer). Tailwind loads from the CDN. The contact form does not send mail.

## Pages

Editorial home is `index.html`. `home-editorial.html` redirects there. `home-cinematic.html` is an archive, not the v1 direction.

| Sitemap path | Mockup file |
|---|---|
| `/` | [index.html](docs/mockup/index.html) |
| `/practices` | [practices.html](docs/mockup/practices.html) |
| `/practices/staffing` | [staffing.html](docs/mockup/staffing.html) |
| `/practices/software` | [software.html](docs/mockup/software.html) |
| `/practices/communication` | [communication.html](docs/mockup/communication.html) |
| `/practices/automation` | [automation.html](docs/mockup/automation.html) |
| `/employers` | [employers.html](docs/mockup/employers.html) |
| `/talent` | [talent.html](docs/mockup/talent.html) |
| `/about` | [about.html](docs/mockup/about.html) |
| `/contact` | [contact.html](docs/mockup/contact.html) |

Header: wordmark, Practices dropdown, Employers, Talent, About, **Talk to Cubic**. Home opens two doors (**Hire senior talent**, **I’m a candidate**) and a five-box hero slider (Cubic plus the four practices). Staffing leads. Photographs are Unsplash placeholders until Cubic supplies original work with consent.

Tokens: Cubic red `#d60020`, ink `#1d1d1d`, ash gray.

## Planning

- [Brief](docs/brief.md). Job of the site, four practices, proof we will not invent, out of v1.
- [Sitemap](docs/sitemap.md). Canonical URLs, header and footer, legacy redirects.
- [Copy deck](docs/copy-deck.md). Draft lines for each page.

## Out of v1

No blog in the main nav. No Typeform as the only convert path. No marketing chatbot. No invented headcount, logos, or “AI platform” claims.
