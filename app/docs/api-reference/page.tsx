export default function ApiReference() {
  return (
    <div className="doc-container">
      <h1>API Reference</h1>
      
      <h2>Overview</h2>
      <p>
        This API reference provides detailed information about all available endpoints, 
        methods, and data structures. All requests must include proper authentication headers.
      </p>

      <h2>Authentication</h2>
      <p>Use Bearer token authentication for all API requests:</p>
      <pre><code>{`Authorization: Bearer YOUR_API_KEY`}</code></pre>

      <h2>Base URL</h2>
      <pre><code>https://api.example.com/v1</code></pre>

      <h2>Endpoints</h2>
      
      <h3>GET /users</h3>
      <p>Retrieve a list of all users.</p>
      <p><strong>Parameters:</strong></p>
      <ul>
        <li><code>page</code> (optional): Page number for pagination (default: 1)</li>
        <li><code>limit</code> (optional): Number of items per page (default: 10)</li>
        <li><code>sort</code> (optional): Sort field (name, email, created_at)</li>
      </ul>
      <p><strong>Example Request:</strong></p>
      <pre><code>{`GET /users?page=1&limit=20&sort=name
Authorization: Bearer YOUR_API_KEY`}</code></pre>
      <p><strong>Example Response:</strong></p>
      <pre><code>{`{
  "data": [
    {
      "id": "123",
      "name": "John Doe",
      "email": "john@example.com",
      "created_at": "2024-01-01T00:00:00Z"
    }
  ],
  "pagination": {
    "page": 1,
    "limit": 20,
    "total": 100
  }
}`}</code></pre>

      <h3>POST /users</h3>
      <p>Create a new user.</p>
      <p><strong>Request Body:</strong></p>
      <pre><code>{`{
  "name": "Jane Smith",
  "email": "jane@example.com",
  "password": "securePassword123"
}`}</code></pre>
      <p><strong>Response:</strong></p>
      <pre><code>{`{
  "id": "124",
  "name": "Jane Smith",
  "email": "jane@example.com",
  "created_at": "2024-01-02T00:00:00Z"
}`}</code></pre>

      <h3>GET /users/:id</h3>
      <p>Retrieve a specific user by ID.</p>
      <p><strong>Example:</strong></p>
      <pre><code>GET /users/123</code></pre>

      <h3>PUT /users/:id</h3>
      <p>Update an existing user.</p>
      
      <h3>DELETE /users/:id</h3>
      <p>Delete a user.</p>

      <h2>Error Handling</h2>
      <p>The API uses standard HTTP status codes:</p>
      <ul>
        <li><code>200</code> - Success</li>
        <li><code>201</code> - Created</li>
        <li><code>400</code> - Bad Request</li>
        <li><code>401</code> - Unauthorized</li>
        <li><code>404</code> - Not Found</li>
        <li><code>500</code> - Internal Server Error</li>
      </ul>
      <p><strong>Error Response Format:</strong></p>
      <pre><code>{`{
  "error": {
    "code": "INVALID_REQUEST",
    "message": "The request parameters are invalid",
    "details": ["Email is required"]
  }
}`}</code></pre>

      <h2>Rate Limiting</h2>
      <p>API requests are limited to 1000 requests per hour per API key. 
      Rate limit information is included in response headers:</p>
      <ul>
        <li><code>X-RateLimit-Limit</code>: Maximum requests per hour</li>
        <li><code>X-RateLimit-Remaining</code>: Remaining requests</li>
        <li><code>X-RateLimit-Reset</code>: Time when the limit resets (Unix timestamp)</li>
      </ul>
    </div>
  )
}
