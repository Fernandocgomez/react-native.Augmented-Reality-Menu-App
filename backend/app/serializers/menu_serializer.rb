class MenuSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :img_url
  has_one :restaurant
end
