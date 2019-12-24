class RestaurantSerializer < ActiveModel::Serializer
  attributes :id, :name, :email, :password_digest, :address1, :city, :state, :zipCode, :logo_url
end
