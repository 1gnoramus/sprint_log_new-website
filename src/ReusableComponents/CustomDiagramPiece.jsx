import deliv_econ from "../assets/deliv_econ.png";

export function CustomDiagramPiece({image,color}) {
  return (
    <div className="custom_diagram_piece">
      <div className="circle_outline" style={{borderColor:`${color}`}}>
        <img src={image} alt="" />
      </div>
      <div className="circle_filled" style={{backgroundColor:`${color}`}}></div>
      <div className="line" style={{backgroundColor:`${color}`}}></div>
    </div>
  );
}
