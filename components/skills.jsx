'use client';

import Image from 'next/image';

const techItems = [
  { img: '/Blender.webp', text: 'Blender' },
  { img: '/Figma.webp', text: 'Figma' },
  { img: '/VS.webp', text: 'VS Code' },
  { img: '/React.webp', text: 'React' },
  { img: '/Git.webp', text: 'GitHub' },
  { img: '/SQL.webp', text: 'SQL Server M' },
];

export default function Skills() {
  return (
    <div className="w-full border-y items-center border-white opacity-25 py-2 sm:px-8 md:px-2 lg:px-2 bg-transparent">
      <div className="flex flex-wrap sm:flex gap-12 justify-center">
        {techItems.map((item, index) => (
          <div
            key={index}
            className="flex flex-col sm:flex-row items-center gap-2 sm:gap-10"
          >
            <div className="w-5 h-5 sm:w-20 sm:h-20 relative shrink-0">
              <Image
                src={item.img}
                alt={item.text}
                layout="fill"
                objectFit="contain"
                className="rounded-md"
              />
            </div>
            <p className="text-white text-base sm:text-lg text-center sm:text-left">
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
