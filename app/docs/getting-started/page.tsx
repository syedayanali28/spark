export default function GettingStarted() {
  return (
    <div className="doc-container">
      <h1>Getting Started</h1>
      
      <h2>Introduction</h2>
      <p>
        Welcome to our documentation! This guide will help you get started with our platform 
        in just a few minutes. Whether you&apos;re a beginner or an experienced developer, 
        you&apos;ll find everything you need to know right here.
      </p>

      <h2>Prerequisites</h2>
      <p>Before you begin, make sure you have the following installed:</p>
      <ul>
        <li>Node.js (version 18 or higher)</li>
        <li>npm or yarn package manager</li>
        <li>A code editor (we recommend VS Code)</li>
        <li>Git for version control</li>
      </ul>

      <h2>Quick Start</h2>
      <p>Follow these steps to get started:</p>
      <ol>
        <li>Clone the repository or create a new project</li>
        <li>Install the dependencies</li>
        <li>Configure your environment variables</li>
        <li>Run the development server</li>
      </ol>

      <h3>Creating Your First Project</h3>
      <p>Use the following command to create a new project:</p>
      <pre><code>npx create-next-app@latest my-app
cd my-app
npm run dev</code></pre>

      <h2>What&apos;s Next?</h2>
      <p>
        Now that you&apos;ve got your project set up, you can:
      </p>
      <ul>
        <li>Check out the <a href="/docs/installation" style={{color: '#3498db'}}>Installation Guide</a> for detailed setup instructions</li>
        <li>Explore the <a href="/docs/api-reference" style={{color: '#3498db'}}>API Reference</a> to learn about available features</li>
        <li>Look at some <a href="/docs/examples" style={{color: '#3498db'}}>Examples</a> to see it in action</li>
      </ul>
    </div>
  )
}
