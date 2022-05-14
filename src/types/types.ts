export interface Command {
	type: string;
	target?: string;
}

export interface Message {
	type: "request" | "response";
	action: Command;
}

export interface Intersector {
	element: Element;
	hintElement?: Element;
	hintText?: string;
	isVisible: boolean;
	clickableType: string | undefined;
}

export interface Rgba {
	r: number;
	g: number;
	b: number;
	a: number;
}

export type HintsStack = {
	tabId: number;
	free: string[];
	assigned: Map<string, number>;
};
