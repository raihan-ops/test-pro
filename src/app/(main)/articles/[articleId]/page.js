import {getArticleById} from "@/helpers/ArticlesGroupData";

export const metadata = {
    metadataBase: new URL("http://localhost:3000"),
    title: "Article Details",
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

const ArticleDetails = ({params}) => {

    const article = getArticleById(parseInt(params.articleId));

    const content = "<p>Article Content</p>";

    return (
        <>
            <div className="h-20 bg-emerald-700 flex-center">
                <h1 className="sts-container text-3xl text-white font-semibold">
                    Article Details
                </h1>
            </div>
            <div
                className="sts-container py-16"
            >
                {
                    article ? <div>
                        <h1 className="text-2xl font-semibold mb-4">
                            {article.title}
                        </h1>
                        <p dangerouslySetInnerHTML={{ __html: content }}></p>
                    </div> : <div
                        className="text-2xl text-red-500"
                    >
                        No article found by Id: {params.articleId}
                    </div>
                }
            </div>
        </>
    );
};

export default ArticleDetails;