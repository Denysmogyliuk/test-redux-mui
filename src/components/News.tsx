import { FC, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import NewsCard from "./NewsCard";
import { Box, Grid } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { useTranslation } from "react-i18next";
import {
  fetchNews,
  selectIsNewsLoading,
  selectNews,
  selectMaxId,
  selectErrorMessage
} from "../app/features/news";
import { hideTopic } from "app/features/news/slice";

const INITIAL_NEWS_VALUE = 6;
const ADD_NEWS_VALUE = 6;

const News: FC = () => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector(selectIsNewsLoading);
  const items = useAppSelector(selectNews);
  const maxId = useAppSelector(selectMaxId);
  const errorMessage = useAppSelector(selectErrorMessage);

  const handleHide = async (id: string) => {
    dispatch(hideTopic(id));
    // try {
    // const response = await fetch(
    //   getPhotos(Math.max(...items.map((item) => item.id)), 1)
    // );
    // const data = await response.json();
    // setItems((prevData) => {
    //   const filtered = prevData.filter((item) => item.id !== id);
    //   return [...filtered, ...data];
    // });
    // } catch (error) {
    //   setError(error);
    // } finally {
    // }
  };

  const handleShowMore = async () => {
    dispatch(fetchNews({ start: maxId, limit: maxId + ADD_NEWS_VALUE }));
  };

  useEffect(() => {
    dispatch(fetchNews({ start: 0, limit: INITIAL_NEWS_VALUE }));
  }, [dispatch]);

  if (errorMessage) {
    return <h1>Error: {errorMessage}</h1>;
  }

  return (
    <Box sx={{ flexGrow: 1, textAlign: "center", margin: "50px" }}>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 1, sm: 8, md: 12 }}
        sx={{ paddingLeft: "8px" }}
      >
        {items.map((item: any) => {
          const { id, url, title } = item;

          return (
            <Grid item xs={2} sm={4} md={4} key={id}>
              <NewsCard
                onHide={handleHide}
                id={id}
                url={url}
                title={title}
                disabled={isLoading}
              />
            </Grid>
          );
        })}
      </Grid>

      <LoadingButton
        loading={isLoading}
        sx={{ margin: "30px" }}
        onClick={handleShowMore}
        variant="contained"
        size="large"
      >
        {t("more")}
      </LoadingButton>
    </Box>
  );
}

export default News;
