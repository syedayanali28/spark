export default function Examples() {
  return (
    <div className="doc-container">
      <h1>Examples</h1>
      
      <h2>Basic Usage</h2>
      <p>Here are some practical examples to help you get started quickly.</p>

      <h3>Example 1: Fetching Data</h3>
      <p>This example shows how to fetch data from the API:</p>
      <pre><code>{`async function fetchUsers() {
  const response = await fetch('https://api.example.com/v1/users', {
    headers: {
      'Authorization': 'Bearer YOUR_API_KEY',
      'Content-Type': 'application/json'
    }
  });
  
  const data = await response.json();
  console.log(data);
  return data;
}`}</code></pre>

      <h3>Example 2: Creating a Resource</h3>
      <p>Create a new user with POST request:</p>
      <pre><code>{`async function createUser(userData) {
  const response = await fetch('https://api.example.com/v1/users', {
    method: 'POST',
    headers: {
      'Authorization': 'Bearer YOUR_API_KEY',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name: userData.name,
      email: userData.email,
      password: userData.password
    })
  });
  
  if (!response.ok) {
    throw new Error(\`HTTP error! status: \${response.status}\`);
  }
  
  return await response.json();
}`}</code></pre>

      <h3>Example 3: Error Handling</h3>
      <p>Proper error handling implementation:</p>
      <pre><code>{`async function fetchWithErrorHandling(url) {
  try {
    const response = await fetch(url, {
      headers: {
        'Authorization': 'Bearer YOUR_API_KEY'
      }
    });
    
    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error.message);
    }
    
    return await response.json();
  } catch (error) {
    console.error('Fetch error:', error);
    // Handle error appropriately
    throw error;
  }
}`}</code></pre>

      <h3>Example 4: Pagination</h3>
      <p>Handling paginated results:</p>
      <pre><code>{`async function fetchAllUsers() {
  let allUsers = [];
  let page = 1;
  let hasMore = true;
  
  while (hasMore) {
    const response = await fetch(
      \`https://api.example.com/v1/users?page=\${page}&limit=50\`,
      {
        headers: {
          'Authorization': 'Bearer YOUR_API_KEY'
        }
      }
    );
    
    const data = await response.json();
    allUsers = [...allUsers, ...data.data];
    
    hasMore = data.pagination.page * data.pagination.limit < data.pagination.total;
    page++;
  }
  
  return allUsers;
}`}</code></pre>

      <h3>Example 5: React Component</h3>
      <p>Using the API in a React component:</p>
      <pre><code>{`import { useState, useEffect } from 'react';

function UserList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadUsers() {
      try {
        const response = await fetch('https://api.example.com/v1/users', {
          headers: {
            'Authorization': 'Bearer YOUR_API_KEY'
          }
        });
        
        if (!response.ok) {
          throw new Error('Failed to fetch users');
        }
        
        const data = await response.json();
        setUsers(data.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    
    loadUsers();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>{user.name} - {user.email}</li>
      ))}
    </ul>
  );
}`}</code></pre>

      <h2>Best Practices</h2>
      <ul>
        <li>Always handle errors gracefully</li>
        <li>Use environment variables for API keys</li>
        <li>Implement proper loading states</li>
        <li>Cache responses when appropriate</li>
        <li>Respect rate limits</li>
        <li>Use HTTPS for all requests</li>
      </ul>
    </div>
  )
}
