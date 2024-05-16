import { NavigationBar } from "./ReusableComponents/NavigationBar";
// import * as bootstrap from 'bootstrap'
import "./styles.scss";
import main1_img from "./assets/main1_img.png";
import div25 from "./assets/divider-25.png";
import div50 from "./assets/divider-50.png";
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
import { FormSection } from "./ReusableComponents/FormSection";
import { FooterSection } from "./ReusableComponents/FooterSection";

function App() {
  return (
    <>
      <NavigationBar></NavigationBar>
      <FloatingBtn></FloatingBtn>

      <div className="intro">
        <h1>SPRINT LOGISTICS</h1>
        <button className="custom-btn">Оставить заявку</button>
      </div>
      <div className="main_1">
        <img className="div25" src={div25} alt="" />
        <img className="main1_image" src={main1_img} alt="" />
        <div className="text_cont">
          <h3>Ваш бизнес - Наша логистика</h3>
          <p>
            Мы прогрессивная и опытная команда профессионалов в сфере логистики,
            специализирующаяся на доставке коммерческих грузов и из Китая,
            России, стран Западной и Восточной Европы в Казахстан и Центральную
            Азию.
          </p>
          <p>
            Благодаря нашему огромному опыту работы на отечественном B2B рынке
            грузоперевозок, мы готовы предоставить вашей компании первоклассный
            сервис и индивидуальный подход в решении ваших будничных, а также
            глобальных логистических задач.
          </p>
          <p>
            SPRINT LOGISTICS поможет Вам забрать Ваш груз из любой точки Китая,
            России, Турции, Европа и доставить в Казахстан по самой низкой цене
            и в кратчайшие сроки!
          </p>
        </div>
        <img className="div50" src={div50} alt="" />
      </div>
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
