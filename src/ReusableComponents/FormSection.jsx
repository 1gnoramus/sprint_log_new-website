import "../styles.scss";
import form_img from "../assets/form_img.png";

export function FormSection() {
  return (
    <div className="form_section">
      <img src={form_img} alt="" />
      <div className="form_textbox">
        <h2>
          Для быстрого просчета доставки Вашего груза оставьте свой запрос здесь
        </h2>
        <p>Оставьте Ваши контакты ниже и мы с Вами свяжемся!</p>
      </div>
    </div>
  );
}
