import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faEnvelope} from "@fortawesome/free-solid-svg-icons"
import { faYoutube, faLinkedin, faGithub, faInstagram,faFacebook} from "@fortawesome/free-brands-svg-icons";
import '../App';


export default function () {
  return (
    <div className="socialLinks">
      <a href="https://www.linkedin.com/in/sanketsupekar" className="btn btn-light m-3">
        <FontAwesomeIcon icon={faLinkedin} />
      </a>

      <a href="mailto:sanketsupekar123@gmail.com" className="btn btn-light m-3">
        <FontAwesomeIcon icon={faEnvelope} />
      </a>

      <a href="https://github.com/sanketsupekar" className="btn btn-light m-3">
        <FontAwesomeIcon icon={faGithub} />
      </a>

      <a href="https://www.instagram.com/sanket_supekar_patil/" className="btn btn-light m-3">
        <FontAwesomeIcon icon={faInstagram} />{" "}
      </a>
      <a href="https://www.facebook.com/sanket.supekar.712/" className="btn btn-light m-3">
        <FontAwesomeIcon icon={faFacebook} />{" "}
      </a>

      <a href="https://www.youtube.com/channel/UCsZS_PHRWkho8l6u8jR2nhg" className="btn btn-light m-3">
        <FontAwesomeIcon icon={faYoutube} />{" "}
      </a>

    </div>
  );
}
