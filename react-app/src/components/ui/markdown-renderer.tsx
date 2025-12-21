import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
// Image import removed - using regular img tags for React

// Type definition for markdown components
type MarkdownComponentProps = {
  node?: any;
  children?: React.ReactNode;
  [key: string]: any;
}

interface MarkdownRendererProps {
  content: string;
  className?: string;
}

const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({ content, className }) => {
  return (
    <div className={`prose prose-sm max-w-none ${className || ''}`}>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeRaw]}
        components={{
          // Main title (H1) - Deep blue, large
          h1: ({ children, ...props }: MarkdownComponentProps) => (
            <h1 
              className="text-2xl sm:text-3xl font-bold pb-2 mb-4"
              style={{ color: '#1e3a8a' }}
              {...props}
            >
              {children}
            </h1>
          ),
          
          // Section headers (H2) - Medium blue, prominent  
          h2: ({ children, ...props }: MarkdownComponentProps) => (
            <h2 
              className="text-xl sm:text-2xl font-semibold mb-3 mt-6"
              style={{ color: '#1e40af' }}
              {...props}
            >
              {children}
            </h2>
          ),
          
          // H3 - Purple tone, medium size
          h3: ({ children, ...props }: MarkdownComponentProps) => (
            <h3 
              className="text-lg sm:text-xl font-medium mb-2 mt-4"
              style={{ color: '#3730a3' }}
              {...props}
            >
              {children}
            </h3>
          ),
          
          // H4 - Indigo, smaller
          h4: ({ children, ...props }: MarkdownComponentProps) => (
            <h4 
              className="text-base sm:text-lg font-medium mb-2 mt-3"
              style={{ color: '#4f46e5' }}
              {...props}
            >
              {children}
            </h4>
          ),
          
          // Paragraphs - Optimized readability
          p: ({ children, ...props }: MarkdownComponentProps) => (
            <p className="text-sm leading-relaxed mb-2 last:mb-0 text-gray-800" {...props}>
              {children}
            </p>
          ),
          
          // Unordered lists
          ul: ({ children, ...props }: MarkdownComponentProps) => (
            <ul className="list-disc pl-4 mb-2 space-y-1" {...props}>
              {children}
            </ul>
          ),
          
          // Ordered lists
          ol: ({ children, ...props }: MarkdownComponentProps) => (
            <ol className="list-decimal pl-4 mb-2 space-y-1" {...props}>
              {children}
            </ol>
          ),
          
          // List items
          li: ({ children, ...props }: MarkdownComponentProps) => (
            <li className="text-sm text-gray-800" {...props}>
              {children}
            </li>
          ),
          
          // Code blocks - Inline vs Block detection
          code: ({ children, className, ...props }: MarkdownComponentProps & { className?: string }) => {
            const match = /language-(\w+)/.exec(className || '');
            const language = match ? match[1] : '';
            const isInline = !className;
            
            return isInline ? (
              <code className="bg-gray-100 px-1 rounded font-mono text-sm text-indigo-600" {...props}>
                {children}
              </code>
            ) : (
              <div className="my-3">
                <div className="bg-gray-800 rounded-t-md px-4 py-1 text-xs text-gray-400 flex items-center">
                  {language && <span>{language}</span>}
                </div>
                <SyntaxHighlighter
                  language={language || 'text'}
                  style={atomDark}
                  className="rounded-b-md !mt-0"
                  customStyle={{ margin: 0, fontSize: '14px' }}
                  {...props}
                >
                  {String(children).replace(/\n$/, '')}
                </SyntaxHighlighter>
              </div>
            );
          },
          
          // Tables - Responsive with proper styling
          table: ({ children, ...props }: MarkdownComponentProps) => (
            <div className="overflow-x-auto my-4">
              <table className="min-w-full divide-y divide-gray-200 border border-gray-300" {...props}>
                {children}
              </table>
            </div>
          ),
          
          // Table header
          thead: ({ children, ...props }: MarkdownComponentProps) => (
            <thead className="bg-gray-50" {...props}>
              {children}
            </thead>
          ),

          // Table body
          tbody: ({ children, ...props }: MarkdownComponentProps) => (
            <tbody className="bg-white divide-y divide-gray-200" {...props}>
              {children}
            </tbody>
          ),

          // Table rows
          tr: ({ children, ...props }: MarkdownComponentProps) => (
            <tr {...props}>
              {children}
            </tr>
          ),
          
          // Table header cells
          th: ({ children, ...props }: MarkdownComponentProps) => (
            <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-r last:border-r-0" {...props}>
              {children}
            </th>
          ),
          
          // Table data cells
          td: ({ children, ...props }: MarkdownComponentProps) => (
            <td className="px-3 py-2 text-sm text-gray-500 border-r last:border-r-0" {...props}>
              {children}
            </td>
          ),
          
          // Links - Auto-open in new tab with proper styling
          a: ({ children, ...props }: MarkdownComponentProps) => (
            <a 
              {...props} 
              className="text-blue-600 hover:text-blue-800 underline" 
              target="_blank"
              rel="noopener noreferrer"
            >
              {children}
            </a>
          ),

          // Block quotes
          blockquote: ({ children, ...props }: MarkdownComponentProps) => (
            <blockquote 
              className="border-l-4 border-indigo-300 pl-4 my-4 italic text-gray-700" 
              {...props}
            >
              {children}
            </blockquote>
          ),

          // Images
          img: ({ src, alt, ...props }: MarkdownComponentProps) => (
            <img 
              src={src} 
              alt={alt || ''} 
              className="max-w-full h-auto my-4 rounded-md shadow-sm" 
              {...props} 
            />
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
};

export default MarkdownRenderer; 