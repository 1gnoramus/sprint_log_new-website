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

function App() {
  return (
    <>
      <NavigationBar></NavigationBar>
      <div className="intro">
        <h1>SPRINT LOGISTICS</h1>
        <button>Оставить заявку</button>
      </div>
      <div className="main_1">
        <img className="div25" src={div25} alt="" />
        <img className="main1_image" src={main1_img} alt="" />
        <div className="text_cont">
          <h3>Sprint Logistics: Ваш бизнес - Наша логистика</h3>
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
        {/* <img className="main2_img" src={main2_img} alt="" /> */}
        <h2>Наши преимущества</h2>
        <div className="adv_group">
          <div className="adv_group_piece ">
            <p>Lorem ipsum dolor sit amet.</p>
            <img src={adv_yellow} alt="" />
          </div>
          <div className="adv_group_piece even">
            <p>Lorem ipsum dolor sit amet.</p>
            <img src={adv_purple} alt="" />
          </div>
          <div className="adv_group_piece">
            <p>Lorem ipsum dolor sit amet.</p>
            <img src={adv_green} alt="" />
          </div>
          <div className="adv_group_piece even">
            <p>Lorem ipsum dolor sit amet.</p>
            <img src={adv_red} alt="" />
          </div>
          <div className="adv_group_piece">
            <p>Lorem ipsum dolor sit amet.</p>
            <img src={adv_pink} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
