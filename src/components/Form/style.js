import styled from "styled-components";

export const FormContainer = styled.main`
  width: 100%;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.colors.darkGolden};
`;

export const FormWrapper = styled.form`
  min-width: 40%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  padding: 2em;
  border-radius: 5px;
  background-color: ${(props) => props.theme.colors.darkGray};

  @media (max-width: 476px) {
    width: 90%;
    margin: 0 auto;
  }

  input {
    width: 100%;
    padding: 1em;
    border: 1px solid #ccc;
    border-radius: 5px;
    margin: 1em 0;
  }

  button {
    margin-top: 1em;
    color: black !important;
    background-color: ${(props) => props.theme.colors.darkGolden};

    &:hover {
      color: white !important;
    }
  }
`;

export const ErrorDiv = styled.div`
  width: 100%;
  color: red;
  font-size: 2em;
  text-align: center;
  font-family: ${(props) => props.theme.fonts.body};
`;
