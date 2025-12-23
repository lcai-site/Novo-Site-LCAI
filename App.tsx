
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
  Sparkles
} from 'lucide-react';

// --- CONSTANTS ---
const LOGO_URL = "https://midias.lcai.com.br/images/2025/12/20/Sem-titulo-2-1.png";
const WHATSAPP_LINK = "https://wa.me/5519999611441";

// --- COMPONENTS ---

const SectionHeader: React.FC<{ tag: string; title: React.ReactNode; subtitle?: string }> = ({ tag, title, subtitle }) => (
  <div className="mb-12 md:mb-20">
    <span className="text-blue-500 font-black uppercase tracking-[0.2em] md:tracking-[0.4em] text-[9px] md:text-[10px] block mb-4">{tag}</span>
    <h2 className="text-3xl sm:text-4xl md:text-7xl font-black italic tracking-tighter leading-[1.1] md:leading-tight text-white">
      {title}
    </h2>
    {subtitle && <p className="text-gray-400 text-base md:text-xl font-light mt-4 md:mt-6 max-w-2xl leading-relaxed">{subtitle}</p>}
  </div>
);

const AccordionItem: React.FC<{ question: string; answer: string }> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-white/5 last:border-0">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-5 md:py-6 flex justify-between items-center text-left hover:text-blue-400 transition-colors"
      >
        <span className="text-base md:text-lg font-bold pr-4">{question}</span>
        <span className="text-blue-500 font-bold text-xl">{isOpen ? '-' : '+'}</span>
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 pb-6' : 'max-h-0'}`}>
        <p className="text-gray-400 text-sm md:text-base leading-relaxed font-light">{answer}</p>
      </div>
    </div>
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
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? 'glass py-3 border-b border-white/5' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 md:px-6 flex justify-between items-center">
        <a href="#home" className="flex items-center group shrink-0">
          <img src={LOGO_URL} alt="LCAI" className="h-8 md:h-12 w-auto object-contain" />
        </a>
        <div className="hidden md:flex items-center gap-8 lg:gap-10">
           <a href="#inteligencia" className="text-[10px] font-black uppercase tracking-widest text-gray-400 hover:text-white transition-colors">Inteligência</a>
           <a href="#servicos" className="text-[10px] font-black uppercase tracking-widest text-gray-400 hover:text-white transition-colors">Soluções</a>
           <a href="#metodo" className="text-[10px] font-black uppercase tracking-widest text-gray-400 hover:text-white transition-colors">Metodologia</a>
           <a href="#diagnostico" className="text-[10px] font-black uppercase tracking-widest text-gray-400 hover:text-white transition-colors">Consultoria</a>
        </div>
        <a 
          href={WHATSAPP_LINK} 
          target="_blank"
          className="bg-blue-600 text-white hover:bg-white hover:text-black px-4 md:px-6 py-2.5 md:py-3 rounded-full text-[9px] md:text-[10px] font-black transition-all uppercase tracking-tighter"
        >
          <span className="hidden sm:inline">FALAR COM ESPECIALISTA LCAI</span>
          <span className="sm:hidden">CONTATO</span>
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
        <section id="home" className="relative pt-32 pb-20 md:pt-64 md:pb-48 overflow-hidden min-h-[85vh] md:min-h-screen flex items-center">
          <div className="scanline"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full hero-glow pointer-events-none opacity-40"></div>
          
          <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10 text-center">
            <div className="inline-flex items-center gap-2 md:gap-3 px-4 md:px-5 py-2 rounded-full glass border border-red-500/20 text-red-400 text-[8px] md:text-[10px] font-black mb-6 md:mb-10 tracking-[0.2em] md:tracking-[0.4em] uppercase">
              <AlertTriangle size={12} className="animate-pulse" /> ALERTA DE MERCADO: JANEIRO 2026
            </div>
            
            <h1 className="text-4xl sm:text-6xl md:text-[9rem] font-black leading-[1.1] md:leading-[0.85] mb-8 md:mb-12 tracking-tighter uppercase break-words">
              Comece 2026 <br className="hidden md:block"/> com <br className="md:hidden" />
              <span className="gradient-text italic inline-block">Clareza Total</span>
            </h1>
            
            <p className="text-gray-400 text-base sm:text-lg md:text-3xl mb-10 md:mb-16 max-w-5xl mx-auto leading-relaxed font-light px-2">
              Os custos com anúncios na Meta subirão <span className="text-white font-bold">12% a partir de Janeiro</span>. Sem engenharia de dados, seu lucro será engolido. Você precisa de <span className="text-white italic">inteligência</span> para investir onde o retorno é garantido.
            </p>
            
            <div className="flex justify-center px-4">
              <a 
                href={WHATSAPP_LINK}
                target="_blank"
                className="group bg-blue-600 text-white px-8 md:px-12 py-5 md:py-7 rounded-full font-black text-lg md:text-xl flex items-center justify-center gap-4 hover:scale-105 transition-all shadow-xl"
              >
                FALAR COM ESPECIALISTA LCAI
                <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform hidden sm:block" />
              </a>
            </div>
          </div>
        </section>

        {/* SEÇÃO 01: INTELIGÊNCIA */}
        <section id="inteligencia" className="py-20 md:py-32 relative bg-zinc-950/40 border-y border-white/5 scroll-mt-20">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <SectionHeader 
              tag="01. Inteligência de Dados"
              title={<>A Escuridão dos Dados <br className="hidden md:block"/> <span className="text-blue-500">Mata seu Lucro</span></>}
              subtitle="40% das suas vendas são invisíveis para as redes sociais. Nossa engenharia traz a luz que sua escala precisa."
            />

            <div className="grid lg:grid-cols-2 gap-8 md:gap-16">
               <div className="space-y-4 md:space-y-6">
                  {[
                    { icon: EyeOff, title: "Sub-Atribuição de Vendas", desc: "Você vende mais do que o painel mostra. Sem saber a origem correta, você não consegue escalar o que realmente funciona.", color: "text-red-500", bg: "bg-red-500/10" },
                    { icon: Database, title: "Engenharia Server-Side", desc: "Enviamos dados direto do servidor para o Facebook e Google, ignorando bloqueios de iOS e AdBlockers.", color: "text-blue-500", bg: "bg-blue-500/10" },
                    { icon: BarChart3, title: "Decisões por Lucro Real", desc: "Nossos dashboards mostram a margem de contribuição e o ROI real por produto em tempo real.", color: "text-cyan-500", bg: "bg-cyan-500/10" }
                  ].map((item, idx) => (
                    <div key={idx} className="p-6 md:p-8 glass rounded-[1.5rem] md:rounded-[2.5rem] border border-white/5">
                      <div className="flex gap-4 md:gap-6 items-start">
                        <div className={`w-10 h-10 md:w-12 md:h-12 ${item.bg} rounded-xl flex items-center justify-center ${item.color} shrink-0`}>
                          <item.icon size={20} />
                        </div>
                        <div>
                          <h4 className="text-lg md:text-xl font-bold mb-1 md:mb-2">{item.title}</h4>
                          <p className="text-gray-400 text-xs md:text-sm font-light leading-relaxed">{item.desc}</p>
                        </div>
                      </div>
                    </div>
                  ))}
               </div>

               <div className="relative flex items-center justify-center mt-10 md:mt-0">
                  <div className="glass p-6 md:p-10 rounded-[2rem] md:rounded-[3rem] border border-white/10 relative z-10 w-full">
                     <div className="flex items-center gap-3 mb-6 md:mb-10">
                        <Activity size={18} className="text-blue-500" />
                        <span className="text-[9px] md:text-xs font-black uppercase tracking-widest">Simulação de Performance</span>
                     </div>
                     <div className="space-y-8 md:space-y-10">
                        <div>
                          <div className="flex justify-between text-[10px] md:text-xs font-bold mb-2 uppercase tracking-tighter">
                            <span>Rastreamento Padrão</span>
                            <span className="text-red-500">60% Precisão</span>
                          </div>
                          <div className="h-2 md:h-3 bg-white/5 rounded-full overflow-hidden">
                            <div className="h-full bg-red-500 w-[60%]"></div>
                          </div>
                        </div>
                        <div>
                          <div className="flex justify-between text-[10px] md:text-xs font-bold mb-2 uppercase tracking-tighter">
                            <span>Engenharia LCAI</span>
                            <span className="text-blue-500">99.8% Precisão</span>
                          </div>
                          <div className="h-2 md:h-3 bg-white/5 rounded-full overflow-hidden">
                            <div className="h-full bg-blue-500 w-full shadow-[0_0_15px_rgba(37,99,235,0.5)]"></div>
                          </div>
                        </div>
                     </div>
                     <div className="mt-8 md:mt-12 pt-6 md:pt-8 border-t border-white/5 flex gap-4 md:gap-8 items-center justify-center">
                        <div className="text-center">
                          <p className="text-xl md:text-2xl font-black italic">40%</p>
                          <p className="text-[8px] md:text-[10px] text-gray-500 uppercase font-black">Recuperação</p>
                        </div>
                        <div className="w-px h-8 md:h-10 bg-white/10"></div>
                        <div className="text-center">
                          <p className="text-xl md:text-2xl font-black italic text-blue-500">-22%</p>
                          <p className="text-[8px] md:text-[10px] text-gray-500 uppercase font-black">Custo CPA</p>
                        </div>
                     </div>
                  </div>
                  <div className="absolute -top-10 -right-10 w-48 h-48 md:w-64 md:h-64 bg-blue-600/10 rounded-full blur-[80px] -z-10"></div>
               </div>
            </div>
          </div>
        </section>

        {/* SEÇÃO 02: SOLUÇÕES */}
        <section id="servicos" className="py-20 md:py-32 scroll-mt-20">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <SectionHeader 
              tag="02. Soluções de Escala"
              title={<>A Tecnologia do <br className="hidden md:block"/> <span className="text-blue-500">Próximo Nível</span></>}
              subtitle="Dominamos as ferramentas que separam os amadores dos grandes players do mercado."
            />

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
              {[
                { title: "CRM LCAI", subtitle: "Tecnologia Própria", desc: "Nosso CRM exclusivo com agentes de IA avançados. Qualifica os melhores leads automaticamente e aproxima sua comunicação para conversão extrema.", icon: Sparkles, color: "blue", featured: true },
                { title: "Gestão de Tráfego", subtitle: "Performance", desc: "Operação profissional focada em ROI real, combatendo o aumento do leilão com segmentação técnica e criativos orientados a dados.", icon: TrendingUp, color: "blue" },
                { title: "Automação n8n", subtitle: "Processos", desc: "Eliminamos o trabalho manual. Integramos sua operação ponta a ponta para que os dados fluam sem erros entre CRM e anúncios.", icon: Zap, color: "cyan" },
                { title: "Análise de Dados", subtitle: "Inteligência", desc: "Dashboards que consolidam marketing, vendas e financeiro. Saiba exatamente quanto cada real investido traz de lucro.", icon: BarChart4, color: "blue" },
                { title: "Redes Sociais", subtitle: "Autoridade", desc: "Gestão estratégica de conteúdo focada em quebrar objeções e preparar o lead para o momento decisivo da compra.", icon: Share2, color: "cyan" },
                { title: "Agentes de IA", subtitle: "Automação 24/7", desc: "IAs treinadas com o tom de voz da sua marca para qualificar leads, tirar dúvidas e realizar agendamentos de forma autônoma.", icon: Cpu, color: "purple" }
              ].map((s, i) => (
                <div key={i} className={`glass-card p-6 md:p-10 rounded-[1.5rem] md:rounded-[3rem] group relative overflow-hidden flex flex-col h-full border ${s.featured ? 'border-blue-500/40 bg-blue-600/5' : 'border-white/5'}`}>
                  {s.featured && (
                    <div className="absolute top-6 right-6 px-3 py-1 bg-blue-600 text-[8px] font-black uppercase tracking-widest rounded-full animate-pulse z-10">
                      Proprietário
                    </div>
                  )}
                  <div className={`absolute -top-4 -right-4 p-8 opacity-5 group-hover:opacity-15 transition-opacity`}>
                    <s.icon size={100} />
                  </div>
                  <div className={`w-12 h-12 md:w-14 md:h-14 rounded-xl md:rounded-2xl flex items-center justify-center mb-6 md:mb-8 ${
                    s.color === 'blue' ? 'bg-blue-600/10 text-blue-500' : 
                    s.color === 'purple' ? 'bg-purple-600/10 text-purple-500' : 
                    'bg-cyan-600/10 text-cyan-500'
                  }`}>
                    <s.icon size={24} />
                  </div>
                  <h4 className="text-[8px] md:text-[10px] font-black uppercase tracking-widest text-gray-500 mb-1">{s.subtitle}</h4>
                  <h3 className="text-xl md:text-2xl font-bold mb-3 italic tracking-tighter uppercase leading-none">{s.title}</h3>
                  <p className="text-gray-400 font-light leading-relaxed text-sm md:text-base">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* METODOLOGIA */}
        <section id="metodo" className="py-20 md:py-32 bg-zinc-950/60 border-y border-white/5 scroll-mt-20">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <div className="grid lg:grid-cols-2 gap-12 md:gap-24 items-center">
              <div>
                <SectionHeader 
                  tag="03. Metodologia"
                  title={<>Arquitetura de <br className="hidden md:block"/> <span className="text-blue-500">Implementação</span></>}
                />
                <div className="space-y-8 md:space-y-12">
                  {[
                    { step: "01", title: "Diagnóstico de Operação", desc: "Auditamos seus dados e processos para encontrar onde o lucro está sendo desperdiçado.", icon: Search },
                    { step: "02", title: "Engenharia de Fluxo", desc: "Desenhamos a arquitetura de dados e configuramos o CRM LCAI para sua necessidade específica.", icon: Target },
                    { step: "03", title: "Setup e Integração", desc: "Implementamos a stack técnica (CAPI, n8n, IA) diretamente no seu ecossistema comercial.", icon: Code2 },
                    { step: "04", title: "Otimização de Conversão", desc: "Ajustamos a comunicação e a qualificação dos leads para garantir a máxima escala.", icon: ShieldCheck }
                  ].map((m, i) => (
                    <div key={i} className="flex gap-4 md:gap-8 group">
                      <div className="shrink-0 w-10 h-10 md:w-14 md:h-14 bg-white/5 rounded-xl md:rounded-2xl flex items-center justify-center text-blue-500 font-black text-lg md:text-xl border border-white/5 group-hover:bg-blue-600 group-hover:text-white transition-all">
                        {m.step}
                      </div>
                      <div>
                        <h4 className="text-lg md:text-xl font-bold mb-1">{m.title}</h4>
                        <p className="text-gray-400 text-xs md:text-sm font-light leading-relaxed">{m.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="hidden lg:block">
                 <div className="relative">
                    <div className="absolute inset-0 bg-blue-600/5 blur-[120px] rounded-full"></div>
                    <div className="glass p-1 rounded-[4rem] border border-white/10 overflow-hidden">
                       <img 
                        src="https://images.unsplash.com/photo-1551288049-bbbda536ad37?q=80&w=2070&auto=format&fit=crop" 
                        alt="Engenharia de Dados" 
                        className="w-full h-[600px] object-cover rounded-[3.8rem] opacity-40 grayscale"
                       />
                       <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent"></div>
                    </div>
                 </div>
              </div>
            </div>
          </div>
        </section>

        {/* CONSULTORIA */}
        <section id="diagnostico" className="py-20 md:py-40 relative scroll-mt-20">
          <div className="max-w-5xl mx-auto px-4 md:px-6">
            <div className="glass p-8 md:p-24 rounded-[2rem] md:rounded-[4rem] border border-white/10 text-center relative overflow-hidden">
               <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
               
               <span className="text-blue-500 font-black uppercase tracking-[0.2em] md:tracking-[0.4em] text-[8px] md:text-[10px] block mb-6 md:mb-10">Diagnóstico de Engenharia</span>
               <h2 className="text-3xl sm:text-5xl md:text-8xl font-black mb-8 md:mb-12 italic leading-[1.1] md:leading-[0.9] tracking-tighter uppercase px-2 text-white">
                 Profissionalize <br className="md:hidden"/> sua <span className="gradient-text inline-block">Operação</span>
               </h2>
               <p className="text-gray-400 text-base md:text-2xl mb-10 md:mb-16 font-light max-w-3xl mx-auto leading-relaxed px-2">
                 O amadorismo técnico custa caro. Use o <strong>CRM LCAI</strong> para blindar seu lucro e qualificar seus leads antes do aumento de 12% nos custos.
               </p>
               
               <div className="flex flex-col items-center gap-8 md:gap-10">
                  <a 
                   href={WHATSAPP_LINK} 
                   target="_blank"
                   className="w-full sm:w-auto group bg-white text-black px-8 md:px-16 py-5 md:py-8 rounded-full font-black text-xl md:text-2xl flex items-center justify-center gap-4 hover:bg-blue-600 hover:text-white transition-all shadow-2xl"
                 >
                   FALAR COM ESPECIALISTA LCAI
                   <ArrowRight size={28} className="group-hover:translate-x-2 transition-transform hidden sm:block" />
                 </a>
                 <div className="flex flex-wrap justify-center gap-4 md:gap-8 text-gray-500 text-[8px] md:text-[10px] font-black uppercase tracking-widest">
                   <div className="flex items-center gap-2"><Lock size={12} className="text-blue-500" /> Ativos Próprios</div>
                   <div className="flex items-center gap-2"><Globe size={12} className="text-blue-500" /> Escala Global</div>
                   <div className="flex items-center gap-2"><MousePointer2 size={12} className="text-blue-500" /> Conversão Elevada</div>
                 </div>
               </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 md:py-32 bg-black/20">
          <div className="max-w-3xl mx-auto px-4 md:px-6">
             <div className="text-center mb-10 md:mb-16">
               <h2 className="text-3xl md:text-4xl font-black italic mb-3 md:mb-4">Dúvidas Frequentes</h2>
               <p className="text-gray-500 text-sm md:text-base font-light italic">Clareza total sobre nossa tecnologia proprietária.</p>
             </div>
             <div className="glass p-6 md:p-8 rounded-[1.5rem] md:rounded-[3rem] border border-white/5">
                {[
                  { q: "O que é o CRM LCAI?", a: "É nossa tecnologia proprietária desenvolvida para controle total de leads. Ele utiliza IA avançada para identificar quem tem real intenção de compra, automatizando a qualificação e aproximando a comunicação." },
                  { q: "Como a IA do CRM aumenta a conversão?", a: "A IA analisa o comportamento e as respostas dos leads em tempo real, priorizando os mais qualificados para sua equipe comercial ou disparando automações de fechamento personalizadas." },
                  { q: "A LCAI cuida do tráfego e do CRM?", a: "Sim. Criamos o ecossistema completo: desde a aquisição do lead via tráfego pago até a gestão e conversão final dentro da nossa tecnologia de CRM." }
                ].map((item, i) => (
                  <AccordionItem key={i} question={item.q} answer={item.a} />
                ))}
             </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="py-16 md:py-24 border-t border-white/5 bg-black">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-start gap-12 md:gap-16">
            <div className="max-w-md">
              <img src={LOGO_URL} alt="LCAI" className="h-10 md:h-14 w-auto mb-6 md:mb-8" />
              <p className="text-gray-500 text-xs md:text-sm leading-relaxed font-light mb-6 md:mb-8">
                LCAI - Automações Inteligentes. <br/>
                Proprietários do ecossistema de dados que gera escala real para empresas de alta performance.
              </p>
              <div className="flex gap-4">
                 <div className="w-10 h-10 rounded-full glass flex items-center justify-center text-blue-500 hover:text-white transition-colors cursor-pointer"><Globe size={18} /></div>
                 <div className="w-10 h-10 rounded-full glass flex items-center justify-center text-blue-500 hover:text-white transition-colors cursor-pointer"><Network size={18} /></div>
              </div>
            </div>
            <div className="flex flex-col items-start md:items-end md:text-right w-full">
              <p className="text-white font-black text-lg md:text-xl mb-6 italic uppercase tracking-tighter">Otimizando o Presente, <br className="hidden md:block"/> Automatizando o Futuro.</p>
              <nav className="flex flex-wrap gap-6 md:gap-8 mb-10 md:mb-12">
                 <a href="#inteligencia" className="text-[9px] md:text-[10px] font-black uppercase tracking-widest text-gray-500 hover:text-white transition-colors">Dados</a>
                 <a href="#servicos" className="text-[9px] md:text-[10px] font-black uppercase tracking-widest text-gray-500 hover:text-white transition-colors">Tecnologia</a>
                 <a href="#diagnostico" className="text-[9px] md:text-[10px] font-black uppercase tracking-widest text-gray-500 hover:text-white transition-colors">Contato</a>
              </nav>
              <p className="text-gray-700 text-[8px] md:text-[10px] uppercase tracking-[0.3em] font-bold">
                © 2024 LCAI - Automações Inteligentes <br className="md:hidden"/> 
                Proprietary Tech v12.0 | Stable Deploy
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
