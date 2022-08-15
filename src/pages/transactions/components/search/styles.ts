import styled from "styled-components";

export const ContainerSearch = styled.form`
  display: flex;
  flex-direction: row;
  gap: 1rem;

  align-items: center;
  justify-content: space-between;

  input {
    flex: 1;
    background-color: ${(props) => props.theme["gray-900"]};
    border: 0;
    border-radius: 6px;
    padding: 1rem;

    color: ${(props) => props.theme["gray-100"]};

    &::-webkit-search-cancel-button {
      appearance: none;
      background-color: ${(props) => props.theme["gray-100"]};
    }

    ::placeholder {
      color: ${(props) => props.theme["gray-500"]};
    }
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;

    font-weight: 700;
    border: 1px solid ${(props) => props.theme["green-500"]};
    padding: 1rem;
    border-radius: 6px;
    background: transparent;
    color: ${(props) => props.theme["green-500"]};

    :hover {
      background-color: ${(props) => props.theme["green-500"]};
      color: ${(props) => props.theme["gray-100"]};
      border-color: transparent;

      transition: all 0.2s;
    }
  }
`;
