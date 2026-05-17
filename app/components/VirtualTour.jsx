"use client";

import React, { useEffect, useRef, useState } from 'react';
import Script from 'next/script';

const VirtualTour = () => {
  const containerRef = useRef(null);
  const viewerRef = useRef(null);
  const [scriptLoaded, setScriptLoaded] = useState(false);

  const initPannellum = () => {
    if (window.pannellum && containerRef.current && !viewerRef.current) {
      viewerRef.current = window.pannellum.viewer(containerRef.current, {
        "default": {
          "firstScene": "scene1", 
          "author": "جنى سيتي",
          "sceneFadeDuration": 600, // ⚡ تسريع حركة التنقل بين المشاهد
          "autoLoad": true,
          "preload": true,
          "loadingNotice": "" // ❌ إخفاء كلمة الـ Loading الثقيلة تماماً من الشاشة
        },

        "scenes": {
          "scene1": {
            "title": "جنى سيتي - 1. نظرة عامة على الموقع",
            "type": "equirectangular",
            "panorama": "/land1.jpg.JPG",
            "hotSpots": [
              { "pitch": -8, "yaw": 5, "type": "scene", "text": "الانتقال إلى ساحة المشروع ➡️", "sceneId": "scene2" }
            ]
          },
          "scene2": {
            "title": "جنى سيتي - 2. الساحة الخارجية وأعمال الحفر",
            "type": "equirectangular",
            "panorama": "/land2.jpg.JPG",
            "hotSpots": [
              { "pitch": -10, "yaw": 180, "type": "scene", "text": "العودة للنظرة العامة ↩️", "sceneId": "scene1" },
              { "pitch": -8, "yaw": -10, "type": "scene", "text": "الاقتراب من منطقة الإنشاءات ➡️", "sceneId": "scene3" }
            ]
          },
          "scene3": {
            "title": "جنى سيتي - 3. منطقة الرافعات والآليات",
            "type": "equirectangular",
            "panorama": "/land3.jpg.JPG",
            "hotSpots": [
              { "pitch": -10, "yaw": 170, "type": "scene", "text": "الرجوع للخلف ↩️", "sceneId": "scene2" },
              { "pitch": -8, "yaw": 10, "type": "scene", "text": "معاينة أساسات المبنى ➡️", "sceneId": "scene4" }
            ]
          },
          "scene4": {
            "title": "جنى سيتي - 4. أساسات وأعمدة الطابق الأرضي",
            "type": "equirectangular",
            "panorama": "/land4.jpg.JPG",
            "hotSpots": [
              { "pitch": -10, "yaw": 175, "type": "scene", "text": "الرجوع لمنطقة الآليات ↩️", "sceneId": "scene3" },
              { "pitch": -8, "yaw": -5, "type": "scene", "text": "الدخول إلى شبكة تسليح القواعد ➡️", "sceneId": "scene5" }
            ]
          },
          "scene5": {
            "title": "جنى سيتي - 5. نظرة علوية على شبكة حديد التسليح",
            "type": "equirectangular",
            "panorama": "/land5.jpg.JPG",
            "hotSpots": [
              { "pitch": -10, "yaw": 190, "type": "scene", "text": "الرجوع للخلف ↩️", "sceneId": "scene4" },
              { "pitch": -8, "yaw": 15, "type": "scene", "text": "الانتقال إلى هيكل المبنى الرئيسي ➡️", "sceneId": "scene6" }
            ]
          },
          "scene6": {
            "title": "جنى سيتي - 6. الهيكل الخرساني الرئيسي للأبنية",
            "type": "equirectangular",
            "panorama": "/land6.jpg.JPG",
            "hotSpots": [
              { "pitch": -10, "yaw": 180, "type": "scene", "text": "الرجوع لشبكة حديد التسليح ↩️", "sceneId": "scene5" }
            ]
          }
        }
      });
    }
  };

  useEffect(() => {
    if (scriptLoaded) {
      initPannellum();
    }
    return () => {
      if (viewerRef.current) {
        viewerRef.current.destroy();
        viewerRef.current = null;
      }
    };
  }, [scriptLoaded]);

  return (
    <div style={{ width: '100%', height: '78vh', position: 'relative', borderRadius: '28px', overflow: 'hidden', boxShadow: '0 15px 50px rgba(0,0,0,0.2)' }}>
      
      <style>{`
        /* تصميم السهم الدائري العصري والأكبر */
        .pnlm-hotspot.pnlm-scene {
          width: 40px !important;
          height: 40px !important;
          background-color: rgba(255, 255, 255, 0.85) !important;
          border-radius: 50% !important;
          border: 2px solid #fff !important;
          box-shadow: 0 5px 15px rgba(0,0,0,0.3) !important;
          background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="%23333" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><polyline points="19 12 12 19 5 12"></polyline></svg>') !important;
          background-size: 60% !important;
          background-repeat: no-repeat !important;
          background-position: center !important;
          cursor: pointer;
          transition: all 0.3s ease;
          animation: pulseHotspot 2s infinite;
        }

        .pnlm-hotspot.pnlm-scene:hover {
          background-color: rgba(255, 255, 255, 1) !important;
          transform: scale(1.1);
          box-shadow: 0 8px 25px rgba(0,0,0,0.4) !important;
        }

        @keyframes pulseHotspot {
          0% { box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.6); }
          70% { box-shadow: 0 0 0 15px rgba(255, 255, 255, 0); }
          100% { box-shadow: 0 0 0 0 rgba(255, 255, 255, 0); }
        }

        .pnlm-hotspot-text {
          background: rgba(0, 0, 0, 0.8) !important;
          color: #fff !important;
          border-radius: 8px !important;
          padding: 8px 15px !important;
          font-size: 14px !important;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif !important;
          bottom: 55px !important;
          box-shadow: 0 5px 15px rgba(0,0,0,0.3) !important;
        }

        /* ⚡ تسريع وإخفاء شاشة التحميل الافتراضية للـ Pannellum */
        .pnlm-load-box {
          background: transparent !important;
          border: none !important;
          box-shadow: none !important;
        }
        .pnlm-lmsg, .pnlm-load-box p {
          display: none !important; /* إخفاء نص التحميل تماماً */
        }
      `}</style>

      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/pannellum@2.5.6/build/pannellum.css" />
      <Script src="https://cdn.jsdelivr.net/npm/pannellum@2.5.6/build/pannellum.js" onLoad={() => setScriptLoaded(true)} />
      <div ref={containerRef} style={{ width: '100%', height: '100%', background: '#000' }}></div>
    </div>
  );
};

export default VirtualTour;