class CreateRestaurants < ActiveRecord::Migration[6.0]
  def change
    create_table :restaurants do |t|
      t.string :name
      t.string :email
      t.string :password_digest
      t.string :address1
      t.string :city
      t.string :state
      t.string :zipCode
      t.string :logo_url

      t.timestamps
    end
  end
end
