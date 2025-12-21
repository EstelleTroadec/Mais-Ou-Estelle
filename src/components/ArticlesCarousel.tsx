"use client";

import Link from "next/link";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import {
  Card,
  CardFooter,
  CardHeader,
  CardTitle,
  CardImage
} from "@/components/ui/card";
import { LikeCount } from "./likesCount/LikeCount";
import dayjs from "dayjs";
import "dayjs/locale/fr";

dayjs.locale("fr");

interface Article {
  slug: string;
  title: string;
  mainImage: string;
  publishedAt: string;
}

export const ArticlesCarousel = ({ articles }: { articles: Article[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? articles.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === articles.length - 1 ? 0 : prev + 1));
  };

  if (articles.length === 0) {
    return <p className="text-muted-foreground">Aucun article disponible.</p>;
  }

  return (
    <div className="relative mx-auto w-[34.75rem]">
      <div className="relative flex items-center justify-between gap-4">
        {/* Bouton précédent */}
        {currentIndex > 0 && (
        <button
          onClick={goToPrevious}
          className="absolute left-0 top-1/2 z-10 -translate-y-1/2 rounded-full bg-footerBg p-2 text-background hover:bg-opacity-80"
          aria-label="Article précédent"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        )}

        {/* Carousel */}
        <div className="w-full overflow-hidden px-12">
          <div className="flex transition-transform duration-500 ease-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
            {articles.map((article) => (
              <div key={article.slug} className="w-full flex-shrink-0">
                <Card className="flex flex-col gap-2">
                  <CardHeader>
                    <CardImage src={article.mainImage} alt={article.title} />
                    <div className="items-center gap-2">
                      <div className="my-4 flex">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="mr-2.5 mt-0.5 size-3.5 text-muted-foreground"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
                          />
                        </svg>
                        <p className="text-sm text-muted-foreground">
                          {dayjs(article.publishedAt).format("D MMMM YYYY")}
                        </p>
                      </div>
                    </div>
                    <Link href={`/posts/${article.slug}`}>
                      <CardTitle className="text-xl text-footerBg lg:text-3xl">
                        {article.title}
                      </CardTitle>
                    </Link>
                  </CardHeader>
                  <CardFooter className="flex flex-col items-start text-muted-foreground">
                    <LikeCount slug={article.slug} />
                  </CardFooter>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* Bouton suivant */}
        {currentIndex < articles.length - 1 && (
        <button
          onClick={goToNext}
          className="absolute right-0 top-1/2 z-10 -translate-y-1/2 rounded-full bg-footerBg p-2 text-background hover:bg-opacity-80"
          aria-label="Article suivant"
        >
          <ChevronRight className="h-6 w-6" />
        </button>
        )}
      </div>

      {/* Indicateurs de point */}
      <div className="mt-6 flex justify-center gap-2">
        {articles.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-2 w-2 rounded-full transition-colors ${
              index === currentIndex ? "bg-footerBg" : "bg-gray-300"
            }`}
            aria-label={`Aller à l'article ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};
