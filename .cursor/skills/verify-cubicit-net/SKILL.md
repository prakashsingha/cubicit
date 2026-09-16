---
name: verify-cubicit-net
description: Drive the live Cubic Technologies Squarespace site (www.cubicit.net) the way a visitor does — doctor, mapped feature, proof artifacts. Use when proving a public-page change, before calling a cubicit.net UI change done, or when asked to verify cubicit.net.
disable-model-invocation: true
---

# Verify cubicit.net

This checkout has no app binary, package manifest, or local dev server. The user surface is the live Squarespace site at `https://www.cubicit.net`. `https://cubicit.net` 301s there.

Read `features/README.md` before driving. A proof that uses one convenient entry point is incomplete when the map lists others.

## Launch

From the repo root:

```bash
chmod +x .cursor/skills/verify-cubicit-net/control-cubicit-net   # once
.cursor/skills/verify-cubicit-net/control-cubicit-net launch
.cursor/skills/verify-cubicit-net/control-cubicit-net doctor
```

- There is no process to start. `launch` records `VERIFY_BASE_URL` (default `https://www.cubicit.net`) and runs doctor.
- Ready: `GET /` returns HTTP 200 and the HTML contains `Cubic Technologies` plus `Engage Your Customers With Connected Experiences`.
- Teardown: `.cursor/skills/verify-cubicit-net/control-cubicit-net cleanup` (removes run state only).

This is production. Two agents cannot isolate data. Drive read-only. Never submit Typeform, never send mail, never post the contact path.

## Doctor

Run first whenever anything looks off:

```bash
.cursor/skills/verify-cubicit-net/control-cubicit-net doctor
```

Pass means: recorded URL answers `GET /` with HTTP 200, and the body identifies Cubic Technologies with the home heading above.

## Drive

No `control-cubicit-net browser` binary. Use the Cursor browser tools against `control-cubicit-net url`. Prefer ARIA roles and accessible names over CSS or coordinates.

Stable handles (from the live site, not examples):

| Surface | Handle |
|---|---|
| Header logo | first link in the header (CUBIC TECHNOLOGIES wordmark) |
| Header nav | links `Apply`, `Blog`, `Get Started` (`data-test="template-nav"` on Apply/Blog) |
| Home hero | heading `Engage Your Customers With Connected Experiences.` |
| Home contact | heading `Contact Us`; link `info@cubicit.net`; link `Get in Touch` |
| Footer | links `Blog`, `For Job Seekers`, `For Employers` |
| Apply | URL `/find-a-software-developer-job`; heading `Here’s how it works.`; heading `Ready. Set. Get Hired.`; link `Book a Consultation` |
| Blog index | URL `/cubic-technologies-blog`; title `Blog — Cubic Technologies \| Your Technology Partner of Choice.`; post titles such as `How much does it cost to create an app?` |
| Get Started | `https://cubicit.typeform.com/to/So4dfb` (new tab). Open only. Never submit. |

`control-cubicit-net http` is GET-only and is for a second read of HTML a visitor could also load. It is not a substitute for clicking the same header links.

## Evidence

Create a folder per run (survives cleanup):

```bash
ART="$(.cursor/skills/verify-cubicit-net/control-cubicit-net artifacts)"
# writes .cursor/skills/verify-cubicit-net/artifacts/<VERIFY_RUN_ID or UTC timestamp>/
```

Proof standards:

- Exercise the real visitor path (header/footer links, then the destination heading).
- Capture the action and the resulting state (URL + heading), not only a final screenshot.
- UI proof includes an ARIA snapshot and a screenshot with the CUBIC TECHNOLOGIES wordmark visible.
- HTTP proof includes method, path, status, and a body excerpt with the heading or title.
- Do not treat a Typeform load as a completed Get Started. That path is proven only as far as the form appearing, and only when the recipe says to open it.
- Mocks are not available. This is the production site.

## Cleanup

```bash
.cursor/skills/verify-cubicit-net/control-cubicit-net cleanup
```

Removes `tmp/verify-cubicit-net/run` only. Never kill by process name. There is no site process owned by this skill. Proof artifacts under `.cursor/skills/verify-cubicit-net/artifacts/` stay.

## Helpers

`control-cubicit-net` is executable. Invocation is in Launch, Doctor, Evidence, and Cleanup above.
