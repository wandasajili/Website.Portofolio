
import React, { useState } from 'react';
import { Certificate } from '../types';

interface CertificatesProps {
  certificates: Certificate[];
}

const Certificates: React.FC<CertificatesProps> = ({ certificates }) => {
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);

  return (
    <div className="container mx-auto px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-4 mb-4">
              <span className="h-[1px] w-12 bg-blue-600 dark:bg-blue-400"></span>
              <h2 className="text-sm font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400">Certificates</h2>
            </div>
            <h3 className="text-4xl md:text-5xl font-outfit font-bold text-slate-900 dark:text-white transition-colors">
              Professional Recognition
            </h3>
          </div>
          <p className="text-slate-500 dark:text-slate-400 max-w-sm text-sm transition-colors">
            A collection of industry-leading certifications validating expertise in architecture, design, and engineering.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert) => (
            <div 
              key={cert.id} 
              onClick={() => setSelectedCert(cert)}
              className="group bg-white dark:bg-slate-800/50 p-4 rounded-3xl border border-slate-100 dark:border-slate-800 hover:border-blue-200 dark:hover:border-blue-500/30 transition-all duration-300 cursor-zoom-in hover:shadow-xl hover:-translate-y-1"
            >
              <div className="aspect-[4/3] rounded-2xl overflow-hidden mb-6 bg-slate-200 dark:bg-slate-900 relative">
                <img 
                  src={cert.thumbnail} 
                  alt={cert.title}
                  className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="w-12 h-12 bg-white/90 dark:bg-slate-900/90 rounded-full flex items-center justify-center shadow-lg transform scale-90 group-hover:scale-100 transition-transform duration-300">
                    <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                    </svg>
                  </div>
                </div>
                <div className="absolute top-4 right-4 bg-white/90 dark:bg-slate-950/90 backdrop-blur px-3 py-1 rounded-full text-[10px] font-bold text-slate-900 dark:text-white shadow-sm">
                  {cert.year}
                </div>
              </div>
              <div className="px-2 pb-2">
                <h4 className="font-bold text-slate-900 dark:text-white leading-snug mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {cert.title}
                </h4>
                <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">{cert.issuer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedCert && (
        <div 
          className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-10 animate-in fade-in duration-300"
          onClick={() => setSelectedCert(null)}
        >
          <div className="absolute inset-0 bg-slate-950/90 backdrop-blur-md"></div>
          
          <div 
            className="relative max-w-5xl w-full bg-white dark:bg-slate-900 rounded-[2rem] overflow-hidden shadow-2xl animate-in zoom-in-95 duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={() => setSelectedCert(null)}
              className="absolute top-6 right-6 z-10 w-10 h-10 bg-black/20 hover:bg-black/40 text-white rounded-full flex items-center justify-center backdrop-blur-md transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="flex flex-col lg:flex-row h-full">
              <div className="lg:flex-1 bg-slate-100 dark:bg-slate-950 flex items-center justify-center">
                <img 
                  src={selectedCert.thumbnail} 
                  alt={selectedCert.title}
                  className="max-h-[70vh] w-auto shadow-2xl"
                />
              </div>
              <div className="p-8 lg:p-12 lg:w-[400px] flex flex-col justify-center">
                <span className="text-blue-600 dark:text-blue-400 text-xs font-bold uppercase tracking-widest mb-4">Official Certificate</span>
                <h4 className="text-3xl font-outfit font-bold text-slate-900 dark:text-white mb-4 leading-tight">
                  {selectedCert.title}
                </h4>
                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                    <p className="text-slate-600 dark:text-slate-400"><span className="font-bold text-slate-900 dark:text-white">Issuer:</span> {selectedCert.issuer}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                    <p className="text-slate-600 dark:text-slate-400"><span className="font-bold text-slate-900 dark:text-white">Year:</span> {selectedCert.year}</p>
                  </div>
                </div>
                <a 
                  href={selectedCert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-xl font-bold text-center hover:bg-blue-600 dark:hover:bg-blue-500 dark:hover:text-white transition-all shadow-xl"
                >
                  Verify Credential
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Certificates;
