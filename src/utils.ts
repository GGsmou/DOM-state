import { Html } from './types';

export const getAttribute = (attribute: string, element: HTMLElement) => {
  try {
    return JSON.parse(element.getAttribute(attribute) || 'null') as any;
  } catch (e) {
    console.error(e);
  }

  return null;
};

export const setAttribute = (
  attribute: string,
  element: HTMLElement,
  value: any,
) => {
  try {
    element.setAttribute(attribute, JSON.stringify(value));
  } catch (e) {
    console.error(e);
  }
};

export const normalizeHtml = (html: Html) => {
  if (html === null || html === undefined) {
    return '';
  }

  if (typeof html === 'number') {
    return `${html}`;
  }

  if (html instanceof HTMLElement) {
    return html.outerHTML;
  }

  return html;
};
