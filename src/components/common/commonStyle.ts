import styled from "styled-components";

export const ModalTitleInput = styled.input`
  width: ${(props) => props.width || "600px"};
  height: 40px;
  text-indent: 10px;
  box-sizing: border-box;
  &:not(:first-child) {
    margin-left: 20px;
  }
`;

export const ModalTitleDiv = styled.div`
  width: 170px;
  height: 40px;
  text-indent: 10px;
  box-sizing: border-box;
  line-height: 40px;
  &:not(:first-child) {
    margin-left: 20px;
  }
  border: 1px solid #ddd;
`;

export const RecordButton = styled.button`
  width: 40px;
  height: 40px;
  margin-left: 10px;
`;
