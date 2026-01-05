
import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  Zap,
  ShieldCheck,
  Search,
  Code2,
  Target,
  TrendingUp,
  Cpu,
  Database,
  Network,
  BarChart4,
  EyeOff,
  Activity,
  Globe,
  Lock,
  MousePointer2,
  BarChart3,
  Share2,
  Briefcase,
  AlertTriangle,
  Sparkles,
  PlayCircle,
  CheckCircle2,
  Loader2,
  Users,
  MessageSquare,
  Heart,
  ShoppingCart,
  Home,
  Stethoscope,
  Car
} from 'lucide-react';

// --- CONSTANTS ---
const LOGO_URL = "https://midias.lcai.com.br/images/2025/12/20/Sem-titulo-2-1.png";
const WHATSAPP_LINK = "https://wa.me/5519999611441";
const WEBHOOK_URL = "https://n8n.lcai.com.br/webhook/formdados";

// --- COMPONENTS ---

const SectionHeader: React.FC<{ tag: string; title: React.ReactNode; subtitle?: string }> = ({ tag, title, subtitle }) => (
  <div className="mb-2 md:mb-4 overflow-visible">
    <span className="text-blue-500 font-black uppercase tracking-[0.2em] md:tracking-[0.4em] text-[9px] md:text-[10px] block mb-1">{tag}</span>
    <div className="overflow-visible -mx-10 md:-mx-16">
      <h2 className="text-3xl sm:text-4xl md:text-6xl font-black italic tracking-normal leading-[2] text-white whitespace-normal md:whitespace-nowrap px-10 md:px-16 py-8">
        {title}
      </h2>
    </div>
    {subtitle && <p className="text-gray-400 text-sm md:text-lg font-light mt-1 max-w-3xl leading-relaxed">{subtitle}</p>}
  </div>
);

const LeadForm: React.FC = () => {
  const [formData, setFormData] = useState({
    nome: '',
    whatsapp: '',
    mensagem: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.nome.trim() || !formData.whatsapp.trim()) {
      setStatus('error');
      return;
    }
    setStatus('loading');
    try {
      const response = await fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setStatus('success');
        setFormData({ nome: '', whatsapp: '', mensagem: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error("Erro ao enviar formulário:", error);
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="glass p-8 md:p-12 rounded-2xl border border-blue-500/30 text-center animate-in fade-in zoom-in duration-500">
        <div className="w-20 h-20 bg-blue-600/20 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 size={40} className="text-blue-500" />
        </div>
        <h3 className="text-2xl md:text-3xl font-black italic uppercase tracking-tighter mb-4">Dados Recebidos!</h3>
        <p className="text-gray-400 mb-8 font-light">Nossa equipe de engenharia analisará sua operação e entrará em contato em breve via WhatsApp.</p>
        <button onClick={() => setStatus('idle')} className="text-blue-500 text-xs font-black uppercase tracking-widest hover:text-white transition-colors">
          Enviar Outra Resposta
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid md:grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 ml-1 flex items-center gap-1">
            Seu Nome <span className="text-red-500">*</span>
          </label>
          <input required type="text" placeholder="Ex: João Silva" className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-blue-500/50 focus:bg-white/10 transition-all placeholder:text-gray-600" value={formData.nome} onChange={(e) => setFormData({...formData, nome: e.target.value})} />
        </div>
        <div className="space-y-1.5">
          <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 ml-1 flex items-center gap-1">
            Whatsapp (com DDD) <span className="text-red-500">*</span>
          </label>
          <input required type="tel" placeholder="Ex: 11 99999-9999" className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-blue-500/50 focus:bg-white/10 transition-all placeholder:text-gray-600" value={formData.whatsapp} onChange={(e) => setFormData({...formData, whatsapp: e.target.value})} />
        </div>
      </div>
      <div className="space-y-1.5">
        <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 ml-1">Sua Operação (Opcional)</label>
        <textarea placeholder="Conte brevemente sobre seu negócio e seus desafios atuais..." rows={4} className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-blue-500/50 focus:bg-white/10 transition-all resize-none placeholder:text-gray-600" value={formData.mensagem} onChange={(e) => setFormData({...formData, mensagem: e.target.value})}></textarea>
      </div>
      <button disabled={status === 'loading'} type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-black text-lg md:text-xl py-5 rounded-xl transition-all flex items-center justify-center gap-3 shadow-xl shadow-blue-600/20 disabled:opacity-50">
        {status === 'loading' ? <Loader2 className="animate-spin" size={24} /> : ( <> SOLICITAR ANÁLISE TÉCNICA <ArrowRight size={24} /> </> )}
      </button>
      {status === 'error' && (
        <div className="bg-red-500/10 border border-red-500/20 p-3 rounded-lg">
          <p className="text-red-500 text-[10px] text-center font-black uppercase tracking-widest">
            {!formData.nome || !formData.whatsapp ? 'Preencha os campos obrigatórios (*)' : 'Erro de conexão. Tente novamente ou WhatsApp.'}
          </p>
        </div>
      )}
    </form>
  );
};

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? 'glass py-1 border-b border-white/5 shadow-2xl' : 'bg-transparent py-2'}`}>
      <div className="max-w-7xl mx-auto px-4 md:px-6 flex justify-between items-center">
        <a href="#home" className="flex items-center group shrink-0">
          <img src={LOGO_URL} alt="LCAI" className="h-14 md:h-24 w-auto object-contain transition-transform group-hover:scale-105" />
        </a>
        <div className="hidden md:flex items-center gap-6 lg:gap-10">
           <a href="#inteligencia" className="text-[10px] font-black uppercase tracking-widest text-gray-400 hover:text-white transition-colors">Inteligência</a>
           <a href="#servicos" className="text-[10px] font-black uppercase tracking-widest text-gray-400 hover:text-white transition-colors">Soluções</a>
           <a href="#funil" className="text-[10px] font-black uppercase tracking-widest text-gray-400 hover:text-white transition-colors">Funil</a>
           <a href="#depoimentos" className="text-[10px] font-black uppercase tracking-widest text-gray-400 hover:text-white transition-colors">Resultados</a>
        </div>
        <a href={WHATSAPP_LINK} target="_blank" className="bg-blue-600 text-white hover:bg-blue-700 px-4 md:px-6 py-2 rounded-full text-[9px] md:text-[10px] font-black transition-all uppercase tracking-tighter">
          FALAR COM ESPECIALISTA
        </a>
      </div>
    </nav>
  );
};

const App: React.FC = () => {
  return (
    <div className="bg-[#020617] text-white overflow-x-hidden selection:bg-blue-600 selection:text-white font-sans">
      <Navbar />
      <main>
        {/* HERO SECTION */}
        <section id="home" className="relative pt-24 pb-4 md:pt-32 md:pb-8 overflow-hidden min-h-[50vh] md:min-h-[75vh] flex items-center">
          <div className="scanline"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full hero-glow pointer-events-none opacity-40"></div>
          <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10 text-center">
            <div className="inline-flex items-center gap-2 md:gap-3 px-4 md:px-5 py-2 rounded-full glass border border-red-500/20 text-red-400 text-[8px] md:text-[10px] font-black mb-3 md:mb-4 tracking-[0.2em] md:tracking-[0.4em] uppercase">
              <AlertTriangle size={12} className="animate-pulse" /> CRISE DE DADOS: 2026
            </div>
            <div className="overflow-visible -mx-10 md:-mx-20">
              <h1 className="text-4xl sm:text-6xl md:text-8xl font-black leading-[2] mb-3 md:mb-4 tracking-normal uppercase break-words px-10 md:px-20 py-12">
                Domine 2026 com <span className="gradient-text italic inline-block pr-6 md:pr-10">Clareza Total</span>
              </h1>
            </div>
            <p className="text-gray-400 text-base sm:text-lg md:text-xl mb-6 md:mb-8 max-w-3xl mx-auto leading-relaxed font-light px-2">
              A nova <span className="text-white font-bold">alíquota de 12%</span> para investimento em anúncios já está valendo! Blindamos seu lucro com engenharia de dados de alta performance para o cenário atual.
            </p>
            <div className="flex justify-center px-4">
              <a href={WHATSAPP_LINK} target="_blank" className="group bg-blue-600 text-white px-8 md:px-10 py-4 rounded-full font-black text-lg md:text-xl flex items-center justify-center gap-4 hover:bg-blue-700 transition-all shadow-xl shadow-blue-600/20">
                FALAR COM ESPECIALISTA LCAI
                <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform hidden sm:block" />
              </a>
            </div>
          </div>
        </section>

        {/* SEÇÃO 01: INTELIGÊNCIA */}
        <section id="inteligencia" className="py-4 md:py-6 relative bg-zinc-950/40 border-y border-white/5 scroll-mt-24">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <SectionHeader tag="01. Inteligência de Dados" title={<>A Escuridão dos Dados <span className="text-blue-500 pr-6">Mata seu Lucro</span></>} subtitle="40% das suas vendas são invisíveis para as redes sociais. Nossa engenharia traz a luz necessária." />
            <div className="grid lg:grid-cols-2 gap-4 md:gap-8 mt-4">
               <div className="space-y-2 md:space-y-3">
                  {[
                    { icon: EyeOff, title: "Sub-Atribuição de Vendas", desc: "Nossa tecnologia revela a origem real de cada centavo faturado.", color: "text-red-500", bg: "bg-red-500/10" },
                    { icon: Database, title: "Engenharia Server-Side", desc: "Dados direto do servidor, ignorando bloqueios de iOS.", color: "text-blue-500", bg: "bg-blue-500/10" },
                    { icon: BarChart3, title: "Decisões por Lucro Real", desc: "Dashboards que mostram a margem de lucro em tempo real.", color: "text-cyan-500", bg: "bg-cyan-500/10" }
                  ].map((item, idx) => (
                    <div key={idx} className="p-3 md:p-4 glass rounded-xl border border-white/5">
                      <div className="flex gap-4 items-start">
                        <div className={`w-9 h-9 ${item.bg} rounded-lg flex items-center justify-center ${item.color} shrink-0`}> <item.icon size={18} /> </div>
                        <div>
                          <h4 className="text-base font-bold mb-0.5">{item.title}</h4>
                          <p className="text-gray-400 text-xs font-light leading-relaxed">{item.desc}</p>
                        </div>
                      </div>
                    </div>
                  ))}
               </div>
               <div className="relative flex items-center justify-center">
                  <div className="glass p-4 md:p-5 rounded-xl border border-white/10 relative z-10 w-full">
                     <div className="flex items-center gap-3 mb-4">
                        <Activity size={16} className="text-blue-500" />
                        <span className="text-[9px] md:text-xs font-black uppercase tracking-widest">Simulação de Performance</span>
                     </div>
                     <div className="space-y-4">
                        <div>
                          <div className="flex justify-between text-[10px] font-bold mb-1 uppercase tracking-tighter"> <span>Rastreamento Padrão</span> <span className="text-red-500">60%</span> </div>
                          <div className="h-1.5 bg-white/5 rounded-full overflow-hidden"> <div className="h-full bg-red-500 w-[60%]"></div> </div>
                        </div>
                        <div>
                          <div className="flex justify-between text-[10px] font-bold mb-1 uppercase tracking-tighter"> <span>Engenharia LCAI</span> <span className="text-blue-500">99.8%</span> </div>
                          <div className="h-1.5 bg-white/5 rounded-full overflow-hidden"> <div className="h-full bg-blue-500 w-full"></div> </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
          </div>
        </section>

        {/* SEÇÃO 02: SOLUÇÕES */}
        <section id="servicos" className="py-4 md:py-6 scroll-mt-24">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <SectionHeader tag="02. Soluções de Escala" title={<>A Tecnologia do <span className="text-blue-500 pr-6">Próximo Nível</span></>} />
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 mt-4">
              {[
                { title: "CRM LCAI", subtitle: "Tech Própria", desc: "Qualificação de leads via IA para conversão extrema.", icon: Sparkles, color: "blue", featured: true },
                { title: "Gestão de Tráfego", subtitle: "Performance", desc: "Operação técnica focada em ROI e escala real.", icon: TrendingUp, color: "blue" },
                { title: "Automação n8n", subtitle: "Processos", desc: "Eliminamos trabalho manual com integrações robustas.", icon: Zap, color: "cyan" },
                { title: "Análise de Dados", subtitle: "Inteligência", desc: "Controle total do lucro real em dashboards.", icon: BarChart4, color: "blue" },
                { title: "Redes Sociais", subtitle: "Autoridade", desc: "Conteúdo focado em quebrar objeções comerciais.", icon: Share2, color: "cyan" },
                { title: "Agentes de IA", subtitle: "IA 24/7", desc: "Qualificação autônoma de leads em tempo real.", icon: Cpu, color: "purple" }
              ].map((s, i) => (
                <div key={i} className={`glass-card p-4 md:p-5 rounded-xl group relative flex flex-col h-full border ${s.featured ? 'border-blue-500/40 bg-blue-600/5' : 'border-white/5'}`}>
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center mb-3 ${ s.color === 'blue' ? 'bg-blue-600/10 text-blue-500' : s.color === 'purple' ? 'bg-purple-600/10 text-purple-500' : 'bg-cyan-600/10 text-cyan-500' }`}> <s.icon size={16} /> </div>
                  <h4 className="text-[7px] font-black uppercase text-gray-500 mb-0.5">{s.subtitle}</h4>
                  <h3 className="text-base font-bold mb-1 italic tracking-tighter uppercase leading-none">{s.title}</h3>
                  <p className="text-gray-400 font-light leading-relaxed text-[11px]">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SEÇÃO 04: FUNIL DE RELACIONAMENTO */}
        <section id="funil" className="py-8 md:py-12 scroll-mt-24">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <SectionHeader tag="04. Funil de Relacionamento" title={<>Como transformamos <span className="text-blue-500 pr-6">Estranhos em Clientes</span></>} subtitle="Não é sorte, é engenharia. Entenda como guiamos seu cliente do primeiro clique até o fechamento." />
            <div className="mt-12 relative">
              <div className="absolute left-[19px] top-4 bottom-4 w-0.5 bg-gradient-to-b from-blue-500/50 via-blue-500/20 to-transparent md:hidden"></div>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative z-10">
                {[
                  { step: "CONSCIÊNCIA", icon: Users, title: "Atração", desc: "Seu cliente ideal vê seu anúncio ou conteúdo pela primeira vez. O foco é captar atenção.", color: "border-blue-500/20" },
                  { step: "INTERESSE", icon: MessageSquare, title: "O Lead", desc: "Ele clica e vira um lead. Nosso CRM qualifica quem realmente tem potencial de compra.", color: "border-blue-500/30" },
                  { step: "CONFIANÇA", icon: Heart, title: "Relacionamento", desc: "Nossa IA e automações nutrem o lead, quebrando todas as objeções de forma automática.", color: "border-blue-500/40" },
                  { step: "CONVERSÃO", icon: ShoppingCart, title: "A Venda", desc: "O cliente está pronto. O time comercial recebe um lead 'quente' ou a venda ocorre direto no site.", color: "border-blue-500/60" }
                ].map((item, idx) => (
                  <div key={idx} className={`relative glass-card p-6 rounded-2xl border-t-2 ${item.color} group transition-all`}>
                    <div className="flex md:flex-col items-center md:items-start gap-4 md:gap-0">
                      <div className="w-10 h-10 bg-blue-600/10 rounded-full flex items-center justify-center text-blue-500 mb-0 md:mb-6 shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors"> <item.icon size={20} /> </div>
                      <div>
                        <span className="text-[10px] font-black tracking-widest text-blue-500/70 mb-1 block uppercase">{item.step}</span>
                        <h4 className="text-xl font-bold mb-3 italic uppercase tracking-tighter">{item.title}</h4>
                        <p className="text-gray-400 text-xs font-light leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                    {idx < 3 && <div className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 z-20 text-blue-500/30"> <ArrowRight size={24} /> </div>}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* SEÇÃO 05: EXEMPLOS POR NICHO */}
        <section id="nichos" className="py-8 md:py-12 bg-zinc-950/40 border-y border-white/5 scroll-mt-24">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <SectionHeader tag="05. Arquiteturas Práticas" title={<>Estratégias de <span className="text-blue-500 pr-6">Elite por Nicho</span></>} subtitle="Veja como aplicamos o Funil de Relacionamento LCAI em diferentes modelos de negócio." />
            
            <div className="grid lg:grid-cols-3 gap-6 mt-12">
              {/* Nicho: Imobiliária */}
              <div className="glass-card rounded-2xl overflow-hidden border border-white/5 flex flex-col h-full">
                <div className="bg-blue-600/10 p-6 border-b border-white/5 flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center text-white shrink-0"> <Home size={24} /> </div>
                  <div>
                    <h3 className="text-lg font-black italic uppercase tracking-tighter">Imobiliária</h3>
                    <p className="text-blue-500 text-[9px] font-black uppercase">Venda de Alto Padrão</p>
                  </div>
                </div>
                <div className="p-6 space-y-6 flex-grow">
                  <div className="space-y-4">
                    <div className="flex gap-4">
                      <div className="w-6 h-6 rounded-full bg-blue-600/20 text-blue-500 flex items-center justify-center text-[10px] font-black shrink-0">1</div>
                      <p className="text-[11px] text-gray-400 leading-relaxed"><strong className="text-white">Atração:</strong> Anúncios de "Tour Virtual" ou "Lançamento Exclusivo" segmentados por renda alta.</p>
                    </div>
                    <div className="flex gap-4">
                      <div className="w-6 h-6 rounded-full bg-blue-600/20 text-blue-500 flex items-center justify-center text-[10px] font-black shrink-0">2</div>
                      <p className="text-[11px] text-gray-400 leading-relaxed"><strong className="text-white">Qualificação IA:</strong> Agente de IA pergunta via WhatsApp: "Qual metragem busca? Já possui financiamento aprovado?"</p>
                    </div>
                    <div className="flex gap-4">
                      <div className="w-6 h-6 rounded-full bg-blue-600/20 text-blue-500 flex items-center justify-center text-[10px] font-black shrink-0">3</div>
                      <p className="text-[11px] text-gray-400 leading-relaxed"><strong className="text-white">Nutrição:</strong> Envio automático de depoimentos de moradores e vídeos da infraestrutura do bairro.</p>
                    </div>
                  </div>
                  <div className="p-4 bg-white/5 rounded-xl border border-blue-500/20">
                    <p className="text-[10px] font-bold text-blue-500 uppercase mb-1">Resultado LCAI:</p>
                    <p className="text-xs italic text-gray-300">Corretor recebe apenas leads prontos para visita presencial, eliminando curiosos.</p>
                  </div>
                </div>
              </div>

              {/* Nicho: Clínica Médica */}
              <div className="glass-card rounded-2xl overflow-hidden border border-white/5 flex flex-col h-full">
                <div className="bg-blue-600/10 p-6 border-b border-white/5 flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center text-white shrink-0"> <Stethoscope size={24} /> </div>
                  <div>
                    <h3 className="text-lg font-black italic uppercase tracking-tighter">Clínica Médica</h3>
                    <p className="text-blue-500 text-[9px] font-black uppercase">Saúde & Bem-Estar</p>
                  </div>
                </div>
                <div className="p-6 space-y-6 flex-grow">
                  <div className="space-y-4">
                    <div className="flex gap-4">
                      <div className="w-6 h-6 rounded-full bg-blue-600/20 text-blue-500 flex items-center justify-center text-[10px] font-black shrink-0">1</div>
                      <p className="text-[11px] text-gray-400 leading-relaxed"><strong className="text-white">Atração:</strong> Conteúdos educativos sobre sintomas ou benefícios de um tratamento específico.</p>
                    </div>
                    <div className="flex gap-4">
                      <div className="w-6 h-6 rounded-full bg-blue-600/20 text-blue-500 flex items-center justify-center text-[10px] font-black shrink-0">2</div>
                      <p className="text-[11px] text-gray-400 leading-relaxed"><strong className="text-white">Interesse:</strong> Lead baixa um "Guia de Pré-Consulta" ou faz um teste rápido de saúde via chatbot.</p>
                    </div>
                    <div className="flex gap-4">
                      <div className="w-6 h-6 rounded-full bg-blue-600/20 text-blue-500 flex items-center justify-center text-[10px] font-black shrink-0">3</div>
                      <p className="text-[11px] text-gray-400 leading-relaxed"><strong className="text-white">Confiança:</strong> Envio de vídeos do Dr(a). explicando a segurança dos procedimentos e tecnologia da clínica.</p>
                    </div>
                  </div>
                  <div className="p-4 bg-white/5 rounded-xl border border-blue-500/20">
                    <p className="text-[10px] font-bold text-blue-500 uppercase mb-1">Resultado LCAI:</p>
                    <p className="text-xs italic text-gray-300">Agenda lotada com pacientes conscientes do valor do tratamento, reduzindo faltas.</p>
                  </div>
                </div>
              </div>

              {/* Nicho: Loja de Carros 0km */}
              <div className="glass-card rounded-2xl overflow-hidden border border-white/5 flex flex-col h-full">
                <div className="bg-blue-600/10 p-6 border-b border-white/5 flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center text-white shrink-0"> <Car size={24} /> </div>
                  <div>
                    <h3 className="text-lg font-black italic uppercase tracking-tighter">Concessionária</h3>
                    <p className="text-blue-500 text-[9px] font-black uppercase">Veículos 0km</p>
                  </div>
                </div>
                <div className="p-6 space-y-6 flex-grow">
                  <div className="space-y-4">
                    <div className="flex gap-4">
                      <div className="w-6 h-6 rounded-full bg-blue-600/20 text-blue-500 flex items-center justify-center text-[10px] font-black shrink-0">1</div>
                      <p className="text-[11px] text-gray-400 leading-relaxed"><strong className="text-white">Atração:</strong> Anúncios de "Estoque com Taxa Zero" ou "Avaliação Acima da Tabela no seu usado".</p>
                    </div>
                    <div className="flex gap-4">
                      <div className="w-6 h-6 rounded-full bg-blue-600/20 text-blue-500 flex items-center justify-center text-[10px] font-black shrink-0">2</div>
                      <p className="text-[11px] text-gray-400 leading-relaxed"><strong className="text-white">Simulador IA:</strong> Lead simula as parcelas do financiamento direto no WhatsApp de forma instantânea.</p>
                    </div>
                    <div className="flex gap-4">
                      <div className="w-6 h-6 rounded-full bg-blue-600/20 text-blue-500 flex items-center justify-center text-[10px] font-black shrink-0">3</div>
                      <p className="text-[11px] text-gray-400 leading-relaxed"><strong className="text-white">Experiência:</strong> Envio de vídeo em 4K do interior do carro e agendamento de Test Drive automático.</p>
                    </div>
                  </div>
                  <div className="p-4 bg-white/5 rounded-xl border border-blue-500/20">
                    <p className="text-[10px] font-bold text-blue-500 uppercase mb-1">Resultado LCAI:</p>
                    <p className="text-xs italic text-gray-300">Vendedor recebe o dossiê completo do lead: qual carro quer, quanto pode pagar e qual usado dará na troca.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 flex justify-center">
              <a href={WHATSAPP_LINK} target="_blank" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-black text-sm md:text-base flex items-center gap-3 transition-all shadow-lg shadow-blue-600/20">
                QUERO UM FUNIL PARA MEU NICHO
                <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </section>

        {/* CONSULTORIA */}
        <section id="diagnostico" className="py-6 md:py-16 relative scroll-mt-24">
          <div className="max-w-5xl mx-auto px-4 md:px-6">
            <div className="glass p-6 md:p-10 rounded-2xl border border-white/10 text-center relative overflow-visible">
               <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
               <span className="text-blue-500 font-black uppercase text-[8px] md:text-[9px] block mb-2">Diagnóstico de Engenharia</span>
               <div className="overflow-visible -mx-12 md:-mx-20">
                 <h2 className="text-3xl sm:text-5xl md:text-7xl font-black mb-4 italic leading-[2] tracking-normal uppercase px-12 md:px-20 py-16 text-white">
                   Profissionalize sua <span className="gradient-text inline-block pr-8 md:pr-12 py-6">Operação</span>
                 </h2>
               </div>
               <p className="text-gray-400 text-base md:text-lg mb-6 font-light max-w-xl mx-auto px-2">
                 O amadorismo técnico custa caro. Use o <strong>CRM LCAI</strong> para blindar seu lucro.
               </p>
               <a href={WHATSAPP_LINK} target="_blank" className="inline-flex group bg-blue-600 text-white px-10 py-4 rounded-full font-black text-lg md:text-xl items-center justify-center gap-4 hover:bg-blue-700 transition-all shadow-xl shadow-blue-600/20">
                 FALAR COM ESPECIALISTA LCAI
                 <ArrowRight size={22} className="group-hover:translate-x-2 transition-transform hidden sm:block" />
               </a>
            </div>
          </div>
        </section>

        {/* SEÇÃO 05: DEPOIMENTOS */}
        <section id="depoimentos" className="py-4 md:py-6 scroll-mt-24">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <SectionHeader tag="05. Prova Social" title={<>Quem Confia na <span className="text-blue-500 pr-6">Engenharia LCAI</span></>} />
            <div className="grid md:grid-cols-2 gap-4 mt-4">
              <div className="glass-card p-4 rounded-xl border border-white/5 flex flex-col md:flex-row gap-4 items-center">
                <div className="relative aspect-[9/16] w-full max-w-[140px] md:max-w-[160px] overflow-hidden rounded-lg border border-white/10 bg-black shrink-0">
                  <video className="w-full h-full object-cover" controls playsInline preload="metadata">
                    <source src="https://midias.lcai.com.br/images/2025/12/23/WhatsApp-Video-2025-12-23-at-11.07.18.mp4" type="video/mp4" />
                  </video>
                </div>
                <div className="text-center md:text-left overflow-visible">
                  <div className="overflow-visible -mx-4">
                    <h4 className="text-lg font-bold italic uppercase text-white mb-0.5 px-4 py-8 pr-10 leading-[2]">Dr. Rafael Oliveira</h4>
                  </div>
                  <p className="text-blue-500 text-[9px] font-black uppercase mb-2">Advogado Trabalhista</p>
                  <p className="text-gray-400 text-[11px] font-light">"Eficiência sem precedentes na captação de leads."</p>
                </div>
              </div>
              <div className="glass-card p-4 rounded-xl border border-white/5 flex flex-col md:flex-row gap-4 items-center">
                <div className="relative aspect-[9/16] w-full max-w-[140px] md:max-w-[160px] overflow-hidden rounded-lg border border-white/10 bg-black shrink-0">
                  <video className="w-full h-full object-cover" controls playsInline preload="metadata">
                    <source src="https://midias.lcai.com.br/images/2025/10/29/SnapInsta.to_AQPs7go2DOq63fJvOG9JW0PJdlaVlgWc47GzWe5827TiEpg8p93rTICtC5puzMZR0h6kajKwEZ5pYdpt5EFuQs225SDgOFneHlCQPu8.mp4" type="video/mp4" />
                  </video>
                </div>
                <div className="text-center md:text-left overflow-visible">
                  <div className="overflow-visible -mx-4">
                    <h4 className="text-lg font-bold italic uppercase text-white mb-0.5 px-4 py-8 pr-10 leading-[2]">Rodrigo Brasil</h4>
                  </div>
                  <p className="text-cyan-500 text-[9px] font-black uppercase mb-2">Spiderfit</p>
                  <p className="text-gray-400 text-[11px] font-light">"Controle total sobre o ROI. LCAI é indispensável."</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SEÇÃO 06: FORMULÁRIO DE ANÁLISE */}
        <section id="analise" className="py-8 md:py-12 bg-zinc-950/20 border-t border-white/5 scroll-mt-24">
          <div className="max-w-4xl mx-auto px-4 md:px-6">
            <SectionHeader tag="06. Auditoria Gratuita" title={<>Solicite uma <span className="text-blue-500 pr-6">Análise Técnica</span></>} subtitle="Preencha os dados abaixo e receba um diagnóstico exclusivo sobre como blindar seu lucro e escalar sua operação ainda em 2026." />
            <div className="mt-8"> <LeadForm /> </div>
          </div>
        </section>
      </main>
      <footer className="py-8 md:py-10 border-t border-white/5 bg-black">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-start gap-8">
            <div>
              <img src={LOGO_URL} alt="LCAI" className="h-16 md:h-20 w-auto mb-4" />
              <p className="text-gray-500 text-[10px] leading-relaxed font-light"> LCAI - Automações Inteligentes. <br/> Ecossistema de dados para escala real em 2026. </p>
            </div>
            <div className="flex flex-col items-start md:items-end md:text-right w-full">
              <nav className="flex flex-wrap gap-4 md:gap-6 mb-4">
                 <a href="#inteligencia" className="text-[10px] font-black uppercase text-gray-500 hover:text-white transition-colors">Dados</a>
                 <a href="#servicos" className="text-[10px] font-black uppercase text-gray-500 hover:text-white transition-colors">Soluções</a>
                 <a href="#depoimentos" className="text-[10px] font-black uppercase text-gray-500 hover:text-white transition-colors">Resultados</a>
                 <a href="#analise" className="text-[10px] font-black uppercase text-gray-500 hover:text-white transition-colors">Análise</a>
              </nav>
              <p className="text-gray-700 text-[9px] uppercase font-bold">© 2026 LCAI | Proprietary Tech v26.0</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
