import React from 'react'
import Layout from '../components/Layout'
import ProductCard from '../components/ProductCard'
import { useParams } from 'react-router-dom'
import { CATEGORIES, getProductsByCategory } from '../data/products'

export default function CategoryPage() {
  const { categoryName } = useParams()
  const cat = CATEGORIES.find(c => c.key === categoryName)
  const products = getProductsByCategory(categoryName)

  return (
    <Layout>
      <div className="px-4 mt-3">
        <h1 className="text-xl font-bold text-slate-800">{cat ? cat.label : 'Category'}</h1>
      </div>
      <div className="px-4 mt-3 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
        {products.map(p => <ProductCard key={p.id} product={p} />)}
      </div>
    </Layout>
  )
}
