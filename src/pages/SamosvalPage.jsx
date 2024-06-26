import { AdvantagesDiagram } from "../ReusableComponents/AdvantagesDiagram";
import { IntroSection } from "../sections/IntroSection";
import { MainSection } from "../sections/MainSection";
import { CustomDiagramPiece } from "../ReusableComponents/CustomDiagramPiece";
import { CustomDiagramPieceReversed } from "../ReusableComponents/CustomDiagramPieceReversed";
import police_car from "../assets/police_car.png";
import papers from "../assets/papers.png";
import takelaj from "../assets/takelaj.png";
import stor_econ from "../assets/stor_econ.png";
import special_auto from "../assets/special_auto.png";
export function SamosvalPage() {
  return (
    <>
      <IntroSection
        title={"Перевозка спецтехники и негабаритных грузов"}
      ></IntroSection>
      <MainSection
        title={"Ваш бизнес - Наша логистика"}
        subtitle1={
          " Sprint Logistics поможет Вам забрать Ваш груз из любой точки Европы, России, Турции, Китая и доставить на полной фуре в Казахстан по самой низкой цене и в кратчайшие сроки!"
        }
        subtitle2={""}
        subtitle3={""}
      ></MainSection>
      <div className="main_2">
        <h2>Наши преимущества</h2>
        <div className="adv_group">
          <div className="adv_group_piece ">
            <div className="adv_group_piece_textbox">
              <h4>Предоставление специализированного транспорта</h4>
              {/* <p>
                Предоставление специализированного транспортного средства с
                грузоподъёмностью от 40 - 200 тонн (тралы, площадки и тд)
              </p> */}
            </div>{" "}
            <CustomDiagramPieceReversed
              image={special_auto}
              color={"#C12126"}
            ></CustomDiagramPieceReversed>
          </div>
          <div className="adv_group_piece">
            <div className="adv_group_piece_textbox">
              <h4>Такелажные работы</h4>
              {/* <p>Lorem ipsum dolor sit amet consectetur.</p> */}
            </div>{" "}
            <CustomDiagramPiece
              image={takelaj}
              color={"#E5DF48"}
            ></CustomDiagramPiece>
          </div>
          <div className="adv_group_piece">
            <div className="adv_group_piece_textbox">
              <h4>Оформление специальных разрешений</h4>
              {/* <p>Lorem ipsum dolor sit amet consectetur.</p> */}
            </div>
            <CustomDiagramPieceReversed
              image={papers}
              color={"#05AAC0"}
            ></CustomDiagramPieceReversed>
          </div>
          <div className="adv_group_piece ">
            <div className="adv_group_piece_textbox">
              <h4>Сопровождение в пути</h4>
              {/* <p>Lorem ipsum dolor sit amet consectetur.</p> */}
            </div>{" "}
            <CustomDiagramPiece
              image={police_car}
              color={"#05C050"}
            ></CustomDiagramPiece>
          </div>
        </div>
      </div>
    </>
  );
}
