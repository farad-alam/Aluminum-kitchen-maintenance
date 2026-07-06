"use client"

import * as React from "react"
import Image from "next/image"
import { useTranslations } from "next-intl"
import { motion } from "framer-motion"
import { MapPin, Building2, Home, Trees, Building, Map, Compass, Navigation } from "lucide-react"
import { SectionHeading } from "@/components/ui/SectionHeading"

export function AreasWeServe() {
  const t = useTranslations("AreasWeServe")
  const districts = t.raw("districts") as string[]

  const icons = [MapPin, Building2, Home, Trees, Building, Map, Compass, Navigation]

  // Constellation layout configuration matching the provided diagram
  const nodes = [
    // 0: Center
    { top: '50%', left: '48%', size: 'clamp(110px, 15vw, 160px)', bg: 'bg-[#f9d7d1]', color: 'text-rose-700', ring: true },
    // 1: Top-Left (Al Malaz/Olaya)
    { top: '30%', left: '32%', size: 'clamp(130px, 18vw, 180px)', bg: 'bg-[#dce9d5]', color: 'text-green-700', ring: true },
    // 2: Bottom-Center
    { top: '70%', left: '52%', size: 'clamp(100px, 14vw, 130px)', bg: 'bg-[#dce9d5]', color: 'text-green-700', ring: false },
    // 3: Far-Left
    { top: '45%', left: '15%', size: 'clamp(100px, 15vw, 140px)', bg: 'bg-[#d4e6e6]', color: 'text-teal-700', ring: false },
    // 4: Mid-Left
    { top: '65%', left: '28%', size: 'clamp(90px, 12vw, 110px)', bg: 'bg-[#e2d5e6]', color: 'text-purple-700', ring: true },
    // 5: Mid-Right
    { top: '38%', left: '68%', size: 'clamp(110px, 15vw, 150px)', bg: 'bg-[#f9ebd0]', color: 'text-yellow-700', ring: true },
    // 6: Top-Right (Al Sulaimaniyah - made larger for text)
    { top: '28%', left: '80%', size: 'clamp(115px, 15vw, 135px)', bg: 'bg-[#f4c8b2]', color: 'text-orange-700', ring: false },
    // 7: Far-Right
    { top: '55%', left: '86%', size: 'clamp(80px, 11vw, 100px)', bg: 'bg-[#f9d7d1]', color: 'text-rose-700', ring: false },
  ]

  // Dotted lines connecting the nodes
  const connections = [
    [0, 1], [0, 2], [1, 3], [0, 4], [3, 4], [0, 5], [5, 6], [5, 7], [6, 7], [2, 4], [2, 5]
  ]

  return (
    <section className="bg-white py-24 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading 
          title={t("title")} 
          subtitle={t("subtitle")}
          className="mb-12"
        />

        {/* Constellation Container */}
        <div className="relative w-full aspect-square md:aspect-[4/3] lg:aspect-[21/9] max-w-6xl mx-auto rounded-3xl bg-[#fcfcfc] border border-gray-100 overflow-hidden shadow-sm">
          
          {/* Background Map Placeholder Pattern & Image */}
          <div className="absolute inset-0 z-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, gray 1px, transparent 0)', backgroundSize: '32px 32px' }}></div>
          <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
            {/* Replace this src with your actual map image (e.g., /images/riyadh_map.png) */}
            <Image 
              src="/images/map-placeholder.png" 
              alt="Riyadh Map" 
              fill 
              className="object-cover grayscale blur-[1px]" 
              onError={(e) => {
                // Hide if image doesn't exist yet
                e.currentTarget.style.display = 'none';
              }}
            />
          </div>
          
          {/* Subtle gradient overlay to ensure text remains readable */}
          <div className="absolute inset-0 z-0 bg-gradient-to-t from-white/60 via-transparent to-white/60" />

          {/* SVG Dotted Connections */}
          <svg className="absolute inset-0 w-full h-full z-10 pointer-events-none">
            {connections.map(([from, to], i) => {
              if (!nodes[from] || !nodes[to]) return null;
              return (
                <motion.line 
                  key={i}
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 0.6 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, delay: 0.5 + i * 0.1 }}
                  x1={nodes[from].left} 
                  y1={nodes[from].top} 
                  x2={nodes[to].left} 
                  y2={nodes[to].top} 
                  stroke="#9ca3af" 
                  strokeWidth="1.5" 
                  strokeDasharray="6 6" 
                />
              )
            })}
          </svg>

          {/* Render Nodes */}
          {districts.slice(0, 8).map((district, i) => {
            const node = nodes[i];
            const Icon = icons[i % icons.length];
            if (!node) return null;

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ type: "spring", stiffness: 100, damping: 15, delay: i * 0.1 }}
                className={`absolute z-20 flex flex-col items-center justify-center rounded-full shadow-lg border-2 border-white/80 ${node.bg} ${node.color} backdrop-blur-sm hover:scale-105 transition-transform duration-300 cursor-pointer`}
                style={{ 
                  top: node.top, 
                  left: node.left, 
                  width: node.size, 
                  height: node.size,
                  x: "-50%",
                  y: "-50%"
                }}
              >
                {/* Optional Dashed Outer Ring */}
                {node.ring && (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.8 + i * 0.1, duration: 1 }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[130%] h-[130%] rounded-full border border-dashed border-gray-400/50 -z-10 pointer-events-none"
                  />
                )}
                
                {/* Node Content */}
                <div className="flex flex-col items-center text-center px-2 w-full">
                  <div className="bg-white/70 p-2 rounded-full mb-1 shadow-sm">
                    <Icon className="w-4 h-4 md:w-5 md:h-5" strokeWidth={1.5} />
                  </div>
                  <span className="text-[9px] sm:text-[10px] md:text-[11px] font-bold leading-tight uppercase tracking-wide break-words w-full">
                    {district}
                  </span>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
