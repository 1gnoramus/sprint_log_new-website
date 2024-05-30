import { AdvantagesDiagram } from "../ReusableComponents/AdvantagesDiagram";
import { IntroSection } from "../sections/IntroSection";
import { MainSection } from "../sections/MainSection";

export function AviaPage() { 
  return (
    <>
      <IntroSection title={"Авиадоставка по всему миру"}></IntroSection>
      <MainSection
        title={"Ваш бизнес - Наша логистика"}
        subtitle1={
          "SPRINT LOGISTICS поможет Вам забрать Ваш груз из любой точки мира и доставить авиатранспортом в Казахстан по самой низкой цене и в кратчайшие сроки!"
        }
        subtitle2={""}
        subtitle3={""}
      ></MainSection>
      <div className="main_2">
        <h2>Наши преимущества</h2>
        <AdvantagesDiagram></AdvantagesDiagram>
      </div>
    </>
  );
}
