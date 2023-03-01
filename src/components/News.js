import { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import NewsCard from "./NewsCard";
import Button from "@mui/material/Button";
import { useTranslation } from "react-i18next";

const INIT_ITEMS_VALUE = 6;
const ADD_ITEMS_VALUE = 6;
const DATA_LINK = "https://jsonplaceholder.typicode.com/photos";

export default function News() {
  const { t } = useTranslation();
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const [itemsValue, setItemsValue] = useState(INIT_ITEMS_VALUE);
  const [hiddenIndex, setHiddenIndex] = useState([]);

  const handleHide = (index) => {
    setHiddenIndex((data) => [...data, index]);
  };

  function handleShowMore(evt) {
    setItemsValue((value) => value + ADD_ITEMS_VALUE);
  }

  let filteredItems = items.filter((elem, index) =>
    !hiddenIndex.includes(elem.id) ? true : false
  );

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(DATA_LINK);
        const data = await response.json();
        setIsLoaded(true);
        setItems(data);
      } catch (error) {
        setIsLoaded(true);
        setError(error);
      }
    };
    getData();
  }, []);

  if (error) {
    return <div>Ошибка: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>{t("loading")}</div>;
  } else {
    return (
      <Box sx={{ flexGrow: 1, textAlign: "center", margin: "50px" }}>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 1, sm: 8, md: 12 }}
          sx={{ paddingLeft: "8px" }}
        >
          {filteredItems.slice(0, itemsValue).map((item, index) => {
            const { id, url, title } = item;
            return (
              <Grid item xs={2} sm={4} md={4} key={id}>
                <NewsCard
                  handleHide={handleHide}
                  id={id}
                  url={url}
                  title={title}
                ></NewsCard>
              </Grid>
            );
          })}
        </Grid>
        <Button
          sx={{ margin: "30px" }}
          onClick={handleShowMore}
          variant="contained"
          size="large"
        >
          {t("more")}
        </Button>
      </Box>
    );
  }
}
