import Link from "next/link";
import {articlesGroupData} from "@/helpers/ArticlesGroupData";

export const metadata = {
    metadataBase: new URL("http://localhost:3000"),
    title: "Articles",
    description: "Articles page",
    keywords: "Articles",
    openGraph: {
        title: "Articles",
        description: 'Articles page',
        siteName: "STS",
        images: [],
        type: "article",
        url: "/articles",
    },
}

const Articles = () => {
    return (
        <>
            <div className="h-20 bg-emerald-700 flex-center">
                <h1 className="sts-container text-3xl text-white font-semibold">
                    Articles
                </h1>
            </div>
            <div className="sts-container py-16">
                {
                    articlesGroupData.map(group => (
                        <div
                            key={group.id}
                            className="mb-8"
                        >
                            <h1
                                className="text-2xl font-semibold mb-4"
                            >
                                {group.title}
                            </h1>
                            <ul className="list-inside list-disc">
                                {
                                    group.articles.map(article => (
                                        <li
                                            key={article.id}
                                            className="mb-2 text-gray-700 hover:text-emerald-700 hover:underline"
                                        >
                                            <Link href={article.url}>{article.title}</Link>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    ))
                }
            </div>
        </>
    );
};

export default Articles;