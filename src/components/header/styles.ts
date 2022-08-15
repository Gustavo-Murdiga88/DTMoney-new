import styled from "styled-components";

export const Container = styled.header`
  background-color: ${({ theme }) => theme["gray-900"]};
  padding: 2.5rem 0 7.5rem;
`;

export const HeaderContent = styled.div`
  width: 100%;
  max-width: 1120px;

  margin: 0 auto;

  padding: 0 1.5rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const NewTranscationButton = styled.button`
  height: 3.125rem;
  border: 0;
  border-radius: 6px;
  background-color: ${({ theme }) => theme["green-500"]};
  color: ${({ theme }) => theme["gray-100"]};
  font-weight: bold;

  padding: 1.125rem 0.75rem;

  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 1.6;

  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme["green-700"]};
    transition: background-color 0.5s;
  }
`;
