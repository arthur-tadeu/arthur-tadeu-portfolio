export default async function handler(request, response) {
  const token = process.env.GITHUB_TOKEN;
  const username = process.env.GITHUB_USER || 'arthur-tadeu';

  const fetchOptions = {
    headers: {}
  };

  if (token) {
    fetchOptions.headers['Authorization'] = `token ${token}`;
  }

  try {
    const githubResponse = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=10`, fetchOptions);
    
    if (!githubResponse.ok) {
      return response.status(githubResponse.status).json({ error: `GitHub API error: ${githubResponse.status}` });
    }

    const data = await githubResponse.json();
    return response.status(200).json(data);
  } catch (error) {
    return response.status(500).json({ error: error.message });
  }
}
