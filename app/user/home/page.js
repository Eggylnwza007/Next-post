'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import './Page.css'; // Import your CSS file

export default function Page() {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState({ title: '', content: '', image: null });

  const handleTitleChange = (e) => {
    setNewPost({ ...newPost, title: e.target.value });
  };

  const handleContentChange = (e) => {
    setNewPost({ ...newPost, content: e.target.value });
  };

  const handleImageChange = (e) => {
    setNewPost({ ...newPost, image: e.target.files[0] });
  };

  const handleCreatePost = () => {
    if (newPost.title && newPost.content) {
      setPosts([...posts, newPost]);
      setNewPost({ title: '', content: '', image: null });
    }
  };

  const handleDeletePost = (index) => {
    const updatedPosts = [...posts];
    updatedPosts.splice(index, 1);
    setPosts(updatedPosts);
  };

  return (
    <div>
      <div>
        <h2>Create a New Post</h2>
        <input
          type="text"
          placeholder="Title"
          value={newPost.title}
          onChange={handleTitleChange}
        />
        <textarea
          placeholder="Content"
          value={newPost.content}
          onChange={handleContentChange}
        />
        <input
          type="file"
          accept="image/png"
          onChange={handleImageChange}
        />
        <button className="custom-button" onClick={handleCreatePost}>Create Post</button>
      </div>
      <div>
        <h2>Posts</h2>
        <ul>
          {posts.map((post, index) => (
            <li key={index}>
              <h3>{post.title}</h3>
              <p>{post.content}</p>
              {post.image && <img src={URL.createObjectURL(post.image)} alt="Post" />}
              <button className="custom-button" onClick={() => handleDeletePost(index)}>Delete Post</button>
            </li>
          ))}
          <div>
            <Link href="/user/">User</Link>
          </div>
        </ul>
      </div>
    </div>
  );
}