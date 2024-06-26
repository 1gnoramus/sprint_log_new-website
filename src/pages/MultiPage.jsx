import { AdvantagesDiagram } from "../ReusableComponents/AdvantagesDiagram";
import { IntroSection } from "../sections/IntroSection";
import { MainSection } from "../sections/MainSection";
import agility from "../assets/agility.png";
import worldwide from "../assets/worldwide.png";
import stor_econ from "../assets/stor_econ.png";
import safety from "../assets/safety.png";
import { CustomDiagramPiece } from "../ReusableComponents/CustomDiagramPiece";
import { CustomDiagramPieceReversed } from "../ReusableComponents/CustomDiagramPieceReversed";
export function MultiPage() {
  return (
    <>
      <IntroSection title={"Мультимодальные перевозки"}></IntroSection>
      <MainSection
        title={"Ваш бизнес - Наша логистика"}
        subtitle1={
          "Команда Sprint Logistics поможет Вам с перевозкой грузов разными видами транспорта АВТО, Ж/Д, АВИА, Морем по всему миру в Казахстан!"
        }
        subtitle2={""}
        subtitle3={""}
      ></MainSection>
      <div className="main_2">
        <h2>Наши преимущества</h2>
        <div className="adv_group">
          <div className="adv_group_piece ">
            <div className="adv_group_piece_textbox">
              <h4>Гибкость в выборе маршрутов</h4>
            </div>
            <CustomDiagramPieceReversed
              image={agility}
              color={"#C12126"}
            ></CustomDiagramPieceReversed>
          </div>
          <div className="adv_group_piece even">
            <div className="adv_group_piece_textbox">
              <h4>Увеличение доступности регионов</h4>
            </div>{" "}
            <CustomDiagramPiece
              image={worldwide}
              color={"#05C050"}
            ></CustomDiagramPiece>
          </div>
          <div className="adv_group_piece">
            <div className="adv_group_piece_textbox">
              <h4>Минимизация складских издержек</h4>
            </div>
            <CustomDiagramPieceReversed
              image={stor_econ}
              color={"#05AAC0"}
            ></CustomDiagramPieceReversed>
          </div>
          <div className="adv_group_piece even">
            <div className="adv_group_piece_textbox">
              <h4>Повышение безопасности перевозок</h4>
            </div>
            <CustomDiagramPiece
              image={safety}
              color={"#E5DF48"}
            ></CustomDiagramPiece>
          </div>
        </div>
      </div>
    </>
  );
}
