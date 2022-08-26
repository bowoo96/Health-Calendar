import React from "react";
import styled from "styled-components";
import ModalPortal from "./ModalPortal";

type Props = {
  setOnModal: (state: boolean) => void;
};

const Modal = ({ setOnModal }: Props) => {
  return (
    <ModalPortal>
      <ModalBackground>
        <ModalFrame>
          <ModalTitleInput placeholder="제목을 입력해 주세요." />
          <div>2022.08.20</div>
          <div>
            <p>유산소</p>
            <ul>
              <li>유산소</li>
              <li>무산소</li>
              <li>유,무산소</li>
            </ul>
          </div>
          <p>기록</p>
          <ul>
            <li>
              <ModalTitleInput placeholder="운동" width="180px" />
              <ModalTitleInput placeholder="세트" width="180px" />
              <ModalTitleInput placeholder="횟수" width="180px" />
            </li>
          </ul>
          <div>
            <button onClick={() => setOnModal(false)}>저장</button>
            <button onClick={() => setOnModal(false)}>닫기</button>
          </div>
        </ModalFrame>
      </ModalBackground>
    </ModalPortal>
  );
};
export default Modal;

const ModalBackground = styled.div`
  z-index: 999;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  left: 0;
  top: 0;
  text-align: center;
  background-color: #00000033;
`;

const ModalFrame = styled.div`
  width: 700px;
  height: 700px;
  background-color: #fff;
`;

const ModalTitleInput = styled.input`
  width: ${(props) => props.width || "600px"};
  height: 40px;
  margin-top: 50px;
  text-indent: 10px;
  &:not(:first-child) {
    margin-left: 20px;
  }
`;
