import React from "react";
import styled from "styled-components";
import { ModalTitleDiv, RecordButton } from "./common/commonStyle";
import { Recorditem } from "../components/modal/Modal";

const RecordItem: React.FC<{ recordData: Recorditem }> = (props) => {
  console.log(props.recordData);
  return (
    <RecordItemWrap>
      <ModalTitleDiv>{props.recordData.exerciseType}</ModalTitleDiv>
      <ModalTitleDiv>{props.recordData.set}</ModalTitleDiv>
      <ModalTitleDiv>{props.recordData.count}</ModalTitleDiv>
      <RecordButton>x</RecordButton>
    </RecordItemWrap>
  );
};

export default RecordItem;

const RecordItemWrap = styled.li`
  display: flex;
  margin-top: 20px;
`;
