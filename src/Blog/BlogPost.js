import React from 'react';

const BlogPost = ({ blog }) => {
	const brokenUpText = blog.body_html.split('</p>');

	return (
		<>
			{brokenUpText.map((text, index) => {
				const formatted = text.replace(/<((?=!\-\-)!\-\-[\s\S]*\-\-|((?=\?)\?[\s\S]*\?|((?=\/)\/[^.\-\d][^\/\]'"[!#$%&()*+,;<=>?@^`{|}~ ]*|[^.\-\d][^\/\]'"[!#$%&()*+,;<=>?@^`{|}~ ]*(?:\s[^.\-\d][^\/\]'"[!#$%&()*+,;<=>?@^`{|}~ ]*(?:=(?:"[^"]*"|'[^']*'|[^'"<\s]*))?)*)\s?\/?))>/g,
				'')
				return <p key={formatted[0] + index}>{formatted}</p>
			})}
		</>
	);
};

export default BlogPost;