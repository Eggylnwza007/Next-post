'use client' //การดึงข้อมูลที่อัพใหม่ตลอดเวลา
import React, { useState, useEffect } from "react";
import Link from 'next/link'

const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
  };
  
  const headingStyle = {
    fontSize: '2rem',
    fontWeight: 'bold',
    marginBottom: '20px',
    color: '#333', // เพิ่มสีข้อความตามที่คุณต้องการ
  };
  
  const linkStyle = {
    fontSize: '1.2rem',
    backgroundColor: '#007bff', // เปลี่ยนสีพื้นหลังปุ่ม Start
    color: '#fff', // เปลี่ยนสีข้อความปุ่ม Start
    padding: '10px 20px',
    borderRadius: '5px',
    textDecoration: 'none',
  };
  
export default function Page() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    fetch('https://www.melivecode.com/api/users')
      .then(res => res.json())
      .then(result => {
        setUsers(result)
      })
  }, [])

  const handleDelete = (id) => {
    fetch('https://www.melivecode.com/api/users/delete', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id: id
      })
    })
      .then(res => res.json())
      .then(result => {
        alert(result.message)
      })
  }

  return (
    <h2>
      <Link href={"/user/create/"} style={linkStyle}>Create User</Link>
      <h2>
        <Link href={"/user/home/"} style={linkStyle}>Home</Link>
      </h2>
      <ul>
        {users.map(user => (
          <li key={user.id} style={{ display: 'flex', alignItems: 'center' }}>
            <img src={user.avatar} height={69} alt={user.username} style={{ marginRight: '10px' }} />
            <div>
              <p>
                {user.username}: {user.fname} {user.lname}
              </p>
              <div>
                <button onClick={() => handleDelete(user.id)}>Delete</button>
                <Link href={'/user/edit/' + user.id} style={linkStyle}>Edit</Link>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </h2>
  )
}
