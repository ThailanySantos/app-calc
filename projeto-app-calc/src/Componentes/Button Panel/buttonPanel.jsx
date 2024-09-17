import React from "react";
import Button from "../Button/button";

const ButtonPanel = ({ clickHandler }) => (
  <div className="button-panel">
    <div className="button-row">
      <Button name="7" clickHandler={clickHandler} />
      <Button name="8" clickHandler={clickHandler} />
      <Button name="9" clickHandler={clickHandler} />
      <Button name="DEL" clickHandler={clickHandler} className="DEL" />
    </div>
    <div className="button-row">
      <Button name="4" clickHandler={clickHandler} />
      <Button name="5" clickHandler={clickHandler} />
      <Button name="6" clickHandler={clickHandler} />
      <Button name="+" clickHandler={clickHandler} className="operator" />
    </div>
    <div className="button-row">
      <Button name="1" clickHandler={clickHandler} />
      <Button name="2" clickHandler={clickHandler} />
      <Button name="3" clickHandler={clickHandler} />
      <Button name="-" clickHandler={clickHandler} className="operator" />
    </div>
    <div className="button-row">
      <Button name="0" clickHandler={clickHandler} />
      <Button name="." clickHandler={clickHandler} />
      <Button name="/" clickHandler={clickHandler} className="operator" />
      <Button name="x" clickHandler={clickHandler} className="operator" />
    </div>
    <div className="button-row">
      <Button name="RESET" clickHandler={clickHandler} className="RESET" />
      <Button name="=" clickHandler={clickHandler} className="equals" />
    </div>
  </div>
);

export default ButtonPanel;
