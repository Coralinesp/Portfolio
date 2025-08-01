import { ArrowRight } from "lucide-react";
import Link from "next/link";


export default function ProjectCard({
  title,
  description,
  cover,
  tags = [],
  color = "#fff",
  role,
  industry,
  toolkit,
  link
}) {

  const bgColorOpacity = `${color}26`; // ~15%
  const bgColorHover = `${color}70`;   // ~44%

  return (
    
    <div className="grid grid-cols-1 md:grid-cols-5 gap-6 items-center">
      {/* Div externo SIN backgroundImage */}
      <div className="md:col-span-3 flex justify-center py-2">
        <div
          className="w-full max-w-[700px] h-[450px] bg-white/5 hover:bg-white/10 outline outline-[1.5px] outline-neutral-200/20 rounded-[24px] transition-all duration-300 relative"
        >
          {/* Div interno CON backgroundImage */}
          <div
            className="absolute rounded-[20px]"
            style={{
              top: "10px",
              left: "10px",
              right: "10px",
              bottom: "10px",
              backgroundImage: cover ? `url(${cover})` : undefined,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          />
        </div>
      </div>

      {/* Texto */}
      <div className="md:col-span-2 flex flex-col justify-center text-left text-white gap-3">
        <h3 className="text-3xl font-bold">{title}</h3>
        <div className="flex gap-2 flex-wrap">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="text-sm font-semibold px-3 py-1 rounded-full"
              style={{
                border: `1.5px solid ${color}`,
                color: color,
                backgroundColor: `${color}26`, // 15% opacity
              }}
            >
              {tag}
            </span>
          ))}
        </div>
        <p className="text-sm text-white/80">{description}</p>
        <div className="mt-4 flex flex-col gap-1 text-sm font-semibold text-white/80">
          {role && <span>Role: {role}</span>}
          {industry && <span>Industry: {industry}</span>}
          {toolkit && <span>Toolkit: {toolkit}</span>}
        </div>

        {/* Botón View Case Study */}
        <div className="mt-6">
          <Link
            href={link}
            className="inline-flex items-center gap-2 text-sm font-semibold rounded-full px-4 py-2 max-w-max transition-colors duration-300 ease-in-out"
            style={{
              border: `1.5px solid ${color}`,
              color: color,
              backgroundColor: bgColorOpacity,
              cursor: "pointer",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = bgColorHover;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = bgColorOpacity;
            }}
          >
            View Details
            <ArrowRight size={16} stroke={color} />
          </Link>
        </div>
      </div>
    </div>
  );
}
