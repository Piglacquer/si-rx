import  React, { useState, useCallback } from 'react';

const Context = React.createContext();

export const BlogProvider = ({children}) => {
	const [ blogs, setBlogs ] = useState([]);
	const [ blogsFetched, setBlogsFetched ] = useState(false);

	const addBlogs = useCallback(blogs => setBlogs(blogs), [setBlogs]);
	const fetchBlogs = () => {
		fetch('https://sirx-middleware.herokuapp.com/blog').then(resp => resp.json()).then(addBlogs).then(() => setBlogsFetched(true))
	}
	const value = { blogs, fetchBlogs, blogsFetched };
	
	return (
		<Context.Provider value={value}>
			{children}
		</Context.Provider>
	)
}

export const useBlogStore = () => React.useContext(Context);