# Next.js Documentation App

A simple and elegant Next.js application showcasing documentation across different routes.

## Features

- 📚 Multiple documentation pages with clean navigation
- 🎨 Modern and responsive UI design
- ⚡ Built with Next.js 14 and App Router
- 🔍 Easy-to-navigate documentation structure
- 💅 Beautiful styling with custom CSS

## Documentation Routes

- **Home** (`/`) - Landing page with quick links
- **Getting Started** (`/docs/getting-started`) - Introduction and prerequisites
- **Installation** (`/docs/installation`) - Detailed installation guide
- **API Reference** (`/docs/api-reference`) - Complete API documentation
- **Examples** (`/docs/examples`) - Practical code examples

## Getting Started

### Prerequisites

- Node.js 18.0 or higher
- npm or yarn

### Installation

1. Install dependencies:

```bash
npm install
```

2. Run the development server:

```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
.
├── app/
│   ├── docs/
│   │   ├── getting-started/
│   │   │   └── page.tsx
│   │   ├── installation/
│   │   │   └── page.tsx
│   │   ├── api-reference/
│   │   │   └── page.tsx
│   │   └── examples/
│   │       └── page.tsx
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── components/
│   └── Navigation.tsx
├── package.json
└── README.md
```

## Technologies Used

- Next.js 14
- React 18
- TypeScript
- CSS3

## License

MIT
