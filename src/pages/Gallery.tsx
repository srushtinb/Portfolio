import React, { useState } from 'react';
import { X } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images = [
    {
      url: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&q=80&w=800',
      title: 'Coding Session'
    },
    {
      url: 'https://images.unsplash.com/photo-1522252234503-e356532cafd5?auto=format&fit=crop&q=80&w=800',
      title: 'Development Setup'
    },
    {
      url: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800',
      title: 'Code Review'
    },
    {
      url: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800',
      title: 'Pair Programming'
    }
  ];

  return (
    <div className="min-h-screen py-20 px-4 max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold mb-12">Gallery</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {images.map((image, index) => (
          <div
            key={index}
            className="relative group cursor-pointer"
            onClick={() => setSelectedImage(image.url)}
          >
            <img
              src={image.url}
              alt={image.title}
              className="w-full h-64 object-cover rounded-lg"
            />
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg flex items-center justify-center">
              <p className="text-white text-lg font-medium">{image.title}</p>
            </div>
          </div>
        ))}
      </div>

      {selectedImage && (
        <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4">
          <button
            className="absolute top-4 right-4 text-white hover:text-gray-300"
            onClick={() => setSelectedImage(null)}
          >
            <X className="w-8 h-8" />
          </button>
          <img
            src={selectedImage}
            alt="Selected"
            className="max-w-full max-h-[90vh] object-contain"
          />
        </div>
      )}
    </div>
  );
};

export default Gallery;