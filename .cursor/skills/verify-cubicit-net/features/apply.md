# Apply

Apply is the job-seeker page. A visitor reaches it from header Apply or footer For Job Seekers and sees how hiring works plus a call to get hired.

## Sub-features

- `apply-header` opens the page from the header Apply link.
- `apply-footer` opens the same page from footer For Job Seekers.
- `apply-headings` shows `Here’s how it works.` and `Ready. Set. Get Hired.`
- `apply-consult` exposes `Book a Consultation` without submitting the Typeform.

## How to get to it (user POV)

- Choose `Apply` in the header.
- Choose `For Job Seekers` in the footer.
- Open `/find-a-software-developer-job` directly.

## Driving it with Cursor browser

Preconditions:

- Home is healthy at `https://www.cubicit.net/`.
- `control-cubicit-net doctor` passed.

- **Header entry.** From home, choose `Apply`. Run a browser click on the link named `Apply`. The URL path is `/find-a-software-developer-job` and a level-1 heading reads `Here’s how it works.`
- **Confirm close.** A later heading reads `Ready. Set. Get Hired.` A link named `Book a Consultation` is present. Do not click it unless proving open-only Typeform separately.
- **Footer entry.** Return to `/`, then choose `For Job Seekers`. The same path and `Here’s how it works.` heading appear.
- **Second read.** Run `control-cubicit-net http GET /find-a-software-developer-job`. Exit is 0, stdout includes `HTTP 200` and `Here’s how it works.`
- **Proof.** Save `$ART/apply.aria.txt` and `$ART/apply.png`. Both show the Apply nav item and `Here’s how it works.`

## Gotchas

- Header Apply is the same destination as footer For Job Seekers. Prove both entry points. Do not skip the footer click.
- `Book a Consultation` is an external Typeform. Opening it is not a completed application.
- Do not use `/for-employers` as an apply proof. That path 404s.
