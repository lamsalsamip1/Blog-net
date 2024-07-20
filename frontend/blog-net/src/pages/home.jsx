import React from 'react';
import NavBar from '../components/navbar';
import Header from '../components/header';
import PostCard from '../components/PostCard';
function HomePage() {
    return (
        <div className='w-7/12 mx-auto'>
            <NavBar></NavBar>
            <Header></Header>
            <h2 className="mx-0 text-2xl mt-10 text-left font-bold">Latest Posts</h2>
            <PostCard
                title="Hitler Dead"
                excerpt="Soviet soldiers scoured the burning streets of Berlin above his head searching for him, on April 30, 1945 Adolf Hitler began his normal work routine that morning deep in the bunker under the Reich Chancellery building sadhfjsadhsajsahdjsah asdhsaj..."
            />

            <PostCard
                title="Hitler Dead"
                excerpt="Soviet soldiers scoured the burning streets of Berlin above his head searching for him, on April 30, 1945 Adolf Hitler began his normal work routine that morning deep in the bunker under the Reich Chancellery building sadhfjsadhsajsahdjsah asdhsaj..."
            />
        </div>
    );
}

export default HomePage;