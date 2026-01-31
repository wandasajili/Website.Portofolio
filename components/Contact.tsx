import React, { useState } from 'react';
import { PortfolioData } from '../types';

interface ContactProps {
  data: PortfolioData;
}

const Contact: React.FC<ContactProps> = ({ data }) => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormState({ name: '', email: '', message: '' });
    }, 1500);
  };

  const socialIcons: Record<string, React.ReactNode> = {
    github: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
      </svg>
    ),
    linkedin: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
      </svg>
    ),
    twitter: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.84 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
      </svg>
    ),
    instagram: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849s-.011 3.585-.069 4.85c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.849-.07c-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849s.012-3.584.07-4.849c.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.2 4.337 2.617 6.76 6.98 6.98 1.281.058 1.689.072 4.948.072s3.667-.014 4.947-.072c4.337-.2 6.76-2.617 6.98-6.98.058-1.28.072-1.689.072-4.948s-.014-3.667-.072-4.947c-.2-4.337-2.617-6.76-6.98-6.98-1.28-.058-1.689-.072-4.948-.072zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
      </svg>
    ),
    discord: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
      </svg>
    )
  };

  return (
    <div className="container mx-auto px-6">
      <div className="max-w-6xl mx-auto">
        
        {/* Contact Header Area */}
        <div className="mb-20 lg:mb-24">
          <div className="flex items-center gap-4 mb-10">
            <span className="h-[1px] w-12 bg-blue-500"></span>
            <h2 className="text-[10px] font-bold uppercase tracking-[0.4em] text-blue-500">Contact</h2>
          </div>
          
          <h3 className="text-4xl sm:text-5xl lg:text-7xl font-outfit font-bold text-white mb-8 tracking-tight leading-[1.1] transition-all">
            Let's create something<br />exceptional together.
          </h3>
          
          <div className="space-y-6">
            <p className="text-lg md:text-xl text-slate-400 font-light leading-relaxed max-w-2xl">
              Available for high-impact roles, creative collaborations, and selective consulting.
            </p>

            <div className="flex items-center gap-3 py-2">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </span>
              <span className="text-[11px] font-black uppercase tracking-[0.3em] text-white/80">Available Now</span>
            </div>
          </div>
        </div>

        {/* Content Layout */}
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          
          {/* Form Side - Right in flow, Left in grid */}
          <div className="lg:col-span-7 order-2 lg:order-1">
            <div className="bg-white/[0.02] backdrop-blur-md p-8 md:p-12 rounded-[2rem] border border-white/5 shadow-2xl">
              {submitted ? (
                <div className="text-center py-20 animate-in fade-in zoom-in duration-500">
                  <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-8 border border-green-500/30">
                    <svg className="w-10 h-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h4 className="text-3xl font-bold mb-4">Message Received</h4>
                  <p className="text-slate-400">Thank you. I'll get back to you within 24 hours.</p>
                  <button onClick={() => setSubmitted(false)} className="mt-10 text-xs font-bold uppercase tracking-widest text-blue-500 hover:text-white transition-colors">
                    New message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <label className="text-[10px] font-bold uppercase tracking-[0.25em] text-slate-500 ml-1">Your Name</label>
                      <input required type="text" value={formState.name} onChange={e => setFormState({...formState, name: e.target.value})} placeholder="Alex Smith" className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-slate-700 focus:outline-none focus:border-blue-500/50 transition-all" />
                    </div>
                    <div className="space-y-3">
                      <label className="text-[10px] font-bold uppercase tracking-[0.25em] text-slate-500 ml-1">Email</label>
                      <input required type="email" value={formState.email} onChange={e => setFormState({...formState, email: e.target.value})} placeholder="alex@work.com" className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-slate-700 focus:outline-none focus:border-blue-500/50 transition-all" />
                    </div>
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] font-bold uppercase tracking-[0.25em] text-slate-500 ml-1">Message</label>
                    <textarea required rows={4} value={formState.message} onChange={e => setFormState({...formState, message: e.target.value})} placeholder="Tell me about your project..." className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-slate-700 focus:outline-none focus:border-blue-500/50 transition-all resize-none"></textarea>
                  </div>
                  <button disabled={isSubmitting} className="group w-full py-5 bg-white text-slate-950 rounded-full font-black text-[10px] uppercase tracking-[0.4em] hover:bg-blue-500 hover:text-white transition-all active:scale-[0.98] disabled:opacity-50 flex items-center justify-center gap-4">
                    {isSubmitting ? <span className="w-5 h-5 border-2 border-slate-900 border-t-transparent rounded-full animate-spin"></span> : 'Dispatch Message'}
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Info Side - Left in flow, Right in grid */}
          <div className="lg:col-span-5 order-1 lg:order-2 space-y-16 lg:pt-4">
            <div className="space-y-12">
              <div className="group cursor-pointer">
                <p className="text-[10px] font-bold uppercase tracking-[0.5em] text-slate-600 mb-6">Inquiries</p>
                <div className="flex items-center gap-5">
                  <div className="text-blue-500">
                    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <a href={`mailto:${data.email}`} className="text-2xl sm:text-3xl font-outfit font-bold text-white hover:text-blue-500 transition-all duration-300 break-all">
                    {data.email}
                  </a>
                </div>
              </div>
              
              <div className="pt-10 border-t border-white/5">
                <p className="text-[10px] font-bold uppercase tracking-[0.5em] text-slate-600 mb-8">Social Connect</p>
                <div className="flex flex-wrap gap-5">
                  {Object.entries({ 
                    github: data.github, 
                    linkedin: data.linkedin, 
                    twitter: data.twitter,
                    instagram: data.instagram,
                    discord: data.discord
                  }).map(([key, url]) => (
                    url ? (
                      <a key={key} href={url} target="_blank" rel="noopener noreferrer" className="w-14 h-14 rounded-2xl border border-white/10 flex items-center justify-center text-slate-500 hover:text-white hover:border-blue-500/50 hover:bg-white/[0.05] transition-all duration-300">
                        {socialIcons[key]}
                      </a>
                    ) : null
                  ))}
                </div>
              </div>
            </div>

            <div className="p-8 bg-blue-500/5 rounded-3xl border border-blue-500/10 backdrop-blur-sm">
              <h5 className="font-bold text-lg mb-3 text-white">Collaboration</h5>
              <p className="text-sm text-slate-400 leading-relaxed">
                Currently taking on selective partnerships for Q1 2024. If you have a vision that requires precision engineering and design, I'd love to hear from you.
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;