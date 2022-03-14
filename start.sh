sleep 30

cd .
npx knex migrate:latest

cd .
npx knex seed:run

cd .
npm run dev