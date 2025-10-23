module.exports = {
  ci: {
    collect: {
      startServerCommand: 'pnpm start',
      startServerReadyTimeout: 120000,
      numberOfRuns: 1,
      url: ['http://localhost:3000/'],
    },
    assert: {
      preset: 'lighthouse:recommended',
    },
    upload: {
      target: 'temporary-public-storage',
    },
  },
};
