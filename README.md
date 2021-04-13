# rhook-css-vars

Blazingly fast CSS based hook to add theming to your react app.

<video width="320" height="240" controls>
  <source src="./example.mp4" type="video/mp4">
</video>

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

## Changing theme

You can change the theme dynamically by providing a new theme prop.
You can use `Themer` without providing any children as well (Just like the below example)

```jsx
import React, { useState } from 'react';
import { Themer } from 'rhook-css-vars';
import './App.css';

const redtheme = {
  background: 'red',
};

const bluetheme = {
  background: 'blue',
};

function App() {
  const [theme, settheme] = useState('red');
  return (
    <div className="App">
      <header className="App-header">
        <h3>Toggle Theme</h3>
        <div>
          <button
            onClick={() => {
              settheme('red');
            }}
            className="btn red"
          >
            Red
          </button>
          <button
            onClick={() => {
              settheme('blue');
            }}
            className="btn blue"
          >
            Blue
          </button>
        </div>
        <Themer theme={theme === 'red' ? redtheme : bluetheme} />
      </header>
    </div>
  );
}

export default App;
```

## Props

`theme` - `required` This is just an object with key-value pair (`css-variable-name : value`)
`elementId` - By default the variables are applied to `html` element.if you want to use a custom element
then make sure it is mounted and won't change after.
