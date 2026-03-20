import { motion } from 'framer-motion'
import { DollarSign, FileWarning, Eye, AlertTriangle } from 'lucide-react'
import { useState } from 'react'

const cards = [
  {
    icon: DollarSign,
    title: 'Custos que só sobem',
    text: 'Taxas de emissão, markups escondidos e reembolsos sem controle encarecendo cada viagem da sua empresa.',
    stat: 'R$ 87',
    statLabel: 'taxa média por emissão no mercado',
    color: 'from-red-500/20 to-transparent',
    borderHover: 'hover:border-red-400/40',
    iconBg: 'bg-red-500/10',
    iconColor: 'text-red-400',
  },
  {
    icon: FileWarning,
    title: 'Informação espalhada',
    text: 'Faturas num e-mail, NFs em outro, aprovações no WhatsApp. Sem centralização, o caos custa caro.',
    stat: '23h',
    statLabel: 'perdidas por mês sem centralização',
    color: 'from-orange-500/20 to-transparent',
    borderHover: 'hover:border-orange-400/40',
    iconBg: 'bg-orange-500/10',
    iconColor: 'text-orange-400',
  },
  {
    icon: Eye,
    title: 'Custos Invisíveis',
    text: 'No-shows, bilhetes não voados, multas de remarcação, gastos que ninguém rastreia e que corroem seu orçamento.',
    stat: '68%',
    statLabel: 'das empresas não enxergam esses custos',
    color: 'from-yellow-500/20 to-transparent',
    borderHover: 'hover:border-yellow-400/40',
    iconBg: 'bg-yellow-500/10',
    iconColor: 'text-yellow-400',
  },
]

export default function PainSection() {
  const [hoveredIndex, setHoveredIndex] = useState(null)

  return (
    <section className="bg-brand-dark py-24 lg:py-32 relative overflow-hidden">
      {/* Background pulse */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-red-500/[0.03] rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-6"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-red-500/10 border border-red-500/20 text-red-400 text-sm font-medium px-4 py-2 rounded-full mb-8"
          >
            <AlertTriangle size={16} />
            Problemas que custam caro
          </motion.div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Sua empresa perde dinheiro com{' '}
            <span className="text-brand-yellow">custos que nem enxerga.</span>
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-brand-gray text-center text-lg mb-16 max-w-2xl mx-auto"
        >
          Esses problemas acontecem todos os dias e pesam direto no resultado, mesmo quando ninguém percebe.
        </motion.p>

        <div className="grid md:grid-cols-3 gap-6">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`relative bg-brand-card border border-brand-border rounded-2xl p-8 transition-all duration-300 cursor-default group ${card.borderHover} ${
                hoveredIndex === i ? 'scale-[1.03] shadow-2xl' : 'scale-100'
              }`}
            >
              {/* Glow gradient on hover */}
              <div
                className={`absolute inset-0 rounded-2xl bg-gradient-to-b ${card.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}
              />

              <div className="relative z-10">
                {/* Icon with animated ring */}
                <div className="relative w-14 h-14 mb-6">
                  <div
                    className={`w-14 h-14 ${card.iconBg} rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110`}
                  >
                    <card.icon className={`${card.iconColor} transition-transform duration-300 group-hover:rotate-12`} size={26} />
                  </div>
                  <div
                    className={`absolute inset-0 ${card.iconBg} rounded-xl opacity-0 group-hover:opacity-50 blur-xl transition-opacity duration-500`}
                  />
                </div>

                <h3 className="text-white font-semibold text-xl mb-3">{card.title}</h3>
                <p className="text-brand-gray leading-relaxed mb-6">{card.text}</p>

                {/* Stat highlight */}
                <div className="border-t border-brand-border pt-5">
                  <motion.p
                    className={`text-3xl font-bold ${card.iconColor} mb-1`}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + i * 0.15 }}
                  >
                    {card.stat}
                  </motion.p>
                  <p className="text-brand-gray text-sm">{card.statLabel}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
