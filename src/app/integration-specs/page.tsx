import { Check, Shield, Camera, Server, Network, Video, Download } from "lucide-react";
import Image from "next/image";
import { Metadata } from 'next';
import PrintButton from "@/components/shared/PrintButton";
import BackButton from "@/components/shared/BackButton";

export const metadata: Metadata = {
  title: 'Hardware & System Integrations | Z1 Trailers',
  description: 'View the complete, exhaustive list of supported cameras, VMS, and monitoring software integrated with Z1 Trailers via Camect and Uniview.',
};

export default function IntegrationSpecSheet() {
  const supportedCameras = [
    "Amcrest", "Axis", "Dahua", "Foscam", "Hikvision", 
    "Reolink", "Trivision", "Vstarcam", "Ezviz", "Laview", 
    "Lorex", "Q-See", "Samsung Wisenet", "Samsung Smartcam", 
    "Swann", "Ubiquiti", "Uniview", "Wyze", "Avigilon", "Pelco"
  ];

  const monitoringPartners = [
    "Immix", "Sentinel", "Bold Manitou", "Netwatch", "Stages", 
    "DICE Corporation", "MASterMind", "Micro Key", "SBN", "Sims"
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* 
        This page acts as a printable, formatted tech-spec outline.
        We drop standard navbars/footers here or simply style it 
        like an A4 sheet for users printing to PDF. 
      */}
      
      {/* Screen-Only Header Toolbar */}
      <div className="print:hidden bg-[#0a1628] py-4 px-6 md:px-8 flex justify-between items-center border-b border-brand-teal/20 sticky top-0 z-[100]">
         <div className="flex items-center gap-4 md:gap-8">
           <BackButton />
           <div className="hidden sm:flex items-center gap-3 border-l border-white/10 pl-6">
             <Network className="w-4 h-4 text-brand-teal" />
             <span className="font-display font-medium text-white tracking-widest uppercase text-xs">Spec Sheet 1.2</span>
           </div>
         </div>
         <div className="flex items-center gap-4">
           {/* Mobile-only label to clarify action */}
           <span className="hidden md:inline-block font-mono text-[9px] text-brand-teal uppercase tracking-widest">
             Generates Printable A4
           </span>
           <PrintButton />
         </div>
      </div>

      {/* A4 Document Area */}
      <div className="max-w-4xl mx-auto bg-white p-8 md:p-16 print:p-0 my-0 md:my-12 shadow-2xl print:shadow-none text-slate-800">
         
         <div className="border-b-4 border-slate-900 pb-8 mb-12 flex justify-between items-end">
            <div>
              <h1 className="font-display font-black text-4xl uppercase tracking-tight text-slate-900 mb-2">
                Hardware Integration Spec Sheet
              </h1>
              <p className="font-mono text-xs uppercase tracking-widest text-slate-500">
                Universal Compatibility Matrix // Ver. 1.2
              </p>
            </div>
            <div className="text-right">
              <div className="font-black text-xl tracking-widest uppercase text-brand-teal mb-1">Z1 TRAILERS</div>
              <p className="font-mono text-[9px] uppercase tracking-wider text-slate-400">1.800.555.0000 | Z1TRAILERS.COM</p>
            </div>
         </div>

         <div className="mb-12">
            <h2 className="font-display font-bold text-lg uppercase tracking-wider text-slate-900 mb-4 flex items-center border-b border-slate-200 pb-2">
              <Network className="w-5 h-5 mr-3 text-brand-teal" /> Overview
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed max-w-3xl">
              Z1 Trailers are powered by the Z1 Command OS, an operating architecture utilizing embedded **Uniview NVR** infrastructure and **Camect Edge AI** data-hubs. We natively fuse legacy and modern IP cameras into a single, cohesive feed—allowing your central station to digest standard ONVIF streams or direct integration APIs with virtually any platform on the market.
            </p>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
            {/* Core Platforms */}
            <div>
                <h2 className="font-display font-bold text-lg uppercase tracking-wider text-slate-900 mb-6 flex items-center border-b border-slate-200 pb-2">
                  <Camera className="w-5 h-5 mr-3 text-brand-teal" /> Supported IP Cameras
                </h2>
                <div className="bg-slate-50 p-6 border border-slate-100 rounded">
                   <p className="text-xs text-slate-500 mb-6 font-mono leading-relaxed">
                     Hardware utilizing standard RTSP or ONVIF Profile S/G/T are supported natively. The following brands have been verified for full integration:
                   </p>
                   <ul className="grid grid-cols-2 gap-y-3">
                     {supportedCameras.map(cam => (
                        <li key={cam} className="flex items-center text-sm font-semibold text-slate-700">
                          <Check className="w-3 h-3 text-green-500 mr-2 shrink-0" /> {cam}
                        </li>
                     ))}
                   </ul>
                </div>
            </div>

            <div>
                <h2 className="font-display font-bold text-lg uppercase tracking-wider text-slate-900 mb-6 flex items-center border-b border-slate-200 pb-2">
                  <Server className="w-5 h-5 mr-3 text-brand-teal" /> Central Monitoring UI
                </h2>
                <div className="bg-slate-50 p-6 border border-slate-100 rounded">
                   <p className="text-xs text-slate-500 mb-6 font-mono leading-relaxed">
                     The Camect telemetry engine pipes event-based alerts directly into standard remote guarding platforms via custom API layer integrations:
                   </p>
                   <ul className="space-y-3">
                     {monitoringPartners.map(partner => (
                        <li key={partner} className="flex items-center text-sm font-semibold text-slate-700">
                          <Check className="w-3 h-3 text-brand-teal mr-2 shrink-0" /> {partner}
                        </li>
                     ))}
                   </ul>
                </div>
            </div>
         </div>

         {/* Technical Specifications */}
         <div className="mb-12 page-break-inside-avoid">
            <h2 className="font-display font-bold text-lg uppercase tracking-wider text-slate-900 mb-6 flex items-center border-b border-slate-200 pb-2">
              <Shield className="w-5 h-5 mr-3 text-brand-teal" /> Networking & Threat Protocol
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="p-4 border border-slate-200 bg-white">
                 <h4 className="font-black text-xs uppercase tracking-widest text-slate-900 mb-2">Video Encapsulation</h4>
                 <p className="text-xs text-slate-500">H.264 / H.265 Decoding. We recommend utilizing vanilla H.264 profiles to preserve AI object tracking capability. Smart Codecs (H264+) should be disabled prior to ingestion.</p>
              </div>
              <div className="p-4 border border-slate-200 bg-white">
                 <h4 className="font-black text-xs uppercase tracking-widest text-slate-900 mb-2">Threat Classification</h4>
                 <p className="text-xs text-slate-500">Dual-engine approach. Analyzes up to 35 unique object vectors. Filters rain, snow, shadows, spiders, and avian activity with 99.7% avoidance. </p>
              </div>
              <div className="p-4 border border-slate-200 bg-white">
                 <h4 className="font-black text-xs uppercase tracking-widest text-slate-900 mb-2">Data Transmission</h4>
                 <p className="text-xs text-slate-500">Secure AES-256 transmission over Cradlepoint Cellular/Satellite architecture. P2P tunnels established directly to monitoring UI without open inbound ports.</p>
              </div>
              <div className="p-4 border border-slate-200 bg-white">
                 <h4 className="font-black text-xs uppercase tracking-widest text-slate-900 mb-2">VMS Integrations</h4>
                 <p className="text-xs text-slate-500">For deployments utilizing Milestones XProtect or Genetec Security Center, custom webhooks and gateway servers are leveraged to pipeline ONVIF streams.</p>
              </div>
            </div>
         </div>
         
         <div className="text-center pt-8 border-t border-slate-200">
            <p className="font-mono text-[10px] text-slate-400 tracking-widest uppercase">
               &copy; {new Date().getFullYear()} Z1 Trailers. Confidential Engineering Details. Subject to change.
            </p>
         </div>

      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @media print {
          body {
            background-color: white !important;
            color: black !important;
          }
          .page-break-inside-avoid {
             page-break-inside: avoid;
          }
        }
      `}} />
    </div>
  );
}
