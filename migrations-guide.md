<!-- initializing -->
# sequelize init

<!-- creating file -->
# npx sequelize-cli migration:generate --name create-users

<!-- run the migration -->
# npx sequelize-cli db:migrate

<!-- Undo the last migration -->
# npx sequelize-cli db:migrate:undo

<!-- undo all migrations -->
# npx sequelize-cli db:migrate:undo:all
