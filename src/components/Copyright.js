import { useTranslation } from "react-i18next";

export default function Copyright() {
  const { t, i18n } = useTranslation();

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
        <img
          className="copyright__link-image"
          src={"./logos/linked.png"}
          alt={"linked"}
          height="20"
        />
      </a>
    </div>
  );
}
