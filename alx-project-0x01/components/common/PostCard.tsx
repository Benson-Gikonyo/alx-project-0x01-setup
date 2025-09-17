import React from "react";

interface PostCardProps {
    title: string;
    description: string;
}

const PostCard: React.FC<PostCardProps> = ({ title, description }) => {
    return (
        <div className="border rounded-lg p-4 shadow-md bg-white">
            <h2 className="text-xl font-semibold mb-2">{title}</h2>
            <p className="text-gray-600">{description}</p>
        </div>
    )
}

export default PostCard