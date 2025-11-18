import React, { createContext, useContext, useEffect, useMemo, useState } from 'react'

const AuthContext = createContext(null)

export function AuthProvider({ children }){
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    const v = localStorage.getItem('auth_logged_in')
    setIsLoggedIn(v === 'true')
  }, [])

  const login = (name = 'User') => {
    localStorage.setItem('auth_logged_in', 'true')
    localStorage.setItem('auth_user_name', name)
    setIsLoggedIn(true)
  }

  const logout = () => {
    localStorage.setItem('auth_logged_in', 'false')
    setIsLoggedIn(false)
  }

  const value = useMemo(() => ({ isLoggedIn, login, logout }), [isLoggedIn])
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth(){
  const ctx = useContext(AuthContext)
  if(!ctx) throw new Error('useAuth must be used within AuthProvider')
  return ctx
}
