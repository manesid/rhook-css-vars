# rhook-css-vars

Blazingly fast CSS based hook to add theming to your react app.

![Example](./example.mp4)

## Why you should use it?

Just because it deals with CSS variables and We all know how they are fast and convenient.
and react doesn't need to rerender on theme change.

## Install

```bash
npm install rhook-css-vars
```

or

```bash
yarn add rhook-css-vars
```

## Usase

You need to import `{ Themer }` and use it anywhere in your application, providing it a theme value.

```jsx
import React from 'react';

import { Themer } from 'rhook-css-vars';

const yourTheme = {
  cssVariablename: 'blueviolet',
};

class Demo extends React.Component {
  render() {
    return <Themer theme={yourTheme} />;
  }
}
```

And now in your CSS use the variable name

```css
.yourCssClass {
  color: var(--cssVariablename);
}
```
