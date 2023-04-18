const createTag = (name) => {
    return (
        <span className="font-extralight mr-2 text-slate-500 text-sm">{name}</span>
    )
}

const ArticlePreview = ({article}) => {
    return (
        <article className="basis-5/12 md:mr-4 p-5 cursor-pointer border-2 border-white hover:border-slate-800 rounded-xl">
            <img alt={article.title} className="rounded-xl" src={article.image}/>
            <h4 className="text-lg my-3">{article.title}</h4>
            {article.preview &&
                <p className="font-light mb-2">{article.preview}</p>
            }
            {article.tags.length &&
                <div>
                    {article.tags.map(tag => createTag(tag))}
                </div>
            }
        </article>
    );
}

export default ArticlePreview