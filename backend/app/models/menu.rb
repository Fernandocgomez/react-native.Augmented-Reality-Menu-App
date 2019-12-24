class Menu < ApplicationRecord
  has_many :items
  belongs_to :restaurant
end
