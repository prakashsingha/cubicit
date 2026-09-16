# Get Started

Get Started opens Cubic’s Typeform in a new tab so a visitor can start a conversation. Verification stops when the form is visible. Submitting creates a real lead.

## Sub-features

- `start-header` opens Typeform from header Get Started.
- `start-form` shows the Typeform at `https://cubicit.typeform.com/to/So4dfb`.
- `start-no-submit` leaves the form unsent.

## How to get to it (user POV)

- Choose `Get Started` in the header.
- Open `https://cubicit.typeform.com/to/So4dfb` directly.

## Driving it with Cursor browser

Preconditions:

- Home is healthy at `https://www.cubicit.net/`.
- `control-cubicit-net doctor` passed.
- The agent will not type into or submit the form.

- **Open Typeform.** From home, choose `Get Started`. A new tab URL starts with `https://cubicit.typeform.com/to/So4dfb`.
- **Confirm form.** Snapshot the Typeform tab. A Typeform document is visible. Do not fill fields. Do not choose submit.
- **Proof.** Save `$ART/get-started.aria.txt` and `$ART/get-started.png` showing the Typeform URL and an unsubmitted form. Close the Typeform tab afterward.

## Gotchas

- This is production. A submit emails Cubic. That is not a proof, it is a live lead.
- `Book a Consultation` on Apply is a different Typeform (`get-free-consultation.typeform.com`). Do not treat it as Get Started.
- Home `Get in Touch` and `info@cubicit.net` are mail links. Do not click them for this recipe.
