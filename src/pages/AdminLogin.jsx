import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';

export default function AdminLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

const handleLogin = async (e) => {
  e.preventDefault();

  console.log("Email:", email);
  console.log("Password:", password);

  try {
    console.log(auth);

await signInWithEmailAndPassword(auth, email.trim(), password);
    navigate('/admin');
  } catch (error) {
  console.log("Firebase Error:", error);
  console.log("Code:", error.code);
  console.log("Message:", error.message);

  alert(error.code + "\n" + error.message);
}
};
  return (
    <div
      style={{
        minHeight: '80vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '40px'
      }}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '450px',
          background: '#fff',
          padding: '40px',
          borderRadius: '20px',
          boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
        }}
      >
        <h1
          style={{
            textAlign: 'center',
            marginBottom: '30px',
            color: '#1e3a8a'
          }}
        >
          Zylo Admin Login
        </h1>

        <form
          onSubmit={handleLogin}
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '20px'
          }}
        >
          <input
            type="email"
            placeholder="Admin Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={inputStyle}
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={inputStyle}
          />

          <button
            type="submit"
            style={{
              padding: '14px',
              background: '#2563eb',
              color: '#fff',
              border: 'none',
              borderRadius: '12px',
              fontWeight: '600',
              cursor: 'pointer'
            }}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

const inputStyle = {
  width: '100%',
  padding: '14px',
  border: '1px solid #ddd',
  borderRadius: '10px',
  fontSize: '16px'
};