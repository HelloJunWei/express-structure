module.exports = {
  apps: [
    {
      name: 'server',
      script: 'www',
      env: {
        COMMON_VARIABLE: 'true'
      },
      env_production: {
        NODE_ENV: 'production'
      },
      watch: true,
      ignore_watch: ['node_modules', '.git'],
      watch_options: {
        followSymlinks: true
      }
    }
  ]
}
