'use client'
'./styles.css'
import React, { useState } from 'react';
import Link from 'next/link'

export default function Page() {
  const [posts, setPosts] = useState([]); // สร้าง state เพื่อเก็บรายการกระทู้
  const [newPost, setNewPost] = useState({ title: '', content: '', image: null }); // สร้าง state เพื่อเก็บข้อมูลของกระทู้ใหม่

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
      // สร้างกระทู้ใหม่และเพิ่มลงในรายการกระทู้
      setPosts([...posts, newPost]);
      // รีเซ็ตค่ากระทู้ใหม่เป็นค่าเริ่มต้น
      setNewPost({ title: '', content: '', image: null });
    }
  };

  const handleDeletePost = (index) => {
    // ลบกระทู้จากรายการโดยใช้ index
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
        <button onClick={handleCreatePost}>Create Post</button>
      </div>
      <div>
        <h2>Posts</h2>
        <ul>
          {posts.map((post, index) => (
            <li key={index}>
              <h3>{post.title}</h3>
              <p>{post.content}</p>
              {post.image && <img src={URL.createObjectURL(post.image)} alt="Post" />}
              <button onClick={() => handleDeletePost(index)}>Delete Post</button>
            </li>
          ))}
          <div>
          <Link href="/user/"> User </Link>
          </div>
        </ul>
      </div>
    </div>
  );
}
