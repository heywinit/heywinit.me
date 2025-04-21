/**
 * Converts HSL color values to RGB in normalized format (0-1)
 * @param h - Hue [0-1]
 * @param s - Saturation [0-1]
 * @param l - Lightness [0-1]
 * @returns RGB values as [r, g, b] with each value in range [0-1]
 */
export function hslToRgb(
	h: number,
	s: number,
	l: number,
): [number, number, number] {
	let r = 0;
	let g = 0;
	let b = 0;

	if (s === 0) {
		// Achromatic (gray)
		r = g = b = l;
	} else {
		const hue2rgb = (p: number, q: number, t: number): number => {
			let tValue = t;
			if (tValue < 0) tValue += 1;
			if (tValue > 1) tValue -= 1;
			if (tValue < 1 / 6) return p + (q - p) * 6 * tValue;
			if (tValue < 1 / 2) return q;
			if (tValue < 2 / 3) return p + (q - p) * (2 / 3 - tValue) * 6;
			return p;
		};

		const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
		const p = 2 * l - q;
		r = hue2rgb(p, q, h + 1 / 3);
		g = hue2rgb(p, q, h);
		b = hue2rgb(p, q, h - 1 / 3);
	}

	return [r, g, b];
}
