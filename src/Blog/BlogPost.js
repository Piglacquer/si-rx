import React from 'react';
import './BlogPost.scss';

const BlogPost = ({ blog }) => {
	const brokenUpText = blog.body_html.split('</p>');

	return (
		<div className='blog-container'>
			<img alt={blog.image.alt} src={blog.image.src} className='blog-image'/>
			<h2 className='blog-title'>{blog.title}</h2>
			<div className='blog-body-container'>
				{brokenUpText.map((text, index) => {
					const formatted = text.replace(/<((?=!\-\-)!\-\-[\s\S]*\-\-|((?=\?)\?[\s\S]*\?|((?=\/)\/[^.\-\d][^\/\]'"[!#$%&()*+,;<=>?@^`{|}~ ]*|[^.\-\d][^\/\]'"[!#$%&()*+,;<=>?@^`{|}~ ]*(?:\s[^.\-\d][^\/\]'"[!#$%&()*+,;<=>?@^`{|}~ ]*(?:=(?:"[^"]*"|'[^']*'|[^'"<\s]*))?)*)\s?\/?))>/g,
					'')
					return <p key={formatted[0] + index}>{formatted}</p>
				})}
			</div>
		</div>
	);
};

export default BlogPost;