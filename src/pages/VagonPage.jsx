import { AdvantagesDiagram } from "../ReusableComponents/AdvantagesDiagram";
import { IntroSection } from "../sections/IntroSection";
import { MainSection } from "../sections/MainSection";

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
        <AdvantagesDiagram></AdvantagesDiagram>
      </div>
    </>
  );
}
