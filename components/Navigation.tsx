import Link from 'next/link'

export default function Navigation() {
  return (
    <nav className="nav">
      <div className="nav-content">
        <Link href="/" className="nav-title">
          📚 Docs App
        </Link>
        <ul className="nav-links">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/docs/getting-started">Getting Started</Link>
          </li>
          <li>
            <Link href="/docs/installation">Installation</Link>
          </li>
          <li>
            <Link href="/docs/api-reference">API Reference</Link>
          </li>
          <li>
            <Link href="/docs/examples">Examples</Link>
          </li>
          <li>
            <Link href="/documents">Documents</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}
