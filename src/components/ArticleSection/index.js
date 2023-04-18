import ArticlePreview from "../ArticlePreview";

const ArticleSection = ({title, articles}) => {
    return (
        <main className="p-5 mt-9">
            <h2 className="text-2xl md:ml-5 lg:ml-9 font-bold mb-4">{title}</h2>
            <section className="md:flex flex-wrap justify-center">
                {articles.length &&
                    articles.map(article => <ArticlePreview article={article} />)
                }
            </section>
        </main>
    )
}

export default ArticleSection