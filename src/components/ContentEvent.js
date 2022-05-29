import React from "react";
import "../styles/ContentEvent.css";
import adde from "../img/plus.png";
import dele from "../img/minus.png";

export default function ContentEvent() {
  return (
    <div className="OutBg">
      <div className="CenterBox">
        <div className="UpcomingEventsHeader">
          <div className="filler"></div>
          <p> UPCOMING EVENTS </p>
          <button className="AddEvent">
            <img src={adde} alt="psg" width="20" height="20" />
          </button>
        </div>
        <div className="EventBox">
          <button className="DelEvent">
            <img src={dele} alt="psg" width="15" height="15" />
          </button>
          <h3> Lorem ipsum </h3>
          <h5>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
            inventore vero fugiat cumque. Harum deserunt molestiae corrupti
            iusto quasi animi laborum ut, consequatur et atque amet, tempore sit
            vel distinctio.
          </h5>
        </div>
        <div className="EventBox">
          <button className="DelEvent">
            <img src={dele} alt="psg" width="15" height="15" />
          </button>
          <h3> Lorem ipsum </h3>
          <h5>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
            inventore vero fugiat cumque. Harum deserunt molestiae corrupti
            iusto quasi animi laborum ut, consequatur et atque amet, tempore sit
            vel distinctio.
          </h5>
        </div>
        <div className="EventBox">
          <button className="DelEvent">
            <img src={dele} alt="psg" width="15" height="15" />
          </button>
          <h3> Lorem ipsum </h3>
          <h5>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
            inventore vero fugiat cumque. Harum deserunt molestiae corrupti
            iusto quasi animi laborum ut, consequatur et atque amet, tempore sit
            vel distinctio.
          </h5>
        </div>
        <div className="EventBox">
          <button className="DelEvent">
            <img src={dele} alt="psg" width="15" height="15" />
          </button>
          <h3> Lorem ipsum </h3>
          <h5>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
            inventore vero fugiat cumque. Harum deserunt molestiae corrupti
            iusto quasi animi laborum ut, consequatur et atque amet, tempore sit
            vel distinctio.
          </h5>
        </div>
        <div className="EventBox">
          <button className="DelEvent">
            <img src={dele} alt="psg" width="15" height="15" />
          </button>
          <h3> Lorem ipsum </h3>
          <h5>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
            inventore vero fugiat cumque. Harum deserunt molestiae corrupti
            iusto quasi animi laborum ut, consequatur et atque amet, tempore sit
            vel distinctio.
          </h5>
        </div>
        <br></br>
        <br></br>
      </div>
    </div>
  );
}
