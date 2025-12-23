import React, { useState, useRef, useEffect, useCallback } from "react";
import { ChevronUp, ChevronDown } from "lucide-react";

function SidebarSlider({ items, title }) {
  const [scrollTop, setScrollTop] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);
  const contentRef = useRef(null);

  const visibleHeight = 168; // Height of visible area (4 items)
  const [contentHeight, setContentHeight] = useState(0);
  const [showScrollbar, setShowScrollbar] = useState(false);

  // Calculate content height and determine if scrollbar is needed
  useEffect(() => {
    if (contentRef.current) {
      const height = contentRef.current.scrollHeight;
      setContentHeight(height);
      setShowScrollbar(height > visibleHeight);
    }
  }, [items, visibleHeight]);

  const scrollbarHeight = showScrollbar
    ? Math.max((visibleHeight / contentHeight) * visibleHeight, 40)
    : 0;

  const maxScroll = Math.max(0, contentHeight - visibleHeight);
  const scrollbarTop = maxScroll > 0 ? (scrollTop / maxScroll) * (visibleHeight - scrollbarHeight) : 0;

  const handleScrollUp = () => {
    setScrollTop((prev) => Math.max(0, prev - 42));
  };

  const handleScrollDown = () => {
    setScrollTop((prev) => Math.min(maxScroll, prev + 42));
  };

  const handleMouseDown = (e) => {
    setIsDragging(true);
    e.preventDefault();
  };

  // Wrap in useCallback to prevent recreating on every render
  const handleMouseMove = useCallback((e) => {
    if (!isDragging) return;

    const container = containerRef.current;
    if (!container) return;

    const rect = container.getBoundingClientRect();
    const y = e.clientY - rect.top;
    const maxScrollbarTop = visibleHeight - scrollbarHeight;
    const newScrollbarTop = Math.max(0, Math.min(y - scrollbarHeight / 2, maxScrollbarTop));
    
    if (maxScrollbarTop > 0) {
      const newScrollTop = (newScrollbarTop / maxScrollbarTop) * maxScroll;
      setScrollTop(newScrollTop);
    }
  }, [isDragging, visibleHeight, scrollbarHeight, maxScroll]);

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  // Handle mouse events with proper cleanup
  useEffect(() => {
    if (isDragging) {
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
      
      return () => {
        document.removeEventListener("mousemove", handleMouseMove);
        document.removeEventListener("mouseup", handleMouseUp);
      };
    }
  }, [isDragging, handleMouseMove, handleMouseUp]);

  // If content fits without scrolling, show all items
  if (!showScrollbar) {
    return (
      <div>
        <h3 className="text-xs font-semibold text-gray-500 uppercase mb-3">
          {title}
        </h3>
        <nav className="space-y-1">{items}</nav>
      </div>
    );
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-xs font-semibold text-gray-500 uppercase">{title}</h3>
        <div className="flex gap-1">
          <button
            onClick={handleScrollUp}
            disabled={scrollTop === 0}
            className="p-1 rounded hover:bg-gray-800 disabled:opacity-30 disabled:cursor-not-allowed transition"
            aria-label="Scroll up"
          >
            <ChevronUp size={14} />
          </button>
          <button
            onClick={handleScrollDown}
            disabled={scrollTop >= maxScroll}
            className="p-1 rounded hover:bg-gray-800 disabled:opacity-30 disabled:cursor-not-allowed transition"
            aria-label="Scroll down"
          >
            <ChevronDown size={14} />
          </button>
        </div>
      </div>

      <div className="relative flex gap-3">
        {/* Content Area */}
        <div 
          className="flex-1 overflow-hidden" 
          style={{ height: `${visibleHeight}px` }}
        >
          <div
            ref={contentRef}
            className="transition-transform duration-200 ease-out"
            style={{
              transform: `translateY(-${scrollTop}px)`,
            }}
          >
            <nav className="space-y-1">{items}</nav>
          </div>
        </div>

        {/* Custom Scrollbar Track */}
        <div
          ref={containerRef}
          className="relative w-3 bg-gray-800/50 rounded-full cursor-pointer"
          style={{ height: `${visibleHeight}px` }}
          onClick={(e) => {
            const rect = containerRef.current.getBoundingClientRect();
            const y = e.clientY - rect.top;
            const maxScrollbarTop = visibleHeight - scrollbarHeight;
            const newScrollbarTop = Math.max(0, Math.min(y - scrollbarHeight / 2, maxScrollbarTop));
            
            if (maxScrollbarTop > 0) {
              const newScrollTop = (newScrollbarTop / maxScrollbarTop) * maxScroll;
              setScrollTop(newScrollTop);
            }
          }}
        >
          {/* Scrollbar Thumb */}
          <div
            className="absolute w-full bg-gray-600 hover:bg-gray-500 active:bg-gray-400 rounded-full cursor-grab active:cursor-grabbing transition-colors"
            style={{
              height: `${scrollbarHeight}px`,
              top: `${scrollbarTop}px`,
            }}
            onMouseDown={handleMouseDown}
          />
        </div>
      </div>
    </div>
  );
}

export default SidebarSlider;