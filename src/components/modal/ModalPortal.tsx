import React from "react";
import ReactDOM from "react-dom";

type Props = {
  children: JSX.Element;
};

const ModalPortal = ({ children }: Props) => {
  const modalRoot = document.getElementById("modal-root") as HTMLElement;

  return ReactDOM.createPortal(children, modalRoot);
};

export default ModalPortal;
