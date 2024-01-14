# DOM-state

Simple library for managing state with a `data-attributes`.

```bash
npm install dom-state
```

## How to use

```ts
import { useDomState } from 'dom-state';

const [getState, setState] = useDomState(element, 0);

button.addEventListener('click', () => {
  setState(
    (prev) => prev + 1, // or direct value
    (newState) => `counter: ${newState}`,
  );
});
```

For more details check [source code](https://github.com/GGsmou/DOM-state/blob/main/src/index.ts)

## How to contribute

If you want to add something, or fix a bug create an issue/PR [here](https://github.com/GGsmou/DOM-state), I make sure to check it out.

## PS

This is fun project, inspired by [article](https://guseyn.com/html/posts/templates-instead-of-reactivity.html), so use in production at your own risk :)
