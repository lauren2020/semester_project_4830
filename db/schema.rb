# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2019_12_04_185109) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "comments", force: :cascade do |t|
    t.bigint "user_id", null: false
    t.bigint "post_id", null: false
    t.text "body", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["post_id"], name: "index_comments_on_post_id"
    t.index ["user_id"], name: "index_comments_on_user_id"
  end

  create_table "connections", id: false, force: :cascade do |t|
    t.integer "user_id"
    t.integer "connection_id"
    t.index ["connection_id", "user_id"], name: "index_connections_on_connection_id_and_user_id", unique: true
    t.index ["user_id", "connection_id"], name: "index_connections_on_user_id_and_connection_id", unique: true
  end

  create_table "group_memberships", id: false, force: :cascade do |t|
    t.bigint "message_board_id", null: false
    t.bigint "user_id", null: false
    t.index ["message_board_id", "user_id"], name: "index_group_memberships_on_message_board_id_and_user_id"
    t.index ["user_id", "message_board_id"], name: "index_group_memberships_on_user_id_and_message_board_id"
  end

  create_table "groups", force: :cascade do |t|
    t.string "profile_url", null: false
    t.bigint "user_id"
    t.string "name", default: "My Group", null: false
    t.integer "members_count", default: 0, null: false
    t.json "sent_invites", default: [], null: false, array: true
    t.integer "post_count", default: 0, null: false
    t.bigint "shared_postits_id"
    t.index ["shared_postits_id"], name: "index_groups_on_shared_postits_id"
    t.index ["user_id"], name: "index_groups_on_user_id"
  end

  create_table "groups_users", id: false, force: :cascade do |t|
    t.bigint "user_id", null: false
    t.bigint "group_id", null: false
  end

  create_table "journal_comments", force: :cascade do |t|
    t.bigint "journal_post_id", null: false
    t.bigint "user_id", null: false
    t.text "body", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["journal_post_id"], name: "index_journal_comments_on_journal_post_id"
    t.index ["user_id"], name: "index_journal_comments_on_user_id"
  end

  create_table "journal_posts", force: :cascade do |t|
    t.string "title", null: false
    t.text "body", null: false
    t.bigint "user_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["user_id"], name: "index_journal_posts_on_user_id"
  end

  create_table "message_boards", force: :cascade do |t|
    t.bigint "user_id"
    t.string "name"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.string "profile_url", default: "https://cdn.pixabay.com/photo/2016/04/15/18/05/computer-1331579_960_720.png"
    t.index ["user_id"], name: "index_message_boards_on_user_id"
  end

  create_table "message_boards_users", id: false, force: :cascade do |t|
    t.bigint "message_board_id", null: false
    t.bigint "user_id", null: false
    t.index ["message_board_id"], name: "index_message_boards_users_on_message_board_id"
    t.index ["user_id"], name: "index_message_boards_users_on_user_id"
  end

  create_table "postits", force: :cascade do |t|
    t.string "body"
    t.datetime "date"
    t.integer "likes", default: [], null: false, array: true
    t.bigint "user_id"
    t.bigint "comments_id"
    t.bigint "shared_group_id"
    t.bigint "shared_user_id"
    t.index ["comments_id"], name: "index_postits_on_comments_id"
    t.index ["shared_group_id"], name: "index_postits_on_shared_group_id"
    t.index ["shared_user_id"], name: "index_postits_on_shared_user_id"
    t.index ["user_id"], name: "index_postits_on_user_id"
  end

  create_table "posts", force: :cascade do |t|
    t.bigint "user_id", null: false
    t.string "title", null: false
    t.text "body", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.bigint "shared_to_user_id"
    t.bigint "shared_to_group_id"
    t.integer "likes", default: [], null: false, array: true
    t.index ["shared_to_group_id"], name: "index_posts_on_shared_to_group_id"
    t.index ["shared_to_user_id"], name: "index_posts_on_shared_to_user_id"
    t.index ["user_id"], name: "index_posts_on_user_id"
  end

  create_table "remarks", force: :cascade do |t|
    t.string "body"
    t.datetime "date"
    t.bigint "user_id"
    t.index ["user_id"], name: "index_remarks_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "email", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.string "username"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.string "profile_url", default: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png", null: false
    t.string "first_name", default: "", null: false
    t.string "last_name", default: "", null: false
    t.json "sent_connection_requests", default: [], null: false, array: true
    t.json "connection_requests", default: [], null: false, array: true
    t.json "group_invites", default: [], null: false, array: true
    t.integer "connections_count", default: 0, null: false
    t.integer "post_count", default: 0, null: false
    t.bigint "shared_postits_id"
    t.bigint "postits_id"
    t.json "privacy_settings", default: {"defaultPostVisibility"=>"Only Me", "allowConnectionToViewInCommon"=>"No", "allowUsersToSearchProfile"=>"No", "allowConnectionsToAddMeToGroup"=>"No", "defaultAllowOthersInGroupToViewProfile"=>"No"}, null: false
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["postits_id"], name: "index_users_on_postits_id"
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
    t.index ["shared_postits_id"], name: "index_users_on_shared_postits_id"
  end

  add_foreign_key "groups", "postits", column: "shared_postits_id"
  add_foreign_key "postits", "groups", column: "shared_group_id"
  add_foreign_key "postits", "remarks", column: "comments_id"
  add_foreign_key "postits", "users"
  add_foreign_key "postits", "users", column: "shared_user_id"
  add_foreign_key "remarks", "users"
  add_foreign_key "users", "postits", column: "postits_id"
  add_foreign_key "users", "postits", column: "shared_postits_id"
end
