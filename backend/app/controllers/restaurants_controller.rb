class RestaurantsController < ApplicationController

    def index
        restaurants = Restaurant.all
        render :json => restaurants.to_json(:include => { :menus => {:include =>:items} })
    end


    def create 
        restaurant = Restaurant.new(user_params)
        if restaurant.valid? 
            restaurant.save
            render json: {user: RestaurantSerializer.new(restaurant)}, status: :created
        else
            render json: {error: "Failed to create account"}, status: :not_acceptable
        end
    end

    private 

    def user_params
        params.permit(:name, :email, :password, :address1, :city, :state, :zipCode, :logo_url)
    end

end


