import Link from 'next/link'
import { readdirSync } from 'fs'
import { join } from 'path'

export default function DocumentsPage() {
  // Get all files from public directory
  const publicPath = join(process.cwd(), 'public')
  const files = readdirSync(publicPath)
  
  // Categorize files
  const markdownFiles = files.filter(f => f.endsWith('.md'))
  const excelFiles = files.filter(f => f.endsWith('.xlsx') || f.endsWith('.xls'))
  const powerpointFiles = files.filter(f => f.endsWith('.pptx') || f.endsWith('.ppt'))

  return (
    <div className="doc-container">
      <h1>📁 Spark Documents</h1>
      <p>Browse and view all Spark-related documentation and files.</p>

      {markdownFiles.length > 0 && (
        <>
          <h2>📝 Markdown Documents</h2>
          <div className="file-list">
            {markdownFiles.map((file) => (
              <Link 
                key={file} 
                href={`/documents/markdown/${encodeURIComponent(file)}`}
                className="file-item"
              >
                <span className="file-icon">📄</span>
                <span className="file-name">{file}</span>
              </Link>
            ))}
          </div>
        </>
      )}

      {excelFiles.length > 0 && (
        <>
          <h2>📊 Excel Spreadsheets</h2>
          <div className="file-list">
            {excelFiles.map((file) => (
              <Link 
                key={file} 
                href={`/documents/excel/${encodeURIComponent(file)}`}
                className="file-item"
              >
                <span className="file-icon">📊</span>
                <span className="file-name">{file}</span>
              </Link>
            ))}
          </div>
        </>
      )}

      {powerpointFiles.length > 0 && (
        <>
          <h2>📽️ PowerPoint Presentations</h2>
          <div className="file-list">
            {powerpointFiles.map((file) => (
              <a 
                key={file} 
                href={`/${file}`}
                download
                className="file-item"
              >
                <span className="file-icon">📽️</span>
                <span className="file-name">{file}</span>
                <span className="download-badge">⬇️ Download</span>
              </a>
            ))}
          </div>
          <p className="note">
            💡 PowerPoint files can be downloaded. For online viewing, consider uploading to Google Slides or Office 365.
          </p>
        </>
      )}
    </div>
  )
}
