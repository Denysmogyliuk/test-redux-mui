import { FC } from "react";
import { Button, Card, CardContent, CardMedia, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

type NewsCardProps = {
  disabled: boolean
  id: number
  onHide: (id: number) => void
  title: string
  url: string
}

const NewsCard: FC<NewsCardProps> = ({ disabled, id, onHide, title, url }) => {
  const { t } = useTranslation();

  function handleClick() {
    onHide(id);
  }

  return (
    <Card sx={{ maxWidth: 345, margin: "0" }}>
      <CardMedia component="img" height="200" image={url} alt="title" />
      <CardContent
        sx={{ display: "flex", flexDirection: "column", height: "120px" }}
      >
        <Typography variant="body2" color="text.secondary">
          {title}
        </Typography>

        <Button
          onClick={handleClick}
          variant="contained"
          sx={{ marginTop: "auto" }}
          disabled={disabled}
        >
          {t("hide")}
        </Button>
      </CardContent>
    </Card>
  );
}

export default NewsCard;
