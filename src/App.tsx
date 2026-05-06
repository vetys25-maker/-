/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { motion } from "motion/react";
import { 
  Play, 
  Mail, 
  Phone, 
  MapPin, 
  ArrowRight, 
  Monitor, 
  Cpu, 
  Layers,
  ChevronDown,
  Hexagon,
  Instagram,
  Youtube,
  Send
} from "lucide-react";

const NAV_ITEMS = [
  { name: "Showreel", href: "#showreel" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

const PROJECTS = [
  { id: 1, title: "AI 시네마틱 아트워크", category: "AI Generative", youtubeId: "94fcAvxrc-c", desc: "제너레이티브 AI와 3D 환경을 결합하여 창조한 초현실적 시각 시퀀스" },
  { id: 2, title: "하이엔드 제품 프로모션", category: "Product & Motion", youtubeId: "dQw4w9WgXcQ", desc: "정교한 3ds Max 모델링과 AI 텍스처 업스케일링이 적용된 프로모션 영상" },
  { id: 3, title: "AI 하이브리드 뮤직비디오", category: "Music Video", youtubeId: "dQw4w9WgXcQ", desc: "실사 촬영 기반에 AI 비주얼 이펙트를 덧입힌 감각적인 영상미" },
  { id: 4, title: "미래 지향적 건축 비주얼", category: "Architectural AI", youtubeId: "dQw4w9WgXcQ", desc: "AI 조명 시뮬레이션을 통해 극대화된 공간의 미학과 건축적 디테일" },
  { id: 5, title: "브랜드 아이덴티티 필름", category: "Brand Motion", youtubeId: "dQw4w9WgXcQ", desc: "브랜드 스토리텔링에 AI 비주얼 합성을 활용한 홍보 필름" },
  { id: 6, title: "AI 컨셉트 비주얼 매뉴얼", category: "Technical & AI", youtubeId: "dQw4w9WgXcQ", desc: "복잡한 기술 매뉴얼을 3D 그래픽과 AI 보이스로 직관화한 프로젝트" },
];

export default function App() {
  return (
    <div className="bg-black text-white min-h-screen font-sans overflow-x-hidden">
      {/* HEADER */}
      <header className="fixed top-0 left-0 w-full z-50 glass-surface border-b-0">
        <nav className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3"
          >
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />
              <div className="relative w-10 h-10 bg-black flex items-center justify-center rounded-lg border border-white/20">
                <Hexagon className="text-blue-400 group-hover:text-white transition-colors" size={24} strokeWidth={1} />
                <div className="absolute inset-0 flex items-center justify-center opacity-20">
                   <Hexagon size={12} strokeWidth={1} />
                </div>
              </div>
            </div>
            <span className="font-display font-bold text-2xl tracking-tighter uppercase gradiant-text bg-gradient-to-r from-blue-300 to-purple-400 bg-clip-text text-transparent">LOFT.STUDIO</span>
          </motion.div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_ITEMS.map((item, idx) => (
              <motion.a
                key={item.name}
                href={item.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * idx }}
                className="text-xs font-mono uppercase tracking-widest text-gray-400 hover:text-white transition-colors"
              >
                {item.name}
              </motion.a>
            ))}
            <motion.button 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="px-4 py-2 bg-white text-black text-xs font-bold uppercase rounded-full hover:bg-gray-200 transition-colors"
            >
              Inquiry
            </motion.button>
          </div>
        </nav>
      </header>

      {/* HERO SECTION */}
      <section className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 pt-20">
        {/* Background Accents */}
        <div className="absolute inset-0 overflow-hidden -z-10">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/5 blur-[120px] rounded-full" />
          <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-white/5 blur-[80px] rounded-full" />
        </div>

        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/20 bg-white/5 mb-8"
          >
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-gray-400">Current Tech: 3ds Max + Generative AI</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-6xl md:text-8xl font-display font-bold leading-[0.9] tracking-tighter mb-8"
          >
            3D · AI<br />
            영상 제작 스튜디오
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-12 font-light leading-relaxed"
          >
            20년 경력 3ds Max 기반<br />
            제품 · 애니메이션 · 광고 영상 제작
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button className="group relative px-8 py-4 bg-white text-black font-bold uppercase text-sm rounded-full overflow-hidden transition-all hover:pr-12">
              <span className="relative z-10 transition-all">Explore Portfolio</span>
              <ArrowRight className="absolute right-6 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all" size={18} />
            </button>
            <button className="px-8 py-4 border border-white/20 hover:border-white text-white font-bold uppercase text-sm rounded-full transition-all">
              Contact Studio
            </button>
          </motion.div>
        </div>

        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gray-500"
        >
          <ChevronDown size={24} />
        </motion.div>
      </section>

      {/* CORE CAPABILITIES */}
      <section className="max-w-7xl mx-auto px-6 py-32 border-t border-white/10">
        <div className="grid md:grid-cols-3 gap-12">
          <div className="space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center">
              <Play className="text-white" size={24} />
            </div>
            <h3 className="text-2xl font-display font-semibold">Motion Graphics</h3>
            <p className="text-gray-500 font-light">감각적인 리듬과 세련된 디자인으로 완성되는 고퀄리티 모션 그래픽 필름.</p>
          </div>
          <div className="space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center">
              <Cpu className="text-white" size={24} />
            </div>
            <h3 className="text-2xl font-display font-semibold">AI Hybrid Video</h3>
            <p className="text-gray-500 font-light">제너레이티브 AI를 활용한 독창적인 영상 소스 생성 및 실사 영상과의 정교한 합성.</p>
          </div>
          <div className="space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center">
              <Layers className="text-white" size={24} />
            </div>
            <h3 className="text-2xl font-display font-semibold">Product Film</h3>
            <p className="text-gray-500 font-light">제품의 디테일과 기능성을 돋보이게 하는 하이엔드 모션 그래픽 및 광고 영상.</p>
          </div>
        </div>
      </section>

      {/* SHOWREEL */}
      <section id="showreel" className="px-6 py-32 bg-zinc-950">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div className="max-w-xl">
              <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-white/50 mb-4 block">2024 SHOWREEL</span>
              <h2 className="text-4xl md:text-5xl font-display font-bold">THE MOMENT OF CREATION</h2>
            </div>
            <button className="flex items-center gap-2 group text-sm font-mono uppercase tracking-widest text-gray-400 hover:text-white transition-colors">
              <Play size={16} className="fill-current" /> Play Full Video
            </button>
          </div>
          
          <div className="aspect-video w-full rounded-3xl overflow-hidden glass-surface group relative cursor-pointer">
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors z-10 flex items-center justify-center">
              <div className="w-20 h-20 bg-white text-black rounded-full flex items-center justify-center scale-100 group-hover:scale-110 transition-transform shadow-2xl">
                <Play size={32} className="ml-1" />
              </div>
            </div>
            <iframe
              className="w-full h-full grayscale-[0.5] group-hover:grayscale-0 transition-all duration-700"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ" /* Placeholder */
              title="showreel"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      {/* PORTFOLIO GRID */}
      <section id="portfolio" className="px-6 py-32">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20 text-center">
            <h2 className="text-5xl md:text-7xl font-display font-bold mb-6 italic tracking-tighter">Selected Works</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">감각적인 3D 모션부터 최신 AI 아트까지, LOFT.STUDIO가 완성한 프리미엄 프로젝트를 소개합니다.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
            {PROJECTS.map((project) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: project.id * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="aspect-[4/3] rounded-2xl overflow-hidden mb-6 relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-10 p-6 flex flex-col justify-end">
                    <p className="text-xs font-mono uppercase tracking-widest text-white/70 mb-2">{project.category}</p>
                    <button className="text-sm font-bold flex items-center gap-2">View Case Study <ArrowRight size={14} /></button>
                  </div>
                  {/* Placeholder Frame */}
                  <div className="w-full h-full bg-zinc-900 border border-white/5 flex items-center justify-center overflow-hidden">
                     <iframe
                      className="w-full h-full opacity-60 group-hover:opacity-100 transition-all duration-700"
                      src={`https://www.youtube.com/embed/${project.youtubeId}`}
                      title={project.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                </div>
                <h3 className="text-xl font-display font-bold mb-2 group-hover:text-white transition-colors">{project.title}</h3>
                <p className="text-sm text-gray-500 font-light leading-relaxed">{project.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="px-6 py-32 bg-zinc-950 border-y border-white/10">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <div className="aspect-square rounded-3xl overflow-hidden bg-zinc-900 relative">
              {/* Abstract decorative element in center */}
              <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
                <motion.div 
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="w-64 h-64 border border-white/20 rounded-full flex items-center justify-center"
                >
                   <div className="w-48 h-48 border border-white/10 rounded-full flex items-center justify-center">
                      <div className="w-32 h-32 bg-white/5 blur-xl rounded-full" />
                   </div>
                </motion.div>
                <div className="absolute text-5xl font-display font-light opacity-20">20+ YRS</div>
              </div>
            </div>
            <div className="absolute -bottom-8 -right-8 glass-surface p-8 rounded-2xl hidden lg:block max-w-[240px]">
              <p className="text-2xl font-display font-bold mb-2 italic">Visionary</p>
              <p className="text-xs text-gray-400 leading-relaxed italic">"기술은 도구일 뿐, 감동을 주는 것은 시각적 본능입니다."</p>
            </div>
          </div>
          
          <div className="space-y-8">
            <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-white/50 block">THE STORY</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold leading-tight">Mastering 3D,<br />Empowering with AI</h2>
            <p className="text-gray-400 text-lg leading-relaxed font-light">
              20년 이상의 3D 제작 경험을 기반으로 제품, 광고, 방송 등 다양한 프로젝트를 수행했습니다.
            </p>
            <p className="text-gray-400 text-lg leading-relaxed font-light">
              현재는 AI 영상 기술을 결합하여 더욱 빠르고 강력한 콘텐츠 제작을 제공합니다.
            </p>
            
            <div className="grid grid-cols-2 gap-8 pt-8">
              <div>
                <p className="text-3xl font-display font-bold">20+</p>
                <p className="text-xs font-mono uppercase tracking-widest text-gray-500">Years Experience</p>
              </div>
              <div>
                <p className="text-3xl font-display font-bold">500+</p>
                <p className="text-xs font-mono uppercase tracking-widest text-gray-500">Projects Completed</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="px-6 py-32 bg-black">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20">
          <div>
            <h2 className="text-5xl font-display font-bold mb-12 italic tracking-tighter">Let's Create<br />The Future</h2>
            
            <div className="space-y-10">
              <div className="flex gap-6 items-start">
                <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center shrink-0">
                  <Phone size={18} />
                </div>
                <div>
                  <p className="text-xs font-mono uppercase tracking-widest text-gray-500 mb-1">Call Us</p>
                  <p className="text-xl font-display">010-9955-0000</p>
                </div>
              </div>
              
              <div className="flex gap-6 items-start">
                <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center shrink-0">
                  <Mail size={18} />
                </div>
                <div>
                  <p className="text-xs font-mono uppercase tracking-widest text-gray-500 mb-1">Email</p>
                  <p className="text-xl font-display text-white transition-colors">vetys23@naver.com</p>
                </div>
              </div>
              
              <div className="flex gap-6 items-start">
                <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center shrink-0">
                  <MapPin size={18} />
                </div>
                <div>
                  <p className="text-xs font-mono uppercase tracking-widest text-gray-500 mb-1">Office</p>
                  <p className="text-xl font-display">서울특별시 ○○구 ○○로 123</p>
                </div>
              </div>
            </div>

            <div className="flex gap-4 mt-16">
              <div className="w-10 h-10 rounded-full glass-surface flex items-center justify-center cursor-pointer hover:bg-white hover:text-black transition-all">
                <Instagram size={20} />
              </div>
              <div className="w-10 h-10 rounded-full glass-surface flex items-center justify-center cursor-pointer hover:bg-white hover:text-black transition-all">
                <Youtube size={20} />
              </div>
            </div>
          </div>

          <div className="glass-surface p-10 rounded-3xl">
            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-mono uppercase tracking-widest text-gray-500">Name</label>
                  <input className="w-full bg-white/5 border border-white/10 rounded-xl p-4 focus:border-white transition-colors outline-none font-light" placeholder="이름" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-mono uppercase tracking-widest text-gray-500">Email</label>
                  <input className="w-full bg-white/5 border border-white/10 rounded-xl p-4 focus:border-white transition-colors outline-none font-light" placeholder="이메일" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-mono uppercase tracking-widest text-gray-500">Service Category</label>
                <select className="w-full bg-white/5 border border-white/10 rounded-xl p-4 focus:border-white transition-colors outline-none font-light appearance-none">
                  <option className="bg-zinc-900">3D Architectural Visualization</option>
                  <option className="bg-zinc-900">AI Video Production</option>
                  <option className="bg-zinc-900">Product Promotion</option>
                  <option className="bg-zinc-900">Other Inquiry</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-mono uppercase tracking-widest text-gray-500">Message</label>
                <textarea className="w-full bg-white/5 border border-white/10 rounded-xl p-4 h-40 focus:border-white transition-colors outline-none font-light" placeholder="이곳에 문의 내용을 작성해주세요." />
              </div>
              <button className="w-full py-5 bg-white text-black font-bold uppercase tracking-widest text-sm rounded-xl flex items-center justify-center gap-3 hover:bg-gray-200 transition-colors">
                <Send size={18} /> Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="px-6 py-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-white/5 flex items-center justify-center rounded-lg border border-white/10">
              <Hexagon size={16} strokeWidth={1} />
            </div>
            <span className="text-sm font-mono tracking-tighter uppercase opacity-50">© 2026 LOFT.STUDIO - 3D & AI Video Lab.</span>
          </div>
          
          <div className="flex gap-8">
            <a href="#" className="text-[10px] font-mono uppercase tracking-widest text-gray-500 hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-[10px] font-mono uppercase tracking-widest text-gray-500 hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
