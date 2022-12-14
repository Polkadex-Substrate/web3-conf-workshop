module.exports = {
  compiler: {
    styledComponents: true
  },
  eslint: {
    // Warning: Dangerously allow production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true
  },
  env: {
    RANGER_HOST_URL:
      process.env.RANGER_HOST_URL || 'ws://127.0.0.1:9944'
  }
}
