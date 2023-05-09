import React from 'react';
import { Link } from 'react-router-dom';
import { FaAngleRight } from "react-icons/fa";
import BlogData from "../../data/blog/BlogData.json";
import { slugify } from '../../utils';


const allBlogData = BlogData;

const BlogDataHome = ({colSize, itemShow}) => {
    return (
        <>
            {allBlogData.slice(-4).reverse().map((data) => (
                <div className={`${colSize}`} key={data.id}>
                    <div className={`blog-thumb-list blog-list ${(data.id % 2  === 0) ? "border-start" : ""}`}>
                        <div className="post-thumbnail">
                            <Link to={process.env.PUBLIC_URL + `/blog/${slugify(data.slug)}`}>
                                <img src={`${process.env.PUBLIC_URL}/${data.thumb}`} alt="Blog Post" />
                            </Link>
                        </div>
                        <div className="post-content">
                            <h5 className="title">
                                <Link to={process.env.PUBLIC_URL + `/blog/${slugify(data.slug)}`}>
                                    {data.title}
                                </Link>
                            </h5>
                            <p>{data.excerpt}</p>
                            <Link to={process.env.PUBLIC_URL + `/blog/${slugify(data.slug)}`} className="more-btn">
                                Learn more <FaAngleRight />
                            </Link>
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
}

export default BlogDataHome;