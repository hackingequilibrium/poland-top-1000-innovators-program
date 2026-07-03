## Goal
Make `https://top1000.polsv.org` stay in the browser address bar when visitors open the site, instead of redirecting to the `.lovable.app` URL.

## Important diagnosis
If entering `top1000.polsv.org` changes the address bar to the Lovable URL, then the DNS is not connected as a real Lovable custom domain. It is currently acting like a redirect/forwarding setup at the DNS/registrar/proxy level.

Domain masking/iframe forwarding is not the right fix. It may keep the URL visually, but it can break routing, forms, cookies, analytics, SEO, and auth.

## Correct fix
1. In Lovable, open **Project Settings → Project → Domains**.
2. Click **Connect Domain** and enter exactly:
   `top1000.polsv.org`
3. If Lovable says the domain cannot be added, check these likely causes:
   - The domain/subdomain is already attached to another Lovable project.
   - The domain was previously added and is stuck in an incomplete setup state.
   - You are adding the wrong value, such as `https://top1000.polsv.org` instead of only `top1000.polsv.org`.
   - Your workspace/project permissions do not allow domain changes.
   - The project is not published yet.
4. In the manual DNS setup, do not use URL forwarding, redirect records, frame forwarding, or masking.
5. Add the DNS record Lovable shows for `top1000.polsv.org` at the DNS provider.
   - For a subdomain, Lovable may show either an A record or CNAME-style setup depending on the flow/proxy mode.
   - If you use Cloudflare or another DNS proxy, enable **Domain uses Cloudflare or a similar proxy** in the Advanced section of the Lovable domain setup flow.
6. Wait for the domain status in Lovable to become **Active**.
7. Open the **⋯ menu** next to `top1000.polsv.org` and choose **Set as Primary**.
8. Test in an incognito/private browser window:
   - `https://top1000.polsv.org` should stay in the address bar.
   - The `.lovable.app` URL should redirect to `top1000.polsv.org`.

## If Lovable still will not let you add it
Use this exact issue description when contacting Lovable support:

> I need to connect `top1000.polsv.org` as a real custom domain for my published project. DNS currently forwards/redirects to the Lovable URL, but I do not want forwarding or masking. Lovable is not letting me add `top1000.polsv.org` in Project Settings → Domains. Please release or attach this subdomain so I can set it as Primary.

## What not to do
Do not use domain masking, iframe forwarding, or registrar URL forwarding. Those make the domain behave like a wrapper around the Lovable site instead of a real hosted custom domain.