import React, { useEffect } from 'react'
import Layout from '../components/Layout'
import { useUi } from '../store/uiContext'

export default function CartPage(){
  const { openCart } = useUi()
  useEffect(() => { openCart() }, [openCart])
  return (
    <Layout>
      <div className="px-4 mt-4">
        <div className="bg-white p-6 rounded-xl text-center text-slate-600">Cart opened on the right.</div>
      </div>
    </Layout>
  )
}
