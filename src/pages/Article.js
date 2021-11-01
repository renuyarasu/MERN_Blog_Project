import React from 'react'
import Articles from './Articles';
import articlesContent from "./articles-content";
import { NotFound } from './NotFound';

const Article = ({ match }) => {
    const name = match.params.name;
    const article = articlesContent.find((article) => article.name === name);
    if (!article) return <NotFound/>
    const otherArticles = articlesContent.filter(article => article.name !== name)
    return (
        <div className="mb-20">
            <h1 className="sm:text-4xl text-2xl font-bold mt-6 text-gray-900 mb-4">{article.title}</h1>

            {article.content.map((paragraph, index) => (
                <p className='max-auto leading-relaxed text-base mb-4' key='{index}'>{paragraph}</p>
            ))}
            <h2 className="sm:text-2x text-xl font-bold mb-4 text-gray-900">Other Articles</h2>
            <div className="flex flex-wrap -m-4">
                <Articles articles={otherArticles} />
            </div>
        </div>
    )
}

export default Article
