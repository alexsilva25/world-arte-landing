import React, { useRef } from "react"
import { motion } from "framer-motion"

/**
 * World Arte - Landing Page (React + Tailwind)
 *
 * Versão simplificada: apenas WhatsApp e E‑mail (sem PDF, sem diagnóstico).
 */

export default function WorldArteLanding() {
  const containerRef = useRef(null)
  const orcamentoRef = useRef(null)

  const openWhatsApp = (form) => {
    const msg = formToWhatsApp(form)
    const url = `https://wa.me/5584999131802?text=${encodeURIComponent(msg)}`
    window.open(url, '_blank')
  }

  const DEFAULT_EMAIL = 'contato@worldarte.com.br'
  const openEmail = (form) => {
    const { subject, body } = formToEmail(form)
    const url = `mailto:${DEFAULT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    window.location.href = url
  }

  const features = [
    { title: "Chaveiros personalizados", desc: "Cortes e gravações precisas, acabamentos premium e opções em acrílico, MDF e resina." },
    { title: "Decor e presentes", desc: "Placas, quadros, letras 3D, luminárias e itens sob medida para casa ou eventos." },
    { title: "Brindes corporativos", desc: "Produção em escala com padronização de marca, prazos e embalagem profissional." },
    { title: "Festas e eventos", desc: "Topos de bolo, tags, lembranças e toda a papelaria criativa com personalização total." },
  ]

  const gallery = [
    { id: 1, title: "Placa Neon-Style", img: "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?q=80&w=1200&auto=format&fit=crop" },
    { id: 2, title: "Chaveiro Acrílico", img: "https://images.unsplash.com/photo-1545235617-9465d2a55698?q=80&w=1200&auto=format&fit=crop" },
    { id: 3, title: "Lembrança Festa", img: "https://images.unsplash.com/photo-1547047800-4c88a88427b1?q=80&w=1200&auto=format&fit=crop" },
    { id: 4, title: "Quadro Decorativo", img: "https://images.unsplash.com/photo-1526045612212-70caf35c14df?q=80&w=1200&auto=format&fit=crop" },
    { id: 5, title: "Topo de Bolo", img: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=1200&auto=format&fit=crop" },
    { id: 6, title: "Kit Corporativo", img: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=1200&auto=format&fit=crop" },
  ]

  const faqs = [
    { q: "Qual o prazo de produção?", a: "Projetos simples saem em 1–3 dias úteis. Demais peças variam conforme volume e complexidade." },
    { q: "Vocês criam a arte?", a: "Sim! Podemos criar do zero ou adaptar sua identidade visual e referências." },
    { q: "Qual o mínimo de pedido?", a: "Peças únicas são bem‑vindas. Para brindes corporativos, consulte lotes de 20/50/100 unidades." },
    { q: "Entregam para todo o Brasil?", a: "Sim, enviamos por correios/transportadora com embalagem segura." },
  ]

  return (
    <div ref={containerRef} className="min-h-screen bg-gradient-to-b from-white via-fuchsia-50 to-white text-gray-800">
      {/* Header */}
      <header className="sticky top-0 z-40 backdrop-blur bg-white/70 border-b">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="/WORLD ART.jpg" alt="World Arte" className="h-10 w-auto object-contain" />
            <span className="font-bold tracking-wide text-fuchsia-700">WORLD ARTE</span>
          </div>
          <nav className="hidden md:flex gap-6 text-sm font-medium">
            <a href="#servicos" className="hover:text-fuchsia-700">Serviços</a>
            <a href="#portfolio" className="hover:text-fuchsia-700">Portfólio</a>
            <a href="#orcamento" className="hover:text-fuchsia-700">Orçamento</a>
            <a href="#faq" className="hover:text-fuchsia-700">FAQ</a>
          </nav>
          <div className="flex items-center gap-2 no-print">
            <a href="https://wa.me/5584999131802" target="_blank" rel="noreferrer" className="px-4 py-2 rounded-xl bg-fuchsia-600 text-white hover:bg-fuchsia-700 shadow">WhatsApp</a>
            <button onClick={()=>openEmail(orcamentoRef.current)} className="px-4 py-2 rounded-xl border hover:border-fuchsia-400">E‑mail</button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 opacity-30 bg-[radial-gradient(800px_400px_at_70%_-10%,theme(colors.fuchsia.300/.6),transparent_60%),radial-gradient(600px_400px_at_20%_10%,theme(colors.purple.300/.6),transparent_60%)]" />
        <div className="max-w-7xl mx-auto px-4 py-20 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <motion.h1 initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:0.5}} className="text-4xl md:text-5xl font-extrabold leading-tight">
              Personalizados que <span className="text-fuchsia-700">encantam</span> e dão vida à sua marca
            </motion.h1>
            <p className="mt-4 text-lg text-gray-600">Criamos peças únicas em acrílico, MDF, resina e impressão 3D. Do presente perfeito ao brinde corporativo, a World Arte transforma ideias em produtos memoráveis.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#orcamento" className="px-5 py-3 rounded-xl bg-fuchsia-600 text-white hover:bg-fuchsia-700 shadow">Pedir orçamento</a>
              <a href="#portfolio" className="px-5 py-3 rounded-xl border border-fuchsia-200 hover:border-fuchsia-400">Ver portfólio</a>
            </div>
          </div>
        </div>
      </section>

      {/* Serviços */}
      <section id="servicos" className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center">O que fazemos</h2>
        <p className="text-center text-gray-600 mt-2 max-w-2xl mx-auto">Soluções criativas para encantar clientes, presentear pessoas especiais e fortalecer sua marca.</p>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, idx) => (
            <motion.div key={f.title} initial={{opacity:0, y:10}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{delay:idx*0.05}} className="rounded-2xl border bg-white p-6 shadow-sm">
              <h3 className="font-semibold text-lg">{f.title}</h3>
              <p className="text-gray-600 mt-2 text-sm">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Portfólio */}
      <section id="portfolio" className="bg-white/60 border-y">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold">Portfólio</h2>
          <p className="text-gray-600">Alguns trabalhos e ideias para inspirar seu projeto.</p>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {gallery.map(card => (
              <div key={card.id} className="group rounded-2xl overflow-hidden border bg-white shadow-sm">
                <div className="aspect-[4/3] overflow-hidden">
                  <img crossOrigin="anonymous" referrerPolicy="no-referrer" src={card.img} alt={card.title} className="w-full h-full object-cover group-hover:scale-[1.03] transition" />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold">{card.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Orçamento */}
      <section id="orcamento" ref={orcamentoRef} className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl font-bold">Peça seu orçamento</h2>
            <p className="text-gray-600 mt-2">Conte sua ideia em 3 passos. Respondemos rapidamente no WhatsApp ou por e‑mail.</p>
            <ul className="mt-6 space-y-3 text-gray-700 list-disc pl-5">
              <li>Descreva o projeto (ex.: chaveiros para evento, 100 unidades)</li>
              <li>Escolha materiais/cores (acrílico, MDF, resina, impressão 3D)</li>
              <li>Anexe referências (logo, fotos, rascunhos)</li>
            </ul>
          </div>

          <form onSubmit={(e)=>{e.preventDefault(); openWhatsApp(e.currentTarget)}} className="rounded-3xl border bg-white p-6 shadow-sm">
            <div className="grid md:grid-cols-2 gap-4">
              <Input label="Seu nome" name="nome" required />
              <Input label="Cidade/UF" name="cidade" />
              <Input label="WhatsApp" name="whats" placeholder="(xx) xxxxx-xxxx" />
              <Input label="Quantidade" name="qtd" type="number" min={1} />
              <Select label="Material" name="material" options={["Acrílico","MDF","Resina","Impressão 3D","Outro"]} />
              <Select label="Prazo desejado" name="prazo" options={["Urgente (1–3 dias)","Até 1 semana","Flexível"]} />
            </div>
            <TextArea label="Descrição do projeto" name="desc" rows={4} className="mt-4" placeholder="Ex.: chaveiros 5cm, corte a laser, cor roxa, com logo em vinil." />
            <TextArea label="Links de referência (opcional)" name="links" rows={2} className="mt-3" placeholder="Cole links do Drive, Instagram, Pinterest…" />
            <div className="flex flex-col sm:flex-row gap-3 mt-5">
              <button type="submit" className="flex-1 py-3 rounded-xl bg-fuchsia-600 text-white hover:bg-fuchsia-700 shadow">Enviar no WhatsApp</button>
              <button type="button" onClick={(e)=>openEmail(e.currentTarget.closest('form'))} className="px-4 py-3 rounded-xl border hover:border-fuchsia-400">Enviar por E‑mail</button>
            </div>
          </form>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="bg-white/60 border-t">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold text-center">Perguntas frequentes</h2>
          <div className="mt-8 grid md:grid-cols-2 gap-6">
            {faqs.map((f, i) => (
              <div key={i} className="rounded-2xl border bg-white p-6 shadow-sm">
                <h3 className="font-semibold">{f.q}</h3>
                <p className="text-gray-600 mt-2 text-sm">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t">
        <div className="max-w-7xl mx-auto px-4 py-8 text-sm text-gray-600 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <img src="/WORLD ART.jpg" alt="World Arte" className="h-8 w-auto object-contain" />
            <span>© {new Date().getFullYear()} World Arte. Todos os direitos reservados.</span>
          </div>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-fuchsia-700">Instagram</a>
            <a href="#" className="hover:text-fuchsia-700">Política de privacidade</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

// ---------- Helpers ----------
function Input({ label, className = "", ...props }) {
  return (
    <label className={`block ${className}`}>
      <span className="text-sm font-medium">{label}</span>
      <input {...props} className="mt-1 w-full rounded-xl border px-3 py-2 outline-none focus:ring-2 focus:ring-fuchsia-300" />
    </label>
  )
}

function TextArea({ label, className="", ...props }) {
  return (
    <label className={`block ${className}`}>
      <span className="text-sm font-medium">{label}</span>
      <textarea {...props} className="mt-1 w-full rounded-xl border px-3 py-2 outline-none focus:ring-2 focus:ring-fuchsia-300" />
    </label>
  )
}

function Select({ label, options = [], ...props }) {
  return (
    <label className="block">
      <span className="text-sm font-medium">{label}</span>
      <select {...props} className="mt-1 w-full rounded-xl border px-3 py-2 outline-none focus:ring-2 focus:ring-fuchsia-300 bg-white">
        <option value="">Selecione…</option>
        {options.map(op => (<option key={op} value={op}>{op}</option>))}
      </select>
    </label>
  )
}

// Monta mensagem para WhatsApp
function formToWhatsApp(form) {
  const data = new FormData(form)
  const get = (k) => data.get(k) || ""
  return [
    "ORÇAMENTO – WORLD ARTE",
    `Nome: ${get('nome')}`,
    `Cidade/UF: ${get('cidade')}`,
    `WhatsApp: ${get('whats')}`,
    `Quantidade: ${get('qtd')}`,
    `Material: ${get('material')}`,
    `Prazo: ${get('prazo')}`,
    `Descrição: ${get('desc')}`,
    `Links: ${get('links')}`
  ].filter(Boolean).join("%0A")
}

// Monta e-mail (subject/body)
function formToEmail(form) {
  const data = new FormData(form)
  const get = (k) => data.get(k) || ""
  const subject = `Orçamento – ${get('nome') || 'Cliente'}`
  const body = [
    'Olá, World Arte! Seguem os dados do meu projeto:',
    '',
    `Nome: ${get('nome')}`,
    `Cidade/UF: ${get('cidade')}`,
    `WhatsApp: ${get('whats')}`,
    `Quantidade: ${get('qtd')}`,
    `Material: ${get('material')}`,
    `Prazo: ${get('prazo')}`,
    `Descrição: ${get('desc')}`,
    `Links: ${get('links')}`,
  ].join('\n')
  return { subject, body }
}
