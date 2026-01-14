import Link from 'next/link'

export default function Home() {
  return (
    <div className="home-container">
      <h1>Welcome to Our Documentation</h1>
      <p>Explore our comprehensive documentation to get started quickly</p>
      
      <div className="card-grid">
        <Link href="/docs/getting-started" className="card">
          <h2>🚀 Getting Started</h2>
          <p>Learn the basics and get up and running in minutes</p>
        </Link>
        
        <Link href="/docs/installation" className="card">
          <h2>⚙️ Installation</h2>
          <p>Step-by-step installation guide for all platforms</p>
        </Link>
        
        <Link href="/docs/api-reference" className="card">
          <h2>📖 API Reference</h2>
          <p>Complete API documentation and reference guides</p>
        </Link>
        
        <Link href="/docs/examples" className="card">
          <h2>💡 Examples</h2>
          <p>Practical examples and code snippets to learn from</p>
        </Link>
        
        <Link href="/documents" className="card">
          <h2>📁 Spark Documents</h2>
          <p>Browse Spark project files including presentations, spreadsheets, and documentation</p>
        </Link>
      </div>
    </div>
  )
}
