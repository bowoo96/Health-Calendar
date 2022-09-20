import React from "react";
import styled from "styled-components";
import { ModalTitleDiv, RecordButton } from "./common/commonStyle";

const RecordItem = () => {
  return (
    <li>
      <ModalTitleDiv></ModalTitleDiv>
      <ModalTitleDiv></ModalTitleDiv>
      <ModalTitleDiv></ModalTitleDiv>
      <RecordButton>x</RecordButton>
    </li>
  );
};

export default RecordItem;
