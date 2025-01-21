import { Code } from "bright";
import Image, { ImageProps } from "next/image";
import Callout from "@/core/components/Callout";
import { BsFileMinus, BsPlusCircle } from "react-icons/bs";
import Link from "next/link";
import { EMAIL } from "@/config/contact";
import { useId } from "react";
import { FaAngleDoubleDown } from "react-icons/fa";
import { cn } from "@/lib/utils";
import { CustomBlock } from "./BrightExtensions";
import { Email } from "@/core/components/Email";

// ! See the Bright documentation for more information on how to use the Code component
// ! https://bright.codehike.org/

Code.lineNumbers = true; // Enable line numbers for all code blocks
Code.theme = {
  dark: "dark-plus",
  light: "github-light",
  // using a different CSS selector:
  // lightSelector: '[data-theme="light"]',
  // lightSelector: 'html.light',
};
Code.extensions = [
  CustomBlock,
];

const PreServerSide = (
  { children, ...props }: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLElement>,
    HTMLPreElement
  >,
) => {
  return (
    <Code
      {...props}
      className="!overflow-visible" // TODO see if this causes any issues?? fingers crossed
      // ? solves an issue where the code block is cut off if a sidenote is opened directly above it
    >
      {children}
    </Code>
  );
};

const Highlight = (props: { children: any }) => {
  return (
    <span className="border border-blue-400/50 relative inline rounded-lg">
      <span className="bg-blue-600/50 text-zinc-200 box-decoration-slice py-0.5 px-2 rounded-lg">
        {props.children}
      </span>
    </span>
  );
};

const MDXImage = (props: any) => (
  <Image
    className="mb-4 rounded-lg image-shadow"
    width={props.width || 1000}
    height={props.height || 1000}
    {...(props as ImageProps)}
  />
);

const Sidenote = (props: { children: any }) => {
  let id = useId(); // Generate a unique ID for each sidenote
  return (
    <>
      <label
        htmlFor={`sn-${id}`}
        className="margin-toggle sidenote-number"
      >
        <BsPlusCircle className="inline-block h-4 w-4 md:hidden" />
        {/* <CiCircleMore className="inline-block h-4 w-4 md:hidden" /> */}
      </label>
      <input
        type="checkbox"
        id={`sn-${id}`}
        name={`sn-${id}`}
        className="margin-toggle custom-checkbox peer"
      />
      <span className="sidenote">
        {props.children}
      </span>
    </>
  );
};

const EconomicValueChart = () => {
  return (
    <div className="w-full p-2 my-8 rounded-2xl bg-zinc-50">
      <svg 
        viewBox="0 0 600 400" 
        className="w-full h-full"
      >        
        {/* Gradients definition */}
        <defs>
          <linearGradient id="capitalGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style={{ stopColor: '#3b82f6', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#2563eb', stopOpacity: 1 }} />
          </linearGradient>
          <linearGradient id="laborGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style={{ stopColor: '#f43f5e', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#e11d48', stopOpacity: 1 }} />
          </linearGradient>
        </defs>
        
        {/* Grid lines */}
        <g stroke="#e2e8f0" strokeWidth="1" opacity="0.5">
          {[100, 200, 300, 400, 500].map(x => (
            <line key={`v${x}`} x1={x} y1={50} x2={x} y2={350} />
          ))}
          {[50, 200, 350].map(y => (
            <line key={`h${y}`} x1={100} y1={y} x2={500} y2={y} />
          ))}
        </g>
        
        {/* Axis */}
        <g stroke="#64748b" strokeWidth="2" strokeLinecap="round">
          <line x1="100" y1="350" x2="500" y2="350" />
          <line x1="100" y1="50" x2="100" y2="350" />
        </g>
        
        {/* Data lines */}
        <path 
          d="M 100 200 Q 300 50 500 50" 
          fill="none" 
          stroke="url(#capitalGradient)" 
          strokeWidth="3" 
          strokeLinecap="round"
        />
        <path 
          d="M 100 200 Q 300 350 500 350" 
          fill="none" 
          stroke="url(#laborGradient)" 
          strokeWidth="3" 
          strokeLinecap="round"
        />
        
        {/* Labels */}
        <g 
          className="font-sans" 
          fill="#334155"
        >
          {/* X-axis labels */}
          <text x="100" y="380" textAnchor="middle" fontSize="14">Present</text>
          <text x="500" y="380" textAnchor="middle" fontSize="14">AGI</text>
          
          {/* Y-axis labels */}
          <text x="80" y="50" textAnchor="end" dominantBaseline="middle" fontSize="14">High</text>
          <text x="80" y="350" textAnchor="end" dominantBaseline="middle" fontSize="14">Low</text>
          
          {/* Title */}
          <text 
            x="300" 
            y="30" 
            textAnchor="middle" 
            fontSize="18" 
            fontWeight="600" 
            fill="#1e293b"
          >
            Economic Value Over Time
          </text>
          
          {/* Legend */}
          <g transform="translate(400, 80)">
            <rect 
              width="90" 
              height="50" 
              fill="white" 
              stroke="#e2e8f0" 
              rx="5" 
              ry="5"
            />
            <circle cx="15" cy="15" r="6" fill="url(#capitalGradient)"/>
            <circle cx="15" cy="35" r="6" fill="url(#laborGradient)"/>
            <text x="30" y="15" dominantBaseline="middle" dx="5" fontSize="12">Capital</text>
            <text x="30" y="35" dominantBaseline="middle" dx="5" fontSize="12">Labor</text>
          </g>
        </g>
      </svg>
    </div>
  );
};

const ServerComponents = {
  pre: PreServerSide,
  Image: MDXImage,
  img: MDXImage,
  Link,
  Callout,
  Sidenote,
  Email,
  Highlight,
  EconomicValueChart,
};

export default ServerComponents;
