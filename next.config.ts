const isGithubPages = process.env.GITHUB_PAGES === 'true';
const repo = 'github-pages-test'; 

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: isGithubPages ? `/${repo}` : '',
  assetPrefix: isGithubPages ? `/${repo}/` : '',
};

module.exports = nextConfig;
