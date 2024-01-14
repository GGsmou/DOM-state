export type Html = HTMLElement | string | number | null | undefined;
export type HtmlSetter<T> = ((newState: T) => Html) | null;
export type NewStateSetter<T> = T | ((currentState: T) => T);
