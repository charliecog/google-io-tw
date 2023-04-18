const createTag = (name) => {
    return (
        <span className="font-extralight mr-2 text-slate-500 text-sm">{name}</span>
    )
}

const ArticlePreview = ({image, title, tags}) => {
    return <article className="md:mr-4 p-5 cursor-pointer border-2 border-white hover:border-slate-800 rounded-xl">
        <img alt={title} className="rounded-xl" src={image}/>
        <h4 className="text-lg my-3">{title}</h4>
        {tags.length &&
            <div>
                {tags.map(tag => createTag(tag) )}
            </div>
        }
    </article>;
}

export default ArticlePreview