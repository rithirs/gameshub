/** @type {import('next').NextConfig} */
const isGithubPages = process.env.GITHUB_PAGES === 'true';
const repo = 'gameshub'; // Change if your repo name is different

module.exports = {
  output: 'export',
  basePath: isGithubPages ? `/${repo}` : '',
  assetPrefix: isGithubPages ? `/${repo}/` : '',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};
