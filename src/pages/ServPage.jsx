import { AdvantagesDiagram } from "../ReusableComponents/AdvantagesDiagram";
import { IntroSection } from "../sections/IntroSection";
import { MainSection } from "../sections/MainSection";
import { CustomDiagramPiece } from "../ReusableComponents/CustomDiagramPiece";
import { CustomDiagramPieceReversed } from "../ReusableComponents/CustomDiagramPieceReversed";
import cust_risks from "../assets/cust_risks.png";
import police_car from "../assets/police_car.png";
import project from "../assets/project.png";
import broker from "../assets/broker.png";
import consultation from "../assets/consultation.png";
import insurance from "../assets/insurance.png";
export function ServPage() {
  return (
    <>
      <IntroSection
        title={"Дополнительные услуги в процессе перевозки"}
      ></IntroSection>
      <MainSection
        title={"Ваш бизнес - Наша логистика"}
        subtitle1={
          "Sprint Logistics поможет Вам забрать Ваш груз из любой точки Европы, России, Турции, Китая и доставить на полной фуре в Казахстан по самой низкой цене и в кратчайшие сроки!"
        }
        subtitle2={""}
        subtitle3={""}
      ></MainSection>
      <div className="main_2">
        <h2>Наши преимущества</h2>
        <div className="adv_group">
          <div className="adv_group_piece ">
            <div className="adv_group_piece_textbox">
              <h4>Страхование груза</h4>
              {/* <p>Lorem ipsum dolor sit amet.</p> */}
            </div>{" "}
            <CustomDiagramPieceReversed
              image={insurance}
              color={"#05C050"}
            ></CustomDiagramPieceReversed>
          </div>
          <div className="adv_group_piece even">
            <div className="adv_group_piece_textbox">
              <h4>Брокерские услуги</h4>
              {/* <p>Lorem ipsum dolor sit amet consectetur.</p> */}
            </div>{" "}
            <CustomDiagramPiece
              image={broker}
              color={"#E5DF48"}
            ></CustomDiagramPiece>
          </div>
          <div className="adv_group_piece">
            <div className="adv_group_piece_textbox">
              <h4>Проектная работа</h4>
              {/* <p>Lorem ipsum dolor sit amet consectetur.</p> */}
            </div>{" "}
            <CustomDiagramPieceReversed
              image={project}
              color={"#F06730"}
            ></CustomDiagramPieceReversed>
          </div>
          <div className="adv_group_piece even">
            <div className="adv_group_piece_textbox">
              <h4>Охранное сопровождение</h4>
              {/* <p>Lorem ipsum dolor sit amet consectetur.</p> */}
            </div>{" "}
            <CustomDiagramPiece
              image={police_car}
              color={"#05C050"}
            ></CustomDiagramPiece>
          </div>
          <div className="adv_group_piece">
            <div className="adv_group_piece_textbox">
              <h4>Консультационная работа</h4>
              {/* <p>Lorem ipsum dolor sit amet consectetur.</p> */}
            </div>{" "}
            <CustomDiagramPieceReversed
              image={consultation}
              color={"#05AAC0"}
            ></CustomDiagramPieceReversed>
          </div>
        </div>
      </div>
    </>
  );
}
