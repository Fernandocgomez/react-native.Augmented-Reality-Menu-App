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

ActiveRecord::Schema.define(version: 2019_12_24_223643) do

  create_table "items", force: :cascade do |t|
    t.string "itemName"
    t.string "itemDescription"
    t.string "texture_url"
    t.string "obj_url"
    t.string "mtl_url"
    t.string "category"
    t.string "img_2D_url"
    t.integer "menu_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["menu_id"], name: "index_items_on_menu_id"
  end

  create_table "menus", force: :cascade do |t|
    t.string "name"
    t.string "description"
    t.string "img_url"
    t.integer "restaurant_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["restaurant_id"], name: "index_menus_on_restaurant_id"
  end

  create_table "restaurants", force: :cascade do |t|
    t.string "name"
    t.string "email"
    t.string "password_digest"
    t.string "address1"
    t.string "city"
    t.string "state"
    t.string "zipCode"
    t.string "logo_url"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  add_foreign_key "items", "menus"
  add_foreign_key "menus", "restaurants"
end
