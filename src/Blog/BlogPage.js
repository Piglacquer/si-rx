import React, { useEffect } from 'react';
import BlogPost from './BlogPost';
import { useBlogStore } from '../common/BlogProvider';
import './BlogPage.scss';

const BlogPage = () => {
	const { blogs, fetchBlogs, blogsFetched } = useBlogStore();

	useEffect(() => {
		if (blogsFetched) return;
		fetchBlogs();
	})
	console.warn('yeet blogs', blogs);
	return (
		<div className='blog-page'>
			<h1 className='blog-page-title'>Blog</h1>
			{blogs.length && blogs.map(blog => <BlogPost key={blog.id} blog={blog} />)}
		</div>
	)
}

export default React.memo(
	BlogPage,
	(prevProps, nextProps) => (
		prevProps.blogs === nextProps.blogs
	)
	);