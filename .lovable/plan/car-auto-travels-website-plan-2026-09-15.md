# CAR & AUTO TRAVELS — website plan

Two pages (Home, Contact), light premium look, blue #1261D6 + navy #10233F, your real video and photos, everything pointing at one goal: a call to 9000728564.

## Your uploaded files and how each is used

- Travel video → full-width hero background on Home (autoplay, muted, loop, no sound, soft white overlay so text stays readable). A still frame from the video is saved as the poster image so slower phones see a picture instantly.
- 3 real car photos → hero-area/vehicle card gallery on Home and the Car card in "Our Vehicles".
- Photo of your father with the motorcycle → the About section ("Your Local Travel Partner").
- Note: I did not receive a separate reference design image or an auto photo. I will follow the premium layout described in your brief, and use the owner photo for the Auto card until you send an auto picture.

## Home page, in order

1. Sticky header: car-photo logo mark, "CAR & AUTO" navy + "TRAVELS" blue, Home / Contact links, blue CALL NOW button. Hamburger menu on phones.
2. Video hero: label, heading "Reliable Car & Auto" (navy) "Travel Services" (blue), your service-area line, CALL NOW 9000728564 and BOOK A TRIP → (goes to Contact).
3. Floating white feature bar: Car + Auto available · Local & long-distance travel · Pickup & drop.
4. About: owner photo left, the two paragraphs you wrote, service highlights, "CALL DADI RAMALAKSHMANA RAO" button.
5. Services: 4 cards — Car Travel, Auto Travel, Pickup & Drop, Long-Distance Travel (with Tirupati · Annavaram · Kakinada · Visakhapatnam · other places listed as examples, not fixed routes).
6. Our Vehicles: two large cards, Car (real photos) and Auto, each with a booking button to Contact.
7. "Planning a Long Trip?" section with destination chips and a call button.
8. Book Your Trip in 3 Simple Steps, then a big call button.
9. Final CTA "Need a Car or Auto?" with CALL NOW and CONTACT US →.
10. Navy footer: business name, tagline, address, phone, Home/Contact links, call button, © 2026.

Plus a fixed bottom call bar on phones only.

## Contact page

- Title "Contact CAR & AUTO TRAVELS" and your subtitle.
- Cards: Phone (tap to call), Location (K.J. Puram, Madugula, Anakapalli), Services list.
- "Request a Trip" form: name, phone, pickup, drop, date, travel type dropdown, message. Required fields are checked before sending.
- On submit: a clear success message plus two buttons — CALL NOW and "Send on WhatsApp", which opens WhatsApp to 919000728564 pre-filled with the trip details. Nothing is stored anywhere and no payment is taken, so no fake booking confirmation.
- Location block with "OPEN LOCATION IN GOOGLE MAPS" using a Maps search for your address.

## No invented content

No prices, no reviews, ratings, years of experience, awards, extra vehicles or customer numbers. Only the words and facts you supplied.

## Technical notes

- TanStack Start routes: `/` (Home) and `/contact`; reusable components Header, Hero, FeatureBar, About, Services, Vehicles, LongDistance, BookingSteps, BookingCTA, ContactForm, Location, Footer, MobileCallBar.
- Video and photos uploaded as CDN assets (`lovable-assets`) so the repo stays light; hero video `preload="none"` with poster, below-fold images `loading="lazy"`.
- Tokens (blue, navy, light #F6F9FC, radii, shadows) defined in `src/styles.css` @theme; Inter loaded via `<link>` in `__root.tsx`.
- Form validated with Zod + react-hook-form; WhatsApp message URL-encoded.
- Per-route `head()` with your title/description, plus TaxiService/LocalBusiness JSON-LD (name, phone, address, service areas).
