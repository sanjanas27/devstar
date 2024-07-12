import colorsys

def rgb_to_hex(r, g, b):
    """Convert RGB to Hex."""
    return "#{:02x}{:02x}{:02x}".format(r, g, b)

def hex_to_rgb(hex):
    """Convert Hex to RGB."""
    hex = hex.lstrip('#')
    return tuple(int(hex[i:i+2], 16) for i in (0, 2, 4))

def rgb_to_hsv(r, g, b):
    """Convert RGB to HSV."""
    return colorsys.rgb_to_hsv(r/255.0, g/255.0, b/255.0)

def hsv_to_rgb(h, s, v):
    """Convert HSV to RGB."""
    rgb = colorsys.hsv_to_rgb(h, s, v)
    return tuple(int(c * 255) for c in rgb)

def lighten_color(color, amount=0.5):
    """Lighten the given color by the amount (0-1)."""
    r, g, b = hex_to_rgb(color)
    r = int(r + (255 - r) * amount)
    g = int(g + (255 - g) * amount)
    b = int(b + (255 - b) * amount)
    return rgb_to_hex(r, g, b)

def darken_color(color, amount=0.5):
    """Darken the given color by the amount (0-1)."""
    r, g, b = hex_to_rgb(color)
    r = int(r * (1 - amount))
    g = int(g * (1 - amount))
    b = int(b * (1 - amount))
    return rgb_to_hex(r, g, b)

def generate_palette(base_color, n_colors):
    """Generate a palette of n colors based on the base color."""
    base_rgb = hex_to_rgb(base_color)
    hsv = rgb_to_hsv(*base_rgb)
    palette = []
    for i in range(n_colors):
        h = (hsv[0] + i / n_colors) % 1.0
        new_rgb = hsv_to_rgb(h, hsv[1], hsv[2])
        palette.append(rgb_to_hex(*new_rgb))
    return palette

if _name_ == "_main_":
    # Example usage
    print("Hex #ff5733 to RGB:", hex_to_rgb("#ff5733"))
    print("RGB (255, 87, 51) to Hex:", rgb_to_hex(255, 87, 51))
    print("RGB (255, 87, 51) to HSV:", rgb_to_hsv(255, 87, 51))
    print("HSV (0.04, 0.8, 1.0) to RGB:", hsv_to_rgb(0.04, 0.8, 1.0))
    print("Lighten #ff5733 by 50%:", lighten_color("#ff5733", 0.5))
    print("Darken #ff5733 by 50%:", darken_color("#ff5733", 0.5))
    print("Generate palette from #ff5733 with 5 colors:", generate_palette("#ff5733", 5))