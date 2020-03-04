exports.up = function(knex) {
  return knex.schema
    .createTable("users", users => {
      users.increments();
      users
        .varchar("email", 302)
        .notNullable()
        .unique();
      users.string("password", 128).notNullable();
      users.string("full name", 128).notNullable();
      users.string("city", 128);
      users.string("category");
    })
    .createTable("issues", issues => {
      issues.increments();
      issues.timestamps(false, true);
      issues.string("issue_name", 255).notNullable();
      issues.string("issue_location", 255).notNullable();
      issues.string("category", 255).notNullable();
      issues.string("priority");
      issues.text("imgURL");
      issues.string("issue_details");
      
      // **Will add for stretch to attach an issue to a user
      // issues
      //   .integer("user_id")
      //   .unsigned()
      //   .references("id")
      //   .inTable("users")
      //   .onDelete("CASCADE")
      //   .onUpdate("CASCADE");
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
    .dropTableIfExists("upvotes")
    .dropTableIfExists("issues")
    .dropTableIfExists("users");
};
