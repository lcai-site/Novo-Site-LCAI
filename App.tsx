
import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  ChevronRight, 
  Zap,
  BarChart3,
  Settings,
  Bot,
  Share2,
  Database,
  ShieldCheck,
  Globe,
  ArrowUp,
  LayoutDashboard,
  TrendingDown,
  Lock,
  LineChart,
  Layers,
  CheckCircle2,
  AlertCircle,
  Link2,
  Workflow,
  Target
} from 'lucide-react';

// --- CONSTANTS ---
const LOGO_URL = "https://midias.lcai.com.br/images/2025/12/20/Sem-titulo-2-1.png";
const WHATSAPP_LINK = "https://wa.me/5519999611441";

// --- DATA ---
const PAIN_POINTS = [
  {
    title: "Canais Desconectados",
    desc: "Seu tráfego, CRM e vendas não conversam. Você perde dinheiro nos silos de informação entre plataformas.",
    icon: Link2
  },
  {
    title: "Processos Manuais Lentos",
    desc: "Sua equipe perde tempo com tarefas repetitivas em vez de focar no fechamento estratégico de novos clientes.",
    icon: Workflow
  },
  {
    title: "Atribuição de Vendas Cega",
    desc: "A falta de uma arquitetura de dados sólida impede você de saber qual real canal gera o lucro no final do dia.",
    icon: Target
  }
];

const SOLUTIONS = [
  {
    title: 'Arquitetura de Dados & BI',
    description: 'A fundação da sua escala.',
    icon: BarChart3,
    color: 'blue'
  },
  {
    title: 'Automação de Processos',
    description: 'Eficiência operacional máxima.',
    icon: Settings,
    color: 'purple'
  },
  {
    title: 'CRM & Pipeline de Vendas',
    description: 'O controle total da jornada.',
    icon: LayoutDashboard,
    color: 'indigo'
  },
  {
    title: 'Inteligência Artificial',
    description: 'Operação autônoma 24/7.',
    icon: Bot,
    color: 'cyan'
  }
];

// --- ICONS ---
const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" width="32" height="32" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.414 0 .018 5.394 0 12.03a11.81 11.81 0 001.592 5.96L0 24l6.117-1.604a11.803 11.803 0 005.925 1.585h.005c6.637 0 12.032-5.391 12.036-12.027a11.8 11.8 0 00-3.468-8.411z"/>
  </svg>
);

// --- COMPONENTS ---

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? 'glass py-3 border-b border-white/5' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#home" className="flex items-center group">
          <img src={LOGO_URL} alt="LCAI" className="h-10 md:h-12 w-auto object-contain" />
        </a>
        <a 
          href={WHATSAPP_LINK} 
          target="_blank"
          className="bg-white text-black hover:bg-blue-600 hover:text-white px-6 py-2.5 rounded-full text-sm font-bold transition-all shadow-xl"
        >
          Diagnóstico Técnico
        </a>
      </div>
    </nav>
  );
};

const WhatsAppButton = () => (
  <a href={WHATSAPP_LINK} target="_blank" className="fixed bottom-8 right-8 z-[100] group flex items-center gap-3 flex-row-reverse">
    <div className="relative">
      <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-25"></div>
      <div className="relative w-16 h-16 bg-green-500 rounded-full flex items-center justify-center text-white shadow-2xl transition-transform group-hover:scale-110">
        <WhatsAppIcon />
      </div>
    </div>
    <div className="glass px-4 py-2 rounded-2xl text-white font-bold opacity-0 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all">
      Falar no WhatsApp
    </div>
  </a>
);

const App: React.FC = () => {
  return (
    <div className="bg-[#030712]">
      <Navbar />
      <WhatsAppButton />

      <main>
        {/* HERO */}
        <section className="relative pt-32 pb-24 md:pt-48 md:pb-40 overflow-hidden">
          <div className="scanline"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full hero-glow pointer-events-none"></div>
          
          <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-white/10 text-blue-400 text-xs font-bold mb-10 tracking-[0.2em] uppercase">
              <Zap size={14} className="fill-blue-400" /> Engenharia de Dados & Aquisição Multicanal
            </div>
            
            <h1 className="text-5xl md:text-8xl font-extrabold leading-[1.1] mb-8 tracking-tight">
              Vendas não são sorte. <br /> 
              São <span className="gradient-text italic">Dados Integrados</span>.
            </h1>
            
            <p className="text-gray-400 text-xl md:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed font-light">
              Na <span className="text-white font-medium">LCAI</span>, unificamos sua jornada de aquisição. Integramos tráfego, CRM e automação em uma infraestrutura de inteligência única para escala previsível.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a 
                href={WHATSAPP_LINK} 
                target="_blank"
                className="group bg-blue-600 text-white px-12 py-6 rounded-full font-bold text-xl flex items-center justify-center gap-4 hover:bg-blue-700 transition-all shadow-[0_20px_40px_-15px_rgba(37,99,235,0.4)] hover:scale-105"
              >
                QUERO UMA OPERAÇÃO INTELIGENTE
                <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform" />
              </a>
            </div>
          </div>
        </section>

        {/* DATA-FIRST SECTION */}
        <section className="py-24 bg-white/[0.02] border-y border-white/5 relative">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 italic">A dor de uma operação <span className="text-red-500">desconectada</span>:</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {PAIN_POINTS.map((p, i) => (
                <div key={i} className="glass-card p-8 rounded-3xl border border-white/5">
                  <div className="w-12 h-12 bg-red-500/10 rounded-xl flex items-center justify-center text-red-500 mb-6">
                    <p.icon size={28} />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-white">{p.title}</h3>
                  <p className="text-gray-400 leading-relaxed font-light">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* BENTO SOLUTIONS - LCAI FOCUS */}
        <section className="py-32 relative">
          <div className="max-w-7xl mx-auto px-6">
            <div className="mb-20 text-center">
              <span className="text-blue-500 font-bold uppercase tracking-widest text-xs mb-4 block">O Ecossistema LCAI</span>
              <h2 className="text-4xl md:text-6xl font-bold">Inteligência que <span className="gradient-text">Conecta e Escala</span>.</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {/* Feature 1: Arquitetura de Dados */}
              <div className="md:col-span-2 glass-card p-10 rounded-[2.5rem] flex flex-col justify-between overflow-hidden relative group">
                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 blur-[100px] pointer-events-none group-hover:scale-150 transition-transform"></div>
                <div>
                  <BarChart3 className="text-blue-500 mb-8" size={48} />
                  <h3 className="text-3xl font-bold mb-4 tracking-tight">Arquitetura de <br/> Dados & BI</h3>
                  <p className="text-gray-400 text-lg mb-8 font-light">Unificamos dados de Google Ads, Meta, TikTok e seu CRM em dashboards de decisão em tempo real. Saiba exatamente onde cada Real investido retorna.</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 glass rounded-full text-xs text-blue-300">Data Warehousing</span>
                  <span className="px-3 py-1 glass rounded-full text-xs text-blue-300">Cross-Channel Tracking</span>
                  <span className="px-3 py-1 glass rounded-full text-xs text-blue-300">LTV Modeling</span>
                </div>
              </div>

              {/* Feature 2: Automação de Processos */}
              <div className="md:col-span-2 glass-card p-10 rounded-[2.5rem] flex flex-col justify-between group overflow-hidden">
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-600/10 blur-[100px] pointer-events-none group-hover:scale-150 transition-transform"></div>
                <div>
                  <Settings className="text-purple-500 mb-8" size={48} />
                  <h3 className="text-3xl font-bold mb-4 tracking-tight">Automação de <br/> Processos Operacionais</h3>
                  <p className="text-gray-400 text-lg font-light">Eliminamos o trabalho manual. Da triagem de leads ao onboarding de clientes, a <span className="text-white">LCAI</span> implementa fluxos autônomos via n8n Self-Hosted.</p>
                </div>
              </div>

              {/* Feature 3: CRM */}
              <div className="md:col-span-2 glass-card p-10 rounded-[2.5rem] group border-l-4 border-indigo-500">
                <LayoutDashboard className="text-indigo-500 mb-6 group-hover:translate-x-2 transition-transform" size={40} />
                <h3 className="text-2xl font-bold mb-4">Implementação de CRM & Pipeline</h3>
                <p className="text-gray-400 font-light">Estruturamos seu funil de vendas para que nenhum lead seja esquecido. Automação de follow-ups e nutrição inteligente integrada aos seus canais de aquisição.</p>
              </div>

              {/* Feature 4: IA & Agentes */}
              <div className="md:col-span-2 glass-card p-10 rounded-[2.5rem] flex items-start gap-8 overflow-hidden relative border-l-4 border-cyan-500">
                <div className="shrink-0 w-16 h-16 bg-cyan-500/10 rounded-2xl flex items-center justify-center text-cyan-500">
                  <Bot size={32} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4">Agentes de IA Operacionais</h3>
                  <p className="text-gray-400 font-light">Desenvolvemos IAs customizadas que qualificam leads, analisam dados de mercado e auxiliam na produção de criativos estratégicos 24 horas por dia.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* LCAI VS O RESTO */}
        <section className="py-32 bg-zinc-950">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">Por que líderes de mercado escolhem a <span className="text-blue-500 underline decoration-blue-500/20">LCAI</span>?</h2>
                <p className="text-gray-400 text-xl mb-10 leading-relaxed font-light">Tráfego pago é apenas a ponta do iceberg. A verdadeira escala vem da inteligência que acontece depois do clique.</p>
                <div className="space-y-6">
                  <div className="flex gap-4 p-6 glass rounded-2xl border-l-4 border-red-500/50">
                    <AlertCircle className="text-red-500 shrink-0" />
                    <div>
                      <p className="font-bold text-white mb-1 text-lg">Agência de Tráfego Comum</p>
                      <p className="text-gray-400 text-sm font-light">Foca apenas em anúncios e métricas de vaidade. Ignora o que acontece no seu CRM e não automatiza seus processos.</p>
                    </div>
                  </div>
                  <div className="flex gap-4 p-6 glass rounded-2xl border-l-4 border-blue-500 shadow-[0_0_30px_rgba(37,99,235,0.1)]">
                    <CheckCircle2 className="text-blue-500 shrink-0" />
                    <div>
                      <p className="font-bold text-white mb-1 text-lg">Engenharia de Dados LCAI</p>
                      <p className="text-gray-400 text-sm font-light">Unificamos toda a stack tecnológica. Criamos uma máquina de vendas autônoma guiada por dados precisos e CRM estruturado.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative group">
                <div className="absolute -inset-10 bg-blue-600/10 blur-[120px] rounded-full pointer-events-none group-hover:bg-blue-600/20 transition-all"></div>
                <div className="glass-card p-1 rounded-[3rem] overflow-hidden relative border border-white/10">
                  <img 
                    src="https://images.unsplash.com/photo-1551288049-bbda38656ad1?auto=format&fit=crop&q=80&w=1000" 
                    alt="LCAI Data Intelligence" 
                    className="w-full h-auto rounded-[2.9rem] opacity-70 grayscale group-hover:grayscale-0 transition-all duration-1000" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent flex flex-col justify-end p-10">
                    <p className="text-white font-black text-4xl mb-2 italic tracking-tighter">DATA-DRIVEN ROI</p>
                    <p className="text-blue-400 font-bold uppercase tracking-[0.3em] text-xs">A LCAI é a sua infraestrutura de crescimento</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FINAL CTA - REFINED */}
        <section className="py-40 relative overflow-hidden">
          <div className="absolute bottom-0 left-0 w-full h-1/2 bg-blue-600/5 blur-[100px] pointer-events-none"></div>
          <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
            <h2 className="text-4xl md:text-7xl font-bold mb-10 leading-tight">Chega de operar no <br/> <span className="gradient-text italic">escuro técnico.</span></h2>
            <p className="text-gray-400 text-xl md:text-2xl mb-16 max-w-2xl mx-auto leading-relaxed font-light">
              Profissionalize sua aquisição. Integre seus dados e automatize seu lucro com a <span className="text-white font-medium">LCAI</span>.
            </p>
            <div className="flex justify-center">
              <a 
                href={WHATSAPP_LINK} 
                target="_blank"
                className="group bg-white text-black px-12 py-7 rounded-full font-black text-2xl flex items-center gap-5 hover:scale-105 transition-all shadow-2xl hover:bg-blue-600 hover:text-white"
              >
                AGENDAR DIAGNÓSTICO LCAI
                <ArrowRight size={32} />
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="py-20 bg-black border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-10">
            <div className="flex flex-col items-center md:items-start gap-4">
              <img src={LOGO_URL} alt="LCAI" className="h-10 w-auto" />
              <p className="text-gray-500 text-xs font-bold tracking-widest">OTIMIZANDO O PRESENTE, AUTOMATIZANDO O FUTURO.</p>
            </div>
            <div className="flex gap-8 text-gray-500 text-sm font-medium">
               <span className="hover:text-blue-500 cursor-pointer transition-colors">LinkedIn</span>
               <span className="hover:text-pink-500 cursor-pointer transition-colors">Instagram</span>
            </div>
            <div className="text-gray-600 text-[10px] text-center md:text-right uppercase tracking-[0.2em] font-bold">
              <p>© 2024 LCAI - Automações Inteligentes <br/> Engenharia de Dados & Performance v1.1.0</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
