import React from "react";
import ModalPortal from "./ModalPortal";

type Props = {
  children: string;
  setOnModal: (state: boolean) => void;
};

const ModalFrame = ({ children, setOnModal }: Props) => {
  return (
    <ModalPortal>
      <div
        onClick={() => setOnModal(false)}
        style={{ width: "100%", height: "100%", background: "#ddd" }}
      >
        <div>
          <input></input>
          <div></div>
          <button className="close" onClick={() => setOnModal(false)}>
            닫기
          </button>
        </div>
      </div>
    </ModalPortal>
  );
};

export default ModalFrame;
