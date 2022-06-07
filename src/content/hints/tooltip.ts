import tippy from "tippy.js";
import { Intersector } from "../../typing/types";
import { applyEmphasisStyles, applyInitialStyles } from "./styles";

export function showTooltip(
	target: Intersector,
	text: string,
	duration: number
) {
	const hintElement = target.hintElement as HTMLElement;
	hintElement.id = "rango-tooltip";
	hintElement.dataset["tippyContent"] = text;
	const instance = tippy(hintElement, {
		zIndex: 2_147_483_647,
		appendTo: hintElement.parentElement!,
		maxWidth: "none",
	});
	instance.show();
	applyEmphasisStyles(target, false);
	setTimeout(() => {
		applyInitialStyles(target);
		instance.hide();
		hintElement.removeAttribute("id");
	}, duration);
}