Drop the real brand font files here to activate them:

  StadtMitte.woff2   (or .woff / .ttf / .otf)   -> display / headings
  Masifa.woff2       (or .woff / .ttf / .otf)   -> body text

The @font-face rules in src/index.css already point here.
Until the files exist, the site falls back to Oswald (for StadtMitte)
and Archivo (for Masifa) so the layout still looks correct.
