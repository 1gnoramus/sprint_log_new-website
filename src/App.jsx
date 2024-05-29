import { NavigationBar } from "./ReusableComponents/NavigationBar";
// import * as bootstrap from 'bootstrap'
import "./styles.scss";
import main3_img from "./assets/map_bg.png";
import services_serv from "./assets/services_serv.png";
import services_samosval from "./assets/services_samosval.png";
import services_truck from "./assets/services_truck.png";
import services_avia from "./assets/services_avia.png";
import services_cargo from "./assets/services_cargo.png";
import services_cont from "./assets/services_cont.png";
import services_multi from "./assets/services_multi.png";
import services_vagon from "./assets/services_vagon.png";
import { FloatingBtn } from "./ReusableComponents/FloatingBtn";
import { AdvantagesDiagram } from "./ReusableComponents/AdvantagesDiagram";
import { FormSection } from "./sections/FormSection";
import { FooterSection } from "./sections/FooterSection";
import { IntroSection } from "./sections/IntroSection";
import { MainSection } from "./sections/MainSection";
import { useState } from "react";

function App() {
  let [currentPage, setcurrentPage] = useState('intro')
  let infoArray = {
    intro: {
      introTitle: "SPRINT LOGISTICS",
      mainTitle: "Ваш бизнес - Наша логистика",
      subtitle1:
        "Мы прогрессивная и опытная команда профессионалов в сфере логистики,специализирующаяся на доставке коммерческих грузов и из Китая,России, стран Западной и Восточной Европы в Казахстан и ЦентральнуюАзию.",
      subtitle2:
        "Благодаря нашему огромному опыту работы на отечественном B2B рынкегрузоперевозок, мы готовы предоставить вашей компании первоклассныйсервис и индивидуальный подход в решении ваших будничных, а такжеглобальных логистических задач.",
      subtitle3:
        "SPRINT LOGISTICS поможет Вам забрать Ваш груз из любой точки Китая,России, Турции, Европа и доставить в Казахстан по самой низкой ценеи в кратчайшие сроки!",
    },
    avia: {
      introTitle: "Авиадоставка из любой точки мира",
      mainTitle: "Авиадоставка грузов в Казахстан",
      subtitle1:
        "SPRINT LOGISTICS поможет Вам забрать Ваш груз из любой точки Китая и доставить авиатранспортом в Казахстан по самой низкой цене и в кратчайшие сроки!",
      subtitle2: "",
      subtitle3: "",
    },
  };
  
  return (
    <>
      <NavigationBar></NavigationBar>
      <FloatingBtn></FloatingBtn>

      <IntroSection title={"SPRINT LOGISTICS"}></IntroSection>
      <MainSection
        title={"Ваш бизнес - Наша логистика"}
        subtitle1={
          "Мы прогрессивная и опытная команда профессионалов в сфере логистики,специализирующаяся на доставке коммерческих грузов и из Китая,России, стран Западной и Восточной Европы в Казахстан и ЦентральнуюАзию."
        }
        subtitle2={
          "Благодаря нашему огромному опыту работы на отечественном B2B рынкегрузоперевозок, мы готовы предоставить вашей компании первоклассныйсервис и индивидуальный подход в решении ваших будничных, а такжеглобальных логистических задач."
        }
        subtitle3={
          "SPRINT LOGISTICS поможет Вам забрать Ваш груз из любой точки Китая,России, Турции, Европа и доставить в Казахстан по самой низкой ценеи в кратчайшие сроки!"
        }
      ></MainSection>
      <div className="main_2">
        <h2>Наши преимущества</h2>
        <AdvantagesDiagram></AdvantagesDiagram>
      </div>
      <div className="main_3">
        <h2>Наши услуги</h2>
        <img className="main_3-bgimage" src={main3_img} alt="" />
        <div className="services_block">
          <div className="services_column services_column-left">
            <div className="services_column_piece">
              <img src={services_serv} alt="" />
              <div className="services_column_piece_textbox">
                <h4>FTL из Турции, Европы и Китая</h4>
                <p>
                  Sprint Logistics поможет Вам забрать Ваш груз из любой точки
                  Европы, России, Турции, Китая и доставить на полной фуре в
                  Казахстан по самой низкой цене и в кратчайшие сроки!
                </p>
              </div>
            </div>
            <div className="services_column_piece">
              <img src={services_samosval} alt="" />
              <div className="services_column_piece_textbox">
                <h4>Доставка сборных грузов из Китая, Турции и Европы</h4>
                <p>
                  Sprint Logistics поможет Вам забрать Ваш груз из любой точки
                  Европы, России, Турции, Китая и доставить на полной фуре в
                  Казахстан по самой низкой цене и в кратчайшие сроки!
                </p>
              </div>
            </div>
            <div className="services_column_piece">
              <img src={services_truck} alt="" />
              <div className="services_column_piece_textbox">
                <h4>Контейнерные перевозки из Китая</h4>
                <p>
                  Sprint Logistics поможет Вам забрать Ваш груз из любой точки
                  Европы, России, Турции, Китая и доставить на полной фуре в
                  Казахстан по самой низкой цене и в кратчайшие сроки!
                </p>
              </div>
            </div>
            <div className="services_column_piece">
              <img src={services_avia} alt="" />
              <div className="services_column_piece_textbox">
                <h4>Перевозка спецтехники и негабаритных грузов</h4>
                <p>
                  Sprint Logistics поможет Вам забрать Ваш груз из любой точки
                  Европы, России, Турции, Китая и доставить на полной фуре в
                  Казахстан по самой низкой цене и в кратчайшие сроки!
                </p>
              </div>
            </div>
          </div>
          <div className="services_column services_column-right">
            <div className="services_column_piece">
              <img src={services_cargo} alt="" />
              <div className="services_column_piece_textbox">
                <h4>Мультимодальные перевозки</h4>
                <p>
                  Sprint Logistics поможет Вам забрать Ваш груз из любой точки
                  Европы, России, Турции, Китая и доставить на полной фуре в
                  Казахстан по самой низкой цене и в кратчайшие сроки!
                </p>
              </div>
            </div>
            <div className="services_column_piece">
              <img src={services_cont} alt="" />
              <div className="services_column_piece_textbox">
                <h4>Железнодорожные перевозки</h4>
                <p>
                  Sprint Logistics поможет Вам забрать Ваш груз из любой точки
                  Европы, России, Турции, Китая и доставить на полной фуре в
                  Казахстан по самой низкой цене и в кратчайшие сроки!
                </p>
              </div>
            </div>
            <div className="services_column_piece">
              <img src={services_multi} alt="" />
              <div className="services_column_piece_textbox">
                <h4>Авиадоставка по всему миру</h4>
                <p>
                  Sprint Logistics поможет Вам забрать Ваш груз из любой точки
                  Европы, России, Турции, Китая и доставить на полной фуре в
                  Казахстан по самой низкой цене и в кратчайшие сроки!
                </p>
              </div>
            </div>
            <div className="services_column_piece">
              <img src={services_vagon} alt="" />
              <div className="services_column_piece_textbox">
                <h4>Дополнительные услуги в процессе перевозки</h4>
                <p>
                  Sprint Logistics поможет Вам забрать Ваш груз из любой точки
                  Европы, России, Турции, Китая и доставить на полной фуре в
                  Казахстан по самой низкой цене и в кратчайшие сроки!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FormSection></FormSection>
      <FooterSection></FooterSection>
    </>
  );
}

export default App;
