'use client';

import { useEffect, useRef, useState } from 'react';
import { animate, stagger } from '@motionone/dom';

function splitTextInChunksWithSpaces(node, maxLength = 4) {
  const chunks = [];

  function processNode(node) {
    if (node.nodeType === Node.TEXT_NODE) {
      let text = node.textContent;
      const frag = document.createDocumentFragment();

      while (text.length > 0) {
        if (text[0] === ' ') {
          frag.appendChild(document.createTextNode(' '));
          text = text.slice(1);
          continue;
        }

        let chunkLength = maxLength;
        if (text.length > maxLength) {
          const nextSpaceIndex = text.indexOf(' ');
          if (nextSpaceIndex !== -1 && nextSpaceIndex < maxLength) {
            chunkLength = nextSpaceIndex;
          }
        } else {
          chunkLength = text.length;
        }

        const chunkText = text.slice(0, chunkLength);
        text = text.slice(chunkLength);

        const span = document.createElement('span');
        span.textContent = chunkText;
        span.style.display = 'inline-block';
        chunks.push(span);
        frag.appendChild(span);
      }

      node.parentNode.replaceChild(frag, node);
    } else if (node.nodeType === Node.ELEMENT_NODE) {
      [...node.childNodes].forEach(child => processNode(child));
    }
  }

  processNode(node);
  return chunks;
}

export default function AnimatedSplitText({ onAnimationEnd }) {
  const ref = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element || hasAnimated) return;

    element.style.visibility = 'hidden';

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const chunks = splitTextInChunksWithSpaces(element, 4);

          for (const chunk of chunks) {
            chunk.style.opacity = '0';
            chunk.style.transform = 'translateY(20px)';
          }

          element.style.visibility = 'visible';

          animate(
            chunks,
            { opacity: 1, transform: 'translateY(0)' },
            {
              delay: stagger(0.02),
              duration: 0.4,
              easing: 'ease-out',
            }
          ).finished.then(() => {
            setHasAnimated(true);
            if (onAnimationEnd) onAnimationEnd();
          });

          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [hasAnimated, onAnimationEnd]);

  return (
    <p
      ref={ref}
      className="text-white text-justify sm:text-center text-[10px] sm:text-lg md:text-xl lg:text-2xl font-light max-w-5xl"
    >
      I’m a <span style={{ color: '#708AFB' }}>multidisciplinary</span> designer and developer who thrives on crafting <span style={{ color: '#708AFB' }}>user-centered</span> digital experiences. From UX/UI design to frontend development and 3D visualization, I bring versatility, <span style={{ color: '#708AFB' }}>creativity</span>, and precision to every project — combining functionality with visual impact.
    </p>
  );
}
