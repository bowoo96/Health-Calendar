import React from "react";
import ModalFrame from "./ModalFrame";

type Props = {
  setOnModal: (state: boolean) => void;
};

const TestModal = ({ setOnModal }: Props) => {
  return <ModalFrame setOnModal={setOnModal}>모달입니다.</ModalFrame>;
};
export default TestModal;
