import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from "phosphor-react";
import { SummaryCard, SummaryContainer } from "./styles";
import { useNewTransactionsContext } from "../../context/newTransactionsContext";
import { formatMoney } from "../../helpers";

export function Summary() {
  const { Transactions } = useNewTransactionsContext();

  const finalResult = Transactions.reduce(
    (acc, transaction) => {
      if (transaction.variant === "income") {
        acc.income += transaction.value;
        acc.total += transaction.value;
        return acc;
      }
      acc.outcome += transaction.value;
      acc.total -= transaction.value;
      return acc;
    },
    {
      total: 0,
      income: 0,
      outcome: 0,
    },
  );

  return (
    <SummaryContainer>
      <SummaryCard>
        <header>
          <span>Entradas</span>
          <ArrowCircleUp size={32} color="#00B37E" />
        </header>
        <strong>{formatMoney.format(finalResult.income)}</strong>
      </SummaryCard>
      <SummaryCard>
        <header>
          <span>Saídas</span>
          <ArrowCircleDown size={32} color="#F75A68" />
        </header>
        <strong>{formatMoney.format(finalResult.outcome)}</strong>
      </SummaryCard>
      <SummaryCard variant="green">
        <header>
          <span>Total</span>
          <CurrencyDollar size={32} />
        </header>
        <strong>{formatMoney.format(finalResult.total)}</strong>
      </SummaryCard>
    </SummaryContainer>
  );
}
