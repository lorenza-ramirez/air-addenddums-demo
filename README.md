# Air Claims Prototype

A clickable prototype of the addendum flow:

1. **Claim page** (biller): AI summary, suggested action "Request addendum", the Defer drawer.
2. **Provider Inbox**: the addendum request, a note the provider can edit, Reject or Finalize.
3. **Back on the claim**: a "Resubmit claim" suggested action, a pre-submission check, and the resubmit drawer.

It is a prototype. All data is made up and nothing is saved. A refresh starts over.

## Run it on your computer

You need Node.js 18 or newer (https://nodejs.org).

```bash
npm install
npm run dev
```

Open the address it prints, usually http://localhost:5173.

## Put it on GitHub

Create an empty repository on github.com first (no README, no .gitignore). Then, in this folder:

```bash
git init
git add .
git commit -m "Air claims prototype"
git branch -M main
git remote add origin https://github.com/YOUR-NAME/YOUR-REPO.git
git push -u origin main
```

## Deploy on Vercel

**Option 1, from GitHub (easiest)**

1. Go to https://vercel.com/new and sign in.
2. Pick the repository you just pushed.
3. Leave the settings as they are. Vercel detects Vite. The build command is `npm run build` and the output folder is `dist`.
4. Press **Deploy**. You get a link when it finishes. Every push to `main` redeploys.

**Option 2, from the command line**

```bash
npx vercel
```

Answer the prompts, then run `npx vercel --prod` for the live link.

## Walk through the flow (about 2 minutes)

1. On the claim page, press **Accept** on the "Request addendum" suggestion.
2. In the drawer, check the AI-written context, press **Defer claim**. The status becomes "Addendum Requested" and a red dot appears on **Inbox** in the sidebar.
3. Open **Inbox**. The request is first, with a blue banner. Try **Reject** (with or without a reason), or press **Finalize Addendum & Re-Sign**.
4. A red dot appears on **Claims**. Open it. A "Resubmit claim" suggestion is waiting. Press **Accept**, wait for the check, then **Resubmit to Wellmark**.

Other things to try: the filter icon in the Inbox (dot when narrowed), the dropdown chips next to the note title, adding, editing and deleting your own deferral reasons, and dragging the bottom of the Defer drawer up.

## What is made up

- The claim number, pager, patient details, member IDs and the insurance card values.
- The Chart Note and Medical File names, the Activity feed entries and times.
- The diagnosis names, procedure descriptions and the dropdown options in the Inbox.
- The names "LH" (the biller) and "Submitted" and "Correction" (statuses after resubmitting).
- Dates assume today is Thursday, November 19, 2026.

## Files

- `src/ClaimDetails.jsx`: the whole prototype, one file, no extra libraries.
- `src/main.jsx`, `index.html`, `vite.config.js`: the small wrapper that runs and builds it.
- `vercel.json`: tells Vercel how to build it.

The font (Geist) loads from Google Fonts. Offline, the browser falls back to a system font.
