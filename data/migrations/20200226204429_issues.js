exports.up = function(knex) {
  return knex.schema
    .createTable("users", users => {
      users.increments();
      users
        .string("username", 30)
        .notNullable()
        .unique();
      users.string("password", 255).notNullable();
      users.string("name", 255).notNullable();
      users.string("last_name", 255).notNullable();
      users.string("address", 255);
      users.integer("phone_number");
    })
    .createTable("issues", issues => {
      issues.increments();
      issues.datetime("date").notNullable();
      issues.string("issue_name", 255).notNullable();
      issues.string("issue_location", 255).notNullable();
      issues.string("category", 255).notNullable();
      issues.string("priority");
      issues.text("imgURL");
      issues.string("issue_details");
      issues
        .integer("user_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("users")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
    })

    .createTable("upvotes", upvotes => {
      upvotes.increments();
      upvotes
        .integer("user_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("users")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
      upvotes
        .integer("issue_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("issues")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
      upvotes.boolean("upvote");
    });
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('upvotes')
    .dropTableIfExists('issues')
    .dropTableIfExists('users')
};
