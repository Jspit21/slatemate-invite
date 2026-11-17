# Slate Mate — invite links

Landing pages for invite links shared from the **Slate Mate** iOS app, served by
GitHub Pages at <https://jspit21.github.io/slatemate-invite/>.

Chat apps only make `https://` links tappable, so the app shares

    https://jspit21.github.io/slatemate-invite/join-group#<code>
    https://jspit21.github.io/slatemate-invite/add-friend#<code>

and each page shows an "Open in Slate Mate" button that hands the code to the
app as `slatemate://join-group?code=<code>` (or `add-friend`).

| File | Purpose |
|---|---|
| `join-group.html` | Group invite landing page |
| `add-friend.html` | Friend invite landing page |
| `invite.js` | Reads the code from the URL and fills in the button |
| `style.css` | Shared styles, matching the policy site |
| `index.html` | What someone sees if they open the site with no invite |

**The app depends on these URLs.** They are compiled into shipped builds, so
renaming or removing a page, or this repository, breaks every invite link
already shared.

No external fonts, scripts, or assets. `invite.js` is same-origin, stores
nothing, and reads the code from the URL fragment, which browsers never send to
the server.

To preview locally:

```bash
python3 -m http.server 8090    # then open http://localhost:8090/join-group.html#abc123
```

Every push to `main` redeploys the site. The policy pages live in
[slatemate-legal](https://github.com/Jspit21/slatemate-legal).

© 2026 Jacob Spitale. All rights reserved.
