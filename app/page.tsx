"use client";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Nav from "@/components/Nav";
import Products from "@/components/Products";
import { ThemeProvider } from "@emotion/react";
import { CssBaseline, createTheme } from "@mui/material";
const theme = createTheme({
  palette: {
    secondary: {
      main: "#FF4200",
      dark: "#FF4200",
    },
    success: {
      main: "#ffdbc9",
      dark: "#14342b",
    },
    info: {
      main: "#B3BFCB",
      dark: "#c0ddd5",
    },
  },
  typography: {
    fontFamily: ["Roboto", "sans-serif"].join(","),
  },
});
export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <main style={{ backgroundColor: "#fafafa" }}>
        <Header />
        <Nav />
        <Products />
        <Footer />
      </main>
    </ThemeProvider>
  );
}
