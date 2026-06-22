"""
Remove white/near-white backgrounds from Moza PNG images.
Usage:  python remove_bg.py public/moza-sneakers.png public/moza-sneakers.png
Or to batch all new generated mozas:
  python remove_bg.py
"""
from PIL import Image
import sys, glob

def remove_white_bg(in_path: str, out_path: str, threshold: int = 230) -> None:
    img = Image.open(in_path).convert("RGBA")
    pixels = img.getdata()
    new_pixels = []
    for r, g, b, a in pixels:
        # If all channels are close to white, make transparent
        if r > threshold and g > threshold and b > threshold:
            new_pixels.append((r, g, b, 0))
        else:
            new_pixels.append((r, g, b, a))
    img.putdata(new_pixels)
    img.save(out_path, "PNG")
    print(f"Saved: {out_path}")

if len(sys.argv) == 3:
    remove_white_bg(sys.argv[1], sys.argv[2])
else:
    # Batch mode: process all moza-*.png in public/
    targets = (
        glob.glob("public/moza-sneakers.png") +
        glob.glob("public/moza-globe.png") +
        glob.glob("public/moza-chapter.png") +
        glob.glob("public/moza-megaphone-city.png") +
        glob.glob("public/moza-brain-laptop.png") +
        glob.glob("public/moza-map-pin.png")
    )
    for path in targets:
        remove_white_bg(path, path)
    print(f"Processed {len(targets)} images.")
