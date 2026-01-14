import { readFileSync } from 'fs'
import { join } from 'path'
import ReactMarkdown from 'react-markdown'
import Link from 'next/link'

interface Props {
  params: {
    filename: string
  }
}

export default function MarkdownViewer({ params }: Props) {
  const filename = decodeURIComponent(params.filename)
  const filePath = join(process.cwd(), 'public', filename)
  
  let content = ''
  let error = null
  
  try {
    content = readFileSync(filePath, 'utf-8')
  } catch (e) {
    error = 'File not found or could not be read.'
  }

  return (
    <div className="doc-container">
      <div style={{ marginBottom: '2rem' }}>
        <Link href="/documents" style={{ color: '#3498db', textDecoration: 'none' }}>
          ← Back to Documents
        </Link>
      </div>
      
      <h1>📄 {filename}</h1>
      
      {error ? (
        <div style={{ padding: '2rem', background: '#fee', borderRadius: '8px', color: '#c00' }}>
          {error}
        </div>
      ) : (
        <div className="markdown-content">
          <ReactMarkdown>{content}</ReactMarkdown>
        </div>
      )}
    </div>
  )
}
