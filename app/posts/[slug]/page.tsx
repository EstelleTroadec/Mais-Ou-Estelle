import { Mdx } from "@/features/mdx/Mdx";
import { getPost, getPosts } from "@/lib/posts";
import { getCountryPage } from "@/lib/countryPages";
import { ArticlesCarousel } from "@/components/ArticlesCarousel";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { ViewCount } from "../../../src/components/viewsCount/ViewCount";
import { LikeCount } from "../../../src/components/likesCount/LikeCount";
import dayjs from 'dayjs';
import 'dayjs/locale/fr';

dayjs.locale('fr');

export const dynamic = "force-static";

export const generateMetadata = async (props: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> => {
  const post = await getPost((await props.params).slug);

  if (!post) {
    return {
      title: "404 - Page Not Found",
      description: "Page not found",
    };
  }

  return {
    title: post.title,
  };
};

export default async function PostPage(props: { params: Promise<{ slug: string }> }) {
  const post = await getPost((await props.params).slug);

  if (!post) {
    notFound();
  }

  const allPosts = await getPosts();
  const countryPosts = allPosts.filter(p => p.country === post.country && p.slug !== post.slug);
  const otherArticles = countryPosts.slice(0, 10);
  const countryPage = await getCountryPage(post.country.toLowerCase().replace(/\s+/g, '-'));

  return (
    <>
      <div className="prose prose-sm mx-auto mt-24 w-3/4 lg:prose-lg">
        <div className="flex items-center gap-2 text-sm">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 text-muted-foreground">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
          </svg>
          <p className="text-muted-foreground">
            {dayjs(post.publishedAt).format('D MMMM YYYY')} 
            <span className="ml-2 font-bold">·</span>
          </p>
          <ViewCount slug={(await props.params).slug} />
        </div>
        <h1 className="font-poppins">{post.title}</h1>
        <div className="flex justify-center">
          <img src={post.mainImage} alt={post.title} className="w-full" />
        </div>
        <Mdx>{post.content}</Mdx>
        <LikeCount slug={(await props.params).slug} />
      </div>

      {otherArticles.length > 0 && (
        <div className="m-auto mb-12 mt-16 flex flex-col space-y-4">
          <h2 className="mb-4 ml-1 font-poppins text-lg font-semibold text-title md:ml-3 md:text-4xl">
            Mes autres articles sur {countryPage?.article || 'le'} {post.country}
          </h2>
          <ArticlesCarousel articles={otherArticles} />
        </div>
      )}
    </>
  );
}