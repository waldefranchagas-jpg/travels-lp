import { motion } from 'framer-motion'
import { Check, X, ArrowRight } from 'lucide-react'

const plans = [
  {
    name: 'Essencial',
    price: 'R$ 0',
    period: '/mês',
    subtitle: 'Ideal para começar',
    users: 'Até 5 usuários ativos',
    cta: 'Começar grátis',
    ctaStyle: 'border',
    popular: false,
    fees: [
      { label: 'Aéreo: R$ 20', type: 'fee' },
      { label: 'Rodoviário: R$ 9', type: 'fee' },
    ],
    features: [
      { text: 'Self-booking Aéreo e Bus', included: true },
      { text: 'Dashboards básicos', included: true },
      { text: 'Central de Faturas/NFs', included: true },
      { text: 'Suporte via Chat/Email', included: true },
      { text: 'Concierge', included: false },
      { text: 'Taxa Zero', included: false },
    ],
  },
  {
    name: 'Business',
    price: 'R$ 349',
    period: '/mês',
    subtitle: 'Para empresas em crescimento',
    users: 'Até 20 usuários ativos',
    cta: 'Falar com comercial',
    ctaStyle: 'filled',
    popular: true,
    fees: [
      { label: 'Aéreo: ISENTO', type: 'free' },
      { label: 'Rodoviário: ISENTO', type: 'free' },
    ],
    features: [
      { text: 'TAXA ZERO (Zero Fee)', included: true },
      { text: 'Fluxos de Aprovação', included: true },
      { text: 'Centros de Custo', included: true },
      { text: 'Suporte 24/7 (WhatsApp)', included: true },
      { text: 'Concierge Logística Complexa', included: true },
      { text: 'Gestão de Bilhetes Não Voados', included: true },
    ],
  },
  {
    name: 'Enterprise',
    price: 'Sob Consulta',
    period: '',
    subtitle: 'Governança e Escala',
    users: 'Usuários ilimitados',
    cta: 'Falar com especialista',
    ctaStyle: 'border',
    popular: false,
    fees: [
      { label: 'Aéreo: Sob Acordo', type: 'custom' },
      { label: 'Rodoviário: Sob Acordo', type: 'custom' },
    ],
    features: [
      { text: 'Tudo do Plano Business', included: true },
      { text: 'Gerente de Conta Dedicado', included: true },
      { text: 'Integração com ERP/API', included: true },
      { text: 'SLA de Atendimento', included: true },
      { text: 'Customizações Avançadas', included: true },
      { text: 'Early Access Novas Funções', included: true },
    ],
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.12 },
  }),
}

export default function Pricing() {
  return (
    <section id="planos" className="bg-brand-dark py-24 lg:py-32 border-t border-brand-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-6 items-end mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-brand-yellow text-sm font-semibold tracking-widest uppercase mb-6">
              Planos
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
              Planos que reduzem custos, sem surpresas na fatura.
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-brand-gray text-lg leading-relaxed lg:text-right"
          >
            Previsibilidade total: você sabe exatamente quanto vai gastar, sem custos invisíveis.
          </motion.p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6 items-stretch">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className={`relative rounded-2xl p-8 flex flex-col transition-colors ${
                plan.popular
                  ? 'bg-brand-card border-2 border-brand-yellow shadow-[0_0_40px_rgba(252,190,38,0.08)]'
                  : 'bg-brand-card border border-brand-border hover:border-brand-yellow/20'
              }`}
            >
              {/* Popular badge */}
              {plan.popular && (
                <span className="absolute -top-3.5 left-8 bg-brand-yellow text-brand-dark text-xs font-bold px-4 py-1.5 rounded-full">
                  Mais popular
                </span>
              )}

              {/* Plan header */}
              <div className="mb-8">
                <h3 className="text-white font-bold text-xl mb-4">{plan.name}</h3>
                <div className="flex items-baseline gap-1 mb-2">
                  <span className={`font-bold ${plan.period ? 'text-4xl' : 'text-2xl'} text-white`}>
                    {plan.price}
                  </span>
                  {plan.period && (
                    <span className="text-brand-gray text-base">{plan.period}</span>
                  )}
                </div>
                <p className="text-brand-gray text-sm italic mb-1">{plan.subtitle}</p>
                <p className="text-brand-gray text-sm">{plan.users}</p>
              </div>

              {/* CTA */}
              <a
                href="#contato"
                className={`w-full text-center font-semibold py-3.5 rounded-lg transition-colors mb-8 inline-flex items-center justify-center gap-2 ${
                  plan.ctaStyle === 'filled'
                    ? 'bg-brand-yellow text-brand-dark hover:bg-yellow-400'
                    : 'border border-brand-yellow/40 text-brand-yellow hover:bg-brand-yellow/10'
                }`}
              >
                {plan.cta}
                <ArrowRight size={16} />
              </a>

              {/* Divider */}
              <div className="border-t border-brand-border mb-8" />

              {/* Fees */}
              <div className="mb-8">
                <p className="text-white text-xs font-semibold uppercase tracking-wider mb-3">
                  Taxas por emissão:
                </p>
                <div className="space-y-2">
                  {plan.fees.map((fee) => (
                    <p
                      key={fee.label}
                      className={`text-sm font-medium ${
                        fee.type === 'free' ? 'text-green-400' : 'text-brand-gray'
                      }`}
                    >
                      {fee.type === 'free' ? '✈ ' : fee.type === 'fee' ? '✈ ' : '✈ '}
                      {fee.label}
                    </p>
                  ))}
                </div>
              </div>

              {/* Features */}
              <div className="space-y-3 flex-1">
                <p className="text-white text-xs font-semibold uppercase tracking-wider mb-3">
                  Recursos inclusos:
                </p>
                {plan.features.map((feature) => (
                  <div key={feature.text} className="flex items-start gap-3">
                    {feature.included ? (
                      <Check className="text-brand-yellow shrink-0 mt-0.5" size={16} />
                    ) : (
                      <X className="text-white/20 shrink-0 mt-0.5" size={16} />
                    )}
                    <span
                      className={`text-sm ${
                        feature.included ? 'text-brand-gray' : 'text-white/20'
                      }`}
                    >
                      {feature.text}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
