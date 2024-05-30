import { AdvantagesDiagram } from "../ReusableComponents/AdvantagesDiagram";
import { IntroSection } from "../sections/IntroSection";
import { MainSection } from "../sections/MainSection";

export function ContPage() {
  return (
    <>
      <IntroSection
        title={"Контейнерные перевозки из Турции и Китая"}
      ></IntroSection>
      <MainSection
        title={"Ваш бизнес - Наша логистика"}
        subtitle1={
          "Доверьте контейнерные перевозки Sprint Logistics - мы доставим Ваш груз из Турции и Китая в Казахстан быстро, надежно и по самой выгодной цене!"
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
