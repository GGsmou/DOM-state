import { DOM_STATE_ATTRIBUTE } from './const';
import { HtmlSetter, NewStateSetter } from './types';
import { normalizeHtml, getAttribute, setAttribute } from './utils';

export const useDomState = <T>(
  element: HTMLElement,
  defaultState: T,
  setInitialInnerHtml: HtmlSetter<T> = null,
) => {
  setAttribute(DOM_STATE_ATTRIBUTE, element, defaultState);

  if (setInitialInnerHtml) {
    element.innerHTML = normalizeHtml(setInitialInnerHtml(defaultState));
  }

  const getState = (): T => {
    return getAttribute(DOM_STATE_ATTRIBUTE, element) as T;
  };

  const setState = (
    newStateSetter: NewStateSetter<T>,
    setInnerHtml: HtmlSetter<T> = null,
  ) => {
    const newState =
      typeof newStateSetter === 'function'
        ? (newStateSetter as (currentState: T) => T)(getState())
        : newStateSetter;

    setAttribute(DOM_STATE_ATTRIBUTE, element, newState);

    if (setInnerHtml) {
      element.innerHTML = normalizeHtml(setInnerHtml(newState));
    }
  };

  return [getState, setState] as const;
};
