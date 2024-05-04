import { NavigationBar } from "./ReusableComponents/NavigationBar";
import "./styles.scss";
import main1_img from "./assets/main1_img.png";
import div25 from "./assets/divider-25.png";
import div50 from "./assets/divider-50.png";
import main2_img from "./assets/main2_bg.png";
import adv_yellow from "./assets/adv_yellow.png";
import adv_green from "./assets/adv_green.png";
import adv_pink from "./assets/adv_pink.png";
import adv_purple from "./assets/adv_purple.png";
import adv_red from "./assets/adv_red.png";
import main3_img from "./assets/map_bg.png";
import services_serv from "./assets/services_serv.png";
import services_samosval from "./assets/services_samosval.png";
import services_truck from "./assets/services_truck.png";
import services_avia from "./assets/services_avia.png";
import services_cargo from "./assets/services_cargo.png";
import services_cont from "./assets/services_cont.png";
import services_multi from "./assets/services_multi.png";
import services_vagon from "./assets/services_vagon.png";
import form_img from "./assets/form_img.png";
import logo2 from "./assets/logo_2.png";
import social_inst from "./assets/social_inst.png";
import social_telegram from "./assets/social_telegram.png";
import social_wapp from "./assets/social_wapp.png";
import email_icon from "./assets/email_icon.png";
import phone_icon from "./assets/phone_icon.png";
import floated_btn from "./assets/floated_btn.png";
import close from "./assets/close.png";
import { useState } from "react";

function App() {
  let [isfloatingActive, setisfloatingActive] = useState(false);
  return (
    <>
      <NavigationBar></NavigationBar>
      <div className="floating_div">
        <div
          className={isfloatingActive ? "social_list-opened" : "social_list"}
        >
          <a href="">
            <img src={social_wapp} alt="" />
            <h3>Whatsapp</h3>
          </a>
          <a href="">
            <img src={social_inst} alt="" />
            <h3>Instagram</h3>
          </a>
          <a href="">
            <img src={social_telegram} alt="" />
            <h3>Telegram</h3>
          </a>
        </div>
        <button
          onClick={() => {
            setisfloatingActive(!isfloatingActive);
          }}
          className="floating_button"
        >
          <img
            className={isfloatingActive ? "image-animation" : ""}
            src={isfloatingActive ? close : floated_btn}
            alt=""
          />
        </button>
      </div>

      <div className="intro">
        <h1>SPRINT LOGISTICS</h1>
        <button>Оставить заявку</button>
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
        <div className="adv_group">
          <div className="adv_group_piece ">
            <div className="adv_group_piece_textbox">
              <h4>Экономия на доставке</h4>
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </div>{" "}
            <img src={adv_yellow} alt="" />
          </div>
          <div className="adv_group_piece even">
            <div className="adv_group_piece_textbox">
              <h4>Консолидация товаров</h4>
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </div>{" "}
            <img src={adv_purple} alt="" />
          </div>
          <div className="adv_group_piece">
            <div className="adv_group_piece_textbox">
              <h4>Сокращение расходов на логистику</h4>
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </div>{" "}
            <img src={adv_green} alt="" />
          </div>
          <div className="adv_group_piece even">
            <div className="adv_group_piece_textbox">
              <h4>Уменьшение затрат на хранение</h4>
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </div>{" "}
            <img src={adv_red} alt="" />
          </div>
          <div className="adv_group_piece">
            <div className="adv_group_piece_textbox">
              <h4>Сокращение расходов на логистику</h4>
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </div>{" "}
            <img src={adv_pink} alt="" />
          </div>
        </div>
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
      <div className="form_section">
        <img src={form_img} alt="" />
        <div className="form_textbox">
          <h2>
            Для быстрого просчета доставки Вашего груза оставьте свой запрос
            здесь
          </h2>
          <p>Оставьте Ваши контакты ниже и мы с Вами свяжемся!</p>
        </div>
      </div>
      <footer>
        <div className="footer_logobox">
          <img src={logo2} alt="" />
          <div className="logobox_textbox">
            <h4>ТОО "SPRINT LOGISTICS"</h4>
            <p>“Ваш бизнес - наша логистика”</p>
          </div>
        </div>
        <div className="footer_infobox">
          <h3>Фактический адрес: г. Алматы, ул. Мынбаева 46, офис 427</h3>
          <div className="infobox_contacts">
            <div className="contacts_column">
              <div className="contacts_piece">
                <img src={phone_icon} alt="" />
                <div className="contacts_piece_textbox">
                  <h4>+7 700 088 2815</h4>
                  <p>Пн. - Пт. с 9:00 - 18:00</p>
                </div>
              </div>
              <div className="contacts_piece">
                <img src={phone_icon} alt="" />
                <div className="contacts_piece_textbox">
                  <h4>+7 701 581 0999</h4>
                  <p>Пн. - Пт. с 9:00 - 18:00</p>
                </div>
              </div>
            </div>
            <div className="contacts_column">
              <div className="contacts_piece">
                <img src={email_icon} alt="" />
                <h4>marketing@splog.com.kz</h4>
              </div>
              <div className="contacts_piece">
                <img src={email_icon} alt="" />
                <h4>info@splog.kz</h4>
              </div>
            </div>
          </div>
        </div>
        <div className="footer_socialbox">
          <p>Свяжитесь с нами!</p>
          <div className="socialbox_row">
            <img src={social_wapp} alt="" />
            <img src={social_inst} alt="" />
            <img src={social_telegram} alt="" />
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
