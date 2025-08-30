"use client";

import { useEffect, useState } from "react";
import { FarmNewsCard, NewsArticle } from "./card";
import { OverviewCardsSkeleton } from "./skeleton";

export function FarmCardsGroup() {
  const [news, setNews] = useState<null | NewsArticle[]>(null);

  useEffect(() => {
    const getNewsArticle = async () => {
      const axios = require("axios");

      const options = {
        method: "GET",
        url: "https://newsapi90.p.rapidapi.com/search",
        params: {
          query: "Farm management",
          language: "en-US",
          region: "NG",
        },
        headers: {
          "x-rapidapi-key":
            "cb4be639dcmsh1dfcff3554357ddp1daf59jsneeb2f06ca8af",
          "x-rapidapi-host": "newsapi90.p.rapidapi.com",
        },
      };

      try {
        const response = await axios.request(options);
        const n = response.data as NewsArticle[];

        setNews(n.slice(20));
        console.log(n.slice(20));
      } catch (error) {
        setNews([]);
      }
    };

    news === null && getNewsArticle();
  }, [news]);

  return (
    <>
      {news === null ? (
        <OverviewCardsSkeleton />
      ) : news.length === 0 ? (
        <div>No items to show</div>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6 xl:grid-cols-4 2xl:gap-7.5">
          {news.map((n, key) => (
            <FarmNewsCard key={key} article={n} />
          ))}
        </div>
      )}
    </>
  );
}
