import { motion, AnimatePresence } from 'framer-motion'
import { Search, BarChart3, ShieldCheck, Plane, Receipt, CheckCircle2, ArrowRight } from 'lucide-react'
import { useState } from 'react'

const features = [
  {
    icon: Search,
    tag: 'Self-booking',
    title: 'Compre pelo menor preço, sempre',
    text: 'Compare aéreo e rodoviário de múltiplos fornecedores em uma única busca. Sem intermediários, sem markups escondidos, sua empresa paga menos em cada viagem.',
    highlights: ['Cotação multi-fornecedor', 'Menor preço garantido', 'Emissão instantânea'],
    mockup: 'search',
  },
  {
    icon: BarChart3,
    tag: 'Custos Invisíveis',
    title: 'Enxergue cada centavo gasto',
    text: 'No-shows, bilhetes não voados, multas de remarcação, tudo visível no dashboard. Identifique os custos invisíveis que corroem seu orçamento e tome ação.',
    highlights: ['Rastreio de custos ocultos', 'Top 5 destinos mais caros', 'Mapa de Calor operacional'],
    mockup: 'dashboard',
  },
  {
    icon: ShieldCheck,
    tag: 'Centralização Total',
    title: 'Tudo num lugar só',
    text: 'Aprovações, faturas, NFs, centros de custo e relatórios, tudo centralizado em uma plataforma. Acabe com a informação espalhada entre e-mails e planilhas.',
    highlights: ['Fluxos de aprovação', 'Centros de custo', 'NFs e faturas centralizadas'],
    mockup: 'governance',
  },
]

function SearchMockup() {
  return (
    <div className="space-y-3">
      <div className="flex items-center gap-3 bg-brand-dark/80 rounded-lg px-4 py-3 border border-brand-border">
        <Plane size={16} className="text-brand-yellow" />
        <span className="text-white text-sm">GRU</span>
        <ArrowRight size={14} className="text-brand-gray" />
        <span className="text-white text-sm">GIG</span>
        <span className="text-brand-gray text-xs ml-auto">12 Mar</span>
      </div>
      {[
        { cia: 'LATAM', preco: 'R$ 489', tag: 'Melhor preço' },
        { cia: 'GOL', preco: 'R$ 512', tag: null },
        { cia: 'Azul', preco: 'R$ 537', tag: null },
      ].map((v, i) => (
        <motion.div
          key={v.cia}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 + i * 0.15 }}
          className={`flex items-center justify-between bg-brand-dark/60 rounded-lg px-4 py-3 border ${
            i === 0 ? 'border-brand-yellow/30' : 'border-brand-border'
          }`}
        >
          <div className="flex items-center gap-3">
            <span className="text-white text-sm font-medium">{v.cia}</span>
            {v.tag && (
              <span className="text-[10px] bg-brand-yellow/10 text-brand-yellow px-2 py-0.5 rounded-full font-medium">
                {v.tag}
              </span>
            )}
          </div>
          <span className={`text-sm font-semibold ${i === 0 ? 'text-brand-yellow' : 'text-white'}`}>{v.preco}</span>
        </motion.div>
      ))}
    </div>
  )
}

function DashboardMockup() {
  const bars = [65, 80, 45, 90, 55, 72, 60]
  const months = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul']
  return (
    <div className="space-y-4">
      <div className="flex items-end justify-between gap-2 h-32 px-2">
        {bars.map((h, i) => (
          <div key={i} className="flex-1 flex flex-col items-center gap-1">
            <motion.div
              initial={{ height: 0 }}
              animate={{ height: `${h}%` }}
              transition={{ delay: 0.3 + i * 0.08, duration: 0.5 }}
              className={`w-full rounded-t-md ${i === 3 ? 'bg-brand-yellow' : 'bg-brand-yellow/20'}`}
            />
            <span className="text-[10px] text-brand-gray">{months[i]}</span>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-2 gap-2">
        {[
          { label: 'Total mensal', value: 'R$ 47.2k' },
          { label: 'Economia', value: '18%' },
        ].map((s) => (
          <div key={s.label} className="bg-brand-dark/60 border border-brand-border rounded-lg px-3 py-2">
            <p className="text-[10px] text-brand-gray">{s.label}</p>
            <p className="text-white font-semibold text-sm">{s.value}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

function GovernanceMockup() {
  const steps = [
    { label: 'Solicitação enviada', done: true },
    { label: 'Aprovação gestor', done: true },
    { label: 'Aprovação financeiro', done: false },
    { label: 'Emissão automática', done: false },
  ]
  return (
    <div className="space-y-4">
      <div className="space-y-0">
        {steps.map((step, i) => (
          <motion.div
            key={step.label}
            initial={{ opacity: 0, x: 15 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 + i * 0.15 }}
            className="flex items-center gap-3 py-2.5"
          >
            <div className="flex flex-col items-center">
              <div
                className={`w-7 h-7 rounded-full flex items-center justify-center ${
                  step.done ? 'bg-brand-yellow/20' : 'bg-brand-border'
                }`}
              >
                {step.done ? (
                  <CheckCircle2 size={14} className="text-brand-yellow" />
                ) : (
                  <div className="w-2 h-2 rounded-full bg-brand-gray/40" />
                )}
              </div>
            </div>
            <span className={`text-sm ${step.done ? 'text-white' : 'text-brand-gray'}`}>{step.label}</span>
          </motion.div>
        ))}
      </div>
      <div className="flex items-center gap-2 bg-brand-dark/60 border border-brand-border rounded-lg px-3 py-2.5">
        <Receipt size={14} className="text-brand-yellow" />
        <span className="text-xs text-brand-gray">3 NFs emitidas automaticamente</span>
      </div>
    </div>
  )
}

const mockups = { search: SearchMockup, dashboard: DashboardMockup, governance: GovernanceMockup }

export default function SolutionSection() {
  const [active, setActive] = useState(0)
  const current = features[active]
  const MockupComponent = mockups[current.mockup]

  return (
    <section className="bg-brand-dark py-24 lg:py-32 border-t border-brand-border relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-brand-yellow/[0.03] rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 bg-brand-yellow/10 border border-brand-yellow/20 text-brand-yellow text-sm font-medium px-4 py-2 rounded-full mb-8">
            Funcionalidades
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Funcionalidades que{' '}
            <span className="text-brand-yellow">reduzem seus custos na prática.</span>
          </h2>
        </motion.div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {features.map((feat, i) => (
            <button
              key={feat.tag}
              onClick={() => setActive(i)}
              className={`inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
                active === i
                  ? 'bg-brand-yellow text-brand-dark shadow-lg shadow-brand-yellow/20'
                  : 'bg-brand-card border border-brand-border text-brand-gray hover:border-brand-yellow/30 hover:text-white'
              }`}
            >
              <feat.icon size={18} />
              {feat.tag}
            </button>
          ))}
        </div>

        {/* Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35 }}
            className="grid lg:grid-cols-2 gap-8 items-center"
          >
            {/* Left - Info */}
            <div className="bg-brand-card border border-brand-border rounded-2xl p-8 lg:p-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-brand-yellow/10 rounded-xl flex items-center justify-center">
                  <current.icon className="text-brand-yellow" size={24} />
                </div>
                <span className="text-brand-yellow text-xs font-semibold tracking-widest uppercase">
                  {current.tag}
                </span>
              </div>

              <h3 className="text-white font-bold text-2xl lg:text-3xl mb-4">{current.title}</h3>
              <p className="text-brand-gray leading-relaxed text-lg mb-8">{current.text}</p>

              <ul className="space-y-3">
                {current.highlights.map((item, i) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.1 }}
                    className="flex items-center gap-3 text-white"
                  >
                    <CheckCircle2 size={18} className="text-brand-yellow flex-shrink-0" />
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Right - Interactive Mockup */}
            <div className="bg-brand-card border border-brand-border rounded-2xl p-8 lg:p-10">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-2.5 h-2.5 rounded-full bg-red-400/60" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/60" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-400/60" />
                <span className="text-brand-gray text-xs ml-2">Preview</span>
              </div>
              <MockupComponent />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
