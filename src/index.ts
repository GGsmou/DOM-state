import { DOM_STATE_ATTRIBUTE } from './const';
import { HtmlSetter } from './types';
import { normalizeHtml, getAttribute, setAttribute } from './utils';

export const useDomState = <T>(
  element: HTMLElement,
  defaultState: T,
  setInitialInnerHtml: HtmlSetter<T> = null,
) => {
  if (getAttribute(DOM_STATE_ATTRIBUTE, element)) {
    throw new Error('DOM state already initialized');
  }

  setAttribute(DOM_STATE_ATTRIBUTE, element, defaultState);

  if (setInitialInnerHtml) {
    element.innerHTML = normalizeHtml(setInitialInnerHtml(defaultState));
  }

  const setState = (newState: T, setInnerHtml: HtmlSetter<T> = null): T => {
    setAttribute(DOM_STATE_ATTRIBUTE, element, newState);

    if (setInnerHtml) {
      element.innerHTML = normalizeHtml(setInnerHtml(newState));
    }

    return newState;
  };

  return [defaultState, setState] as const;
};

export const getState = <T>(element: HTMLElement): T | null => {
  return getAttribute(DOM_STATE_ATTRIBUTE, element) as T | null;
};
