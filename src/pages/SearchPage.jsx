import React, { useMemo } from 'react'
import Layout from '../components/Layout'
import ProductCard from '../components/ProductCard'
import { useSearchParams } from 'react-router-dom'
import { PRODUCTS } from '../data/products'

export default function SearchPage() {
  const [params] = useSearchParams()
  const q = params.get('q') || ''
  const list = useMemo(() => {
    const s = q.trim().toLowerCase()
    if (!s) return []
    return PRODUCTS.filter(p => p.name.toLowerCase().includes(s))
  }, [q])

  return (
    <Layout>
      <div className="px-4 mt-3">
        <h1 className="text-xl font-bold text-slate-800">Search Results for '{q}'</h1>
      </div>
      <div className="px-4 mt-3 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
        {list.map(p => <ProductCard key={p.id} product={p} />)}
      </div>
    </Layout>
  )
}
