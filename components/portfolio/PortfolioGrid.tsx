"use client"

import * as React from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { BeforeAfterSlider } from "@/components/ui/BeforeAfterSlider"

type Project = {
  id: string;
  title: string;
  category: string;
  image: string;
  beforeImage?: string;
};

export function PortfolioGrid({ locale }: { locale: string }) {
  const isAr = locale === "ar";
  
  const categories = [
    { id: 'all', label: isAr ? 'الكل' : 'All' },
    { id: 'maintenance', label: isAr ? 'صيانة' : 'Maintenance' },
    { id: 'installation', label: isAr ? 'تركيب جديد' : 'Installation' },
    { id: 'renovation', label: isAr ? 'تجديد' : 'Renovation' }
  ];

  const projects: Project[] = [
    { 
      id: '1', 
      title: isAr ? 'تجديد مطبخ كامل (قبل وبعد)' : 'Full Kitchen Renovation (Before/After)', 
      category: 'renovation', 
      image: '/images/kitchen_after_1.png',
      beforeImage: '/images/kitchen_before_1.png'
    },
    { 
      id: '2', 
      title: isAr ? 'صيانة مفصلات وأبواب (قبل وبعد)' : 'Hinges and Doors Repair (Before/After)', 
      category: 'maintenance', 
      image: '/images/kitchen_after_2.png',
      beforeImage: '/images/kitchen_before_2.png'
    },
    { id: '3', title: isAr ? 'تركيب مطبخ فيلا' : 'Villa Kitchen Installation', category: 'installation', image: '/images/hero_kitchen_3.png' },
    { id: '4', title: isAr ? 'تغيير ألوان المطبخ' : 'Kitchen Color Change', category: 'renovation', image: '/images/hero_kitchen_4.png' },
    { id: '5', title: isAr ? 'تركيب مطبخ شقة' : 'Apartment Kitchen Installation', category: 'installation', image: '/images/hero_kitchen_5.png' },
    { id: '6', title: isAr ? 'صيانة أدراج منزلقة' : 'Sliding Drawers Maintenance', category: 'maintenance', image: '/images/hero_kitchen.png' },
  ];

  const [activeCategory, setActiveCategory] = React.useState('all');

  const filteredProjects = projects.filter(
    (project) => activeCategory === 'all' || project.category === activeCategory
  );

  return (
    <div className="flex flex-col gap-12">
      
      {/* Filters */}
      <div className="flex flex-wrap items-center justify-center gap-3">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
              activeCategory === cat.id
                ? 'bg-(--color-brand-gold) text-white shadow-md'
                : 'bg-white text-(--color-brand-navy) hover:bg-(--color-brand-gold-pale)'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Grid */}
      <motion.div layout className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence>
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="group relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-white shadow-sm"
            >
              {project.beforeImage ? (
                <BeforeAfterSlider beforeImage={project.beforeImage} afterImage={project.image} />
              ) : (
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              )}
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 pointer-events-none transition-opacity duration-300 group-hover:opacity-90" />
              <div className="absolute inset-0 flex flex-col justify-end p-6 pointer-events-none">
                <span className="mb-2 inline-block rounded-full bg-(--color-brand-gold) px-3 py-1 text-xs font-bold text-white w-fit">
                  {categories.find(c => c.id === project.category)?.label}
                </span>
                <h3 className="text-xl font-bold text-white group-hover:text-(--color-brand-gold) transition-colors">
                  {project.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  )
}
