import { AdvantagesDiagram } from "../ReusableComponents/AdvantagesDiagram";
import { IntroSection } from "../sections/IntroSection";
import { MainSection } from "../sections/MainSection";

import { CustomDiagramPiece } from "../ReusableComponents/CustomDiagramPiece";
import { CustomDiagramPieceReversed } from "../ReusableComponents/CustomDiagramPieceReversed";
import papers from "../assets/papers.png";
import flight from "../assets/flight.png";
import plane from "../assets/plane.png";
import stor_econ from "../assets/stor_econ.png";
import map_marker from "../assets/map_marker.png";
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
              {/* <p>Lorem ipsum dolor sit amet consectetur.</p> */}
            </div>{" "}
            <CustomDiagramPieceReversed
              image={plane}
              color={"#C12126"}
            ></CustomDiagramPieceReversed>
          </div>
          <div className="adv_group_piece even">
            <div className="adv_group_piece_textbox">
              <h4>Забор груза с адреса отправителя в любом городе Китая</h4>
              {/* <p>Lorem ipsum dolor sit amet consectetur.</p> */}
            </div>{" "}
            <CustomDiagramPiece
              image={map_marker}
              color={"#05C050"}
            ></CustomDiagramPiece>
          </div>
          <div className="adv_group_piece">
            <div className="adv_group_piece_textbox">
              <h4>Прямые рейсы, точные даты вылета</h4>
              {/* <p>Lorem ipsum dolor sit amet consectetur.</p> */}
            </div>{" "}
            <CustomDiagramPieceReversed
              image={flight}
              color={"#E5DF48"}
            ></CustomDiagramPieceReversed>
          </div>
          <div className="adv_group_piece even">
            <div className="adv_group_piece_textbox">
              <h4>Экспортное оформление</h4>
              {/* <p>Lorem ipsum dolor sit amet consectetur.</p> */}
            </div>{" "}
            <CustomDiagramPiece
              image={papers}
              color={"#05AAC0"}
            ></CustomDiagramPiece>
          </div>
        </div>
      </div>
    </>
  );
}
