import React from 'react'
import Articles from './Articles';
import articlesContent from "./articles-content";

function ArticleList() {
    return (
        <div className="mb-20">
            <h1 className="sm:text-4xl text-2xl font-bold mt-6 text-gray-900 mb-4">Article List</h1>
            <div className="container py-4 mx-auto">
                <div className="flex flex-wrap -m-4">
                    <Articles articles={articlesContent} />
                </div>
            </div>
        </div>
    )
}

export default ArticleList
