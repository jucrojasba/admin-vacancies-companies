// src\ui\theme\theme-context.tsx
"use client";

import { createContext, ReactNode } from "react";
import { DefaultTheme, ThemeProvider } from "styled-components";
import theme from "./theme";

interface ThemeContextType {
  theme: DefaultTheme;
}

export const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined
);

export const ThemeClientProvider = ({ children }: { children: ReactNode }) => {
  return (
    <ThemeContext.Provider value={{ theme }}>
      <ThemeProvider theme={theme}>
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};
