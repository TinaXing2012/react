import { Link } from "react-router-dom";
import React from 'react'

import postData from "./db";

export default function PostList() {

    return (
        <div>
            <h2>Blog List</h2>
            <ul>
                {Object.entries(postData).map(([slug, { title }]) => <Link to={`/posts/${slug}`}><li key={slug}>{title}</li></Link>)}
            </ul>
        </div>
    )
}
