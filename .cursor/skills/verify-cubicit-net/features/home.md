# Home

Home is the marketing landing page. A visitor sees the CUBIC TECHNOLOGIES wordmark, a connected-experiences hero, a client quote, hiring advice cards, and on-page contact details.

## Sub-features

- `home-load` shows the hero heading and wordmark at `/`.
- `home-header` exposes Apply, Blog, and Get Started.
- `home-quote` shows the Uptown Agency testimonial.
- `home-contact` shows Contact Us with the Dallas address and `info@cubicit.net`.

## How to get to it (user POV)

- Open `https://www.cubicit.net/` in a browser.
- Follow a 301 from `https://cubicit.net/` to `https://www.cubicit.net/`.
- Choose the CUBIC TECHNOLOGIES wordmark from another page.

## Driving it with Cursor browser

Preconditions:

- `control-cubicit-net doctor` reports HTTP 200 at `https://www.cubicit.net`.
- No Typeform tab is required for this recipe.

- **Open home.** Navigate to `control-cubicit-net url`. The document title is `Cubic Technologies | Your Technology Partner of Choice.` and a level-1 heading reads `Engage Your Customers With Connected Experiences.`
- **Confirm header.** Snapshot the page. Links named `Apply`, `Blog`, and `Get Started` are present.
- **Confirm quote.** The heading region includes `What They Said` and the name `Joseph Alexander, The Uptown Agency`.
- **Confirm contact.** A heading `Contact Us` is visible. A link named `info@cubicit.net` is present. Do not click it.
- **Second read.** Run `control-cubicit-net http GET /`. Exit is 0, stdout starts with `HTTP 200`, and the excerpt contains the hero heading.
- **Proof.** Save an ARIA snapshot to `$ART/home.aria.txt` and a screenshot to `$ART/home.png`. Both show the CUBIC TECHNOLOGIES wordmark and the hero heading.

## Gotchas

- `https://cubicit.net` is not the canonical host. Doctor against `www`.
- Header `Get Started` opens Typeform in a new tab. Do not follow it on this recipe.
- Footer `For Employers` points at `/for-employers`, which returns HTTP 404. Do not treat that footer link as a working home proof.
- Squarespace search at `/search` returned HTTP 403 to unauthenticated curl. Do not use search as a home proof.
