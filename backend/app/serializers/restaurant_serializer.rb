class RestaurantSerializer < ActiveModel::Serializer
  attributes :id, :name, :email, :address1, :city, :state, :zipCode, :logo_url
end
