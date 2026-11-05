# Plan: New pages, reviews with ratings, Web3Forms contact delivery

## What you get

- **Services section with subpages** — a Services page linking to one page per service (Car Travel & Taxi, Auto Travel, Pickup & Drop, Long-Distance Travel). Each subpage explains what we provide, where we go, and ends with Call / WhatsApp buttons.
- **FAQs in two places** — quick answers at the bottom of the Services page, plus a separate full FAQ page linked in the menu.
- **Reviews page** — anyone can leave a review (name, star rating 1–5, comment). Reviews are saved in your website's database and shown on the page automatically. The average star rating is calculated from all reviews and displayed at the top. No invented or sample reviews — only real ones visitors submit.
- **Areas Served page** — one page listing every town and area you serve (good for Google).
- **Contact form delivered to your email via Web3Forms** — the existing trip request form keeps its look and validation, but submissions now also reach your email through Web3Forms. The Call Now and WhatsApp options stay. (Optional: I can also keep a stored copy of submissions in the database so leads are safe if email delivery fails — say the word.)
- **Internal linking & SEO** — new menu and footer links (Services, FAQ, Reviews, Areas), cross-links between pages, breadcrumb markup, per-page titles/descriptions/social tags, all new pages added to the XML sitemap, and llms.txt updated.

## Order of work

1. Turn on the website database (needed to store reviews).
2. Ask you for the Web3Forms access key in a secure entry form (you said you'll paste it — get it free at web3forms.com with the email where submissions should arrive). The key is stored safely on the server; visitors never see it. The form works in preview only after the key is added.
3. Build the five new pages, the review form and rating summary, and the Web3Forms delivery.
4. Wire navigation, internal links, schema markup, sitemap, and llms.txt.
5. Test: submit one review and one trip request, confirm the review displays with the rating and the form delivers, then remove the test entries.

## Technical notes

- Database: one `reviews` table (name, rating, comment, created date). Visitors can add reviews; everyone can read them. Spam or abusive reviews can be hidden for you on request later.
- Web3Forms: submissions are sent from server code to Web3Forms using your access key kept as a server secret — never in browser code. Input stays validated with limits as today.
- Every new page gets its own SEO title, description, OpenGraph/Twitter tags, canonical URL, and `sitemap: true` so the generated XML sitemap includes it automatically.
- No prices, ratings counts, or business claims will be invented anywhere.

## Out of scope / later

- An About page, review moderation dashboard, or stored copies of contact submissions — add any of these when you ask.
