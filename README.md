# The World in One Day — Thursday, 26 November 2026

One image summing up the world's news of Thursday 26 November 2026: Houthi strikes on Saudi Arabia's Ras Tanura refinery and a Riyadh financial-district tower, Kim Jong Un's call for wider tactical nuclear deployment, ESA Hera's first close look at the stadium-sized crater on asteroid Dimorphos, Trump's new tariff package, the Solomon Islands–Australia security pact, and a 15-year-old's record double century in cricket.

[![news-image-20261126](https://make.fun/badge/news-image-20261126.svg)](https://make.fun/bounty/news-image-20261126)
[![rank](https://make.fun/badge/news-image-20261126/elpablo61/makefun-news-image-20261126/rank.svg)](https://make.fun/bounty/news-image-20261126)
[![entries](https://make.fun/badge/news-image-20261126/elpablo61/makefun-news-image-20261126/entries.svg)](https://make.fun/bounty/news-image-20261126)
[![reward](https://make.fun/badge/news-image-20261126/elpablo61/makefun-news-image-20261126/reward.svg)](https://make.fun/bounty/news-image-20261126)

## How it works

`main.ts` (Node 22, standard library only) copies `entry.png` into `$MAKEFUN_OUTPUT_DIR` (default `/output`) and checks it stays under the 1 MiB limit. The image itself is drawn by `render.py` (Python 3, Pillow) as a newspaper front page: masthead, date, lead story with illustration, and five more stories across regions and fields.

Run it locally:

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```
