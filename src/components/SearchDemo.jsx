import { motion } from 'framer-motion'
import { Plane, TrendingDown, Users, Smartphone, Coins, Building2, TicketCheck } from 'lucide-react'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1 },
  }),
}

export default function SearchDemo() {
  return (
    <section id="busca" className="bg-brand-dark py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Route display */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-brand-card border border-brand-border rounded-2xl p-8 lg:p-10 mb-10"
        >
          <div className="flex items-center gap-3 mb-8">
            <span className="bg-brand-yellow/10 text-brand-yellow text-xs font-semibold px-3 py-1 rounded-full">
              Cotação automatizada
            </span>
            <span className="bg-green-500/10 text-green-400 text-xs font-semibold px-3 py-1 rounded-full">
              Atualização em tempo real
            </span>
          </div>

          <div className="flex items-center justify-center gap-6 lg:gap-12 mb-10">
            <div className="text-center">
              <p className="text-3xl lg:text-5xl font-bold text-white">RIO</p>
              <p className="text-brand-gray text-sm mt-1">Rio de Janeiro</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 lg:w-20 h-px bg-brand-border" />
              <Plane className="text-brand-yellow" size={24} />
              <div className="w-12 lg:w-20 h-px bg-brand-border" />
            </div>
            <div className="text-center">
              <p className="text-3xl lg:text-5xl font-bold text-white">LIS</p>
              <p className="text-brand-gray text-sm mt-1">Lisboa</p>
            </div>
          </div>

          {/* Comparison */}
          <div className="grid md:grid-cols-2 gap-6 mb-10">
            <div className="bg-brand-dark border border-brand-border rounded-xl p-6">
              <p className="text-brand-gray text-xs uppercase tracking-wider mb-3">Comparativo de custo</p>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-brand-gray text-sm">Tarifa direta cia aérea</span>
                  <span className="text-white font-semibold">R$ 4.870,00</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-brand-gray text-sm">Via Travels & CIA</span>
                  <span className="text-brand-yellow font-semibold">R$ 3.190,00</span>
                </div>
              </div>
            </div>
            <div className="bg-brand-dark border border-brand-border rounded-xl p-6 flex flex-col items-center justify-center">
              <p className="text-brand-gray text-xs uppercase tracking-wider mb-2">Margem operacional</p>
              <p className="text-3xl lg:text-4xl font-bold text-brand-yellow">R$ 1.680,00</p>
              <p className="text-brand-gray text-sm mt-2">Economia direta para sua empresa</p>
            </div>
          </div>
        </motion.div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              label: 'Melhor tarifa consolidada',
              value: 'R$ 1.289,90',
              sub: 'Redução de 23% frente à cia aérea',
              icon: TrendingDown,
            },
            {
              label: 'Fornecedores integrados',
              value: '+18',
              sub: 'Milhas, consolidadores e aéreo direto',
              icon: Users,
            },
            {
              label: 'Fontes de inventário',
              value: '4 fontes',
              sub: 'Mobile, Milhas, Consolidadores, Tarifa direta',
              icon: Smartphone,
            },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-brand-card border border-brand-border rounded-xl p-6 hover:border-brand-yellow/20 transition-colors"
            >
              <stat.icon className="text-brand-yellow mb-4" size={22} />
              <p className="text-brand-gray text-sm mb-1">{stat.label}</p>
              <p className="text-2xl font-bold text-white">{stat.value}</p>
              <p className="text-brand-gray text-xs mt-2">{stat.sub}</p>
            </motion.div>
          ))}
        </div>

        {/* Source tags */}
        <div className="flex flex-wrap gap-3 mt-8 justify-center">
          {[
            { label: 'API Mobile', icon: Smartphone },
            { label: 'Milhas', icon: Coins },
            { label: 'Consolidadores', icon: Building2 },
            { label: 'Tarifa direta', icon: TicketCheck },
          ].map(({ label, icon: Icon }) => (
            <span
              key={label}
              className="inline-flex items-center gap-2 bg-brand-card border border-brand-border text-brand-gray text-sm px-4 py-2 rounded-lg"
            >
              <Icon size={14} />
              {label}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
