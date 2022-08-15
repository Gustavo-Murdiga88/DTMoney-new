import { Header } from "../../components/header";
import { Summary } from "../../components/summary";
import { useNewTransactionsContext } from "../../context/newTransactionsContext";
import { formatDate, formatMoney } from "../../helpers";
import { Search } from "./components/search";
import {
  PriceHighLight,
  TableTransactionsList,
  TransactionsContainer,
} from "./styles";

export function Transactions() {
  const { Transactions } = useNewTransactionsContext();
  return (
    <div>
      <Header />
      <Summary />

      <TransactionsContainer>
        <Search />
        <TableTransactionsList>
          <tbody>
            {Transactions.map((transaction) => (
              <tr key={transaction.id}>
                <td width="50%">{transaction.name}</td>
                <td>
                  <PriceHighLight variant={transaction.variant}>
                    {transaction.variant === "outcome" && "- "}
                    {formatMoney.format(transaction.value)}
                  </PriceHighLight>
                </td>
                <td>{transaction.type}</td>
                <td>{formatDate.format(new Date(transaction.createdAt))}</td>
              </tr>
            ))}
          </tbody>
        </TableTransactionsList>
      </TransactionsContainer>
    </div>
  );
}
