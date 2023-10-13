interface RangoActionWithoutTargetWithoutArg {
	arg: RangoActionWithTarget;
	type:
		| "historyGoBack"
		| "historyGoForward"
		| "navigateToPageRoot"
		| "navigateToNextPage"
		| "navigateToPreviousPage"
		| "closeOtherTabsInWindow"
		| "closeTabsToTheLeftInWindow"
		| "closeTabsToTheRightInWindow"
		| "cloneCurrentTab"
		| "moveCurrentTabToNewWindow"
		| "focusPreviousTab"
		| "focusFirstInput"
		| "unhoverAll"
		| "copyCurrentTabMarkdownUrl"
		| "scrollUpAtElement"
		| "scrollDownAtElement"
		| "scrollLeftAtElement"
		| "scrollRightAtElement"
		| "displayExtraHints"
		| "displayExcludedHints"
		| "displayLessHints"
		| "toggleHints"
		| "toggleTabMarkers"
		| "displayTogglesStatus"
		| "toggleKeyboardClicking"
		| "excludeSingleLetterHints"
		| "includeSingleLetterHints"
		| "refreshHints"
		| "enableUrlInTitle"
		| "disableUrlInTitle"
		| "increaseHintSize"
		| "decreaseHintSize"
		| "includeOrExcludeMoreSelectors"
		| "includeOrExcludeLessSelectors"
		| "excludeAllHints"
		| "confirmSelectorsCustomization"
		| "resetCustomSelectors"
		| "openSettingsPage"
		| "requestTimedOut"
		| "checkActiveElementIsEditable"
		| "refreshTabMarkers"
		| "showSavedIDs";
}

export interface RangoActionUpdateToggles {
	type: "enableHints" | "disableHints" | "resetToggleLevel";
	arg: "everywhere" | "global" | "tab" | "host" | "page" | "now";
}

export interface RangoActionCopyLocationProperty {
	type: "copyLocationProperty";
	arg:
		| "href"
		| "hostname"
		| "host"
		| "origin"
		| "pathname"
		| "port"
		| "protocol";
}

interface RangoActionSetHintStyle {
	type: "setHintStyle";
	arg: "boxed" | "subtle";
}

interface RangoActionSetHintWeight {
	type: "setHintWeight";
	arg: "auto" | "normal" | "bold";
}

interface RangoActionWithoutTargetWithNumberArg {
	type:
		| "closeTabsLeftEndInWindow"
		| "closeTabsRightEndInWindow"
		| "closePreviousTabsInWindow"
		| "closeNextTabsInWindow"
		| "cycleTabsByText";
	arg: number;
}

interface RangoActionWithoutTargetWithStringArg {
	type: "removeHintID";
	arg: string;
}

interface RangoActionWithoutTargetWithOptionalNumberArg {
	type:
		| "scrollUpPage"
		| "scrollDownPage"
		| "scrollLeftPage"
		| "scrollRightPage"
		| "scrollUpLeftAside"
		| "scrollDownLeftAside"
		| "scrollUpRightAside"
		| "scrollDownRightAside";
	arg?: number;
}

interface RangoActionWithTargets {
	arg: any;
	type:
		| "activateTab"
		| "openInBackgroundTab"
		| "clickElement"
		| "tryToFocusElementAndCheckIsEditable"
		| "focusElement"
		| "directClickElement"
		| "openInNewTab"
		| "copyLink"
		| "copyMarkdownLink"
		| "copyElementTextContent"
		| "showLink"
		| "hoverElement"
		| "includeExtraSelectors"
		| "excludeExtraSelectors"
		| "scrollElementToTop"
		| "scrollElementToBottom"
		| "scrollElementToCenter"
		| "setSelectionBefore"
		| "setSelectionAfter"
		| "focusAndDeleteContents"
		| "saveHintID";
	target: string[];
}

interface RangoActionWithTargetsWithOptionalNumberArg {
	type:
		| "scrollUpAtElement"
		| "scrollDownAtElement"
		| "scrollLeftAtElement"
		| "scrollRightAtElement";
	target: string[];
	arg?: number;
}

interface RangoActionWithoutTargetWith2StringArgs {
	type: "rangoActionOnSavedID";
	arg: string;
	arg2: string;
}

interface RangoActionInsertToField {
	type: "insertToField";
	target: string[];
	arg: string;
}

interface RangoActionOpenPageInNewTab {
	type: "openPageInNewTab";
	arg: string;
}

interface RangoActionScrollPosition {
	type: "storeScrollPosition" | "scrollToPosition";
	arg: string;
}

interface RangoActionfocusOrCreateTabByUrl {
	type: "focusOrCreateTabByUrl";
	arg: string;
}

interface RangoActionFocusTabByText {
	type: "focusTabByText";
	arg: string;
}

export type RangoActionWithTarget =
	| RangoActionWithTargets
	| RangoActionWithTargetsWithOptionalNumberArg
	| RangoActionInsertToField;

export type RangoActionWithoutTarget =
	| RangoActionWithoutTargetWithoutArg
	| RangoActionUpdateToggles
	| RangoActionWithoutTargetWithNumberArg
	| RangoActionWithoutTargetWithStringArg
	| RangoActionWithoutTargetWithOptionalNumberArg
	| RangoActionSetHintStyle
	| RangoActionSetHintWeight
	| RangoActionCopyLocationProperty
	| RangoActionOpenPageInNewTab
	| RangoActionWithoutTargetWith2StringArgs
	| RangoActionScrollPosition
	| RangoActionfocusOrCreateTabByUrl
	| RangoActionFocusTabByText;

export type RangoAction = RangoActionWithTarget | RangoActionWithoutTarget;

// Utilities
type RangoActionWithArg = RangoAction & { arg?: number | string };

export function hasArg(
	action: RangoActionWithArg
): action is RangoActionWithArg {
	return action.arg !== undefined;
}
