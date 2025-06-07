import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Download } from 'lucide-react';

const Photography = () => {
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const getAssetPath = (path) => `${process.env.PUBLIC_URL}${path}`;

  const photos = [
    {
      id: 1,
      src: getAssetPath("/Japan1.jpg"), 
      alt: "Landmarks",
      title: "View from the top of Mount Fuji",
      description: "Captured using my iPhone on a cable car.",
      location: "Fujikawaguchiko, Japan",
      date: "Aug. 2024"
    },
    {
      id: 2,
      src: getAssetPath("/YasakaShrine.jpg"),
      alt: "Landmarks",
      title: "Yasaka Shrine",
      description: "Captured using my iPhone.",
      location: "Kyoto, Japan",
      date: "Aug. 2024"
    },
    {
      id: 3,
      src: getAssetPath("/NaraPark.jpg"),
      alt: "Nature",
      title: "Deers @ Nara Park!",
      description: "Captured using my iPhone.",
      location: "Nara, Japan",
      date: "Aug. 2024"
    },
    {
      id: 4,
      src: getAssetPath("/northernLights.jpg"),
      alt: "Nature",
      title: "Northern Lights seen @ Cornell",
      description: "Shot on iPhone with increased exposure time.",
      location: "Cornell University",
      date: "Oct. 2024"
    },
    {
      id: 5,
      src: getAssetPath("/columbia.JPG"),
      alt: "Street Photography",
      title: "Columbia Campus",
      description: "Taken on disposable camera and images were processed & scanned.",
      location: "Columbia University",
      date: "Jan. 2025"
    },
    {
      id: 6,
      src: getAssetPath("/photo6.jpg"),
      alt: "",
      title: "",
      description: "",
      location: "",
      date: ""
    },
    {
      id: 7,
      src: getAssetPath("/photo7.jpg"),
      alt: "",
      title: "",
      description: "",
      location: "",
      date: ""
    },
    {
      id: 8,
      src: getAssetPath("/photo8.jpg"),
      alt: "",
      title: "",
      description: "",
      location: "",
      date: ""
    },
    {
      id: 9,
      src: getAssetPath("/photo9.jpg"),
      alt: "",
      title: "",
      description: "",
      location: "",
      date: ""
    }
  ];

  const openPhotoModal = (photo) => {
    setSelectedPhoto(photo);
    document.body.style.overflow = 'hidden';
  };

  const closePhotoModal = () => {
    setSelectedPhoto(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md border-b border-gray-100 z-40">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <Link 
              to="/"
              className="text-xl font-bold text-gray-900 hover:text-blue-600 transition-colors"
            >
              Jimmy Chen
            </Link>
            <div className="flex items-center space-x-8">
              <Link
                to="/"
                className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors flex items-center gap-2"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Portfolio
              </Link>
              <a
                href={getAssetPath("/JimmyChen_resume.pdf")}
                download
                className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors flex items-center gap-1"
              >
                <Download className="w-4 h-4" />
                Resume
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-12 px-6 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-7xl font-bold mb-6 leading-[1.2] pb-2 bg-gradient-to-r from-slate-700 via-blue-600 to-indigo-600 bg-clip-text text-transparent">
            My Photo Album
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 leading-relaxed max-w-3xl mx-auto mb-8">
            When I'm not coding, you can find me exploring the world through my lens. 
            Here are some moments I've captured that speak to me — each telling its own story 
            of light, emotion, and the beauty I find in everyday life.
          </p>
          <div className="flex justify-center space-x-4">
            <span className="px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full text-sm font-medium text-slate-700 border border-slate-200">
              📸 Street Photography
            </span>
            <span className="px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full text-sm font-medium text-slate-700 border border-slate-200">
              🌍 Nature
            </span>
            <span className="px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full text-sm font-medium text-slate-700 border border-slate-200">
              🏔️ Landmarks
            </span>
          </div>
        </div>
      </section>

      {/* Photo Grid */}
      <section className="py-16 px-6 bg-gradient-to-br from-white to-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {photos.map((photo) => (
              <div 
                key={photo.id}
                className="group cursor-pointer"
                onClick={() => openPhotoModal(photo)}
              >
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="aspect-square bg-gradient-to-br from-slate-100 to-blue-100 overflow-hidden relative">
                    <img 
                      src={photo.src}
                      alt={photo.alt}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                    <div className="hidden items-center justify-center w-full h-full absolute inset-0 bg-slate-100">
                      <div className="text-center">
                        <div className="w-16 h-16 bg-slate-200 rounded-full flex items-center justify-center mx-auto mb-3">
                          <span className="text-2xl">📸</span>
                        </div>
                        <p className="text-slate-500 text-sm">Photo Preview</p>
                      </div>
                    </div>
                    
                    {/* Overlay on hover */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-center">
                        <p className="text-sm font-medium">Click to view</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-slate-800 mb-1">{photo.title}</h3>
                    <p className="text-sm text-slate-500">{photo.location} • {photo.date}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Modal */}
      {selectedPhoto && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={closePhotoModal}
        >
          <div 
            className="bg-white rounded-2xl max-w-5xl max-h-[90vh] overflow-hidden flex flex-col lg:flex-row shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Image Section */}
            <div className="flex-1 flex items-center justify-center bg-slate-50 min-h-[300px] lg:min-h-[600px]">
              <img 
                src={selectedPhoto.src}
                alt={selectedPhoto.alt}
                className="max-w-full max-h-full object-contain"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div className="hidden items-center justify-center w-full h-full">
                <div className="text-center">
                  <div className="w-16 h-16 bg-slate-200 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-2xl">📸</span>
                  </div>
                  <p className="text-slate-500">Image not found</p>
                </div>
              </div>
            </div>
            
            {/* Details Section */}
            <div className="w-full lg:w-96 p-8 flex flex-col">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-slate-800 mb-2">{selectedPhoto.title}</h3>
                  <p className="text-slate-500">{selectedPhoto.location} • {selectedPhoto.date}</p>
                </div>
                <button
                  onClick={closePhotoModal}
                  className="p-2 hover:bg-slate-100 rounded-full transition-colors"
                >
                  <svg className="w-6 h-6 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              <div className="flex-1">
                <p className="text-slate-600 leading-relaxed mb-6">{selectedPhoto.description}</p>
              </div>
              
              <div className="pt-4 border-t border-slate-200">
                <p className="text-xs text-slate-400 uppercase tracking-wide mb-3">Category</p>
                <span className="inline-block px-4 py-2 bg-slate-100 rounded-full text-sm font-medium text-slate-600">
                  {selectedPhoto.alt}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-gray-100 bg-slate-50">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gray-600 mb-4">
            Thanks for viewing my photography work!
          </p>
          <Link 
            to="/"
            className="inline-flex items-center text-blue-600 hover:text-indigo-600 transition-colors font-medium"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Portfolio
          </Link>
        </div>
      </footer>
    </div>
  );
};

export default Photography;