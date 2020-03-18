import React, { useEffect } from 'react';
import BlogPost from './BlogPost';
import { useBlogStore } from '../common/BlogProvider';

const BlogPage = () => {
	const { blogs, fetchBlogs, blogsFetched } = useBlogStore();

	useEffect(() => {
		if (blogsFetched) return;
		fetchBlogs();
	})
	console.warn('yeet blogs', blogs);
	return (
		<>
			<h1>Blog</h1>
			{blogs.length && blogs.map(blog => <BlogPost key={blog.id} blog={blog} />)}
		</>
	)
}

export default React.memo(
	BlogPage,
	(prevProps, nextProps) => (
		prevProps.blogs === nextProps.blogs
	)
	);