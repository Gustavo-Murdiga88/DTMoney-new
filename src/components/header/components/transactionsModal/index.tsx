import * as Dialog from "@radix-ui/react-dialog";
import { ArrowCircleDown, ArrowCircleUp, X } from "phosphor-react";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import {
  Container,
  FormContainer,
  InputNewTransactionModal,
  ButtonConfirm,
  ButtonTypeNewTransaction,
  Overlay,
  ModalButtonClose,
  GroupRadio,
} from "./styles";
import { useNewTransactionsContext } from "../../../../context/newTransactionsContext";

const schema = z.object({
  name: z.string(),
  value: z.number(),
  type: z.string(),
  variant: z.enum(["income", "outcome"]),
});

type FormData = z.infer<typeof schema>;

interface NewTransactionsModalProps {
  handleAppearModal(): void;
}

export function NewTransactionsModal({
  handleAppearModal,
}: NewTransactionsModalProps) {
  const { createTransacation } = useNewTransactionsContext();
  const formMethods = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const handleSubmit = formMethods.handleSubmit(async (data) => {
    const { name, type, value, variant } = data;

    await createTransacation({
      name,
      type,
      value,
      variant,
    });
    formMethods.reset();

    handleAppearModal();
  });

  return (
    <Dialog.Portal>
      <Overlay />
      <Container>
        <ModalButtonClose>
          <X size={24} />
        </ModalButtonClose>
        <Dialog.Title>Nova transação</Dialog.Title>
        <FormContainer onSubmit={handleSubmit}>
          <InputNewTransactionModal
            placeholder="Descrição"
            {...formMethods.register("name")}
          />
          <InputNewTransactionModal
            placeholder="Preço"
            type="number"
            {...formMethods.register("value", { valueAsNumber: true })}
          />
          <InputNewTransactionModal
            placeholder="Categoria"
            {...formMethods.register("type")}
          />

          <Controller
            name="variant"
            control={formMethods.control}
            render={({ field }) => (
              <GroupRadio onValueChange={field.onChange} value={field.value}>
                <ButtonTypeNewTransaction type="button" value="income">
                  <ArrowCircleUp size={24} />
                  Entrada
                </ButtonTypeNewTransaction>
                <ButtonTypeNewTransaction type="button" value="outcome">
                  <ArrowCircleDown size={24} />
                  Saída
                </ButtonTypeNewTransaction>
              </GroupRadio>
            )}
          />

          <ButtonConfirm type="submit">Cadastrar</ButtonConfirm>

          <Dialog.Description />
        </FormContainer>
      </Container>
    </Dialog.Portal>
  );
}
