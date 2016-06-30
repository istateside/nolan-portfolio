# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20160630014517) do

  create_table "blocks", force: :cascade do |t|
    t.string   "title"
    t.string   "size"
    t.string   "shape"
    t.text     "text"
    t.integer  "position"
    t.boolean  "is_published"
    t.string   "blockable_type"
    t.integer  "blockable_id"
    t.datetime "created_at",     null: false
    t.datetime "updated_at",     null: false
    t.index ["blockable_type", "blockable_id"], name: "index_blocks_on_blockable_type_and_blockable_id"
  end

  create_table "images", force: :cascade do |t|
    t.string   "alt"
    t.string   "file_file_name"
    t.string   "file_content_type"
    t.integer  "file_file_size"
    t.datetime "file_updated_at"
    t.integer  "position"
    t.string   "imageable_type"
    t.integer  "imageable_id"
    t.datetime "created_at",        null: false
    t.datetime "updated_at",        null: false
    t.index ["imageable_type", "imageable_id"], name: "index_images_on_imageable_type_and_imageable_id"
  end

  create_table "pages", force: :cascade do |t|
    t.string   "name"
    t.string   "presentation"
    t.boolean  "is_published", default: false
    t.boolean  "is_in_header", default: true
    t.datetime "created_at",                   null: false
    t.datetime "updated_at",                   null: false
  end

end
