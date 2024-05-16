import "../styles.scss";
import social_inst from "../assets/social_inst.png";
import social_telegram from "../assets/social_telegram.png";
import social_wapp from "../assets/social_wapp.png";
import send_btn from "../assets/send_btn.png";
import close from "../assets/close.png";
import { useState } from "react";
export function FloatingBtn() {
  let [isfloatingActive, setisfloatingActive] = useState(false);

  return (
    <div className="floating_div">
      <div className={isfloatingActive ? "social_list-opened" : "social_list"}>
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
          src={isfloatingActive ? close : send_btn}
          alt=""
        />
      </button>
    </div>
  );
}
