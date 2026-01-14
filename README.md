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
- **Documents** (`/documents`) - Browse and view Spark project files

## Document Viewers

The app includes specialized viewers for different file types:

### 📝 Markdown Viewer
- View `.md` files with formatted rendering
- Supports headings, lists, code blocks, and more
- Route: `/documents/markdown/[filename]`

### 📊 Excel Viewer
- View `.xlsx` and `.xls` files directly in the browser
- Switch between multiple sheets with tab navigation
- Displays spreadsheet data in a formatted table
- Option to download original files
- Route: `/documents/excel/[filename]`

### 📽️ PowerPoint Files
- PowerPoint presentations (`.pptx`) are available for download
- Files are stored in the `public` folder for easy access

## Spark Project Files

All Spark-related documents have been organized in the `/public` folder:

- **Markdown**: `base_knowledge.md`
- **Excel Files**: 
  - Digital Policy Office AI Application Impact Assessment
  - Metadata Template
- **PowerPoint Presentations**:
  - Spark ARB v1.1 with comments
  - SPARK AS2 Showcase
  - Spark Data Governance Review Template
  - SPARK Roadshow App Team
  - Sprint 3_B

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
│   ├── documents/
│   │   ├── markdown/
│   │   │   └── [filename]/
│   │   │       └── page.tsx
│   │   ├── excel/
│   │   │   └── [filename]/
│   │   │       └── page.tsx
│   │   └── page.tsx
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── components/
│   └── Navigation.tsx
├── public/
│   ├── base_knowledge.md
│   ├── *.xlsx (Excel files)
│   └── *.pptx (PowerPoint files)
├── package.json
└── README.md
```

## Technologies Used

- Next.js 14 (App Router)
- React 18
- TypeScript
- CSS3
- react-markdown (Markdown rendering)
- xlsx (Excel file parsing)
- File System API (Server-side file reading)

## License

MIT
