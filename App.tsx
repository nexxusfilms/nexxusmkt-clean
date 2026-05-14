import React, { useState, useEffect } from 'react';
import { 
  Play,
  Star,
  Quote,
  ExternalLink,
  ShieldCheck,
  CheckCircle, 
  AlertTriangle, 
  BarChart, 
  Camera, 
  Instagram,
  Mail, 
  Phone,
  ChevronDown,
  Activity,
  Target,
  Users,
  TrendingUp,
  Maximize2,
  X,
  ArrowRight
} from 'lucide-react';
const Button = ({ children, ...props }: any) => (
  <button
    {...props}
    className="px-5 py-2 rounded bg-black text-white hover:opacity-80"
  >
    {children}
  </button>
);
import { motion, AnimatePresence } from 'motion/react';

// -- Helper Hook for Scroll Animations --
const useScrollReveal = () => {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll('.reveal');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
};

// -- Components --

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Início', href: '#home' },
    { name: 'Portfólio', href: '#portfolio' },
    { name: 'Edições', href: '#edits' },
    { name: 'Solução', href: '#solution' },
    { name: 'Planos', href: '#plans' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contato', href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    setIsMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-transparent backdrop-blur-[2px]"></div>
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between border-b border-white/5 relative z-10">
        <div className="flex flex-col items-end group cursor-pointer select-none" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <div className="flex items-center text-3xl font-black tracking-tighter leading-none">
            <span className="text-white">NE</span>
            <span className="text-cyan-400">XX</span>
            <span className="text-white">US</span>
          </div>
          <span className="text-white text-[10px] font-light tracking-[0.2em] -mt-1 mr-0.5 uppercase">Films</span>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollToSection(link.href)}
              className="text-[10px] font-mono text-neutral-400 hover:text-cyan-400 transition-colors uppercase tracking-widest"
            >
              {link.name}
            </button>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-6">
          <div className="hidden xl:flex items-center gap-3 text-[10px] font-mono text-cyan-400/80 border border-cyan-500/10 px-4 py-1.5 rounded-sm bg-cyan-950/5">
            <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse shadow-[0_0_8px_rgba(34,211,238,0.6)]"></span>
            OPERACIONAL: ONLINE
          </div>
          <Button 
            variant="neon"
            size="sm"
            onClick={() => scrollToSection('#lead-form')}
            className="text-[10px] px-6 py-2"
          >
            AGENDAR
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="lg:hidden text-white p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <div className="flex flex-col gap-1.5">
            <div className="w-6 h-0.5 bg-white"></div>
            <div className="w-6 h-0.5 bg-cyan-400"></div>
            <div className="w-4 h-0.5 bg-white self-end"></div>
          </div>}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-20 left-0 right-0 bg-black/95 backdrop-blur-xl border-b border-white/5 lg:hidden z-40"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className="text-left text-sm font-mono text-neutral-400 hover:text-cyan-400 transition-colors uppercase tracking-[0.2em] py-2 border-b border-white/5"
                >
                  {link.name}
                </button>
              ))}
              <Button 
                variant="neon"
                onClick={() => scrollToSection('#lead-form')}
                className="mt-4"
              >
                AGENDAR AGORA
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="home" className="hero--bg pt-28 pb-16 md:pb-20">
      <div className="hero__content max-w-5xl mx-auto px-4 sm:px-6 text-center flex flex-col items-center">
        <div className="reveal inline-flex items-center gap-2 border border-cyan-500/30 bg-cyan-900/20 px-4 py-1.5 rounded-sm mb-8">
          <Activity className="w-4 h-4 text-cyan-400" />
          <span className="font-mono text-xs text-cyan-400 tracking-widest uppercase">Performance Visual & Escala</span>
        </div>
        
        <h1 className="reveal delay-100 text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-black text-white leading-[1.1] tracking-tighter mb-8 uppercase">
          Marketing completo <br className="hidden md:block"/> 
          para negócios locais <br className="hidden md:block"/>
          <span className="text-cyan-400 glow-text underline decoration-cyan-400/30">crescerem de verdade</span>
        </h1>
        
        <p className="reveal delay-200 text-base md:text-xl text-neutral-300 max-w-4xl mx-auto mb-10 font-light leading-relaxed text-balance tracking-tight">
          A Nexxus centraliza o marketing do seu negócio com <span className="text-white font-medium">estratégia, conteúdo, design, tráfego pago e execução completa</span> em um só lugar. Tudo integrado, com mais clareza, velocidade e resultado.
        </p>
        
        <div className="reveal delay-300 flex flex-col items-center gap-6">
          <Button 
            variant="neon"
            onClick={() => document.getElementById('lead-form')?.scrollIntoView({ behavior: 'smooth' })}
          >
            QUERO ESCALAR MEU NEGÓCIO
          </Button>
          <div className="flex items-center gap-4 text-[10px] text-neutral-500 font-mono tracking-widest uppercase">
            <span>// ESTRATÉGIA</span>
            <span>// PRODUÇÃO</span>
            <span>// PERFORMANCE</span>
          </div>
        </div>
      </div>
    </section>
  );
};

const SocialProof = () => {
  const logos = [
    "https://pbs.twimg.com/media/HIPRR95WUAA9kg6?format=jpg&name=4096x4096",
    "https://pbs.twimg.com/media/HIPRR97XkAADJiT?format=jpg&name=4096x4096",
    "https://pbs.twimg.com/media/HIPRR95XEAAzY69?format=jpg&name=4096x4096",
    "https://pbs.twimg.com/media/HIPRR95WEAACMoR?format=jpg&name=4096x4096",
    "https://pbs.twimg.com/media/HEMpZ1_aQAAjcbo?format=jpg&name=4096x4096",
    "https://pbs.twimg.com/media/HEMpZ2BaIAcjhoX?format=jpg&name=4096x4096",
    "https://pbs.twimg.com/media/HEMpZ1eWYAA9jar?format=jpg&name=4096x4096",
    "https://pbs.twimg.com/media/HEMpZ1cXcAAB2DP?format=jpg&name=4096x4096",
    "https://pbs.twimg.com/media/HEMpcGCW0AAkECD?format=jpg&name=4096x4096",
    "https://pbs.twimg.com/media/HEMpcG2aIAQ0k-F?format=jpg&name=4096x4096",
    "https://pbs.twimg.com/media/HEMpcG2aIAIM5Nx?format=jpg&name=4096x4096",
    "https://pbs.twimg.com/media/HEMpcG7a0AAqCBr?format=jpg&name=4096x4096",
    "https://pbs.twimg.com/media/HEMpeDjWkAElEQu?format=jpg&name=4096x4096",
    "https://pbs.twimg.com/media/HEMpeIAaIAQwERC?format=jpg&name=4096x4096"
  ];

  return (
    <section id="brands" className="py-20 bg-black border-b border-white/5 overflow-hidden relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <p className="text-center text-xl md:text-2xl font-mono text-neutral-400 uppercase tracking-[0.2em] mb-16 reveal" 
           style={{ textShadow: '0 0 20px rgba(255,255,255,0.3), 0 0 40px rgba(255,255,255,0.1)' }}>
          Algumas marcas que confiaram em nossa estratégia
        </p>
      </div>
      
      <div className="relative flex overflow-hidden">
        {/* Gradientes de borda para suavizar a entrada/saída */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none"></div>
        
        <div className="flex animate-marquee whitespace-nowrap items-center will-change-transform">
          {[...logos, ...logos].map((logo, i) => (
            <div key={i} className="flex items-center justify-center px-14 md:px-24 shrink-0">
              <img 
                src={logo} 
                alt={`Parceiro ${i + 1}`} 
                className="w-24 h-24 md:w-44 md:h-44 object-contain opacity-90 brightness-110 hover:opacity-100 hover:scale-110 transition-all duration-300 cursor-pointer" 
                referrerPolicy="no-referrer"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const [selectedVideo, setSelectedVideo] = useState<{ url: string, isVertical?: boolean } | null>(null);

  const projects = [
    { 
      title: "Produção Nexxus", 
      category: "Cinematografia", 
      thumb: "https://pbs.twimg.com/media/HDPQjMVXYAArPIU?format=jpg&name=medium",
      videoUrl: "https://www.youtube.com/embed/nCGk-g7YG1I",
      isVertical: true
    },
    { 
      title: "Criação de Roteiro", 
      category: "Conteúdos para redes sociais", 
      thumb: "https://pbs.twimg.com/media/HDPZtYhWkAA2Gyg?format=jpg&name=medium",
      videoUrl: "https://www.youtube.com/embed/IKecAceqQ3k",
      isVertical: true
    },
    { 
      title: "Autoridade Digital", 
      category: "Tráfego Pago", 
      thumb: "https://pbs.twimg.com/media/HDPbVFbb0AAtpSS?format=jpg&name=medium",
      videoUrl: "https://www.youtube.com/embed/LGwNm8bzRwA",
      isVertical: true
    },
  ];

  return (
    <section id="portfolio" className="py-24 bg-black relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="mb-16 reveal">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4 uppercase">PORTFÓLIO <span className="text-cyan-400">ESTRATÉGICO</span></h2>
          <p className="text-neutral-400 font-light max-w-xl">Não é apenas estética. É engenharia visual focada em conversão e retenção.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <div 
              key={i} 
              onClick={() => setSelectedVideo({ url: project.videoUrl, isVertical: project.isVertical })}
              className="reveal group relative aspect-[9/16] overflow-hidden border border-white/10 bg-neutral-900 cursor-pointer"
            >
              <img 
                src={project.thumb} 
                alt={project.title} 
                className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" 
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="w-16 h-16 rounded-full bg-cyan-400 flex items-center justify-center shadow-[0_0_20px_rgba(34,211,238,0.6)]">
                  <Play className="w-6 h-6 text-black fill-current ml-1" />
                </div>
              </div>
              <div className="absolute bottom-6 left-6">
                <p className="text-[10px] font-mono text-cyan-400 uppercase tracking-widest mb-1">{project.category}</p>
                <h3 className="text-lg font-bold text-white uppercase">{project.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal de Vídeo */}
      <AnimatePresence>
        {selectedVideo && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 bg-black/90 backdrop-blur-sm"
            onClick={() => setSelectedVideo(null)}
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className={`relative w-full ${selectedVideo.isVertical ? 'max-w-md aspect-[9/16]' : 'max-w-5xl aspect-video'} bg-black shadow-2xl overflow-hidden rounded-lg`}
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => setSelectedVideo(null)}
                className="absolute top-4 right-4 z-10 p-2 bg-black/50 hover:bg-black/80 text-white rounded-full transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
              
              <iframe 
                src={selectedVideo.url}
                className="w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

const PhotoImprovement = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);
  const photos = [
    { title: "ACABAMENTO PROFISSIONAL", category: "REFINO DE DETALHES", thumb: "https://pbs.twimg.com/media/HDPTbaAWQAATwPV?format=jpg&name=medium" },
    { title: "COR E CONTRASTE AJUSTADOS", category: "COLOR GRADING", thumb: "https://pbs.twimg.com/media/HE2AoZGXQAAcbAn?format=jpg&name=large" },
    { title: "REALCE DE LUZ E TEXTURA", category: "ILUMINAÇÃO CINEMÁTICA", thumb: "https://pbs.twimg.com/media/HE2AoZ1a8AAiypf?format=jpg&name=large", fit: "contain" },
  ];

  return (
    <section id="edits" className="py-24 bg-neutral-950 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="mb-16 reveal text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4 uppercase">MELHORIA DE <span className="text-cyan-400">FOTOS</span></h2>
          <p className="text-neutral-400 font-light max-w-xl">Transformamos registros comuns em imagens de alto impacto visual e profissionalismo.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {photos.map((photo, i) => (
            <div 
              key={i} 
              onClick={() => setSelectedPhoto(photo.thumb)}
              className={`reveal group relative aspect-[4/3] overflow-hidden border border-white/10 ${photo.fit === 'contain' ? 'bg-neutral-950' : 'bg-neutral-900'} cursor-pointer`}
            >
              <img 
                src={photo.thumb} 
                alt={photo.title} 
                className={`w-full h-full ${photo.fit === 'contain' ? 'object-contain' : 'object-cover'} opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700`} 
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60"></div>
              <div className="absolute bottom-4 left-4">
                <p className="text-[8px] font-mono text-cyan-400 uppercase tracking-widest mb-1">{photo.category}</p>
                <h3 className="text-xs font-bold text-white uppercase">{photo.title}</h3>
              </div>
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="w-10 h-10 bg-cyan-400 text-black flex items-center justify-center rounded-full scale-75 group-hover:scale-100 transition-transform duration-500">
                  <Maximize2 className="w-5 h-5" />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col items-center reveal">
          <p className="text-neutral-500 text-xs font-mono uppercase tracking-[0.3em] mb-6">Acompanhe nosso processo criativo</p>
          <button 
            onClick={() => window.open('https://instagram.com/nexxusfilms', '_blank')}
            className="group relative flex items-center gap-4 px-10 py-5 bg-black border border-white/10 rounded-full overflow-hidden transition-all hover:border-pink-500/50 shadow-xl"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 via-pink-600/10 to-orange-500/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="w-10 h-10 flex items-center justify-center bg-gradient-to-tr from-purple-600 via-pink-600 to-orange-500 rounded-xl text-white shadow-lg group-hover:rotate-6 transition-transform">
              <Instagram className="w-6 h-6" />
            </div>
            <div className="text-left">
              <p className="text-[10px] text-neutral-500 font-mono uppercase leading-none mb-1">Instagram Oficial</p>
              <p className="text-white font-black uppercase tracking-wider">Ver mais edições</p>
            </div>
            <ArrowRight className="w-5 h-5 text-neutral-600 group-hover:text-pink-500 group-hover:translate-x-1 transition-all" />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {selectedPhoto && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedPhoto(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-12 bg-black/95 backdrop-blur-sm cursor-zoom-out"
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative max-w-7xl max-h-full flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => setSelectedPhoto(null)}
                className="absolute -top-12 right-0 md:-right-12 text-white/50 hover:text-white transition-colors p-2"
              >
                <X className="w-8 h-8" />
              </button>
              <img 
                src={selectedPhoto} 
                alt="Visualização ampliada" 
                className="max-w-full max-h-[85vh] object-contain shadow-2xl border border-white/10"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

const LeadFormSection = ({ initialPlan, onPlanChange }: { initialPlan: string | null; onPlanChange: (plan: string) => void }) => {
  const [formData, setFormData] = useState({ name: '', phone: '', niche: '' });
  const [errors, setErrors] = useState({ name: '', phone: '', niche: '' });

  const plans = [
    "START",
    "CONECTA",
    "PROFISSIONAL",
    "PROJETO PERSONALIZADO"
  ];

  const formatPhone = (value: string) => {
    const digits = value.replace(/\D/g, '');
    if (digits.length === 0) return '';
    if (digits.length <= 2) return `(${digits}`;
    if (digits.length <= 7) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
    return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7, 11)}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = { name: '', phone: '', niche: '' };
    let hasError = false;

    if (!formData.name.trim()) {
      newErrors.name = 'Nome obrigatório';
      hasError = true;
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'Telefone obrigatório';
      hasError = true;
    } else if (formData.phone.length !== 11) {
      newErrors.phone = 'Deve conter 11 dígitos';
      hasError = true;
    } else if (/^(\d)\1+$/.test(formData.phone)) {
      newErrors.phone = 'Número inválido';
      hasError = true;
    }
    
    if (!formData.niche.trim()) {
      newErrors.niche = 'Nicho obrigatório';
      hasError = true;
    }

    setErrors(newErrors);

    if (!hasError) {
      const planInfo = initialPlan ? `\nPlano de Interesse: ${initialPlan}` : '\nPlano de Interesse: Não especificado';
      const message = `Olá! Quero receber o diagnóstico estratégico.${planInfo}
Nome: ${formData.name}
Telefone: ${formatPhone(formData.phone)}
Nicho/Setor: ${formData.niche}
Vim pelo site.`;
      
      const whatsappUrl = `https://wa.me/5511995945323?text=${encodeURIComponent(message)}`;
      window.open(whatsappUrl, '_blank');
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const finalValue = name === 'phone' ? value.replace(/\D/g, '').slice(0, 11) : value;
    setFormData(prev => ({ ...prev, [name]: finalValue }));
    if (errors[name as keyof typeof errors]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  return (
    <section id="lead-form" className="py-24 bg-[#0a0a0a] relative overflow-hidden border-t border-b border-cyan-400/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="reveal">
            <h2 className="text-4xl md:text-5xl font-black text-white leading-tight mb-8 uppercase">
              RESERVE SEU <br />
              <span className="text-cyan-400">DIAGNÓSTICO</span>
            </h2>
            <p className="text-xl text-neutral-400 font-light mb-8 max-w-lg">
              Analisamos seu posicionamento atual e traçamos o plano de vídeos e anúncios necessário para sua escala.
            </p>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3 text-neutral-300">
                <CheckCircle className="w-5 h-5 text-cyan-400" />
                <span>Análise de perfil e audiência</span>
              </div>
              <div className="flex items-center gap-3 text-neutral-300">
                <CheckCircle className="w-5 h-5 text-cyan-400" />
                <span>Viabilidade de tráfego pago</span>
              </div>
              <div className="flex items-center gap-3 text-neutral-300">
                <CheckCircle className="w-5 h-5 text-cyan-400" />
                <span>Sugestão de linha editorial</span>
              </div>
            </div>
          </div>

          <div className="reveal bg-[#111] p-8 md:p-12 border border-white/5 relative">
            <div className="mb-8 text-center">
              <h3 className="text-xl font-bold text-white mb-2 uppercase">Identificação de Negócio</h3>
              <p className="text-neutral-500 text-[10px] font-mono uppercase tracking-widest">Protocolo de Captação Seguro</p>
            </div>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="space-y-1">
                <label className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest">Plano de Interesse</label>
                <div className="relative">
                  <select 
                    className="w-full bg-black border border-white/10 px-4 py-3 text-white focus:border-cyan-400 outline-none appearance-none cursor-pointer font-mono uppercase text-xs tracking-wider"
                    value={initialPlan || ""}
                    onChange={(e) => onPlanChange(e.target.value)}
                  >
                    <option value="" disabled className="bg-neutral-900">Selecione um plano</option>
                    {plans.map(plan => (
                      <option key={plan} value={plan} className="bg-neutral-900">{plan}</option>
                    ))}
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-neutral-500">
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </div>
                <button 
                  type="button"
                  onClick={() => document.getElementById('plans')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-[9px] font-mono text-cyan-400/60 hover:text-cyan-400 uppercase tracking-widest mt-2 underline underline-offset-4"
                >
                  // clique para ver detalhes de cada plano no catálogo
                </button>
              </div>

              <div className="space-y-1">
                <label htmlFor="form-name" className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest cursor-pointer">Seu Nome</label>
                <input 
                  id="form-name"
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Ex: João Silva" 
                  className={`w-full bg-black border ${errors.name ? 'border-red-500' : 'border-white/10'} px-4 py-3 text-white focus:border-cyan-400 outline-none transition-colors`} 
                />
                {errors.name && <p className="text-[10px] text-red-500 font-mono mt-1 uppercase tracking-tighter">{errors.name}</p>}
              </div>
              <div className="space-y-1">
                <label htmlFor="form-phone" className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest cursor-pointer">Telefone Comercial</label>
                <input 
                  id="form-phone"
                  type="tel" 
                  name="phone"
                  value={formatPhone(formData.phone)}
                  onChange={handleInputChange}
                  placeholder="(00) 00000-0000" 
                  className={`w-full bg-black border ${errors.phone ? 'border-red-500' : 'border-white/10'} px-4 py-3 text-white focus:border-cyan-400 outline-none transition-colors`} 
                />
                {errors.phone && <p className="text-[10px] text-red-500 font-mono mt-1 uppercase tracking-tighter">{errors.phone}</p>}
              </div>
              <div className="space-y-1">
                <label htmlFor="form-niche" className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest cursor-pointer">Nicho / Setor</label>
                <input 
                  id="form-niche"
                  type="text" 
                  name="niche"
                  value={formData.niche}
                  onChange={handleInputChange}
                  placeholder="Ex: Imobiliário, Estética..." 
                  className={`w-full bg-black border ${errors.niche ? 'border-red-500' : 'border-white/10'} px-4 py-3 text-white focus:border-cyan-400 outline-none transition-colors`} 
                />
                {errors.niche && <p className="text-[10px] text-red-500 font-mono mt-1 uppercase tracking-tighter">{errors.niche}</p>}
              </div>
              <div className="pt-4">
                <Button type="submit" variant="neon" fullWidth>SOLICITAR MEU DIAGNÓSTICO AGORA</Button>
                <p className="mt-4 text-[10px] text-center text-neutral-600 font-mono uppercase">
                  Análise 100% gratuita por tempo limitado
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const Problem = () => {
  const [showAll, setShowAll] = useState(false);
  const symptoms = [
    { title: "Audiência Desqualificada", desc: "Atraindo curiosos em vez de compradores reais." },
    { title: "Baixa Percepção de Valor", desc: "O mercado não vê autoridade na sua imagem atual." },
    { title: "Escala Travada", desc: "Anúncios rodando sem um funil de vídeos eficiente." },
    { title: "Invisibilidade Algorítmica", desc: "Conteúdo sem retenção ignorado pelas plataformas." }
  ];

  return (
    <section className="py-12 md:py-16 bg-black relative border-t border-b border-white/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-[1.2fr_0.8fr] gap-8 md:gap-12 items-center">
          <div className="reveal">
            <div className="flex items-center gap-2 mb-4">
              <AlertTriangle className="text-cyan-400 w-4 h-4" />
              <h3 className="font-mono text-neutral-500 uppercase tracking-widest text-[9px] font-bold">Protocolo de Diagnóstico</h3>
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-white mb-2 uppercase tracking-tighter">
              ONDE SUA EMPRESA ESTÁ PERDENDO <span className="text-cyan-400">LUCRO</span>
            </h2>
            <p className="text-neutral-400 font-light text-sm md:text-base mb-8 max-w-xl">
              Identificamos os gargalos técnicos que impedem sua escala e autoridade digital.
            </p>
            
            <div className="space-y-3 mb-8">
              {(showAll ? symptoms : symptoms.slice(0, 3)).map((item, i) => (
                <div key={i} className="flex gap-3 p-3 border border-white/5 bg-neutral-900/10 hover:border-cyan-500/20 transition-all group">
                  <div className="w-0.5 h-full bg-cyan-400 shrink-0 opacity-50"></div>
                  <div>
                    <h4 className="text-white font-bold text-xs uppercase group-hover:text-cyan-400 transition-colors">{item.title}</h4>
                    <p className="text-neutral-500 text-[11px] leading-tight">{item.desc}</p>
                  </div>
                </div>
              ))}
              <button 
                onClick={() => setShowAll(!showAll)}
                className="text-[10px] font-mono text-cyan-400/60 hover:text-cyan-400 uppercase tracking-widest flex items-center gap-1 pl-4"
              >
                {showAll ? "// ocultar sintomas" : "// ver todos os sintomas"}
                <ChevronDown className={`w-3 h-3 transition-transform ${showAll ? 'rotate-180' : ''}`} />
              </button>
            </div>

            <div className="flex flex-col gap-2">
              <Button variant="neon" onClick={() => document.getElementById('lead-form')?.scrollIntoView({ behavior: 'smooth' })}>
                QUERO IDENTIFICAR MEUS GARGALOS
              </Button>
              <p className="text-[9px] text-neutral-600 font-mono uppercase tracking-widest pl-1">
                Análise personalizada em até 24h.
              </p>
            </div>
          </div>

          <div className="relative reveal hidden md:block">
            <div className="aspect-[4/3] flex items-center justify-center p-8">
              <div className="w-full max-w-[280px] aspect-square relative opacity-100">
                <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-[0_0_8px_rgba(34,211,238,0.4)]">
                  <circle cx="50" cy="50" r="48" stroke="#22d3ee" strokeWidth="0.4" fill="none" opacity="0.6" />
                  <circle cx="50" cy="50" r="32" stroke="#22d3ee" strokeWidth="0.3" fill="none" opacity="0.4" />
                  <circle cx="50" cy="50" r="16" stroke="#22d3ee" strokeWidth="0.3" fill="none" opacity="0.3" />
                  <line x1="50" y1="2" x2="50" y2="98" stroke="#22d3ee" strokeWidth="0.2" opacity="0.3" />
                  <line x1="2" y1="50" x2="98" y2="50" stroke="#22d3ee" strokeWidth="0.2" opacity="0.3" />
                  <g className="origin-center animate-spin" style={{ animationDuration: '4s' }}>
                    <line x1="50" y1="50" x2="50" y2="2" stroke="#22d3ee" strokeWidth="1.2" strokeLinecap="round" opacity="0.9" />
                    <path d="M50 50 L50 2 A48 48 0 0 1 85 18 Z" fill="url(#radarGrad)" opacity="0.6" />
                  </g>
                  <defs>
                    <linearGradient id="radarGrad" x1="50" y1="50" x2="80" y2="20" gradientUnits="userSpaceOnUse">
                      <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.8" />
                      <stop offset="100%" stopColor="#22d3ee" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <circle cx="75" cy="35" r="1.5" fill="#22d3ee" className="animate-pulse" opacity="1" />
                  <circle cx="30" cy="65" r="1.2" fill="#22d3ee" opacity="0.7" />
                </svg>
              </div>
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2">
                <span className="text-cyan-400 font-mono text-[8px] tracking-[0.3em] uppercase animate-pulse">Status: Scanning...</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Solution = () => (
  <section id="solution" className="py-24 bg-black relative overflow-hidden">
    {/* Background Image with Blur */}
    <div className="absolute inset-0 z-0 pointer-events-none">
      <img 
        src="https://pbs.twimg.com/media/HDTI6IIaIAATXMr?format=jpg&name=4096x4096" 
        alt="Background" 
        className="w-full h-full object-cover opacity-30 blur-sm"
        referrerPolicy="no-referrer"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/40 to-black"></div>
    </div>

    <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
      <div className="text-center max-w-3xl mx-auto mb-20 reveal">
        <h2 className="text-4xl md:text-5xl font-black text-white mb-6 uppercase">
          A SOLUÇÃO <span className="text-cyan-400">NEXXUS FILMS</span>
        </h2>
        <p className="text-xl text-neutral-400 font-light">Implementamos o tripé necessário para converter audiência em receita previsível.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-20">
        <div className="reveal group border border-white/10 bg-neutral-900/20 p-8 hover:border-cyan-500/50 transition-all">
          <Camera className="w-12 h-12 text-cyan-400 mb-6" />
          <h3 className="text-2xl font-bold text-white mb-4 uppercase">Conteúdo Estratégico</h3>
          <p className="text-neutral-400 mb-6 leading-relaxed">Vídeos roteirizados para gerar desejo imediato. Foco em Reels, Shorts e TikTok para retenção de atenção.</p>
          <ul className="space-y-2 text-sm text-neutral-500 font-mono">
            <li>// ROTEIRIZAÇÃO PROFISSIONAL</li>
            <li>// DIREÇÃO DE CENA</li>
            <li>// EDIÇÃO CINEMATOGRÁFICA</li>
          </ul>
        </div>
        <div className="reveal group border border-white/10 bg-neutral-900/20 p-8 hover:border-cyan-500/50 transition-all">
          <TrendingUp className="w-12 h-12 text-cyan-400 mb-6" />
          <h3 className="text-2xl font-bold text-white mb-4 uppercase">Distribuição e Performance</h3>
          <p className="text-neutral-400 mb-6 leading-relaxed">Não dependa apenas do orgânico. Usamos tráfego pago para colocar seus melhores vídeos na frente de quem realmente compra.</p>
          <ul className="space-y-2 text-sm text-neutral-500 font-mono">
            <li>// GESTÃO DE TRÁFEGO PAGO</li>
            <li>// OTIMIZAÇÃO DE CONVERSÃO (CRO)</li>
            <li>// RELATÓRIOS DE PERFORMANCE</li>
          </ul>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {[
          { icon: Target, title: "Autoridade", desc: "Seja visto como a maior referência do seu nicho." },
          { icon: Users, title: "Escala", desc: "Alcance milhares de novos leads todos os meses." },
          { icon: BarChart, title: "Previsibilidade", desc: "Gere demanda com constância e previsibilidade." }
        ].map((item, i) => (
          <div key={i} className="reveal text-center">
            <item.icon className="w-10 h-10 text-cyan-400 mx-auto mb-4" />
            <h4 className="text-white font-bold mb-2 uppercase">{item.title}</h4>
            <p className="text-neutral-400 text-sm">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Plans = ({ onSelectPlan }: { onSelectPlan: (planTitle: string) => void }) => {
  const [activePlanIndex, setActivePlanIndex] = useState<number | null>(1);

  const plans = [
    { id: 'start', title: "START", desc: "Ideal para marcas que precisam de presença e consistência mínima estratégica.", items: ["Roteirização Técnica", "Cadência semanal de vídeos", "Edição Profissional", "Suporte VIP WhatsApp"], price: "Essencial", cta: "RECEBER PROPOSTA START" },
    { id: 'conecta', title: "CONECTA", desc: "Foco total em autoridade e engajamento para marcas em expansão rápida.", items: ["TUDO DO PLANO START", "Estratégia Multicanal", "Cadência acelerada de vídeos", "Calendário de Postagens", "Consultoria de Linha Editorial"], price: "Crescimento", cta: "RECEBER PROPOSTA CONECTA" },
    { id: 'profissional', title: "PROFISSIONAL", desc: "Ecossistema completo: produção + distribuição estratégica de autoridade.", items: ["TUDO DO PLANO CONECTA", "Gestão de Tráfego Pago Inclusa", "Criação de Criativos de Conversão", "Sessões de Fotos Inclusas", "Dashboard de Métricas Mensal", "Análise de Funil de Vendas"], price: "Mais Vendido", cta: "FALAR COM UM ESPECIALISTA", featured: true, badge: "MAIS ESCOLHIDO", disclaimer: "*Verba de investimento para tráfego pago definida pelo cliente." },
    { id: 'personalizado', title: "PROJETO PERSONALIZADO", desc: "Para quem busca negociar algo fora dos padrões. Escopos exclusivos sob demanda total com negociação direta.", items: ["Escopo Sob Medida", "Negociação Direta", "Equipe Dedicada", "Flexibilidade Total", "Consultoria de Escala"], price: "Sob Consulta", cta: "CRIAR MEU PROJETO" }
  ];

  return (
    <section id="plans" className="py-24 bg-neutral-950 border-t border-b border-white/5 relative overflow-hidden">
      {/* Background Image with Blur */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img 
          src="https://pbs.twimg.com/media/HDTQO-ZaAAAXIMv?format=jpg&name=4096x4096" 
          alt="Background" 
          className="w-full h-full object-cover opacity-20 blur-sm"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-950 via-neutral-950/40 to-neutral-950"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start mb-16 gap-10">
          <div className="reveal">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4 uppercase leading-tight tracking-tighter">SISTEMAS DE TRABALHO</h2>
            <div className="flex flex-col items-start select-none border-l border-cyan-400 pl-4 py-1">
              <div className="flex items-center text-3xl font-black tracking-tighter leading-none">
                <span className="text-white">NE</span>
                <span className="text-cyan-400">XX</span>
                <span className="text-white">US</span>
              </div>
              <span className="text-white text-[10px] font-light tracking-[0.2em] -mt-1 mr-0.5 uppercase">Films</span>
            </div>
          </div>
          <div className="reveal flex items-center gap-2 text-cyan-400 font-mono text-xs border border-cyan-900 px-4 py-2 mt-4 md:mt-0">
            <span className="animate-pulse">●</span> Condição especial vigente
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {plans.map((plan, i) => {
            const isActive = activePlanIndex === i;
            const isOthersSelected = activePlanIndex !== null && !isActive;
            
            return (
              <div key={plan.id} className="reveal flex flex-col h-full w-full">
                <div 
                  onClick={() => setActivePlanIndex(i)}
                  className={`p-8 border cursor-pointer relative flex flex-col h-full transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)]
                    ${isActive 
                      ? 'border-cyan-400 bg-cyan-950/20 z-10 shadow-[0_0_30px_rgba(34,211,238,0.25)]' 
                      : 'border-white/10 bg-black opacity-100'
                    }
                    ${isOthersSelected ? 'grayscale-[0.5] opacity-70' : 'grayscale-0 opacity-100'}
                  `}
                >
                  {plan.badge && (
                    <div className={`absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 font-bold text-[10px] px-4 py-1.5 uppercase tracking-widest whitespace-nowrap z-20 transition-all duration-500
                      ${isActive ? 'bg-cyan-400 text-black shadow-[0_0_15px_rgba(34,211,238,0.4)] opacity-100' : 'bg-neutral-800 text-neutral-400 opacity-0'}
                    `}>
                      {plan.badge}
                    </div>
                  )}
                  
                  <div className="relative z-20 mb-6 flex-shrink-0">
                    <h3 className={`text-2xl font-black mb-1 uppercase transition-colors duration-500 ${isActive ? 'text-cyan-400' : 'text-white'}`}>
                      {plan.title}
                    </h3>
                    <p className={`text-neutral-500 text-[10px] font-mono uppercase tracking-widest transition-opacity duration-500 ${isOthersSelected ? 'opacity-60' : 'opacity-100'}`}>
                      {plan.price}
                    </p>
                  </div>

                  <div className={`flex flex-col flex-grow transition-all duration-700 ${isOthersSelected ? 'opacity-60 grayscale-[0.3]' : 'opacity-100'}`}>
                    <p className="text-neutral-400 text-sm mb-6 leading-relaxed flex-shrink-0 min-h-[5.5rem]">{plan.desc}</p>
                    <div className={`h-[1px] w-12 mb-8 transition-colors duration-500 flex-shrink-0 ${isActive ? 'bg-cyan-400' : 'bg-white/20'}`}></div>
                    <ul className="space-y-4 mb-10 flex-grow min-h-[18rem]">
                      {plan.items.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-xs text-neutral-300">
                          <CheckCircle className={`w-4 h-4 shrink-0 mt-0.5 transition-colors duration-500 ${isActive ? 'text-cyan-400' : 'text-neutral-500'}`} />
                          {item}
                        </li>
                      ))}
                    </ul>
                    
                    <div className="space-y-4 pt-6 mt-auto border-t border-white/5">
                      <Button 
                        variant={isActive ? 'neon' : 'outline'} 
                        fullWidth 
                        size="sm"
                        onClick={(e) => { 
                          e.stopPropagation(); 
                          onSelectPlan(plan.title);
                          document.getElementById('lead-form')?.scrollIntoView({ behavior: 'smooth' });
                        }}
                      >
                        {plan.cta}
                      </Button>
                      {plan.disclaimer && <p className="text-[9px] text-neutral-600 uppercase font-mono leading-tight">{plan.disclaimer}</p>}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const faqs = [
    { q: "O investimento em anúncios está incluso no plano?", a: "No plano PROFISSIONAL, a GESTÃO e ESTRATÉGIA dos anúncios está inclusa. A verba de mídia paga (o dinheiro que vai para o Meta/Google) é definida por você e paga diretamente às plataformas." },
    { q: "Preciso aparecer nos vídeos?", a: "Não necessariamente. Criamos estratégias de conteúdo 'faceless' ou institucionais. No entanto, vídeos com o rosto do especialista tendem a gerar 3x mais conexão e autoridade." },
    { q: "Em quanto tempo recebo os primeiros vídeos?", a: "Após a assinatura do contrato e briefing, nosso protocolo de planejamento estratégico leva 10 dias úteis. A primeira entrega final costuma ocorrer em até 15 dias após a captação." },
    { q: "Tem contrato mínimo?", a: "Trabalhamos com ciclos semestrais para garantir que o algoritmo e o tráfego pago tenham tempo de maturação e tragam o ROI esperado." },
    { q: "Vocês fazem a roteirização?", a: "Sim. Todo o nosso sistema baseia-se em roteiros técnicos focados em conversão, para que você ou sua equipe apenas executem com perfeição sob nossa direção." }
  ];

  return (
    <section id="faq" className="py-24 bg-neutral-950 relative overflow-hidden">
      {/* Decorative Atmospheric Images */}
      <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] opacity-40 pointer-events-none mix-blend-screen" style={{ maskImage: 'radial-gradient(circle, black 0%, transparent 70%)', WebkitMaskImage: 'radial-gradient(circle, black 0%, transparent 70%)' }}>
        <img src="https://pbs.twimg.com/media/HDUHHbeaMAEIKld?format=jpg&name=4096x4096" alt="" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
      </div>
      <div className="absolute -bottom-32 -right-32 w-[500px] h-[500px] opacity-30 pointer-events-none mix-blend-screen" style={{ maskImage: 'radial-gradient(circle, black 0%, transparent 70%)', WebkitMaskImage: 'radial-gradient(circle, black 0%, transparent 70%)' }}>
        <img src="https://pbs.twimg.com/media/HDUG0mCW4AEMUek?format=jpg&name=4096x4096" alt="" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
      </div>
      <div className="absolute -bottom-40 left-1/2 -translate-x-1/2 w-[600px] h-[600px] opacity-25 pointer-events-none mix-blend-screen" style={{ maskImage: 'radial-gradient(circle, black 0%, transparent 70%)', WebkitMaskImage: 'radial-gradient(circle, black 0%, transparent 70%)' }}>
        <img src="https://pbs.twimg.com/media/HDUFl2bWwAAZJ_q?format=jpg&name=4096x4096" alt="" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 relative z-10">
        <h2 className="text-4xl md:text-5xl font-black text-white mb-12 text-center uppercase tracking-tighter drop-shadow-[0_0_15px_rgba(34,211,238,0.4)]">
          Dúvidas <span className="text-cyan-400">Técnicas</span>
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="border border-white/10 bg-black">
              <button className="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors" onClick={() => setOpenIndex(openIndex === i ? null : i)}>
                <span className="font-bold text-neutral-200 uppercase text-sm tracking-tight">{faq.q}</span>
                <ChevronDown className={`w-5 h-5 text-cyan-400 transition-transform ${openIndex === i ? 'rotate-180' : ''}`} />
              </button>
              {openIndex === i && <div className="px-6 pb-6 text-neutral-400 text-sm leading-relaxed border-t border-white/5 pt-4">{faq.a}</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer id="contact" className="bg-black pt-24 pb-12 border-t border-cyan-900/30">
    <div className="max-w-6xl mx-auto px-4 sm:px-6">
      <div className="grid md:grid-cols-2 gap-16 mb-20 items-center">
        <div className="reveal">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-8 uppercase leading-tight">DOMINE o SEU <br /><span className="text-cyan-400 underline">MERCADO AGORA.</span></h2>
          <div className="space-y-6">
            <button 
              onClick={() => document.getElementById('lead-form')?.scrollIntoView({ behavior: 'smooth' })}
              className="flex items-center gap-4 text-white hover:text-cyan-400 transition-colors group text-left"
            >
              <div className="w-12 h-12 border border-white/10 flex items-center justify-center group-hover:border-cyan-400"><Phone className="w-5 h-5" /></div>
              <div><p className="text-[10px] text-neutral-500 uppercase font-mono">WhatsApp Comercial</p><span className="text-lg font-mono">(11) 99594‑5323</span></div>
            </button>
            <a href="https://instagram.com/nexxusfilms" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-white hover:text-cyan-400 transition-colors group">
              <div className="w-12 h-12 border border-white/10 flex items-center justify-center group-hover:border-cyan-400"><Instagram className="w-5 h-5" /></div>
              <div><p className="text-[10px] text-neutral-500 uppercase font-mono">Instagram Oficial</p><span className="text-lg font-mono">@nexxusfilms</span></div>
            </a>
            <a href="mailto:nexxusfilms@gmail.com" className="flex items-center gap-4 text-white hover:text-cyan-400 transition-colors group">
              <div className="w-12 h-12 border border-white/10 flex items-center justify-center group-hover:border-cyan-400"><Mail className="w-5 h-5" /></div>
              <div><p className="text-[10px] text-neutral-500 uppercase font-mono">E-mail de Negócios</p><span className="text-lg font-mono">nexxusfilms@gmail.com</span></div>
            </a>
          </div>
        </div>
        <div className="reveal bg-neutral-900/30 p-10 border border-white/10 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-24 h-24 bg-cyan-400/5 blur-3xl"></div>
          <h3 className="text-2xl font-black text-white mb-6 uppercase">Pronto para escalar o seu negócio?</h3>
          <Button onClick={() => document.getElementById('lead-form')?.scrollIntoView({ behavior: 'smooth' })} fullWidth variant="neon">RECEBER DIAGNÓSTICO ESTRATÉGICO</Button>
          <div className="mt-6 text-[9px] md:text-[10px] font-mono uppercase tracking-widest leading-relaxed">
            <span className="text-cyan-400/60 font-bold">// ATENDIMENTO REMOTO: TODO O BRASIL</span><br /><span className="text-neutral-600">// ATENDIMENTO PRESENCIAL: SÃO PAULO - SP</span>
          </div>
        </div>
      </div>
      <div className="border-t border-white/5 pt-12 flex flex-col md:flex-row justify-between items-center text-[10px] text-neutral-700 font-mono uppercase tracking-widest">
        <p>© {new Date().getFullYear()} NEXXUS FILMS // PERFORMANCE VISUAL</p>
        <div className="flex gap-6 mt-4 md:mt-0">
          <a href="#terms" className="hover:text-white transition-colors">Termos de Uso</a>
          <a href="#privacy" className="hover:text-white transition-colors">Privacidade</a>
        </div>
      </div>
    </div>
  </footer>
);

const App = () => {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
  useScrollReveal();

  return (
    <div className="bg-black text-white min-h-screen selection:bg-cyan-500 selection:text-black font-sans">
      <Navbar />
      <main>
        <div id="home">
          <Hero />
        </div>
        <SocialProof />
        <LeadFormSection initialPlan={selectedPlan} onPlanChange={setSelectedPlan} />
        <Problem />
        <Portfolio />
        <PhotoImprovement />
        <Solution />
        <Plans onSelectPlan={setSelectedPlan} />
        <FAQ />
      </main>
      <Footer />
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-black/90 backdrop-blur-md border-t border-cyan-500/30 md:hidden z-50">
        <Button fullWidth variant="neon" onClick={() => document.getElementById('lead-form')?.scrollIntoView({ behavior: 'smooth' })}>Receber Diagnóstico Grátis</Button>
      </div>
      
      {/* Floating Button to Lead Form */}
      <button 
        onClick={() => document.getElementById('lead-form')?.scrollIntoView({ behavior: 'smooth' })}
        className="fixed bottom-24 right-6 md:bottom-8 md:right-8 z-50 bg-cyan-500 text-black p-4 rounded-full shadow-[0_0_20px_rgba(34,211,238,0.4)] hover:scale-110 transition-transform flex items-center justify-center group"
        aria-label="Solicitar Diagnóstico"
      >
        <Target className="w-6 h-6" />
        <span className="absolute right-full mr-4 bg-white text-black text-[10px] font-bold px-3 py-1.5 rounded-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none uppercase tracking-widest">
          Receber Diagnóstico
        </span>
      </button>
    </div>
  );
};

export default App;