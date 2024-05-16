import "../styles.scss";
import adv_yellow from "../assets/adv_yellow.png";
import adv_green from "../assets/adv_green.png";
import adv_pink from "../assets/adv_pink.png";
import adv_purple from "../assets/adv_purple.png";
import adv_red from "../assets/adv_red.png";

export function AdvantagesDiagram() {
  return (
    <div className="adv_group">
      <div className="adv_group_piece ">
        <div className="adv_group_piece_textbox">
          <h4>Экономия на доставке</h4>
          <p>Lorem ipsum dolor sit amet consectetur.</p>
        </div>{" "}
        <img src={adv_yellow} alt="" />
      </div>
      <div className="adv_group_piece even">
        <div className="adv_group_piece_textbox">
          <h4>Консолидация товаров</h4>
          <p>Lorem ipsum dolor sit amet consectetur.</p>
        </div>{" "}
        <img src={adv_purple} alt="" />
      </div>
      <div className="adv_group_piece">
        <div className="adv_group_piece_textbox">
          <h4>Сокращение расходов на логистику</h4>
          <p>Lorem ipsum dolor sit amet consectetur.</p>
        </div>{" "}
        <img src={adv_green} alt="" />
      </div>
      <div className="adv_group_piece even">
        <div className="adv_group_piece_textbox">
          <h4>Уменьшение затрат на хранение</h4>
          <p>Lorem ipsum dolor sit amet consectetur.</p>
        </div>{" "}
        <img src={adv_red} alt="" />
      </div>
      <div className="adv_group_piece">
        <div className="adv_group_piece_textbox">
          <h4>Сокращение расходов на логистику</h4>
          <p>Lorem ipsum dolor sit amet consectetur.</p>
        </div>{" "}
        <img src={adv_pink} alt="" />
      </div>
    </div>
  );
}
