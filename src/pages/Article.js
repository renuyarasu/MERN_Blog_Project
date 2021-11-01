import React from 'react'

const Article = ({match}) => {
    const name = match.params.name;
    return (
        <div className="mb-20">
            <h1 className="sm:text-4xl text-2xl font-bold mt-6 text-gray-900 mb-4">{name} Article</h1>
        </div>
    )
}

export default Article
