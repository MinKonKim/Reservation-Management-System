import type { Config } from "tailwindcss";

export default {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/shared/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		fontFamily: {
  			sans: [
  				'var(--font-inter)',
  				'system-ui',
  				'sans-serif'
  			],
  			mono: [
  				'var(--font-roboto)',
  				'monospace'
  			]
  		},
  		colors: {
  			primary: {
  				'100': '#E9EDF3',
  				'200': '#D3DAE7',
  				'300': '#BDC7DB',
  				'400': '#A7B4CF',
  				'500': '#91A2C3',
  				'600': '#7B8FB7',
  				'700': '#647CA9',
  				'800': '#4C6081',
  				'900': '#2E3A59',
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				'100': '#F8F9FA',
  				'200': '#F3F4F7',
  				'300': '#EEEFF2',
  				'400': '#E8EAEE',
  				'500': '#E2E5EA',
  				'600': '#DBDFE5',
  				'700': '#D4D9E0',
  				'800': '#BEC3CC',
  				'900': '#A8AEB8',
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			point: {
  				'100': '#FFF2EB',
  				'200': '#FFE6D7',
  				'300': '#FFD9C2',
  				'400': '#FFCCAE',
  				'500': '#FF884B',
  				'600': '#F3773E',
  				'700': '#E65B2A',
  				'800': '#C84D22',
  				'900': '#A33E1C'
  			},
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
