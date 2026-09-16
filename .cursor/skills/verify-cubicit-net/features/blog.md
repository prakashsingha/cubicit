# Blog

Blog lists Cubic Technologies hiring and management articles. A visitor opens the index from header or footer Blog, then opens a post by its title.

## Sub-features

- `blog-index` lists posts at `/cubic-technologies-blog`.
- `blog-header` reaches that index from header Blog.
- `blog-open-post` opens `How much does it cost to create an app?`
- `blog-home-cards` from home, the same post title is a link in the hiring-advice section.

## How to get to it (user POV)

- Choose `Blog` in the header.
- Choose `Blog` in the footer.
- Choose a post title card on home, such as `How much does it cost to create an app?`
- Open `/cubic-technologies-blog` directly.

## Driving it with Cursor browser

Preconditions:

- Home is healthy at `https://www.cubicit.net/`.
- `control-cubicit-net doctor` passed.

- **Header entry.** From home, choose `Blog`. The URL path is `/cubic-technologies-blog`. The document title contains `Blog` and `Cubic Technologies`. A link named `How much does it cost to create an app?` is present.
- **Open post.** Choose that title. The URL path is `/cubic-technologies-blog/how-much-cost-develop-app` and the post title remains visible.
- **Home card.** Navigate back to `/` and choose the same title from the hiring-advice section. The same post URL appears.
- **Second read.** Run `control-cubicit-net http GET /cubic-technologies-blog`. Exit is 0, stdout includes `HTTP 200` and the post title.
- **Proof.** Save `$ART/blog.aria.txt` and `$ART/blog.png` on the index. Both show Blog as the active area and at least one post title.

## Gotchas

- Duplicate title links exist (card image and text). Click the named link, not coordinates.
- Author links go to `?author=` filters. That is not the blog index proof.
- Do not use `/search` to find posts. Unauthenticated GET `/search` returned 403.
