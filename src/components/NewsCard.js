import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useTranslation } from "react-i18next";

import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import ListSubheader from "@mui/material/ListSubheader";
import IconButton from "@mui/material/IconButton";
import InfoIcon from "@mui/icons-material/Info";

export default function NewsCard({ url, title, handleHide, id }) {
  const { t, i18n } = useTranslation();

  function handler() {
    handleHide(id);
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
          onClick={handler}
          variant="contained"
          sx={{ marginTop: "auto" }}
        >
          {t("hide")}
        </Button>
      </CardContent>
    </Card>

    // <ImageListItem>
    //   <img src={url} alt={title} loading="lazy" />
    //   <ImageListItemBar
    //     title={title}
    //     sx={{ height: "100px" }}
    //     // subtitle={title}
    //     actionIcon={
    //       <IconButton
    //         onClick={handler}
    //         sx={{ color: "rgba(255, 255, 255, 0.54)" }}
    //         // aria-label={`info about ${title}`}
    //       >
    //         <InfoIcon />
    //       </IconButton>
    //     }
    //   />
    // </ImageListItem>
  );
}
