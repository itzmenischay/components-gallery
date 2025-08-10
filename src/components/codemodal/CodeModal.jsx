import React, { useRef, useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { motion } from 'framer-motion';
import { FiCopy, FiCheck } from 'react-icons/fi';

const CodeModal = ({ code, onClose }) => {
  const modalRef = useRef(null);
  const [copied, setCopied] = useState(false);

  const handleClickOutside = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      onClose();
    }
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch (err) {
      console.error("Failed to copy code:", err);
    }
  };

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm px-4"
      onClick={handleClickOutside}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.25, ease: 'easeInOut' }}
    >
      <div
        ref={modalRef}
        className="relative w-[800px] h-[700px] bg-white/10 backdrop-blur-lg text-white rounded-lg p-6 border border-white/20 shadow-xl flex flex-col"
      >
        {/* Top-right actions */}
        <div className="absolute top-3 right-4 flex items-center gap-3">
          {/* Copy icon */}
          <button
            onClick={handleCopy}
            className="text-white text-xl hover:text-green-400 transition cursor-pointer"
            title="Copy code"
          >
            {copied ? <FiCheck /> : <FiCopy />}
          </button>

          {/* Close icon */}
          <button
            onClick={onClose}
            className="text-white text-2xl hover:text-red-400 transition cursor-pointer"
            title="Close"
          >
            &times;
          </button>
        </div>

        <h2 className="text-xl font-semibold mb-4">Code</h2>

        <div className="flex-1 overflow-auto rounded-md border border-white/10">
          <SyntaxHighlighter
            language="jsx"
            style={atomDark}
            customStyle={{
              background: 'transparent',
              padding: '1rem',
              fontSize: '0.875rem',
              margin: 0,
              height: '100%',
              overflowX: 'auto',
              overflowY: 'auto',
            }}
            wrapLines
            wrapLongLines
            showLineNumbers
          >
            {code}
          </SyntaxHighlighter>
        </div>
      </div>
    </motion.div>
  );
};

export default CodeModal;
