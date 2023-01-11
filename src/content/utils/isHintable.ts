import { matchesMarkedForInclusion } from "../hints/customHintsEdit";
import { getExtraHintsToggle, getShowExcludedToggle } from "../updateWrappers";
import {
	matchesCustomExclude,
	matchesCustomInclude,
	matchesExtraSelector,
	matchesHintableSelector,
} from "../hints/selectors";
import { isVisible } from "./isVisible";

function isRedundant(target: Element) {
	if (matchesCustomInclude(target)) return false;

	if (
		target.matches(":only-child") &&
		target.parentElement &&
		target.parentElement.textContent === target.textContent &&
		matchesHintableSelector(target.parentElement)
	) {
		return true;
	}

	if (
		target instanceof HTMLLabelElement &&
		target.control &&
		isVisible(target.control)
	) {
		return true;
	}

	return false;
}

function isHintableExtra(target: Element): boolean {
	const { cursor } = window.getComputedStyle(target);
	const parentCursor =
		target.parentElement &&
		window.getComputedStyle(target.parentElement).cursor;

	if (cursor === "pointer" && parentCursor === "pointer") {
		const targetLeft = target.getBoundingClientRect().left;
		const parentLeft = target.parentElement!.getBoundingClientRect().left;

		if (Math.abs(targetLeft - parentLeft) > 30) return true;
	}

	if (
		((cursor === "pointer" && parentCursor !== "pointer") ||
			target.matches(
				"[class*='button' i], [class*='btn' i], [class*='select' i], [class*='control' i], [jsaction]"
			)) &&
		matchesExtraSelector(target)
	) {
		return true;
	}

	return false;
}

export function isHintable(target: Element): boolean {
	if (
		getExtraHintsToggle() &&
		(matchesHintableSelector(target) || isHintableExtra(target))
	) {
		return true;
	}

	if (matchesCustomExclude(target) && !getShowExcludedToggle()) return false;

	if (matchesCustomInclude(target)) return true;

	return (
		(matchesHintableSelector(target) && !isRedundant(target)) ||
		matchesMarkedForInclusion(target)
	);
}
