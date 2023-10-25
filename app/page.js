import React from "react";
import Link from 'next/link';
import './globals.css';

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
  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>
        Welcome to Post Online
      </h1>
      <div>
        <Link href="/user/" style={linkStyle}>Start</Link>
      </div>
    </div>
  );
}
