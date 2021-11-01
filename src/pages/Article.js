import React from 'react'
import articlesContent from "./articles-content";

const Article = ({ match }) => {
    const name = match.params.name;
    const article = articlesContent.find((article) => article.name === name);
    if(!article) return <h1 className="sm:text-4xl text-2xl font-bold mt-6 text-gray-900 mb-4 text-red-600">Article does not exisits</h1>
    return (
        <div className="mb-20">
            <h1 className="sm:text-4xl text-2xl font-bold mt-6 text-gray-900 mb-4">{article.title}</h1>
            {article.content.map((paragraph, index) => (
                <p className='max-auto leading-relaxed text-base mb-4' key='{index}'>{paragraph}</p>   
            ))}
        </div>
    )
}

export default Article
