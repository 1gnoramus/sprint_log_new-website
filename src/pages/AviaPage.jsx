import { AdvantagesDiagram } from "../ReusableComponents/AdvantagesDiagram";
import { IntroSection } from "../sections/IntroSection";
import { MainSection } from "../sections/MainSection";

import { CustomDiagramPiece } from "../ReusableComponents/CustomDiagramPiece";
import { CustomDiagramPieceReversed } from "../ReusableComponents/CustomDiagramPieceReversed";
import cust_risks from "../assets/cust_risks.png";
import deliv_econ from "../assets/deliv_econ.png";
import log_econ from "../assets/log_econ.png";
import stor_econ from "../assets/stor_econ.png";
import consol from "../assets/consol.png";
export function AviaPage() {
  return (
    <>
      <IntroSection title={"Авиадоставка по всему миру"}></IntroSection>
      <MainSection
        title={"Ваш бизнес - Наша логистика"}
        subtitle1={
          "SPRINT LOGISTICS поможет Вам забрать Ваш груз из любой точки мира и доставить авиатранспортом в Казахстан по самой низкой цене и в кратчайшие сроки!"
        }
        subtitle2={""}
        subtitle3={""}
      ></MainSection>
      <div className="main_2">
        <h2>Наши преимущества</h2>
        <div className="adv_group">
          <div className="adv_group_piece ">
            <div className="adv_group_piece_textbox">
              <h4>Скорость доставки до 6 дней с учетом даты забора</h4>
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </div>{" "}
            <CustomDiagramPieceReversed
              image={log_econ}
              color={"#F06730"}
            ></CustomDiagramPieceReversed>
          </div>
          <div className="adv_group_piece even">
            <div className="adv_group_piece_textbox">
              <h4>Забор груза с адреса отправителя в любом городе Китая</h4>
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </div>{" "}
            <CustomDiagramPiece
              image={deliv_econ}
              color={"#05AAC0"}
            ></CustomDiagramPiece>
          </div>
          <div className="adv_group_piece">
            <div className="adv_group_piece_textbox">
              <h4>Прямые рейсы, точные даты вылета</h4>
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </div>{" "}
            <CustomDiagramPieceReversed
              image={cust_risks}
              color={"#C12126"}
            ></CustomDiagramPieceReversed>
          </div>
          <div className="adv_group_piece even">
            <div className="adv_group_piece_textbox">
              <h4>Экспортное оформление</h4>
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </div>{" "}
            <CustomDiagramPiece
              image={stor_econ}
              color={"#05AAC0"}
            ></CustomDiagramPiece>
          </div>
        </div>
      </div>
    </>
  );
}
