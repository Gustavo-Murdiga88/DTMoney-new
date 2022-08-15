import styled, { keyframes } from "styled-components";
import * as Dialog from "@radix-ui/react-dialog";
import * as RadioGroup from "@radix-ui/react-radio-group";

export const Container = styled(Dialog.Content)`
  position: fixed;
  top: 50%;
  left: 50%;

  padding: 2rem;
  background-color: ${(props) => props.theme["gray-700"]};
  min-width: 34rem;
  border-radius: 6px;
  transform: translate(-50%, -50%);
  animation: Modal 0.5s;

  @keyframes Modal {
    from {
      transform: translate(-50%, -100%);
      opacity: 0;
    }
    to {
      transform: translate(-50%, -50%);
      opacity: 1;
    }
  }
`;

export const FormContainer = styled.form`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding-top: 2rem;
`;

export const InputNewTransactionModal = styled.input`
  border: 0;
  background-color: ${(props) => props.theme["gray-800"]};
  color: ${(props) => props.theme["gray-300"]};
  padding: 1rem;
  border-radius: 6px;

  ::placeholder {
    color: ${(props) => props.theme["gray-500"]};
  }
`;

export const ButtonConfirm = styled.button`
  border: 0;
  padding: 1rem;
  background-color: ${(props) => props.theme["green-500"]};
  color: ${(props) => props.theme["gray-100"]};
  border-radius: 6px;
  font-weight: bold;

  margin-top: 2rem;

  :hover {
    background-color: ${(props) => props.theme["green-700"]};
    transition: background-color 0.5s;
  }
`;

type ButtonTypeNewTransactionProps = {
  transactionType?: "income" | "outcome";
};

export const ButtonTypeNewTransaction = styled(
  RadioGroup.Item,
)<ButtonTypeNewTransactionProps>`
  flex: 1rem;

  display: flex;
  flex-direction: row;
  gap: 0.5rem;
  align-items: center;
  justify-content: center;

  padding: 1rem;
  border: 0;
  color: ${(props) => props.theme["gray-300"]};
  background-color: ${(props) => props.theme["gray-600"]};
  border-radius: 6px;
  font-weight: bold;

  &[data-state="checked"] {
    &[value="income"] {
      background-color: ${(props) => props.theme["green-500"]};
    }
    &[value="outcome"] {
      background-color: ${(props) => props.theme["red-500"]};
      box-shadow: 0 0 0 1px ${(props) => props.theme["red-300"]};
    }
  }

  &[data-state="unchecked"] {
    &[value="income"] {
      svg {
        color: ${(props) => props.theme["green-300"]};
      }
    }
    &[value="outcome"] {
      svg {
        color: ${(props) => props.theme["red-300"]};
      }

      :focus {
        box-shadow: 0 0 0 2px ${(props) => props.theme["red-300"]};
      }
    }

    :hover {
      filter: brightness(1.2);
      transition: filter 0.5s;
    }
  }

  svg {
    color: ${(props) => props.theme["gray-100"]};
  }
`;

export const Overlay = styled(Dialog.Overlay)`
  position: absolute;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.65);
  backdrop-filter: blur(1px);
  inset: 0;
`;

export const ModalButtonClose = styled(Dialog.Close)`
  position: absolute;
  top: 2rem;
  right: 2rem;

  border-radius: 6px;
  line-height: 0;
  border: 0;
  background: transparent;
  color: ${(props) => props.theme["gray-400"]};
  cursor: pointer;

  :hover {
    color: ${(props) => props.theme["gray-100"]};
    transition: all 0.5s;
  }
`;

export const GroupRadio = styled(RadioGroup.Root)`
  display: flex;
  flex-direction: row;
  gap: 1.5rem;
  margin-top: 0.5rem;
  box-shadow: 0 0 0 0;
`;
