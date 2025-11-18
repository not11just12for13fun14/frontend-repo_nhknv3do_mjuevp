import React from 'react'
import TopBar from '../components/TopBar'
import CategoryScroller from '../components/CategoryScroller'
import ProductCard from '../components/ProductCard'
import BottomNav from '../components/BottomNav'
import { PRODUCTS } from '../data/products'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-slate-50 pb-20">
      <TopBar />

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
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
          {PRODUCTS.slice(0, 12).map(p => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>

      <BottomNav />
    </div>
  )
}
