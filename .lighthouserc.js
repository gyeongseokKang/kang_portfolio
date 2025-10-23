module.exports = {
  ci: {
    collect: {
      startServerCommand: 'pnpm start',
      startServerReadyTimeout: 120000,
      numberOfRuns: 1,
      url: ['http://localhost:3000/'],
    },
    assert: {
      assertions: {
        'categories:performance': ['warn', { minScore: 0.7 }],
        'categories:accessibility': ['warn', { minScore: 0.8 }],
        'categories:best-practices': ['error', { minScore: 0.9 }],
        'categories:seo': ['error', { minScore: 0.9 }],
      }
    },
    upload: {
      target: 'temporary-public-storage',
    },
  },
};
