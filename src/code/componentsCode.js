export const componentsCode = {
  HoverButton: `const HoverButton = ({ label, href }) => {
            return (
                <button className="font-semibold text-white text-lg h-[45px] w-[150px] rounded-full cursor-pointer transition-all duration-500 transform hover:scale-95 bg-gradient-to-r from-[#ff8d37] via-[#ff08ef] to-[#7300ff] bg-[length:200%] bg-right hover:bg-left">
                <a href={href} target="_blank">
                    {label}
                </a>
                </button>
            );
        };

        export default HoverButton;`,

    GradientText1:`const GradientText1 = ({ text }) => {
            return (
                <span className="text-[32px] font-semibold bg-gradient-to-b from-[#ff8d37] via-[#ff08ef] to-[#7300ff] bg-clip-text text-transparent">
                {text}
                </span>
            );
        };

        export default GradientText1;`,

    GradientText2:`const GradientText2 = ({ text }) => {
          return (
            <span className="text-[32px] font-semibold inline-block gradient-text-animated">
              {text}
            </span>
          );
        };
        
        export default GradientText2;

        // Inside index.css
        :root {
            --gradient-animation: gradient-shift 5s ease infinite;
            }

        @keyframes gradient-shift {
            0%, 100% {
                background-position: 0% 50%;
            }
            50% {
                background-position: 100% 50%;
            }
        }

        .gradient-text-animated {
            color: transparent;
            background-image: linear-gradient(to right, #a855f7, #ec4899, #eab308);
            background-clip: text;
            -webkit-background-clip: text;
            background-size: 200% 200%;
            animation: var(--gradient-animation);
        }`,

    ButtonRotatingBackgroundGradient:`const ButtonRotatingBackgroundGradient = ({ text }) => {
            return (
                <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-neutral-400 focus:ring-offset-2 focus:ring-offset-gray-900">
                <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#facc15_0%,#1e3a8a_50%,#facc15_100%)]" />
                <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-gray-950 px-8 py-1 text-sm font-medium text-gray-100 backdrop-blur-3xl">
                    {text}
                </span>
                </button>
            );
        };

        export default ButtonRotatingBackgroundGradient;`,

    GradientCard:`const GradientCard = ({ children }) => {
            return (
                <div className="relative w-40 h-40 flex items-center justify-center">
                {/* Blurred gradient background glow */}
                <div className="absolute inset-0 rounded-2xl blur-2xl opacity-60 bg-gradient-to-r from-[#a855f7] via-[#ec4899] to-[#eab308] bg-[length:200%_200%] animate-[gradient-shift_5s_linear_infinite]" />

                {/* Animated gradient border */}
                <div className="relative p-[2px] rounded-2xl bg-gradient-to-r from-[#a855f7] via-[#ec4899] to-[#eab308] bg-[length:200%_200%] animate-[gradient-shift_5s_linear_infinite]">
                    <div className="w-40 h-40 rounded-2xl bg-black flex items-center justify-center text-white text-sm">
                    {children}
                    </div>
                </div>
                </div>
            );
        };

        export default GradientCard;

        // Inside index.css
        @layer utilities {
            @keyframes gradient-shift {
                0%, 100% {
                    background-position: 0% 50%;
                }
                50% {
                    background-position: 100% 50%;
                }
            }

            .animate-gradient-shift {
                animation: gradient-shift 3s linear infinite;
            }
        }`,
        
    PerspectiveCard: `import { useState, useCallback } from 'react';
        
        function throttle(func, delay) {
          let lastCall = 0;
          return (...args) => {
            const now = new Date().getTime();
            if (now - lastCall < delay) {
              return;
            }
            lastCall = now;
            return func(...args);
          };
        }
        
        const PerspectiveCard = ({ children }) => {
          const [rotate, setRotate] = useState({ x: 0, y: 0 });
        
          const onMouseMove = useCallback(
            throttle((e) => {
              const card = e.currentTarget;
              const box = card.getBoundingClientRect();
              const x = e.clientX - box.left;
              const y = e.clientY - box.top;
              const centerX = box.width / 2;
              const centerY = box.height / 2;
              const rotateX = (y - centerY) / 4;
              const rotateY = (centerX - x) / 4;
        
              setRotate({ x: rotateX, y: rotateY });
            }, 100),
            []
          );
        
          const onMouseLeave = () => {
            setRotate({ x: 0, y: 0 });
          };
        
          return (
            <div
              className='card relative h-48 w-48 transition-[all_400ms_cubic-bezier(0.03,0.98,0.52,0.99)_0s] will-change-transform'
              onMouseMove={onMouseMove}
              onMouseLeave={onMouseLeave}
              style={{
                transform: \`perspective(1000px) rotateX(\${rotate.x}deg) rotateY(\${rotate.y}deg) scale3d(1, 1, 1)\`,
                transition: 'all 400ms cubic-bezier(0.03, 0.98, 0.52, 0.99) 0s',
              }}
            >
              <div className='group relative flex h-full w-full select-none items-center justify-center rounded-lg border border-gray-900 bg-gradient-to-tr from-slate-950 to-slate-500 text-sm font-light text-gray-300'>
                <span className='text-md bg-gradient-to-t from-gray-400 to-white bg-clip-text font-bold text-transparent'>
                  {children}
                </span>
              </div>
            </div>
          );
        };
        
        export default PerspectiveCard; `

};
