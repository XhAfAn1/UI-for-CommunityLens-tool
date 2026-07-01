# C2PA Asset Images

This folder stores the snapshot images used in the C2PA Content Credentials popup.

## Naming Convention

Each survey video has up to 4 images:

| Filename         | Used for                                      |
|-----------------|-----------------------------------------------|
| `{id}main.png`  | "Generated Video" — the main/final asset      |
| `{id}asset1.png`| 2nd node in the Content Journey (e.g., edited asset) |
| `{id}asset2.png`| 3rd node in the Content Journey (e.g., AI-generated source) |
| `{id}asset3.png`| 4th node in the Content Journey (e.g., original recording) |

## Example for S7.1

```
S7.1main.png      → The main composite/generated video thumbnail
S7.1asset1.png    → Intermediate asset (e.g., Photoshop edit)
S7.1asset2.png    → AI-generated asset (e.g., Adobe Firefly output)
S7.1asset3.png    → Original raw recording (e.g., Sony camera footage)
```

## Fallbacks

If an image file does not exist for a given slot, the UI will automatically
fall back to showing a **camera icon placeholder** — so it is safe to add
images one at a time.

## Supported Videos

- `S7.1` — (add your 4 images: S7.1main.png, S7.1asset1.png, S7.1asset2.png, S7.1asset3.png)
- `S7.2` — (add images as needed)
- `S7.3` — (add images as needed)
- `S7.4` — (add images as needed)
