import main3_img from "../assets/map_bg.png";
import services_serv from "../assets/services_serv.png";
import services_samosval from "../assets/services_samosval.png";
import services_truck from "../assets/services_truck.png";
import services_avia from "../assets/services_avia.png";
import services_cargo from "../assets/services_cargo.png";
import services_cont from "../assets/services_cont.png";
import services_multi from "../assets/services_multi.png";
import services_vagon from "../assets/services_vagon.png";
import { Link } from "react-router-dom";
export function ServicesListSection() {
  return (
    <div className="main_3">
      <h2>Наши услуги</h2>
      <img className="main_3-bgimage" src={main3_img} alt="" />
      <div className="services_block">
        <div className="services_column services_column-left">
          <div className="services_column_piece">
            <img src={services_truck} alt="" />
            <div className="services_column_piece_textbox">
              <Link to={"truck"}>
                {" "}
                <h4>FTL из Турции, Европы и Китая</h4>
              </Link>
              <p>
                Sprint Logistics поможет Вам забрать Ваш груз из любой точки
                Европы, России, Турции, Китая и доставить на полной фуре в
                Казахстан по самой низкой цене и в кратчайшие сроки!
              </p>
            </div>
          </div>
          <div className="services_column_piece">
            <img src={services_cargo} alt="" />
            <div className="services_column_piece_textbox">
              <Link to={"cargo"}>
                {" "}
                <h4>Доставка сборных грузов из Китая, Турции и Европы</h4>
              </Link>
              <p>
                Sprint Logistics поможет Вам забрать Ваш груз из любой точки
                Китая и Турции и доставить Авто и ЖД консолидацией в Казахстан
                по выгодным условиям!
              </p>
            </div>
          </div>
          <div className="services_column_piece">
            <img src={services_cont} alt="" />
            <div className="services_column_piece_textbox">
              <Link to={"cont"}>
                {" "}
                <h4>Контейнерные перевозки из Китая</h4>
              </Link>
              <p>
                Доверьте контейнерные перевозки Sprint Logistics - мы доставим
                Ваш груз из Турции и Китая в Казахстан быстро, надежно и по
                самой выгодной цене!
              </p>
            </div>
          </div>
          <div className="services_column_piece">
            <img src={services_samosval} alt="" />
            <div className="services_column_piece_textbox">
              <Link to={"samosval"}>
                {" "}
                <h4>Перевозка спецтехники и негабаритных грузов</h4>
              </Link>
              <p>
                Sprint Logistics поможет Вам в организации перевозки специальных
                грузов по территории Казахстана
              </p>
            </div>
          </div>
        </div>
        <div className="services_column services_column-right">
          <div className="services_column_piece">
            <img src={services_multi} alt="" />
            <div className="services_column_piece_textbox">
              <Link to={"multi"}>
                {" "}
                <h4>Мультимодальные перевозки</h4>
              </Link>
              <p>
                Команда Sprint Logistics поможет Вам с перевозкой грузов разными
                видами транспорта АВТО, Ж/Д, АВИА, Морем по всему миру в
                Казахстан!
              </p>
            </div>
          </div>
          <div className="services_column_piece">
            <img src={services_vagon} alt="" />
            <div className="services_column_piece_textbox">
              <Link to={"vagon"}>
                {" "}
                <h4>Железнодорожные перевозки</h4>
              </Link>
              <p>
                Предоставление подвижного состава для доставки Вашего груза по
                Казахстану, в Европу и по всей Средней Азии!
              </p>
            </div>
          </div>
          <div className="services_column_piece">
            <img src={services_avia} alt="" />
            <div className="services_column_piece_textbox">
              <Link to={"avia"}>
                {" "}
                <h4>Авиадоставка по всему миру</h4>
              </Link>
              <p>
                SPRINT LOGISTICS поможет Вам забрать Ваш груз из любой точки
                мира и доставить авиатранспортом в Казахстан по самой низкой
                цене и в кратчайшие сроки!
              </p>
            </div>
          </div>
          <div className="services_column_piece">
            <img src={services_serv} alt="" />
            <div className="services_column_piece_textbox">
              <Link to={"serv"}>
                {" "}
                <h4>Дополнительные услуги в процессе перевозки</h4>
              </Link>
              <p>
                Sprint Logistics предоставляет услуги по страхованию груза,
                брокерским услугам, а также услуги по охранному сопровождению
                груза для перевозки Ваших специфичных товаров!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
