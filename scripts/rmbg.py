#!/usr/bin/env python3

from rembg import remove
from PIL import Image
import sys
from pathlib import Path


def remove_background(input_path: Path, output_path: Path):
    with open(input_path, "rb") as f:
        input_data = f.read()

    output_data = remove(input_data)

    with open(output_path, "wb") as f:
        f.write(output_data)


def main():
    if len(sys.argv) < 2:
        print("Usage: rmbg.py <input.png> [output.png]")
        sys.exit(1)

    input_path = Path(sys.argv[1])
    output_path = (
        Path(sys.argv[2])
        if len(sys.argv) >= 3
        else input_path.with_name(input_path.stem + "_nobg.png")
    )

    if not input_path.exists():
        print(f"Error: {input_path} does not exist")
        sys.exit(1)

    remove_background(input_path, output_path)
    print(f"Saved: {output_path}")


if __name__ == "__main__":
    main()
