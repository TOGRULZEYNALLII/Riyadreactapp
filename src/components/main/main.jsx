import styles from "./main.module.css";
import Button from "../button/Button.jsx";
import Description from "../description/description.jsx";
import Items from "../items/item.jsx";
import image from "../../assets/riyad.png"; // Corrected path to the image
import Facebook from "../../assets/react.svg";
import Instagram from "../../assets/react.svg";
import Twitter from "../../assets/react.svg";

function Main() {
  return (
    <>
      <div className={styles.main}>
        <div className={styles["container"]}>
          <div className={styles["container-items"]}>
            <Description item="Hello i'am Riyad" />
            <Items text="Graphic Designer, UI/UX Designer , Web Designer" />
            <Button buttonName="Get in touch" />
          </div>
          <div className={styles["icons-items"]}>
            <img className={styles.facebook} src={Facebook} alt="facebook" />
            <img src={Instagram} alt="ins" />
            <img src={Twitter} alt="twitter" />
          </div>
        </div>
        <div className={styles.icons}>
          <img src={image} alt="Riyad" />
        </div>
      </div>
    </>
  );
}

export default Main;
