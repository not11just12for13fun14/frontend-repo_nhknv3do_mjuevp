import React from 'react'
import Layout from '../components/Layout'
import CategoryScroller from '../components/CategoryScroller'
import ProductCard from '../components/ProductCard'
import { PRODUCTS } from '../data/products'

export default function HomePage() {
  return (
    <Layout>
      <section className="px-4 pt-3">
        <div className="bg-[#e8f5ec] rounded-xl p-4 text-[#0C831F] font-bold text-sm text-center">
          Express Delivery in 10 minutes
        </div>
      </section>

      <section className="mt-3">
        <CategoryScroller />
      </section>

      <section className="px-4 mt-4">
        <h2 className="text-slate-800 font-bold mb-2">Best Sellers</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
          {PRODUCTS.slice(0, 12).map(p => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>
    </Layout>
  )
}
