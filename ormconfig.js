module.exports = {
  type: 'sqlite',
  database:
    process.env.ENV == 'test'
      ? './__tests__/database.sqlite'
      : './src/database/database.sqlite',
  migrations: ['./src/database/migrations/**.ts'],
  cli: {
    migrationsDir: './src/database/migrations',
  },
};
