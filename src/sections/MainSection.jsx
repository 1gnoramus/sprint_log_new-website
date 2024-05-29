import main1_img from "../assets/main1_img.png";
import div25 from "../assets/divider-25.png";
import div50 from "../assets/divider-50.png";
export function MainSection({ title, subtitle1, subtitle2, subtitle3 }) {
  return (
    <div className="main_1">
      <img className="div25" src={div25} alt="" />
      <img className="main1_image" src={main1_img} alt="" />
      <div className="text_cont">
        <h3>{title}</h3>
        <p>{subtitle1}</p>
        <p>{subtitle2}</p>
        <p>{subtitle3}</p>
      </div>
      <img className="div50" src={div50} alt="" />
    </div>
  );
}
