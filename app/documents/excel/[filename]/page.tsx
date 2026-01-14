'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import * as XLSX from 'xlsx'

interface Props {
  params: {
    filename: string
  }
}

export default function ExcelViewer({ params }: Props) {
  const filename = decodeURIComponent(params.filename)
  const [sheets, setSheets] = useState<{[key: string]: any[]}>({})
  const [sheetNames, setSheetNames] = useState<string[]>([])
  const [activeSheet, setActiveSheet] = useState<string>('')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function loadExcel() {
      try {
        const response = await fetch(`/${filename}`)
        if (!response.ok) {
          throw new Error('Failed to fetch file')
        }
        
        const arrayBuffer = await response.arrayBuffer()
        const workbook = XLSX.read(arrayBuffer, { type: 'array' })
        
        const sheetsData: {[key: string]: any[]} = {}
        workbook.SheetNames.forEach(sheetName => {
          const worksheet = workbook.Sheets[sheetName]
          sheetsData[sheetName] = XLSX.utils.sheet_to_json(worksheet, { header: 1 })
        })
        
        setSheets(sheetsData)
        setSheetNames(workbook.SheetNames)
        setActiveSheet(workbook.SheetNames[0] || '')
        setLoading(false)
      } catch (err) {
        setError('Failed to load Excel file')
        setLoading(false)
      }
    }
    
    loadExcel()
  }, [filename])

  if (loading) {
    return (
      <div className="doc-container">
        <p>Loading Excel file...</p>
      </div>
    )
  }

  if (error) {
    return (
      <div className="doc-container">
        <Link href="/documents" style={{ color: '#3498db', textDecoration: 'none' }}>
          ← Back to Documents
        </Link>
        <h1>Error</h1>
        <div style={{ padding: '2rem', background: '#fee', borderRadius: '8px', color: '#c00' }}>
          {error}
        </div>
      </div>
    )
  }

  return (
    <div className="doc-container">
      <div style={{ marginBottom: '2rem' }}>
        <Link href="/documents" style={{ color: '#3498db', textDecoration: 'none' }}>
          ← Back to Documents
        </Link>
      </div>
      
      <h1>📊 {filename}</h1>
      
      {sheetNames.length > 1 && (
        <div className="sheet-tabs">
          {sheetNames.map(name => (
            <button
              key={name}
              className={`sheet-tab ${activeSheet === name ? 'active' : ''}`}
              onClick={() => setActiveSheet(name)}
            >
              {name}
            </button>
          ))}
        </div>
      )}
      
      <div className="excel-table-container">
        {sheets[activeSheet] && sheets[activeSheet].length > 0 ? (
          <table className="excel-table">
            <tbody>
              {sheets[activeSheet].map((row: any[], rowIndex: number) => (
                <tr key={rowIndex}>
                  {row.map((cell: any, cellIndex: number) => (
                    <td key={cellIndex}>
                      {cell !== null && cell !== undefined ? String(cell) : ''}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No data in this sheet</p>
        )}
      </div>
      
      <div style={{ marginTop: '2rem' }}>
        <a 
          href={`/${filename}`} 
          download
          style={{ 
            display: 'inline-block',
            padding: '0.75rem 1.5rem',
            background: '#3498db',
            color: 'white',
            borderRadius: '8px',
            textDecoration: 'none'
          }}
        >
          ⬇️ Download Original File
        </a>
      </div>
    </div>
  )
}
