# cubicit.net verification map

This directory is the maintained source for verifying visitor-facing behavior of the live Cubic Technologies site. Read the index before driving the site, then use the matching feature file as the recipe.

## Baseline preconditions

- Record the site with `.cursor/skills/verify-cubicit-net/control-cubicit-net launch`.
- Base URL is `https://www.cubicit.net` unless `VERIFY_BASE_URL` says otherwise.
- Run `control-cubicit-net doctor` and require HTTP 200 plus the Cubic Technologies home heading.
- Never submit Typeform, never send email, never POST.
- This is a shared production Squarespace site. There is no disposable data directory.

## Driving conventions

- Start every recipe from the home page unless its preconditions say otherwise.
- Prefer ARIA roles and accessible names over CSS selectors or DOM position.
- Treat every command as literal. Keep quoted names and flags unchanged.
- Run browser actions through the Cursor browser tools against `control-cubicit-net url`.
- Run a second HTML read through `control-cubicit-net http GET <path>`.
- Do not remove proof artifacts during cleanup.

## Proof and skip reporting

- Capture the user action and the resulting state, not only the final screen.
- UI proof includes an ARIA snapshot and a screenshot with the CUBIC TECHNOLOGIES wordmark visible.
- HTTP proof includes the command, status, and a heading or title excerpt.
- Record the feature ID and entry point used with every artifact.
- Report an unreachable path with the attempted command and the unmet precondition.
- Do not report a skipped entry point as verified through a different path.

## Feature entry contract

Each feature file starts with an H1 title and one paragraph describing the user-visible behavior. It then uses exactly four H2 sections in this order.

1. `Sub-features` lists short IDs with one line for each behavior.
2. `How to get to it (user POV)` lists every user entry point.
3. `Driving it with Cursor browser` starts with `Preconditions:` and uses labeled bullets that pair each user action with an exact command and observable result.
4. `Gotchas` lists traps that can waste or invalidate a verification run.

Keep implementation details out of the map. Name only user paths, stable handles, required state, commands, and observable proof.

## Features

- [Home](./home.md) covers the landing hero, header nav, testimonials, and on-page contact.
- [Apply](./apply.md) covers the job-seeker page from header Apply and footer For Job Seekers.
- [Blog](./blog.md) covers the blog index, a post open, and return via header Blog.
- [Get Started](./get-started.md) covers opening the Typeform without submitting.
