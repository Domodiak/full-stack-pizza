/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema
        .createTable('users', function(table) {
            table.increments('id').primary()
            table.string('username').notNullable().unique()
            table.string('email').notNullable().unique()
            table.string('password_hash').notNullable()
            table.string('password_salt').notNullable()
            table.timestamps(true, true)
        })
        .createTable('orders', function(table) {
            table.increments('id').primary()
            table.integer('user')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('users')
                .onDelete('CASCADE')
            table.timestamps(true, true)
        })
        .createTable('menu', function(table) {
            table.increments('id').primary()
            table.string('name').notNullable()
            table.string('image_url').notNullable()
        })
        .createTable('order_items', function(table) {
            table.increments('id').primary()
            table.integer('order_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('orders')
                .onDelete('CASCADE')
            table.integer('item_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('menu')
                .onDelete('CASCADE')
            table.integer('quantity')
                .unsigned()
                .notNullable()
                .defaultTo(0)
        })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists('order_items')
        .dropTableIfExists('orders')
        .dropTableIfExists('menu')
        .dropTableIfExists('users')
};
