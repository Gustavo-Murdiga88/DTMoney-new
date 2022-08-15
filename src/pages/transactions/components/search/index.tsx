import { MagnifyingGlass } from "phosphor-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import { ContainerSearch } from "./styles";
import { useNewTransactionsContext } from "../../../../context/newTransactionsContext";

const schema = z.object({
  transactions: z.string({
    required_error: "O Valor é necessário",
  }),
});

type FormData = z.infer<typeof schema>;

export function Search() {
  const { fetchTransactions } = useNewTransactionsContext();
  const formMethods = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const handleSubmit = formMethods.handleSubmit(async ({ transactions }) => {
    await fetchTransactions(transactions);
  });

  return (
    <ContainerSearch onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Encontre transações"
        {...formMethods.register("transactions")}
      />
      <button type="submit">
        <MagnifyingGlass size={16} />
        Buscar
      </button>
    </ContainerSearch>
  );
}
