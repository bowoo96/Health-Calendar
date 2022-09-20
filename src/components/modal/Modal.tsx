import React, { useState } from "react";
import styled from "styled-components";
import ModalPortal from "./ModalPortal";

const Modal: React.FC<{
  setOnModal: (prev: boolean) => void;
  startData: Date;
}> = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSelect, setIsSelect] = useState("유산소");

  const dropdownHandler = (res: React.MouseEvent) => {
    setIsOpen(false);
    const responseTarget = res.target as HTMLElement;
    setIsSelect(responseTarget.innerText);
  };

  return (
    <ModalPortal>
      <ModalBackground>
        <ModalFrame>
          <ModalTitleInput placeholder="제목을 입력해 주세요." />
          <ModalDate>{props.startData.toString()}</ModalDate>
          <Dropdown>
            <DropdownSelect onClick={() => setIsOpen(true)}>
              {isSelect}
            </DropdownSelect>
            {isOpen && (
              <DropdownFrame onClick={dropdownHandler}>
                <DropdownItem>유산소</DropdownItem>
                <DropdownItem>무산소</DropdownItem>
                <DropdownItem>유,무산소</DropdownItem>
              </DropdownFrame>
            )}
          </Dropdown>
          <RecordTitle>기록</RecordTitle>
          <ul>
            <li>
              <ModalTitleInput placeholder="운동" width="180px" />
              <ModalTitleInput placeholder="세트" width="180px" />
              <ModalTitleInput placeholder="횟수" width="180px" />
            </li>
          </ul>
          <ButtonWrapper>
            <Button onClick={() => props.setOnModal(false)}>저장</Button>
            <Button onClick={() => props.setOnModal(false)}>닫기</Button>
          </ButtonWrapper>
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
  background-color: #00000033;
`;

const ModalFrame = styled.div`
  width: 600px;
  height: 700px;
  background-color: #fff;
  padding: 50px;
`;

const ModalTitleInput = styled.input`
  width: ${(props) => props.width || "600px"};
  height: 40px;
  text-indent: 10px;
  box-sizing: border-box;
  &:not(:first-child) {
    margin-left: 20px;
  }
`;

const ModalDate = styled.div`
  margin-top: 20px;
`;

const Dropdown = styled.div`
  margin-top: 20px;
  position: relative;
  text-indent: 10px;
`;

const DropdownSelect = styled.p`
  width: 100px;
  height: 30px;
  line-height: 30px;
  border: 1px solid #ddd;
  box-sizing: border-box;
  background-color: #fff;
`;

const DropdownFrame = styled.ul`
  position: absolute;
  background-color: #fff;
`;

const DropdownItem = styled.li`
  width: 100px;
  height: 30px;
  line-height: 30px;
  border: 1px solid #ddd;
  box-sizing: border-box;
  margin-top: -1px;
`;

const RecordTitle = styled.p`
  font-size: 20px;
  font-weight: bold;
  margin: 20px 0 10px 0;
`;

const ButtonWrapper = styled.div`
  margin-top: 20px;
`;

const Button = styled.button`
  width: 100px;
  height: 30px;
  &:not(:first-child) {
    margin-left: 20px;
  }
`;
