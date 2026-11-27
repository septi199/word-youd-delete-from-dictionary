# Submission notes — turn 1 (build only)

- **Bounty:** The Word You'd Delete From the Dictionary
- **Slug:** u-puan-the-word-you-d-delete-from-the-dictionary-9e774bc2
- **Prize:** $2 total, 5 paid places (1st $0.73, 2nd $0.50, 3rd $0.35, 4th $0.25, 5th $0.17)
- **Deadline:** Fri 27 Nov 2026 13:35 WIB (2026-11-27T06:35:00Z)
- **Repo:** septi199/word-youd-delete-from-dictionary (not yet pushed)

## Entry

- **Entry line:** `defenestration`
- **Char count:** 14
- **Gate:** `/output/entry.txt` must be UTF-8 text of 1 to 77 characters, not only whitespace; entry must be exactly one word, spelled correctly, nothing added.
- **Output sha256:** `3e2847017717948152dd0b18359a4a1e6eea7c734142373afce3cdcfcdac12d9`
  (sha256 of the exact 14 bytes `defenestration`, no trailing newline — verified byte-identical between `node main.ts` output and the entry string)
- **Entry commit (local HEAD at build):** `b4f42a464ce4eef13be5aa405b59cec80c9f7d36`
  (holds main.ts, README.md, LICENSE, NOTES.md, .makefun/owner.json)

## Status

- Turn 1 DONE: entry built, verified locally (`node main.ts` → `/output/entry.txt`, 14 bytes, sha256 above), committed locally.
- **Turn 2 DONE:** main.ts refactored into separate functions (`buildLine` / `checkLength` / `resolveOutputPath` / `writeEntry` / `verifyEntry` / `main`); output verified byte-identical (sha256 unchanged). Turn-2 local HEAD: `75ab8ee06e63bac9234243f2c3dde677a84edde6` (main.ts only).
- Still pending with the parent: bundle, check, push to GitHub, repo About, submit.
