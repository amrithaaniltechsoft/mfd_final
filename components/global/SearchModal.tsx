"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Search, X, ArrowRight, Sparkles } from "lucide-react";
import { products as staticProducts, Product } from "@/data/products";
import { getProducts } from "@/lib/api";

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialQuery?: string;
}

export default function SearchModal({ isOpen, onClose, initialQuery = "" }: SearchModalProps) {
  const [query, setQuery] = useState(initialQuery);
  const [products, setProducts] = useState<Product[]>(staticProducts);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  useEffect(() => {
    let active = true;
    getProducts().then((data) => {
      if (active && data.length > 0) setProducts(data);
    });
    return () => {
      active = false;
    };
  }, []);

  // Animated Placeholder Phrases for Search Modal
  const placeholderPhrases = React.useMemo(
    () => [
      "Search 'Precision Die Mould'...",
      "Search 'Progressive Mould'...",
      "Search 'Tungsten Carbide Tooling'...",
      "Search 'Plastic Injection Mould'...",
      "Search 'Extrusion Die Cavity'...",
      "Search 'Deep Drawing Sheet Metal Die'...",
    ],
    []
  );

  const [currentPhraseIdx, setCurrentPhraseIdx] = useState(0);
  const [animatedPlaceholder, setAnimatedPlaceholder] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  // Typewriter effect for modal placeholder
  useEffect(() => {
    if (!isOpen) return;
    const currentPhrase = placeholderPhrases[currentPhraseIdx];
    const typingSpeed = isDeleting ? 30 : 60;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setAnimatedPlaceholder(currentPhrase.substring(0, animatedPlaceholder.length + 1));
        if (animatedPlaceholder === currentPhrase) {
          setTimeout(() => setIsDeleting(true), 1800);
        }
      } else {
        setAnimatedPlaceholder(currentPhrase.substring(0, animatedPlaceholder.length - 1));
        if (animatedPlaceholder === "") {
          setIsDeleting(false);
          setCurrentPhraseIdx((prev) => (prev + 1) % placeholderPhrases.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [animatedPlaceholder, isDeleting, currentPhraseIdx, placeholderPhrases, isOpen]);

  // Sync initial query & auto-focus input when opened
  useEffect(() => {
    if (isOpen) {
      setQuery(initialQuery);
      setTimeout(() => {
        inputRef.current?.focus();
      }, 50);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen, initialQuery]);

  // Handle ESC key to close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const popularTags = [
    "PRECISION DIE MOULD",
    "FORMING MOULD",
    "EXTRUSION DIE",
    "CARBIDE TOOLING",
    "INJECTION MOULD",
    "GAUGE & FIXTURE",
  ];

  const filteredProducts = products.filter((item) => {
    const q = query.toLowerCase().trim();
    if (!q) return true;
    return (
      (item.title ?? "").toLowerCase().includes(q) ||
      (item.tag ?? "").toLowerCase().includes(q) ||
      (item.desc ?? "").toLowerCase().includes(q)
    );
  });

  const handleSelectProduct = (slug: string) => {
    onClose();
    router.push(`/products/${slug}`);
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onClose();
    if (query.trim()) {
      router.push(`/products?search=${encodeURIComponent(query.trim())}`);
    } else {
      router.push("/products");
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-black/80 animate-in fade-in duration-200">
      {/* Click backdrop to close */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Modal Dialog Container */}
      <div className="relative w-full max-w-2xl bg-[#0d0d0d] border border-zinc-800 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[85vh] text-white z-10 my-auto">
        {/* Top Search Input Header */}
        <div className="p-4 sm:p-5 border-b border-zinc-800/80 bg-[#111111] flex items-center gap-3">
          <Search className="w-5 h-5 text-[#A3E635] shrink-0" />
          <form onSubmit={handleSearchSubmit} className="flex-1 flex items-center">
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={animatedPlaceholder || "Search products..."}
              className="w-full bg-transparent text-base sm:text-lg font-medium text-white placeholder:text-zinc-500 focus:outline-none"
            />
          </form>

          {query && (
            <button
              onClick={() => setQuery("")}
              className="p-1 text-zinc-400 hover:text-white transition-colors rounded-md cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          )}

          <button
            onClick={onClose}
            className="p-1.5 bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-white rounded-lg border border-zinc-800 transition-colors cursor-pointer text-xs font-semibold uppercase px-3"
          >
            Esc
          </button>
        </div>

        {/* Results Clean Minimalist List View */}
        <div className="flex-1 overflow-y-auto p-3 sm:p-4 space-y-1 custom-scrollbar">
          {filteredProducts.length > 0 ? (
            <>
              <div className="text-[11px] font-bold uppercase tracking-wider text-zinc-500 px-3 py-1.5">
                {query.trim() ? `Matching Products (${filteredProducts.length})` : "Product Suggestions"}
              </div>

              <div className="divide-y divide-zinc-800/40">
                {filteredProducts.map((product: Product) => (
                  <div
                    key={product.slug}
                    onClick={() => handleSelectProduct(product.slug)}
                    className="group px-3 py-3 hover:bg-white/[0.04] rounded-xl transition-all flex items-center gap-4 cursor-pointer"
                  >
                    <div className="relative w-12 h-12 rounded-lg overflow-hidden bg-zinc-900 shrink-0 border border-zinc-800/80">
                      <Image
                        src={product.image}
                        alt={product.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>

                    <div className="flex-1 min-w-0 text-left space-y-0.5">
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-[#A3E635]">
                          {product.tag}
                        </span>
                      </div>
                      <h4 className="text-sm font-bold text-zinc-100 group-hover:text-[#A3E635] transition-colors truncate">
                        {product.title}
                      </h4>
                      <p className="text-xs text-zinc-400 font-normal line-clamp-1">
                        {product.desc}
                      </p>
                    </div>

                    <div className="p-1.5 text-zinc-600 group-hover:text-zinc-300 group-hover:translate-x-1 transition-all">
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                ))}
              </div>
            </>
          ) : (
            <div className="py-12 text-center space-y-3">
              <p className="text-sm text-zinc-400 font-medium">
                No manufacturing products found matching &ldquo;<span className="text-white font-bold">{query}</span>&rdquo;
              </p>
              <button
                onClick={() => setQuery("")}
                className="px-4 py-2 bg-[#111111] hover:bg-[#1a1a1a] text-[#A3E635] rounded-lg text-xs font-bold uppercase border border-zinc-800 transition-colors cursor-pointer"
              >
                Clear Search
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
