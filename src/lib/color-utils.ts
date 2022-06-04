import Color from "color";
import { assertDefined } from "../typing/typing-utils";

export function rgbaToRgb(rgba: Color, backgroundRgb: Color): Color {
	const { r, g, b } = rgba.object();
	const a = rgba.object().alpha ?? 1;
	assertDefined(r);
	assertDefined(g);
	assertDefined(b);
	assertDefined(a);

	const [backgroundR, backgroundG, backgroundB] = backgroundRgb.array();
	assertDefined(backgroundR);
	assertDefined(backgroundG);
	assertDefined(backgroundB);

	return new Color({
		r: Math.round((1 - a) * backgroundR + a * r),
		g: Math.round((1 - a) * backgroundG + a * g),
		b: Math.round((1 - a) * backgroundB + a * b),
	});
}

export function isRgb(color: Color): boolean {
	const alpha = color.object().alpha;
	return alpha === 1 || alpha === undefined;
}
