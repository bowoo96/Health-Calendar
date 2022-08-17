import React from "react";
import ModalPortal from "./ModalPortal";

type Props = {
  children: string;
  setOnModal: (state: boolean) => void;
};

const ModalFrame: React.FC<Props> = ({ children, setOnModal }: Props) => {
  return (
    <ModalPortal>
      <div onClick={() => setOnModal(false)}>
        <div>
          {children}
          <button className="close" onClick={() => setOnModal(false)}>
            닫기
          </button>
        </div>
      </div>
    </ModalPortal>
  );
};

export default ModalFrame;
