import * as Dialog from "@radix-ui/react-dialog";
import { useState } from "react";
import { Container, HeaderContent, NewTranscationButton } from "./styles";

import Logo from "../../assets/logo.svg";
import { NewTransactionsModal } from "./components/transactionsModal";

export function Header() {
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  function handleAppearModal() {
    setModalOpen(!modalOpen);
  }

  return (
    <Dialog.Root onOpenChange={(e) => setModalOpen(e)} open={modalOpen}>
      <Container>
        <HeaderContent>
          <img src={Logo} alt="Logo" />
          <Dialog.Trigger asChild>
            <NewTranscationButton> Nova Transação </NewTranscationButton>
          </Dialog.Trigger>
        </HeaderContent>
        <NewTransactionsModal handleAppearModal={handleAppearModal} />
      </Container>
    </Dialog.Root>
  );
}
