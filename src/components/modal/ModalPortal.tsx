import ReactDOM from "react-dom";

const ModalPortal: React.FC<{ children: JSX.Element }> = ({ children }) => {
  const modalRoot = document.getElementById("modal-root") as HTMLElement;

  return ReactDOM.createPortal(children, modalRoot);
};

export default ModalPortal;
