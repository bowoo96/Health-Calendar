import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ModalPortal from "./ModalPortal";
import RecordItem from "../RecordItem";
import { ModalTitleInput, RecordButton } from "../common/commonStyle";

export interface Recorditem {
  id: string;
  exerciseType: string;
  set: string;
  count: string;
}

const Modal: React.FC<{
  setOnModal: (prev: boolean) => void;
  startData: Date;
}> = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSelect, setIsSelect] = useState("유산소");
  const [recordArray, setRecordArray] = useState<Recorditem[]>([]);
  const [isDisable, setIsDisable] = useState(true);
  const [recordData, setRecordData] = useState({
    id: new Date().getTime().toString(),
    exerciseType: "",
    set: "",
    count: "",
  });

  const dropdownHandler = (res: React.MouseEvent) => {
    const responseTarget = res.target as HTMLElement;
    setIsOpen(false);
    setIsSelect(responseTarget.innerText);
  };

  // 운동기록 입력 시 객체에 저장하는 로직 3개
  const exerciseTypeHandler = (data: React.ChangeEvent<HTMLInputElement>) => {
    setRecordData((prev) => {
      return { ...prev, exerciseType: data.target.value };
    });
  };

  const setHandler = (data: React.ChangeEvent<HTMLInputElement>) => {
    setRecordData((prev) => {
      return { ...prev, set: data.target.value };
    });
  };

  const countHandler = (data: React.ChangeEvent<HTMLInputElement>) => {
    setRecordData((prev) => {
      return { ...prev, count: data.target.value };
    });
  };

  // 운동 기록 입력 시 +버튼 disabled 풀기
  useEffect(() => {
    if (
      recordData.exerciseType.length > 0 &&
      recordData.count.length > 0 &&
      recordData.set.length > 0
    ) {
      setIsDisable(false);
    } else return;
  }, [recordData]);

  const AddRecordHandler = () => {
    setRecordArray((prev) => prev.concat(recordData));
    setRecordData({ id: "", exerciseType: "", set: "", count: "" });
  };

  console.log(recordData, recordArray);
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
          <RecordTitle>기록 입력(+버튼을 클릭해야 추가됩니다.)</RecordTitle>
          <RecordInputWrap>
            <ModalTitleInput
              placeholder="운동"
              width="170px"
              onChange={exerciseTypeHandler}
              value={recordData.exerciseType}
            />
            <ModalTitleInput
              placeholder="세트"
              width="170px"
              onChange={setHandler}
              value={recordData.set}
            />
            <ModalTitleInput
              placeholder="횟수"
              width="170px"
              onChange={countHandler}
              value={recordData.count}
            />
            <RecordButton disabled={isDisable} onClick={AddRecordHandler}>
              +
            </RecordButton>
          </RecordInputWrap>
          <ul>
            {recordArray.map((item) => (
              <RecordItem key={item.id} recordData={item} />
            ))}
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

const RecordInputWrap = styled.div`
  width: 600px;
  padding-bottom: 20px;
  border-bottom: 1px solid #ddd;
`;
