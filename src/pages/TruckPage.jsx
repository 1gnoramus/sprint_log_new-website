import { AdvantagesDiagram } from "../ReusableComponents/AdvantagesDiagram";
import { IntroSection } from "../sections/IntroSection";
import { MainSection } from "../sections/MainSection";
import { CustomDiagramPiece } from "../ReusableComponents/CustomDiagramPiece";
import { CustomDiagramPieceReversed } from "../ReusableComponents/CustomDiagramPieceReversed";
import cust_risks from "../assets/cust_risks.png";
import door_deliv from "../assets/door_deliv.png";
import map_marker from "../assets/map_marker.png";
import cheap from "../assets/cheap.png";
import fast_deliv from "../assets/fast_delivery.png";
import light_cargo from "../assets/light_cargo.png";
export function TruckPage() {
  return (
    <>
      <IntroSection title={"FTL из Турции, Европы и Китая"}></IntroSection>
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
              <h4>Быстрый срок доставки (до 25 дней)</h4>
              {/* <p>Lorem ipsum dolor sit amet.</p> */}
            </div>{" "}
            <CustomDiagramPieceReversed
              image={fast_deliv}
              color={"#C12126"}
            ></CustomDiagramPieceReversed>
          </div>
          <div className="adv_group_piece even">
            <div className="adv_group_piece_textbox">
              <h4>Забор из любой точки мира и доставка в любой город</h4>
              {/* <p>
                Забор из любой точки Китая и доставка в любой город либо
                населенный пункт в Казахстане без лишних перегрузов на складах
                хранения и вреда грузу.
              </p> */}
            </div>{" "}
            <CustomDiagramPiece
              image={map_marker}
              color={"#05C050"}
            ></CustomDiagramPiece>
          </div>
          <div className="adv_group_piece">
            <div className="adv_group_piece_textbox">
              <h4>Возможность доставки «Дверь – Дверь»</h4>
              {/* <p>
                Возможность доставки «Дверь – Дверь», с учетом доставки по
                городу, после таможенной очистки груза на СВХ напрямую на адрес
                клиента.
              </p> */}
            </div>{" "}
            <CustomDiagramPieceReversed
              image={door_deliv}
              color={"#E5DF48"}
            ></CustomDiagramPieceReversed>
          </div>
          <div className="adv_group_piece even">
            <div className="adv_group_piece_textbox">
              <h4>Выгодная доставка объемных, но легких грузов</h4>
              {/* <p>
                Кубатура авто фур: от 86 – 105 куб. метров по сравнению 40
                футового ж/д контейнера : до 76.5 куб метров)
              </p> */}
            </div>{" "}
            <CustomDiagramPiece
              image={light_cargo}
              color={"#05AAC0"}
            ></CustomDiagramPiece>
          </div>
          <div className="adv_group_piece">
            <div className="adv_group_piece_textbox">
              <h4>Дешевле чем Авиа и быстрее чем ЖД доставка</h4>
              {/* <p>Lorem ipsum dolor sit amet consectetur.</p> */}
            </div>{" "}
            <CustomDiagramPieceReversed
              image={cheap}
              color={"#F06730"}
            ></CustomDiagramPieceReversed>
          </div>
        </div>
      </div>
    </>
  );
}
