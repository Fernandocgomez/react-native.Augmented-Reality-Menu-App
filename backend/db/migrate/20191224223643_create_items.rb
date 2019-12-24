class CreateItems < ActiveRecord::Migration[6.0]
  def change
    create_table :items do |t|
      t.string :itemName
      t.string :itemDescription
      t.string :texture_url
      t.string :obj_url
      t.string :mtl_url
      t.string :category
      t.string :img_2D_url
      t.references :menu, null: false, foreign_key: true

      t.timestamps
    end
  end
end
