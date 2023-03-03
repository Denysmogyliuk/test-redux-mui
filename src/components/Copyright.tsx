import { FC } from "react";
import { useTranslation } from "react-i18next";

const Copyright: FC = () => {
  const { t } = useTranslation();

  return (
    <div
      style={{
        padding: "20px",
        display: "flex",
        gap: "10px",
        height: "50px",
        flexDirection: "column",
      }}
    >
      <a
        href="mailto:denysmogyliuk@gmail.com"
        className="copyright__link"
        style={{ fontSize: "18px", color: "black", textDecoration: "none" }}
      >
        {t("copyright")}
      </a>
      <a href="https://www.linkedin.com/in/denys-mogyliuk-796630216/">
        <img src="./images/logos/linked.png" alt="linked" height="20" />
      </a>
    </div>
  );
}

export default Copyright;