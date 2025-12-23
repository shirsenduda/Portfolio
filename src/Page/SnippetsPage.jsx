import React, { useState } from "react";

import {
  Home,
  TrendingUp,
  Code,
  Video,
  Instagram,
  Github,
  Youtube,
  Share2,
  ShoppingCart,
  FileText,
  Zap,
  Menu,
  X,
} from "lucide-react";

// ==================== SNIPPETS PAGE ====================
function SnippetsPage() {
  return (
    <div className="max-w-6xl mx-auto p-4 md:p-8">
      <h1 className="text-4xl font-bold mb-6">Code Snippets</h1>
      <div className="space-y-4">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="bg-gray-900 rounded-2xl p-6 border border-gray-800">
            <h3 className="text-xl font-semibold mb-3">Snippet Title {i}</h3>
            <div className="bg-gray-950 rounded-lg p-4 font-mono text-sm text-green-400">
              <code>const greeting = "Hello World";</code>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SnippetsPage;