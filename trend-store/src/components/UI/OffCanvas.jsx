import "./OffCanvas.css";
import ReactDOM from "react-dom";

const Backdrop = (props) => {
  return <div className="backdrop" onClick={props.hideCartHandler}></div>;
};

const OffCanvasOverlay = (props) => {
  return (
    <div className="offcanvas">
      <div className="content">{props.children}</div>
    </div>
  );
};

const OffCanvas = (props) => {
  const portalElement = document.getElementById("overlays");
  return (
    <div>
      {ReactDOM.createPortal(
        <Backdrop hideCartHandler={props.hideCartHandler} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <OffCanvasOverlay>{props.children}</OffCanvasOverlay>,
        portalElement
      )}
    </div>
  );
};

export default OffCanvas;
