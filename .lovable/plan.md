Set `top1000.polsv.org` as the project’s primary published domain rather than using domain masking.

1. In Lovable, open **Project Settings → Project → Domains**.
2. If `top1000.polsv.org` is not listed, click **Connect Domain** and add it.
3. Complete DNS setup at your DNS provider:
   - For a subdomain like `top1000`, add the DNS record Lovable shows in the setup flow.
   - If using Cloudflare or another proxy, enable **Domain uses Cloudflare or a similar proxy** in the Advanced section of the connect flow.
4. Wait until `top1000.polsv.org` shows **Active**.
5. Open the **⋯ menu** next to `top1000.polsv.org` and choose **Set as Primary**.
6. Publish/update the app if prompted.
7. Test in an incognito window: `https://top1000.polsv.org` should remain in the address bar, while the `.lovable.app` URL redirects to it.

Important: do **not** use iframe/domain masking. Masking can break routing, forms, cookies, analytics, SEO, and auth flows. The correct setup is a real connected custom domain marked as Primary.