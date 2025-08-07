import React, { useRef } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const CodeModal = ({ code, onClose }) => {
  const modalRef = useRef(null);

  if (!code) return null;

  const handleClickOutside = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm px-4"
      onClick={handleClickOutside}
    >
      <div
        ref={modalRef}
        className="relative w-[800px] h-[700px] bg-white/10 backdrop-blur-lg text-white rounded-lg p-6 border border-white/20 shadow-xl flex flex-col"
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-4 text-white text-2xl hover:text-red-400 transition cursor-pointer"
        >
          &times;
        </button>

        <h2 className="text-xl font-semibold mb-4">Code</h2>

        <div className="flex-1 overflow-auto rounded-md border border-white/10 pr-6">
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
    </div>
  );
};

export default CodeModal;
