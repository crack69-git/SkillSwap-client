import React from "react";
import { ThemeProvider } from "next-themes";
export function Providers({ children }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="light">
      {children}
    </ThemeProvider>
  );
}

export default Providers;
