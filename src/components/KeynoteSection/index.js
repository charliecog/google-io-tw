import tent from './tent.webp'
import people from './people.webp'
import ArticlePreview from "../ArticlePreview";

const KeynoteSection = () => {
    return (
        <main className="p-5 mt-9">
            <h2 className="text-2xl md:text-4xl md:ml-5 lg:ml-9 font-bold mb-4">Watch the keynotes</h2>
            <section className="md:flex justify-center">
                <ArticlePreview image={tent} title={'Google I/O keynote'} tags={['keynote']} />
                <ArticlePreview image={people} title={'Developer keynote'} tags={['keynote']} />
            </section>
        </main>
    )
}

export default KeynoteSection