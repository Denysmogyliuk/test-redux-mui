import { FC } from "react";
import { Box, ImageList, ImageListItem } from "@mui/material/";

const ITEM_DATA = [
  {
    img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
    title: "Breakfast",
  },
  {
    img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
    title: "Burger",
  },
  {
    img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
    title: "Camera",
  },
  {
    img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
    title: "Coffee",
  },
  {
    img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
    title: "Hats",
  },
  {
    img: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
    title: "Honey",
  },
  {
    img: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",
    title: "Basketball",
  },
  {
    img: "https://images.unsplash.com/photo-1518756131217-31eb79b20e8f",
    title: "Fern",
  },
  {
    img: "https://images.unsplash.com/photo-1597645587822-e99fa5d45d25",
    title: "Mushrooms",
  },
  {
    img: "https://images.unsplash.com/photo-1567306301408-9b74779a11af",
    title: "Tomato basil",
  },
  {
    img: "https://images.unsplash.com/photo-1471357674240-e1a485acb3e1",
    title: "Sea star",
  },
  {
    img: "https://images.unsplash.com/photo-1589118949245-7d38baf380d6",
    title: "Bike",
  },
];

function StandardImageList() {
  return (
    <ImageList
      variant="woven"
      gap={20}
      sx={{ width: 600, height: "auto", margin: "0 auto" }}
      cols={3}
    >
      {ITEM_DATA.map((item) => (
        <ImageListItem key={item.title}>
          <img
            src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
            srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const Main: FC = () => {
  return (
    <Box
      sx={{
        flexGrow: 1,
        textAlign: "center",
        margin: "50px",
      }}
    >
      <h1>Main</h1>
      <p style={{ width: "600px", textAlign: "justify" }}> Nisi eiusmod exercitation ullamco pariatur anim ad reprehenderit cillum esse eu. Eu esse magna quis fugiat ut minim do aliquip proident veniam non. Enim deserunt et quis consequat Lorem reprehenderit minim officia commodo. Labore qui cupidatat culpa esse commodo adipisicing do sit nulla fugiat commodo sint. Cillum veniam minim deserunt in excepteur occaecat adipisicing exercitation dolor pariatur commodo. Cupidatat ullamco ex in aliqua excepteur consequat occaecat sint cillum qui consectetur ipsum et voluptate. Do adipisicing amet esse qui velit duis amet elit in ex ad.
        Qui nostrud ex fugiat duis esse amet. Id Lorem exercitation est aute amet non dolore labore culpa ea cillum. Elit ullamco magna irure sit. Proident enim sit fugiat amet amet velit cupidatat dolor sint cillum sit adipisicing nostrud cupidatat. Labore qui elit ea consectetur velit consequat voluptate aliquip laboris occaecat. Esse occaecat amet Lorem esse labore elit sint deserunt.
        Occaecat ullamco pariatur ut minim sunt enim ex aliquip. Et quis qui proident officia culpa ea irure proident est deserunt. Occaecat officia sunt ut reprehenderit quis voluptate tempor laboris nulla dolore dolor veniam aliquip deserunt. Sint nulla sit pariatur sit non minim id aliquip quis ea. Proident eu proident nisi laboris ea do et cillum veniam culpa veniam cillum nostrud. Quis cillum mollit veniam in cillum anim velit ut. Pariatur minim minim minim nulla proident quis ad ea excepteur consectetur veniam.
      </p>
      <StandardImageList></StandardImageList>
    </Box>
  );
}

export default Main;
