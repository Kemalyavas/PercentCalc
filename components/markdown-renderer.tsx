'use client'

import React from 'react'

export function MarkdownRenderer({ content }: { content: string }) {
  const lines = content.split('\n')
  const elements: React.ReactNode[] = []
  let inCodeBlock = false
  let codeLines: string[] = []
  let key = 0

  function renderInline(text: string): React.ReactNode[] {
    const nodes: React.ReactNode[] = []
    const parts = text.split(/(\*\*.*?\*\*|\*.*?\*|`.*?`|\[.*?\]\(.*?\))/g)
    for (const part of parts) {
      if (part.startsWith('**') && part.endsWith('**')) {
        nodes.push(<strong key={key++}>{part.slice(2, -2)}</strong>)
      } else if (part.startsWith('*') && part.endsWith('*')) {
        nodes.push(<em key={key++}>{part.slice(1, -1)}</em>)
      } else if (part.startsWith('`') && part.endsWith('`')) {
        nodes.push(<code key={key++}>{part.slice(1, -1)}</code>)
      } else if (part.startsWith('[')) {
        const match = part.match(/\[(.+?)\]\((.+?)\)/)
        if (match) {
          nodes.push(<a key={key++} href={match[2]}>{match[1]}</a>)
        } else {
          nodes.push(part)
        }
      } else {
        nodes.push(part)
      }
    }
    return nodes
  }

  let i = 0
  while (i < lines.length) {
    const line = lines[i]

    if (line.trim().startsWith('```')) {
      if (inCodeBlock) {
        elements.push(<pre key={key++}><code>{codeLines.join('\n')}</code></pre>)
        codeLines = []
        inCodeBlock = false
      } else {
        inCodeBlock = true
      }
      i++
      continue
    }

    if (inCodeBlock) { codeLines.push(line); i++; continue }

    const trimmed = line.trim()
    if (!trimmed) { i++; continue }

    if (trimmed.startsWith('# ')) { elements.push(<h1 key={key++}>{renderInline(trimmed.slice(2))}</h1>); i++; continue }
    if (trimmed.startsWith('## ')) { elements.push(<h2 key={key++}>{renderInline(trimmed.slice(3))}</h2>); i++; continue }
    if (trimmed.startsWith('### ')) { elements.push(<h3 key={key++}>{renderInline(trimmed.slice(4))}</h3>); i++; continue }

    if (trimmed.startsWith('- ') || trimmed.startsWith('* ')) {
      const items: React.ReactNode[] = []
      while (i < lines.length && (lines[i].trim().startsWith('- ') || lines[i].trim().startsWith('* '))) {
        items.push(<li key={key++}>{renderInline(lines[i].trim().slice(2))}</li>)
        i++
      }
      elements.push(<ul key={key++}>{items}</ul>)
      continue
    }

    // Markdown table
    if (trimmed.startsWith('|') && trimmed.endsWith('|')) {
      const tableRows: string[] = []
      while (i < lines.length && lines[i].trim().startsWith('|') && lines[i].trim().endsWith('|')) {
        tableRows.push(lines[i].trim())
        i++
      }
      const separatorIdx = tableRows.findIndex(r => /^\|[\s:|-]+\|$/.test(r) && r.includes('-'))
      const headerRow = separatorIdx > 0 ? tableRows.slice(0, separatorIdx) : []
      const bodyRows = separatorIdx > 0 ? tableRows.filter((_, idx) => idx > separatorIdx) : tableRows.filter(r => !/^\|[\s:-]+\|$/.test(r))

      const parseRow = (row: string) =>
        row.split('|').slice(1, -1).map(cell => cell.trim())

      elements.push(
        <table key={key++}>
          {headerRow.length > 0 && (
            <thead>
              {headerRow.map(row => (
                <tr key={key++}>
                  {parseRow(row).map(cell => <th key={key++}>{renderInline(cell)}</th>)}
                </tr>
              ))}
            </thead>
          )}
          <tbody>
            {bodyRows.map(row => (
              <tr key={key++}>
                {parseRow(row).map(cell => <td key={key++}>{renderInline(cell)}</td>)}
              </tr>
            ))}
          </tbody>
        </table>
      )
      continue
    }

    if (/^\d+\.\s/.test(trimmed)) {
      const items: React.ReactNode[] = []
      while (i < lines.length && /^\d+\.\s/.test(lines[i].trim())) {
        items.push(<li key={key++}>{renderInline(lines[i].trim().replace(/^\d+\.\s/, ''))}</li>)
        i++
      }
      elements.push(<ol key={key++}>{items}</ol>)
      continue
    }

    elements.push(<p key={key++}>{renderInline(trimmed)}</p>)
    i++
  }

  return <>{elements}</>
}
