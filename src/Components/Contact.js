import githubIcon from "../Assets/Icons/Social/githubIcon.svg";
import linkedinIcon from "../Assets/Icons/Social/linkedinIcon.svg";
import xingIcon from "../Assets/Icons/Social/xingIcon.svg";
import ContactContainerStyles from "../Assets/Styles/ContactStyles";

function Contact() {
  return (
    <ContactContainerStyles id="contact">
      <h2>Contact</h2>
      <a href="mailto:agustingramajo@gmail.com">agustingramajo@gmail.com</a>
      <p>Or contact me through my social networks</p>
      <div className="socialNetworks">
        <div>
          <a href="https://github.com/Agustingrm" target="_blank" rel="noreferrer noopener">
            <img src={githubIcon} alt="Github Icon" class="icon" />
          </a>
        </div>
        <div>
          <a href="https://www.linkedin.com/in/agustingrm" target="_blank" rel="noreferrer noopener">
            <img src={linkedinIcon} alt="Linkedin Icon" class="icon" />
          </a>
        </div>
        <div>
          <a
            href="https://www.xing.com/profile/AgustinAndres_GramajoGaitan/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <img src={xingIcon} alt="XingIcon" class="icon" />
          </a>
        </div>
      </div>
    </ContactContainerStyles>
  );
}

export default Contact;
