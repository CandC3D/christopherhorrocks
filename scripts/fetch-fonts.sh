#!/usr/bin/env bash
# Refresh the self-hosted font files in src/fonts from Google Fonts.
# Run once when changing faces; the results are committed, so the site never
# calls a font CDN at page load.
set -euo pipefail
cd "$(dirname "$0")/.."
UA="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0 Safari/537.36"
mkdir -p src/fonts
out=src/fonts/fonts.css
: > "$out"
fetch() { # name, css2 family spec
  local name="$1" spec="$2"
  curl -sS -A "$UA" "https://fonts.googleapis.com/css2?family=${spec}&display=swap" -o /tmp/f.css
  local i=0
  while IFS= read -r url; do
    i=$((i+1))
    local file="${name}-${i}.woff2"
    curl -sS -o "src/fonts/${file}" "$url"
    sed -i "s#${url}#/fonts/${file}#" /tmp/f.css
  done < <(grep -o 'https://fonts.gstatic.com[^)]*' /tmp/f.css)
  cat /tmp/f.css >> "$out"
}
fetch merriweather "Merriweather:ital,opsz,wght@0,18..144,300..900;1,18..144,300..900"
fetch merriweather-sans "Merriweather+Sans:ital,wght@0,300..800;1,300..800"
fetch noto-sans-symbols-2 "Noto+Sans+Symbols+2"
fetch noto-sans-symbols "Noto+Sans+Symbols:wght@400"
echo "wrote $out with $(ls src/fonts/*.woff2 | wc -l) files"
