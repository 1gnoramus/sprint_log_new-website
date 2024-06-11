import adv_yellow from "../assets/adv_yellow.png";
import adv_green from "../assets/adv_green.png";
import adv_pink from "../assets/adv_pink.png";
import adv_purple from "../assets/adv_purple.png";
import adv_red from "../assets/adv_red.png";
import cust_risks from "../assets/cust_risks.png";
import deliv_econ from "../assets/deliv_econ.png";

import { AdvantagesDiagram } from "../ReusableComponents/AdvantagesDiagram";
import { IntroSection } from "../sections/IntroSection";
import { MainSection } from "../sections/MainSection";

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
            <img src={adv_yellow} alt="" />
          </div>
          <div className="adv_group_piece even">
            <div className="adv_group_piece_textbox">
              <h4>Экономия на доставке</h4>
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </div>{" "}
            <div className="adv_group_piece_imgs">
              <img src={adv_purple} alt="" />

              <img className="diagram_img" src={deliv_econ} alt="" />
            </div>
          </div>
          <div className="adv_group_piece">
            <div className="adv_group_piece_textbox">
              <h4>Снижение таможенных рисков</h4>
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </div>{" "}
            <img src={adv_green} alt="" />
          </div>
          <div className="adv_group_piece even">
            <div className="adv_group_piece_textbox">
              <h4>Уменьшение затрат на хранение</h4>
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </div>{" "}
            <div className="adv_group_piece_imgs">
              <img src={adv_red} alt="" />
              <img className="diagram_img" src={cust_risks} alt="" />
            </div>
          </div>
          <div className="adv_group_piece">
            <div className="adv_group_piece_textbox">
              <h4>Консолидация товаров</h4>
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </div>{" "}
            <img src={adv_pink} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}
