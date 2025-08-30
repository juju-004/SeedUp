import { ArrowDownIcon, ArrowUpIcon } from "@/assets/icons";
import { Button } from "@/components/ui-elements/button";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

export interface NewsArticle {
  author: string;
  authorTopicId: string;
  date: number; // looks like a UNIX timestamp
  domain: string;
  image: string;
  isVideo: boolean;
  link: string;
  preview: string;
  pubLogo: string;
  pubLogoLarge: string | null;
  publisher: string;
  title: string;
}

export function FarmNewsCard({ article }: { article: NewsArticle }) {
  return (
    <div className="rounded-[10px] bg-white p-6 shadow-1 dark:bg-gray-dark">
      <div
        style={{ backgroundImage: `url(${article.image})` }}
        className="h-20 w-full overflow-hidden rounded-xl bg-black/15 bg-cover bg-center"
      ></div>
      <div className="mt-6 flex flex-col gap-4">
        <dl>
          <dt className="mb-1.5 text-heading-6 font-bold text-dark dark:text-white">
            {article.title}
          </dt>

          <dd className="mb-6 text-sm font-medium text-dark-6">
            {article.preview}
          </dd>
          <Link
            href={article.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary"
          >
            Read more
          </Link>
        </dl>
      </div>
    </div>
  );
}
