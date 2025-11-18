import React from 'react'
import * as Icons from 'lucide-react'
import { CATEGORIES } from '../data/products'
import { useNavigate } from 'react-router-dom'

export default function CategoryScroller() {
  const navigate = useNavigate()

  return (
    <div className="overflow-x-auto no-scrollbar py-3">
      <div className="flex gap-3 px-4">
        {CATEGORIES.map(cat => {
          const Icon = Icons[cat.icon] || Icons.Tag
          return (
            <button key={cat.key} onClick={() => navigate(`/category/${cat.key}`)} className="min-w-[110px] flex-shrink-0 bg-white rounded-xl shadow-sm border border-slate-100 p-3 flex flex-col items-center">
              <div className="w-10 h-10 rounded-full bg-[#e8f5ec] text-[#0C831F] grid place-items-center mb-2">
                <Icon size={20} />
              </div>
              <div className="text-xs font-semibold text-slate-700 text-center">{cat.label}</div>
            </button>
          )
        })}
      </div>
    </div>
  )
}
