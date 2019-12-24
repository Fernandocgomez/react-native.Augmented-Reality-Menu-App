class ItemSerializer < ActiveModel::Serializer
  attributes :id, :itemName, :itemDescription, :texture_url, :obj_url, :mtl_url, :category, :img_2D_url
  has_one :menu
end
