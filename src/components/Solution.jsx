import { motion } from 'framer-motion'
import { Code2, Calculator, Network } from 'lucide-react'

const pillars = [
  {
    icon: Code2,
    title: 'API-driven',
    description: 'Integre seu ERP, CRM ou plataforma própria via API REST',
  },
  {
    icon: Calculator,
    title: 'Pricing Engine',
    description: 'Motor de precificação com regras de margem por fornecedor',
  },
  {
    icon: Network,
    title: 'B2B2C Ready',
    description: 'Distribua tarifas para seus clientes corporativos em escala',
  },
]

const features = [
  {
    title: 'Busca multi-fornecedor',
    description:
      'Compare preços de múltiplos fornecedores em uma única busca. Garanta o menor custo sem perder tempo alternando entre sistemas.',
  },
  {
    title: 'Controle de custos invisíveis',
    description:
      'Rastreie no-shows, bilhetes não voados e multas de remarcação. Transforme gastos que passavam despercebidos em economia real.',
  },
  {
    title: 'Precificação transparente',
    description:
      'Sem taxas escondidas ou surpresas na fatura. Cada custo é visível, comparável e justificável para o financeiro.',
  },
  {
    title: 'Centralização completa',
    description:
      'NFs, faturas, aprovações e relatórios, tudo acessível num único lugar. Acabe com a informação espalhada entre e-mails e planilhas.',
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1 },
  }),
}

export default function Solution() {
  return (
    <section id="solucao" className="bg-brand-dark py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Pillars */}
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-brand-card border border-brand-border rounded-xl p-6 hover:border-brand-yellow/20 transition-colors"
            >
              <pillar.icon className="text-brand-yellow mb-3" size={20} />
              <h3 className="text-white font-semibold mb-1">{pillar.title}</h3>
              <p className="text-brand-gray text-sm">{pillar.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Main text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="text-brand-yellow text-sm font-semibold tracking-widest uppercase mb-6">
            Solução central
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight max-w-3xl mb-6">
            Centralize sua operação e reduza custos desde o primeiro mês.
          </h2>
          <p className="text-brand-gray text-lg max-w-2xl leading-relaxed">
            Cotação, fornecedores, aprovações e controle financeiro, tudo num lugar só.
            Elimine custos invisíveis e tenha previsibilidade real nos gastos com viagens.
          </p>
        </motion.div>

        {/* Feature cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-brand-card border border-brand-border rounded-xl p-8 hover:border-brand-yellow/20 transition-colors"
            >
              <h3 className="text-white font-semibold text-lg mb-3">{feature.title}</h3>
              <p className="text-brand-gray text-sm leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
