import adv_yellow from "../assets/adv_yellow.png";
import adv_green from "../assets/adv_green.png";
import adv_pink from "../assets/adv_pink.png";
import adv_purple from "../assets/adv_purple.png";
import adv_red from "../assets/adv_red.png";
import cust_risks from "../assets/cust_risks.png";
import deliv_econ from "../assets/deliv_econ.png";
import log_econ from "../assets/log_econ.png";
import stor_econ from "../assets/stor_econ.png";
import consol from "../assets/consol.png";

// import { AdvantagesDiagram } from "../ReusableComponents/AdvantagesDiagram";
import { IntroSection } from "../sections/IntroSection";
import { MainSection } from "../sections/MainSection";
import { CustomDiagramPiece } from "../ReusableComponents/CustomDiagramPiece";
import { CustomDiagramPieceReversed } from "../ReusableComponents/CustomDiagramPieceReversed";

export function CargoPage() {
  return (
    <>
      <IntroSection
        title={"Доставка сборных грузов из Турции, Европы и Китая"}
      ></IntroSection>
      <MainSection
        title={"Ваш бизнес - Наша логистика"}
        subtitle1={
          "Sprint Logistics поможет Вам забрать Ваш груз из любой точки Китая и Турции и доставить Авто и ЖД консолидацией в Казахстан по выгодным условиям!"
        }
        subtitle2={""}
        subtitle3={""}
      ></MainSection>
      <div className="main_2">
        <h2>Наши преимущества</h2>
        <div className="adv_group">
          <div className="adv_group_piece ">
            <div className="adv_group_piece_textbox">
              <h4>Сокращение расходов на логистику</h4>
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </div>{" "}
            <CustomDiagramPieceReversed
              image={log_econ}
              color={"#F06730"}
            ></CustomDiagramPieceReversed>
          </div>
          <div className="adv_group_piece even">
            <div className="adv_group_piece_textbox">
              <h4>Экономия на доставке</h4>
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </div>{" "}
            <CustomDiagramPiece
              image={deliv_econ}
              color={"#05AAC0"}
            ></CustomDiagramPiece>
            {/* <div className="adv_group_piece_imgs">
              <img src={adv_purple} alt="" />

              <img className="diagram_img" src={deliv_econ} alt="" />
            </div> */}
          </div>
          <div className="adv_group_piece">
            <div className="adv_group_piece_textbox">
              <h4>Снижение таможенных рисков</h4>
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </div>{" "}
            <CustomDiagramPieceReversed
              image={cust_risks}
              color={"#C12126"}
            ></CustomDiagramPieceReversed>
          </div>
          <div className="adv_group_piece even">
            <div className="adv_group_piece_textbox">
              <h4>Уменьшение затрат на хранение</h4>
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </div>{" "}
            {/* <div className="adv_group_piece_imgs"> */}
            {/* <img src={adv_red} alt="" /> */}
            <CustomDiagramPiece
              image={stor_econ}
              color={"#05AAC0"}
            ></CustomDiagramPiece>
            {/* </div> */}
          </div>
          <div className="adv_group_piece">
            <div className="adv_group_piece_textbox">
              <h4>Консолидация товаров</h4>
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </div>{" "}
            <CustomDiagramPieceReversed
              image={consol}
              color={"#C12126"}
            ></CustomDiagramPieceReversed>
            {/* <img src={adv_pink} alt="" /> */}
          </div>
        </div>
      </div>
    </>
  );
}
