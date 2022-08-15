import { ThemeProvider } from "styled-components";
import { NewTransactionsContextProvider } from "./context/newTransactionsContext";
import { Transactions } from "./pages/transactions";
import { defaultTheme } from "./styles/defaultTheme";
import { GlobalStyle } from "./styles/globalStyles";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <NewTransactionsContextProvider>
        <Transactions />
      </NewTransactionsContextProvider>
    </ThemeProvider>
  );
}
