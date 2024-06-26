import { AdvantagesDiagram } from "../ReusableComponents/AdvantagesDiagram";
import { IntroSection } from "../sections/IntroSection";
import { MainSection } from "../sections/MainSection";
import { CustomDiagramPiece } from "../ReusableComponents/CustomDiagramPiece";
import { CustomDiagramPieceReversed } from "../ReusableComponents/CustomDiagramPieceReversed";
import vagons from "../assets/vagons.png";
import expirience from "../assets/expirience.png";
import dislocation from "../assets/dislocation.png";
import railway from "../assets/railway.png";
import globe from "../assets/globe.png";
export function VagonPage() {
  return (
    <>
      <IntroSection
        title={"Железнодорожные перевозки по Казахстану и на экспорт"}
      ></IntroSection>
      <MainSection
        title={"Ваш бизнес - Наша логистика"}
        subtitle1={
          "Предоставление подвижного состава для доставки Вашего груза по Казахстану, в Европу и по всей Средней Азии!"
        }
        subtitle2={""}
        subtitle3={""}
      ></MainSection>
      <div className="main_2">
        <h2>Наши преимущества</h2>
        <div className="adv_group">
          <div className="adv_group_piece ">
            <div className="adv_group_piece_textbox">
              <h4>Универсальный парк вагонов</h4>
              {/* <p>Lorem ipsum dolor sit amet.</p> */}
            </div>{" "}
            <CustomDiagramPieceReversed
              image={vagons}
              color={"#C12126"}
            ></CustomDiagramPieceReversed>
          </div>
          <div className="adv_group_piece even">
            <div className="adv_group_piece_textbox">
              <h4>Расчёт и оплата Ж/Д тарифов по всем территориям</h4>
              {/* <p>Lorem ipsum dolor sit amet consectetur.</p> */}
            </div>{" "}
            <CustomDiagramPiece
              image={railway}
              color={"#05AAC0"}
            ></CustomDiagramPiece>
          </div>
          <div className="adv_group_piece">
            <div className="adv_group_piece_textbox">
              <h4>Дислокация по вагонам (слежение)</h4>
              {/* <p>Lorem ipsum dolor sit amet consectetur.</p> */}
            </div>{" "}
            <CustomDiagramPieceReversed
              image={dislocation}
              color={"#F06730"}
            ></CustomDiagramPieceReversed>
          </div>
          <div className="adv_group_piece even">
            <div className="adv_group_piece_textbox">
              <h4>
                Большой опыт работы в экспортных и импортных ЖД перевозках
              </h4>
              {/* <p>Lorem ipsum dolor sit amet consectetur.</p> */}
            </div>{" "}
            <CustomDiagramPiece
              image={expirience}
              color={"#E5DF48"}
            ></CustomDiagramPiece>
          </div>
          <div className="adv_group_piece">
            <div className="adv_group_piece_textbox">
              <h4>Перевозки по Казахстану, в Европу и в Среднюю Азию</h4>
              {/* <p>Lorem ipsum dolor sit amet consectetur.</p> */}
            </div>{" "}
            <CustomDiagramPieceReversed
              image={globe}
              color={"#05C050"}
            ></CustomDiagramPieceReversed>
          </div>
        </div>
      </div>
    </>
  );
}
