import { useEffect, useRef, useState, ReactElement } from 'react';

type ThemeMap = {
  [key: string]: string;
};

interface Props {
  elementId?: string;
  theme: ThemeMap | null;
  children?: ReactElement<any>;
}

export function usePrevious<T>(value: T) {
  // The ref object is a generic container whose current property is mutable ...
  // ... and can hold any value, similar to an instance property on a class
  const ref = useRef<T>();

  // Store current value in ref
  useEffect(() => {
    if (value !== undefined) ref.current = value;
  }, [value]); // Only re-run if value changes

  // Return previous value (happens before update in useEffect above)
  return ref.current;
}

export const Themer = ({ elementId, theme, children }: Props) => {
  const [optionalElement, setoptionalElement] = useState<HTMLElement | null>();
  const previousTheme = usePrevious(theme);

  const addCssVariables = (variables: ThemeMap) => {
    const element = optionalElement || document.documentElement;

    Object.keys(variables).forEach((key: string) => {
      if (element == null) return;

      element.style.setProperty(`--${key}`, variables[key]);
    });
  };

  const removeCssVariables = (variables: ThemeMap) => {
    const element = optionalElement || document.documentElement;

    Object.keys(variables).forEach((key: string) => {
      if (element == null) return;

      element.style.removeProperty(`--${key}`);
    });
  };

  useEffect(() => {
    if (previousTheme !== theme) {
      if (theme != null) {
        if (previousTheme != null) {
          removeCssVariables(previousTheme);
        }
        addCssVariables(theme);
      } else if (previousTheme != null) {
        removeCssVariables(previousTheme);
      }
    }
  }, [theme]);

  useEffect(() => {
    if (elementId != null) {
      setoptionalElement(document.getElementById(elementId));
    }

    if (theme) {
      addCssVariables(theme);
    }
  }, []);

  return children || null;
};
