# Jio-bp Retail Outlet Dealership – Apply Form

A realistic, print-ready specimen of the **Retail Outlet Dealer (Petrol / Diesel Pump)** application form styled after Reliance BP Mobility Limited (Jio-bp). Pure HTML / CSS / JS — no build step, just open `index.html` in any modern browser.

## Preview

Open the form:

```bash
# On Linux / macOS
xdg-open index.html   # or: open index.html
```

Or serve locally:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Features

- Official government-style layout with Jio-bp branding, watermark, and instructions strip.
- Sections A–H covering personal details, KYC (Aadhaar / PAN), address, proposed outlet location, education, finance, documents enclosed, declaration, and office-use box.
- Pre-filled sample data:
  - **Applicant:** RAIYAN RANGREZZ
  - **Father's Name:** MOHAMMAD TAHIR
  - **Aadhaar:** 6037 4805 3039
  - **Address:** Jasrana Main Road, Firozabad, Uttar Pradesh – 283136
  - **Date of Application:** 14 / 07 / 2026
- Auto-generated application number per session.
- Aadhaar auto-formatting (groups of 4 digits).
- **Print / Save as PDF** button — clean print stylesheet (A4, `@page` margin 10mm).
- Fully responsive — works on mobile as well as A4 print.

## Files

- `index.html` – the form markup.
- `styles.css` – form styling, watermark, print rules.
- `script.js` – print, reset, Aadhaar formatting, auto-uppercase.

## Disclaimer

This is a **specimen** / mock form for personal use. It is **not** an official Reliance BP Mobility Ltd. document. To apply for a real Jio-bp retail outlet dealership, use the official portal: <https://www.jiobp.com/business-with-us/retail-outlet-dealership>.
