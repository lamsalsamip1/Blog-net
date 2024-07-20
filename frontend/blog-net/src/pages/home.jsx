import React, { useState, useEffect } from 'react';
import NavBar from '../components/navbar';
import Header from '../components/header';
import PostCard from '../components/PostCard';
function HomePage() {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('https://localhost:7043/api/BlogPosts')
            .then(response => response.json())
            .then(data => {
                // Assuming the API returns an array of posts
                console.log(data);
                setPosts(data);
            })
            .catch(error => console.error('Error fetching data:', error));
    }, []); // The empty array ensures this effect runs only once after the initial render

    return (
        <div className='w-7/12 mx-auto'>
            <NavBar></NavBar>
            <Header></Header>
            <h2 className="mx-0 text-2xl mt-10 text-left font-bold">Latest Posts</h2>
            {/* <PostCard
                title="Hitler Dead"
                excerpt="Soviet soldiers scoured the burning streets of Berlin above his head searching for him, on April 30, 1945 Adolf Hitler began his normal work routine that morning deep in the bunker under the Reich Chancellery building sadhfjsadhsajsahdjsah asdhsaj..."
            />

            <PostCard
                title="Hitler Dead"
                excerpt="Soviet soldiers scoured the burning streets of Berlin above his head searching for him, on April 30, 1945 Adolf Hitler began his normal work routine that morning deep in the bunker under the Reich Chancellery building sadhfjsadhsajsahdjsah asdhsaj..."
            /> */}
            {posts.map(post => (
                <PostCard
                    key={post.id}
                    title={post.title}
                    excerpt={post.content.split('. ').slice(0, 2).join('. ') + '...'} // Taking the first two sentences as the excerpt
                />
            ))}
        </div>
    );
}

export default HomePage;