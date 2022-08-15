import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { api } from "../lib/axios";

type CreateTransaction = {
  name: string;
  type: string;
  value: number;
  variant: "income" | "outcome";
};

type NewTransactionsType = {
  id: number;
  name: string;
  value: number;
  type: string;
  createdAt: string;
  variant: "income" | "outcome";
};

interface NewTransactionsContextProps {
  Transactions: NewTransactionsType[];
  fetchTransactions(query?: string): Promise<void>;
  createTransacation(data: CreateTransaction): Promise<void>;
}

export const NewTransactionsContext = createContext(
  {} as NewTransactionsContextProps,
);

interface NewTransactionsContextProviderProps {
  children: ReactNode;
}

export function NewTransactionsContextProvider({
  children,
}: NewTransactionsContextProviderProps) {
  const [transactions, setTransactions] = useState<NewTransactionsType[]>([]);

  async function fetchTransactions(query?: string) {
    const response = await api.get("transactions", {
      params: {
        _sort: "createdAt",
        _order: "desc",
        q: query,
      },
    });
    const data = await response.data;

    setTransactions(data);
  }
  useEffect(() => {
    fetchTransactions();
  }, []);

  async function createTransacation(data: CreateTransaction) {
    const { name, type, value, variant } = data;
    const response = await api.post("transactions", {
      name,
      type,
      value,
      variant,
      createdAt: new Date().toISOString(),
    });

    if (response.data) {
      setTransactions((lastTransactios) => [response.data, ...lastTransactios]);
    }
  }

  return (
    <NewTransactionsContext.Provider
      value={{
        Transactions: transactions,
        fetchTransactions,
        createTransacation,
      }}
    >
      {children}
    </NewTransactionsContext.Provider>
  );
}

export function useNewTransactionsContext() {
  const context = useContext(NewTransactionsContext);

  if (!context) {
    throw new Error(
      "Você deve usar o useNewTransactionsContext dentro de um NewTransactionsContextProvider",
    );
  }
  return context;
}
