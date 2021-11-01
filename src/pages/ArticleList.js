import React from 'react'
import { Link } from 'react-router-dom';
import articlesContent from "./articles-content";

function ArticleList() {
    return (
        <div className="mb-20">
            <h1 className="sm:text-4xl text-2xl font-bold mt-6 text-gray-900 mb-4">Article List</h1>
            <div className="container py-4 mx-auto">
                <div className="flex flex-wrap -m-4">
                    {articlesContent.map((article, index) => (
                        <div key={index} className='p-4 md:w-1/2'>
                            <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hiddlen">
                                <Link to={`/article/${article.name}`}>
                                    <img src={article.thumbnail} alt="blog" className='lg:h-48 md:h-36 w-full object-cover object-center' />
                                </Link>
                                <div className="p-6">
                                    <Link to={`/article/${article.name}`}>
                                        <h3 className="title-font font-medium text-lg text-gray-900 mb-3">
                                            {article.title}
                                        </h3>
                                    </Link>
                                    <p>{article.content[0].substring(0, 100)}...</p>
                                    <div className="flex item-center flex-wrap">
                                        <Link className='text-indigo-500 inline-flex item-center md:mb-2 lg:mb-0' to={`/article/${article.name}`}>
                                            Learn More...
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ArticleList
