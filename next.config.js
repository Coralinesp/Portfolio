const repo = 'portfolio' // o el nombre real de tu repo

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: `/${repo}`,
  assetPrefix: `/${repo}/`,
  distDir: 'docs', // <--- esto hace que se genere /docs en lugar de /out
}

module.exports = nextConfig;