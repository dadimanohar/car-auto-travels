<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Generate the XML sitemap from explicit route-level inclusion decisions so public page URLs stay synchronized with routing.
- Contact form submits to Web3Forms from the visitor's browser (key fetched via a server function); Web3Forms' free plan rejects server-side and data-centre requests.
- Reviews are stored in Lovable Cloud and read/written through public server functions with the publishable key; average rating is computed in `src/lib/rating.ts`.
- Service subpages are data-driven from `src/lib/services-data.ts`; the sitemap adds their slugs explicitly because dynamic routes are skipped by the router-derived list.
