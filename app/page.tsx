"use client"
import React, { useState, useEffect } from "react";
import Image from 'next/image';
import { cn } from "@/lib/utils";
import { ArrowDown, Menu, X, ArrowRight, Twitter, Linkedin, Instagram, Zap, Briefcase, Users, Star } from "lucide-react";
import Link from "next/link";
import { BackgroundRipple } from "@/components/background-ripple";

export default function Home() {
    // --- State for Mobile Menu ---
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollTo = (id: string) => {
        setIsMenuOpen(false);
        const element = document.getElementById(id);
        if (element) {
            const offset = 80;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;
            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        }
    };

    return (
        <main className="relative flex min-h-screen flex-col items-center justify-between">
            {/* Background handled in Layout logic, but ensuring it sits right */}
            {/* Navigation */}
            <nav className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300 w-full border-b border-transparent",
                scrolled ? "bg-black/80 backdrop-blur-xl border-white/5" : "bg-transparent"
            )}>
                <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                    <button onClick={() => scrollTo('hero')} className="flex items-center gap-3 group">
                        <div className="relative w-10 h-10 overflow-hidden rounded-xl bg-white/5 p-1 group-hover:bg-white/10 transition-colors">
                            <img src="/assets/logo.svg" alt="CollabHaven Logo" className="w-full h-full object-contain filter group-hover:brightness-110 transition-all" />
                        </div>
                        <span className="font-display font-bold text-xl tracking-tight">CollabHaven</span>
                    </button>

                    <div className="hidden md:flex items-center gap-8">
                        <button onClick={() => scrollTo('about')} className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">About</button>
                        <button onClick={() => scrollTo('services')} className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">Services</button>
                        <button onClick={() => scrollTo('brands')} className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">For Brands</button>
                        <button onClick={() => scrollTo('creators')} className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">For Creators</button>
                    </div>

                    <button onClick={() => scrollTo('contact')} className="hidden md:inline-flex px-5 py-2.5 rounded-full bg-white text-black font-semibold text-sm hover:bg-zinc-200 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)]">
                        Get Started
                    </button>

                    <button className="md:hidden text-white p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        {isMenuOpen ? <X /> : <Menu />}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="md:hidden glass absolute top-full left-0 w-full p-6 flex flex-col gap-4 border-b border-white/5 animate-in slide-in-from-top-2">
                        <button onClick={() => scrollTo('about')} className="text-zinc-400 hover:text-white text-left p-2">About</button>
                        <button onClick={() => scrollTo('services')} className="text-zinc-400 hover:text-white text-left p-2">Services</button>
                        <button onClick={() => scrollTo('brands')} className="text-zinc-400 hover:text-white text-left p-2">For Brands</button>
                        <button onClick={() => scrollTo('creators')} className="text-zinc-400 hover:text-white text-left p-2">For Creators</button>
                        <button onClick={() => scrollTo('contact')} className="px-5 py-2.5 rounded-full bg-white text-black font-semibold text-sm text-center">Get Started</button>
                    </div>
                )}
            </nav>

            {/* Hero Section */}
            <section id="hero" className="relative w-full min-h-screen flex items-center justify-center pt-20 overflow-hidden">
                {/* Hero Content */}
                <div className="max-w-7xl mx-auto px-6 relative z-10 text-center flex flex-col items-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border-primary/20 bg-primary/5 text-primary text-sm font-medium mb-8 animate-float">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                        </span>
                        The Future of Creator Partnerships
                    </div>

                    <h1 className="font-display font-bold text-6xl md:text-8xl tracking-tighter mb-6 leading-[0.9]">
                        Where Talent Meets <br />
                        <span className="text-gradient">Brand Harmony.</span>
                    </h1>

                    <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto mb-10 leading-relaxed">
                        We're the new-age agency bridging the gap between breakout creators and forward-thinking brands.
                        <span className="text-white font-medium block mt-2">Bold. Experimental. Premium.</span>
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full z-20">
                        <button onClick={() => scrollTo('contact')} className="px-8 py-4 rounded-full bg-white text-black font-bold text-lg hover:scale-105 transition-transform shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)]">
                            Start Collaborating
                        </button>
                        <button onClick={() => scrollTo('about')} className="px-8 py-4 rounded-full glass hover:bg-white/10 transition-colors font-medium text-lg flex items-center gap-2">
                            Explore Our Vibe <ArrowDown className="w-4 h-4" />
                        </button>
                    </div>
                </div>

                {/* Floating Elements (Repositioned to corners) */}
                <div className="absolute top-[15%] left-[5%] hidden xl:block animate-float pointer-events-none">
                    <div className="glass-card p-4 rounded-2xl flex items-center gap-3 rotate-[-6deg] hover:rotate-0 transition-transform">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-indigo-500 flex items-center justify-center text-2xl shadow-lg shadow-purple-500/20">🚀</div>
                        <div>
                            <div className="text-xs text-zinc-400 uppercase tracking-wider font-semibold">Growth</div>
                            <div className="font-bold text-sm text-white">+240% Reach</div>
                        </div>
                    </div>
                </div>

                <div className="absolute bottom-[20%] right-[8%] hidden xl:block animate-float-reverse pointer-events-none delay-700">
                    <div className="glass-card p-4 rounded-2xl flex items-center gap-3 rotate-[6deg] hover:rotate-0 transition-transform">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-pink-500 to-rose-500 flex items-center justify-center text-2xl shadow-lg shadow-pink-500/20">❤️</div>
                        <div>
                            <div className="text-xs text-zinc-400 uppercase tracking-wider font-semibold">Engagement</div>
                            <div className="font-bold text-sm text-white">4.2M Views</div>
                        </div>
                    </div>
                </div>

                <div className="absolute top-[20%] right-[10%] hidden xl:block animate-float-slow pointer-events-none delay-300">
                    <div className="glass-card p-3 rounded-2xl flex items-center gap-3 rotate-[3deg] hover:rotate-0 transition-transform">
                        <div className="flex -space-x-3 overflow-hidden pl-1">
                            <div className="w-9 h-9 rounded-full bg-zinc-800 border-2 border-black flex items-center justify-center text-sm shadow-lg">🦁</div>
                            <div className="w-9 h-9 rounded-full bg-zinc-800 border-2 border-black flex items-center justify-center text-sm shadow-lg">🎨</div>
                            <div className="w-9 h-9 rounded-full bg-zinc-800 border-2 border-black flex items-center justify-center text-sm shadow-lg">🎧</div>
                        </div>
                        <div className="pr-2 pl-1">
                            <div className="text-xs text-green-400 font-bold flex items-center gap-1">
                                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span> Match Found
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section id="about" className="py-32 w-full relative">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div className="relative group">
                            <div className="absolute -inset-4 bg-gradient-to-r from-primary to-secondary opacity-30 blur-3xl rounded-full group-hover:opacity-50 transition-opacity duration-700"></div>
                            <div className="relative glass-card rounded-3xl p-8 md:p-12 overflow-hidden border-t border-white/20">
                                <div className="absolute top-0 right-0 p-8 opacity-20 rotate-12 group-hover:rotate-0 transition-transform duration-700">
                                    <Zap className="w-32 h-32 text-white" />
                                </div>
                                <h3 className="font-display font-bold text-4xl mb-6 relative z-10">Not Your Average Agency</h3>
                                <p className="text-zinc-400 leading-relaxed mb-8 relative z-10 text-lg">
                                    We operate at the intersection of culture, technology, and storytelling. CollabHaven is built for the era of the creator, where authenticity rules and impact is measured in movements.
                                </p>
                                <div className="flex flex-wrap gap-3 relative z-10">
                                    <div className="px-4 py-1.5 rounded-full bg-white/5 text-sm border border-white/10 hover:bg-white/10 transition-colors cursor-default">🤖 AI-Optimized</div>
                                    <div className="px-4 py-1.5 rounded-full bg-white/5 text-sm border border-white/10 hover:bg-white/10 transition-colors cursor-default">🎨 Creative First</div>
                                    <div className="px-4 py-1.5 rounded-full bg-white/5 text-sm border border-white/10 hover:bg-white/10 transition-colors cursor-default">🌐 Global Reach</div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <h2 className="font-display font-bold text-5xl md:text-6xl mb-8 leading-tight">We curate <br /><span className="text-gradient-blue">digital magic.</span></h2>
                            <p className="text-lg text-zinc-400 mb-10 leading-relaxed">
                                Traditional marketing is dead. The future is collaborative. We unite visionary brands with the world"s most electrifying creators to build campaigns that actually matter.
                            </p>
                            <ul className="space-y-6">
                                <li className="flex items-start gap-4 group">
                                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary mt-1 group-hover:bg-primary group-hover:text-white transition-colors">
                                        <ArrowRight className="w-4 h-4" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg mb-1 group-hover:text-primary transition-colors">Data-Driven Creativity</h4>
                                        <p className="text-zinc-500">We use advanced analytics to find the perfect match.</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4 group">
                                    <div className="w-8 h-8 rounded-full bg-secondary/20 flex items-center justify-center text-secondary mt-1 group-hover:bg-secondary group-hover:text-white transition-colors">
                                        <ArrowRight className="w-4 h-4" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg mb-1 group-hover:text-secondary transition-colors">Authentic Storytelling</h4>
                                        <p className="text-zinc-500">No scripts. Just real voices and real impact.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section id="services" className="py-32 w-full bg-black/20 relative">
                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className="text-center mb-20">
                        <h2 className="font-display font-bold text-5xl md:text-6xl mb-6">Our <span className="text-gradient">Core Powers</span></h2>
                        <p className="text-zinc-400 max-w-2xl mx-auto text-lg">Everything you need to dominate the feed.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { icon: Users, title: "Talent Management", desc: "Full-stack career growth for modern creators. We handle the business so you can create.", color: "from-violet-500 to-fuchsia-500" },
                            { icon: Briefcase, title: "Brand Partnerships", desc: "Campaign strategy, negotiation, and execution. Connecting brands with the right voices.", color: "from-blue-500 to-cyan-500" },
                            { icon: Zap, title: "Content Strategy", desc: "Data-backed content roadmaps that keep audiences hooked and algorithms happy.", color: "from-orange-500 to-red-500" }
                        ].map((service, i) => (
                            <div key={i} className="glass-card p-10 rounded-[2.5rem] hover:-translate-y-2 transition-all duration-500 group border border-white/5 hover:border-white/20">
                                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-8 text-white group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500 shadow-lg`}>
                                    <service.icon className="w-8 h-8" />
                                </div>
                                <h3 className="font-display font-bold text-2xl mb-4 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-zinc-400 transition-all">{service.title}</h3>
                                <p className="text-zinc-400 leading-relaxed font-light">
                                    {service.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Brands Section */}
            <section id="brands" className="py-32 w-full">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex flex-col md:flex-row items-center gap-16 mb-40">
                        <div className="w-full md:w-1/2 order-2 md:order-1 relative group perspective-1000">
                            {/* Rich Dashboard Visual */}
                            <div className="relative aspect-video rounded-3xl overflow-hidden glass border border-white/10 shadow-2xl shadow-primary/10 transition-transform duration-500 hover:rotate-y-2 rotate-y-0 transform-style-3d">
                                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent pointer-events-none"></div>
                                <div className="absolute inset-0 p-8 flex flex-col justify-center items-center">
                                    <div className="glass-card w-full max-w-sm rounded-xl p-6 relative z-10 border border-white/5 bg-black/60 backdrop-blur-2xl shadow-xl">
                                        <div className="flex items-center justify-between mb-6">
                                            <div className="flex items-center gap-2">
                                                <div className="w-3 h-3 rounded-full bg-red-500 animate-pulse"></div>
                                                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                                            </div>
                                            <div className="text-[10px] text-zinc-500 font-mono tracking-widest uppercase">Live Campaign</div>
                                        </div>
                                        <div className="h-32 flex items-end justify-between gap-2 mb-6 opacity-80 group-hover:opacity-100 transition-opacity">
                                            {[40, 60, 50, 85, 95].map((h, idx) => (
                                                <div key={idx} className="w-full bg-primary/20 rounded-t-sm relative group-hover:bg-primary/30 transition-colors" style={{ height: `${h}%` }}>
                                                    <div className="absolute top-0 w-full h-1 bg-primary/50 shadow-[0_0_10px_rgba(139,92,246,0.5)]"></div>
                                                </div>
                                            ))}
                                        </div>
                                        <div className="flex justify-between items-center pt-4 border-t border-white/5">
                                            <div>
                                                <div className="text-xs text-zinc-400">Total Reach</div>
                                                <div className="font-bold text-2xl text-white">8.4M+</div>
                                            </div>
                                            <div className="px-3 py-1 rounded-full bg-green-500/10 text-green-400 text-xs font-bold ring-1 ring-green-500/20">+124%</div>
                                        </div>
                                    </div>

                                    {/* Floating Badges */}
                                    <div className="absolute top-12 right-12 glass-card p-2 px-3 rounded-lg flex items-center gap-2 animate-float-slow shadow-lg">
                                        <div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center text-[10px] text-white">👍</div>
                                        <div className="text-xs font-bold text-white">Verified</div>
                                    </div>
                                    <div className="absolute bottom-12 left-12 glass-card p-2 px-3 rounded-lg flex items-center gap-2 animate-float-reverse shadow-lg bg-yellow-500/10 border-yellow-500/20">
                                        <div className="w-6 h-6 rounded-full bg-yellow-500 flex items-center justify-center text-[10px] text-black">⭐</div>
                                        <div className="text-xs font-bold text-yellow-500">Top Tier</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 order-1 md:order-2 pl-0 md:pl-10">
                            <span className="text-primary font-bold tracking-widest text-sm uppercase mb-3 block">For Brands</span>
                            <h2 className="font-display font-bold text-5xl md:text-6xl mb-8 leading-tight">Amplify Your <br /> Voice.</h2>
                            <p className="text-zinc-400 mb-10 text-lg leading-relaxed">
                                Reach audiences where they actually live. We craft bespoke campaigns that feel native, organic, and unskippable.
                            </p>
                            <button onClick={() => scrollTo('contact')} className="inline-flex items-center gap-2 text-white font-semibold hover:text-primary transition-colors hover:translate-x-2 duration-300">
                                Partner with us <ArrowRight className="w-5 h-5" />
                            </button>
                        </div>
                    </div>

                    <div id="creators" className="flex flex-col md:flex-row items-center gap-16">
                        <div className="w-full md:w-1/2 pr-0 md:pr-10">
                            <span className="text-secondary font-bold tracking-widest text-sm uppercase mb-3 block">For Creators</span>
                            <h2 className="font-display font-bold text-5xl md:text-6xl mb-8 leading-tight">Monetize Your <br /> Genius.</h2>
                            <p className="text-zinc-400 mb-10 text-lg leading-relaxed">
                                You create the culture. We handle the business. Get access to premium brand deals, legal support, and growth strategy.
                            </p>
                            <button onClick={() => scrollTo('contact')} className="inline-flex items-center gap-2 text-white font-semibold hover:text-secondary transition-colors hover:translate-x-2 duration-300">
                                Join the roster <ArrowRight className="w-5 h-5" />
                            </button>
                        </div>
                        <div className="w-full md:w-1/2 relative group perspective-1000">
                            {/* Creator Visual */}
                            <div className="relative aspect-video rounded-3xl overflow-hidden glass border border-white/10 shadow-2xl shadow-secondary/10 transition-transform duration-500 hover:rotate-y-2 rotate-y-0 transform-style-3d">
                                <div className="absolute inset-0 bg-gradient-to-tl from-secondary/10 to-transparent pointer-events-none"></div>
                                <div className="absolute inset-0 p-8 flex items-center justify-center">
                                    <div className="glass-card w-72 p-6 rounded-2xl relative z-10 border border-white/10 rotate-[-3deg] group-hover:rotate-0 transition-all duration-500 bg-black/60 backdrop-blur-2xl shadow-2xl">
                                        <div className="flex items-center gap-4 mb-6">
                                            <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-yellow-400 to-pink-500 p-[2px]">
                                                <div className="w-full h-full rounded-full bg-black flex items-center justify-center text-lg">📸</div>
                                            </div>
                                            <div>
                                                <div className="text-base font-bold text-white">Sarah.Creates</div>
                                                <div className="text-xs text-zinc-400 uppercase tracking-wide">Lifestyle • Travel</div>
                                            </div>
                                        </div>
                                        <div className="space-y-3">
                                            <div className="p-3 rounded-xl bg-white/5 flex items-center justify-between border border-white/5 hover:bg-white/10 transition-colors">
                                                <span className="text-xs text-zinc-400 font-medium">New Deal</span>
                                                <span className="text-sm font-bold text-white">$4,500</span>
                                            </div>
                                            <div className="p-3 rounded-xl bg-white/5 flex items-center justify-between border border-white/5 hover:bg-white/10 transition-colors">
                                                <span className="text-xs text-zinc-400 font-medium">Affiliate</span>
                                                <span className="text-sm font-bold text-white">$1,200</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Bubbles */}
                                    <div className="absolute top-[20%] left-10 md:left-16 glass-card px-4 py-2.5 rounded-xl flex items-center gap-2 animate-float shadow-lg border-secondary/20">
                                        <div className="w-2 h-2 rounded-full bg-secondary animate-pulse"></div>
                                        <div className="text-xs font-bold text-white">Brand Offer</div>
                                    </div>

                                    <div className="absolute bottom-[25%] right-8 md:right-12 glass-card px-4 py-3 rounded-xl flex flex-col items-center animate-float-reverse delay-500 shadow-lg border-primary/20">
                                        <div className="text-[10px] text-zinc-500 uppercase tracking-wider font-bold">Avg. Views</div>
                                        <div className="text-lg font-bold text-gradient">250K+</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section id="contact" className="py-40 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary/5 pointer-events-none"></div>
                <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
                    <h2 className="font-display font-bold text-6xl md:text-8xl mb-10 tracking-tighter">Ready to <span className="text-gradient block mt-2">Break the Internet?</span></h2>
                    <p className="text-2xl text-zinc-400 mb-16 max-w-2xl mx-auto font-light">
                        Whether you"re a brand looking for impact or a creator looking for growth, CollabHaven is your home.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                        <button className="px-10 py-5 rounded-full bg-white text-black font-bold text-xl hover:scale-105 transition-transform shadow-2xl hover:shadow-white/20">
                            Get Started Now
                        </button>
                        <button className="px-10 py-5 rounded-full glass hover:bg-white/10 transition-colors font-medium text-xl border-white/20 hover:border-white/40">
                            Book a Demo
                        </button>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="w-full border-t border-white/5 bg-black pt-32 pb-12 relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className="grid md:grid-cols-2 gap-20 mb-32">
                        <div>
                            <a href="#" className="flex items-center gap-3 mb-10 group">
                                <div className="relative w-10 h-10 overflow-hidden rounded-xl bg-white/5 p-1 group-hover:bg-white/10 transition-colors">
                                    <img src="/assets/logo.png" alt="CollabHaven Logo" className="w-full h-full object-contain brightness-100 invert-0" />
                                </div>
                                <span className="font-display font-bold text-2xl tracking-tight text-white group-hover:text-zinc-200 transition-colors">CollabHaven</span>
                            </a>
                            <div className="flex gap-4">
                                {[Twitter, Instagram, Linkedin].map((Icon, i) => (
                                    <a key={i} href="#" className="w-12 h-12 rounded-full glass flex items-center justify-center hover:bg-white/10 transition-all hover:-translate-y-1 hover:text-primary text-zinc-400">
                                        <Icon className="w-5 h-5" />
                                    </a>
                                ))}
                            </div>
                        </div>

                        <div className="flex flex-col justify-end text-right">
                            {/* Manifesto */}
                            <div className="font-display font-black text-5xl md:text-7xl uppercase tracking-tighter opacity-80 space-y-2">
                                <div className="text-zinc-700 hover:text-white transition-colors duration-700 cursor-default">New-age Media</div>
                                <div className="text-zinc-600 hover:text-white transition-colors duration-700 cursor-default">Breakout Stories</div>
                                <div className="text-zinc-800 hover:opacity-100 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-primary hover:to-secondary transition-all duration-700 cursor-default">All-Star Creators</div>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row justify-between items-center text-sm text-zinc-600 pt-8 border-t border-white/5 font-medium">
                        <p>&copy; 2026 CollabHaven Agency. All rights reserved.</p>
                        <div className="flex gap-8 mt-6 md:mt-0">
                            <a href="#" className="hover:text-zinc-400 transition-colors">Privacy Policy</a>
                            <a href="#" className="hover:text-zinc-400 transition-colors">Terms of Service</a>
                        </div>
                    </div>
                </div>
            </footer>
        </main>
    );
}
