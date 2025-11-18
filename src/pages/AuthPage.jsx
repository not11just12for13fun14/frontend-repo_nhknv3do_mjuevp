import React, { useState } from 'react'
import TopBar from '../components/TopBar'
import BottomNav from '../components/BottomNav'
import { useAuth } from '../store/authContext'
import { useNavigate } from 'react-router-dom'

export default function AuthPage(){
  const { isLoggedIn, login, logout } = useAuth()
  const [name, setName] = useState('')
  const navigate = useNavigate()

  const onLogin = (e) => {
    e.preventDefault()
    login(name || 'User')
    navigate('/')
  }

  return (
    <div className="min-h-screen bg-slate-50 pb-20">
      <TopBar />
      <div className="max-w-md mx-auto px-4 mt-6">
        <div className="bg-white p-6 rounded-xl shadow">
          {!isLoggedIn ? (
            <form onSubmit={onLogin} className="space-y-4">
              <h1 className="text-xl font-bold text-slate-800">Login</h1>
              <input value={name} onChange={e=>setName(e.target.value)} placeholder="Your name" className="w-full border rounded-lg px-3 py-2 outline-none focus:ring" />
              <button className="w-full bg-[#0C831F] text-white py-2 rounded-lg font-bold">Login</button>
            </form>
          ) : (
            <div className="space-y-4 text-center">
              <h1 className="text-xl font-bold text-slate-800">You are logged in</h1>
              <button onClick={() => { logout(); navigate('/') }} className="w-full bg-red-500 text-white py-2 rounded-lg font-bold">Logout</button>
            </div>
          )}
        </div>
      </div>
      <BottomNav />
    </div>
  )
}
