import { AdvantagesDiagram } from "../ReusableComponents/AdvantagesDiagram";
import { IntroSection } from "../sections/IntroSection";
import { MainSection } from "../sections/MainSection";

export function MultiPage() {
  return (
    <>
      <IntroSection title={"Мультимодальные перевозки"}></IntroSection>
      <MainSection
        title={"Ваш бизнес - Наша логистика"}
        subtitle1={
          "Команда Sprint Logistics поможет Вам с перевозкой грузов разными видами транспорта АВТО, Ж/Д, АВИА, Морем по всему миру в Казахстан!"
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
