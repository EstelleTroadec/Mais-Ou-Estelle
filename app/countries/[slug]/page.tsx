import { Mdx } from "@/features/mdx/Mdx";
import { getCountryPage, getCountryPosts } from "@/lib/countryPages";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  Card,
  CardFooter,
  CardHeader,
  CardTitle,
  CardImage
} from "@/components/ui/card";
import { LikeCount } from "../../../src/components/likesCount/LikeCount";
import dayjs from 'dayjs';
import 'dayjs/locale/fr';

dayjs.locale('fr');

export const dynamic = "force-static";

export const generateMetadata = async (props: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> => {
  const countryPage = await getCountryPage((await props.params).slug);

  if (!countryPage) {
    return {
      title: "404 - Page Not Found",
      description: "Page not found",
    };
  }

  return {
    title: countryPage.name,
  };
};

export default async function CountryPage(props: { params: Promise<{ slug: string }> }) {
  const countryPage = await getCountryPage((await props.params).slug);

  if (!countryPage) {
    notFound();
  }

  const countryPosts = await getCountryPosts((await props.params).slug);

  // Sort posts from most recent to oldest
  const sortedPosts = countryPosts?.posts?.sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());

  return (
    <div className="mx-0">
      <div
        className="relative w-full bg-cover bg-center py-72 text-center font-chelsea font-semibold uppercase"
        style={{ backgroundImage: `url(${countryPage.mainImage})` }}
      >
        <h1 className="relative z-10 text-[2.5rem] text-background md:text-[5rem]">{countryPage.name}</h1>
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>
      <div className="mx-auto my-10 flex flex-col lg:my-20 lg:w-3/4 lg:flex-row">
        <div className="mb-10 lg:mt-6 lg:w-1/3">
          <div className="font-courrier mb-2 text-center uppercase lg:text-left">
            <h2 className="text-[1rem]">PAYS</h2>
            <p className="font-bold">{countryPage.name}</p>
          </div>
          <div className="font-courrier mb-2 text-center uppercase lg:text-left">
            <h2 className="text-[1rem]">CONTINENT</h2>
            <p className="font-bold">{countryPage.continent}</p>
          </div>
          <div className="font-courrier mb-2 text-center uppercase lg:text-left">
            <h2 className="text-[1rem]">CAPITALE</h2>
            <p className="font-bold">{countryPage.capital}</p>
          </div>
          <div className="font-courrier mb-2 text-center uppercase lg:text-left">
            <h2 className="text-[1rem]">DEVISE</h2>
            <p className="font-bold">{countryPage.money}</p>
          </div>
          <div className="font-courrier mb-2 text-center uppercase lg:text-left">
            <h2 className="text-[1rem]">LANGUE(S) OFFICIELLE(S)</h2>
            <p className="font-bold">{countryPage.language}</p>
          </div>
          <div className="font-courrier mb-2 text-center uppercase lg:text-left">
            <h2 className="text-[1rem]">PRISES ÉLECTRIQUES</h2>
            <p className="font-bold">{countryPage.plug}</p>
          </div>
          <div className="font-courrier mb-2 text-center uppercase lg:text-left">
            <h2 className="text-[1rem]">QUAND PARTIR ?</h2>
            <p className="font-bold">{countryPage.bestPeriod}</p>
          </div>
        </div>
        <div className="prose relative m-auto w-4/5 lg:prose-lg md:max-h-[27rem] md:w-[90%] md:overflow-y-auto lg:mt-0 lg:w-2/3 lg:pl-8">
          <Mdx>{countryPage.content}</Mdx>
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 p-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-6 w-6 animate-bounce text-gray-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 12.75l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </div>
        </div>
      </div>
      <div className="m-auto w-4/5 space-y-4 md:mx-auto md:w-[90%] lg:mx-auto">
        <h1 className="ml-1 mt-12 font-poppins text-xl font-semibold text-title md:ml-3 md:text-3xl">Tous mes articles sur {countryPage.article} {countryPage.name} </h1>
        {sortedPosts && sortedPosts.length > 0 ? (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:justify-center">
          {sortedPosts.map((post) => (
            <Card key={post.slug} className="flex flex-col gap-2">
              <CardHeader>
                  <CardImage src={post.mainImage} alt={post.title} />
                  <div className="items-center gap-2">
                  <div className="my-4 flex">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="mr-2.5 mt-0.5 size-3.5 text-muted-foreground">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
                    </svg>
                    <p className="text-sm text-muted-foreground">
                      {dayjs(post.publishedAt).format('D MMMM YYYY')}
                    </p>
                  </div>
                </div>
                <Link href={`/posts/${post.slug}`}>
                  <CardTitle className="text-xl text-footerBg lg:text-3xl">
                    {post.title}
                  </CardTitle>
                </Link>
              </CardHeader>
              <CardFooter className="flex flex-col items-start text-muted-foreground">
                <LikeCount slug={post.slug} />
              </CardFooter>
            </Card>
          ))}
        </div>
        ) : (
          <p className="px-8 py-2 text-lg text-muted-foreground">Un peu de patience, ça arrive... ⌛️</p>
        )}
      </div>
    </div>
  );
}