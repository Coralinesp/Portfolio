const repo = 'portfolio' // nombre de tu repo en GitHub, todo en minúsculas

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: `/${repo}`,
  assetPrefix: `/${repo}/`,
  distDir: 'docs', // carpeta de salida para el export
}

module.exports = nextConfig;
