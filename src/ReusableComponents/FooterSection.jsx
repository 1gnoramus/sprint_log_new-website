import "../styles.scss";
import logo2 from "../assets/logo_2.png";
import social_inst from "../assets/social_inst.png";
import social_telegram from "../assets/social_telegram.png";
import social_wapp from "../assets/social_wapp.png";
import email_icon from "../assets/email_icon.png";
import phone_icon from "../assets/phone_icon.png";
export function FooterSection() {
  return (
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
  );
}
