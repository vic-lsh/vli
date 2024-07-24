import React from "react";
import { SectionContainer, SectionContent, SectionHeader } from "./ui/home";
import { News } from "../data/news";

const NewsEntry = ({ news }: { news: News }) => {
  return (
    <div className="flex flex-row gap-5">
      <span
        className="text-sm text-gray-500 dark:text-gray-400 w-20"
        style={{ lineHeight: "1.5rem" }}
      >
        {news.date}
      </span>
      <span className="w-full">{news.detail}</span>
    </div>
  );
};

export default function News({ news }: { news: News[] }) {
  return (
    <SectionContainer>
      <SectionHeader>News</SectionHeader>
      <SectionContent>
        <span className="flex flex-col gap-2">
          {news.map((n) => (
            <NewsEntry news={n} />
          ))}
        </span>
      </SectionContent>
    </SectionContainer>
  );
}
