import { AdvantagesDiagram } from "../ReusableComponents/AdvantagesDiagram";
import { IntroSection } from "../sections/IntroSection";
import { MainSection } from "../sections/MainSection";
import { CustomDiagramPiece } from "../ReusableComponents/CustomDiagramPiece";
import { CustomDiagramPieceReversed } from "../ReusableComponents/CustomDiagramPieceReversed";
import сont_load from "../assets/сont_load.png";
import agility from "../assets/agility.png";
import safe from "../assets/safe.png";
import papers from "../assets/papers.png";
import stor_econ from "../assets/stor_econ.png";
import consol from "../assets/consol.png";
export function ContPage() {
  return (
    <>
      <IntroSection
        title={"Контейнерные перевозки из Турции и Китая"}
      ></IntroSection>
      <MainSection
        title={"Ваш бизнес - Наша логистика"}
        subtitle1={
          "Доверьте контейнерные перевозки Sprint Logistics - мы доставим Ваш груз из Турции и Китая в Казахстан быстро, надежно и по самой выгодной цене!"
        }
        subtitle2={""}
        subtitle3={""}
      ></MainSection>
      <div className="main_2">
        <h2>Наши преимущества</h2>
        <div className="adv_group">
          <div className="adv_group_piece ">
            <div className="adv_group_piece_textbox">
              <h4>Удобство погрузки и выгрузки</h4>
              {/* <p>Lorem ipsum dolor sit amet consectetur.</p> */}
            </div>{" "}
            <CustomDiagramPieceReversed
              image={сont_load}
              color={"#C12126"}
            ></CustomDiagramPieceReversed>
          </div>
          <div className="adv_group_piece even">
            <div className="adv_group_piece_textbox">
              <h4>Упрощение документооборота</h4>
              {/* <p>Lorem ipsum dolor sit amet consectetur.</p> */}
            </div>{" "}
            <CustomDiagramPiece
              image={papers}
              color={"#05AAC0"}
            ></CustomDiagramPiece>
          </div>
          <div className="adv_group_piece">
            <div className="adv_group_piece_textbox">
              <h4>Минимизация краж и потерь</h4>
              {/* <p>Lorem ipsum dolor sit amet consectetur.</p> */}
            </div>{" "}
            <CustomDiagramPieceReversed
              image={safe}
              color={"#F06730"}
            ></CustomDiagramPieceReversed>
          </div>
          <div className="adv_group_piece even">
            <div className="adv_group_piece_textbox">
              <h4>Гибкость в выборе маршрутов</h4>
              {/* <p>Lorem ipsum dolor sit amet consectetur.</p> */}
            </div>
            <CustomDiagramPiece
              image={agility}
              color={"#C12126"}
            ></CustomDiagramPiece>
          </div>
          <div className="adv_group_piece">
            <div className="adv_group_piece_textbox">
              <h4>Облегчение складирования товаров</h4>
              {/* <p>Lorem ipsum dolor sit amet consectetur.</p> */}
            </div>{" "}
            <CustomDiagramPieceReversed
              image={stor_econ}
              color={"#05AAC0"}
            ></CustomDiagramPieceReversed>
          </div>
        </div>
      </div>
    </>
  );
}
