import React from 'react';

function PostCard({ title, excerpt }) {
    return (
        <div className="bg-white shadow-md rounded-lg p-4 mt-10 px-6 py-4 mx-auto">
            <h3 className="font-serif text-xl mb-2 text-left">{title}</h3>
            <div className="flex flex-col justify-between">
                <p className="text-gray-700 text-base text-left">{excerpt}</p>
                <div className="flex justify-end -mt-4">
                    <button className="bg-customColor hover:bg-customColorDark text-white font-bold text-xs py-1 px-2 mr-2 rounded">
                        Read More
                    </button>
                </div>
            </div>
        </div>
    );
}
export default PostCard;