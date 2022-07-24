import styled from "styled-components";

export const ModalContentContainer = styled.div`
  width: 500px;
  min-height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  position: absolute;
  top: 250px;
  left: 250px;
  border: 1px solid #ccc;
`;

export const ModalHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 50px;
  background-color: #474341;
  color: white;
  font-size: 20px;
  padding: 10px;
`;

export const ModalBody = styled.div`
  padding: 10px 0;
`;
