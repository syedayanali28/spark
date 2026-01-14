export default function Installation() {
  return (
    <div className="doc-container">
      <h1>Installation Guide</h1>
      
      <h2>System Requirements</h2>
      <p>Before installing, ensure your system meets these requirements:</p>
      <ul>
        <li>Operating System: Windows 10+, macOS 10.15+, or Linux</li>
        <li>RAM: Minimum 4GB (8GB recommended)</li>
        <li>Disk Space: At least 500MB free</li>
        <li>Node.js: Version 18.0 or higher</li>
      </ul>

      <h2>Installation Methods</h2>
      
      <h3>Method 1: Using NPM</h3>
      <p>This is the recommended method for most users:</p>
      <pre><code>npm install -g our-package
our-package init my-project
cd my-project
npm install</code></pre>

      <h3>Method 2: Using Yarn</h3>
      <p>If you prefer Yarn as your package manager:</p>
      <pre><code>yarn global add our-package
our-package init my-project
cd my-project
yarn install</code></pre>

      <h3>Method 3: Manual Installation</h3>
      <p>Clone the repository and install manually:</p>
      <pre><code>git clone https://github.com/yourusername/your-repo.git
cd your-repo
npm install
npm run build</code></pre>

      <h2>Verification</h2>
      <p>Verify the installation was successful by running:</p>
      <pre><code>our-package --version</code></pre>
      <p>You should see the version number displayed in your terminal.</p>

      <h2>Configuration</h2>
      <p>Create a configuration file in your project root:</p>
      <pre><code>{`{
  "name": "my-project",
  "version": "1.0.0",
  "settings": {
    "port": 3000,
    "environment": "development"
  }
}`}</code></pre>

      <h2>Troubleshooting</h2>
      <h3>Common Issues</h3>
      <ul>
        <li><strong>Permission Errors:</strong> Try running the command with <code>sudo</code> (Linux/macOS) or as Administrator (Windows)</li>
        <li><strong>Port Already in Use:</strong> Change the port in your configuration file</li>
        <li><strong>Module Not Found:</strong> Make sure all dependencies are installed with <code>npm install</code></li>
      </ul>
    </div>
  )
}
