import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import ArModalNoButton from "./arModalNoButton";
import "@trendmicro/react-modal/dist/react-modal.css";
import "./styles.css";
import ArModal from "./arModal";
const rootElement = document.getElementById("root");
const data = {
  showStatus: true,
  title: "Ar Modal No Button",
  component: "test component",
  // footer: "footer",
  id: "id-1",
  titleId: "id-2"
};
const data2 = {
  modalId: "id-1",
  text: "Ar Modal",
  handleSave: () => null,
  title: "Ar Modal",
  showStatus: true,
  titleButton1: "Close",
  titleButton2: "Save",
  variant1: undefined,
  variant2: undefined,
  disableButton2: false,
  hideButton2: false,
  renderNode: handleClick => <button onClick={handleClick}>ArModal</button>
};
ReactDOM.render(
  <div>
    <br />
    <ArModalNoButton
      {...data}
      renderNode={handleClick => {
        return (
          <button className="btb" onClick={handleClick}>
            ArModalNoButton
          </button>
        );
      }}
    />
    <br />
    <br />
    <ArModal {...data2} />
  </div>,
  rootElement
);
