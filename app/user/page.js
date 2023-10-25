'use client' //การดึงข้อมูลที่อัพใหม่ตลอดเวลา
import React, {useState, useEffect } from "react";
import Link from 'next/link'

export default function page() {
        const [users, setUsers] = useState([])
        useEffect(() => {
            fetch('https://www.melivecode.com/api/users')
             .then(res => res.json())
             .then(result =>{
                console.log(result)
                setUsers(result)
             })
        }, [])

        const handleDelete = (id) => {
            fetch('https://www.melivecode.com/api/users/delete',{
                method: 'DELETE',
                headers: {
                    'Content-Type' : 'application/json',
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
    <div>
        <Link href="/user/create"> Create User </Link>
        <div>
        <Link href="/user/home/"> home </Link>
        </div>
        <ul>
            {users.map(user => (
                <li key={user.id}>
                    <img src={user.avatar} height={69} alt={user.username} />
                    {user.username}: {user.fname} {user.lname}
                    <button onClick={() => handleDelete(user.id)}>Delete</button>
                    <Link href={'/user/edit/'+user.id}>Edit</Link>
                </li>
            ))}
            </ul>    
    </div>
  )
}