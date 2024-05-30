import { AdvantagesDiagram } from "../ReusableComponents/AdvantagesDiagram";
import { IntroSection } from "../sections/IntroSection";
import { MainSection } from "../sections/MainSection";
import { ServicesListSection } from "../sections/ServicesListSection";

export function IndexPage() {
  return (
    <>
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
    </>
  );
}
