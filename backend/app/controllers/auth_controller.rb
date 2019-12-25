class AuthController < ApplicationController

    def create 
       restaurant = Restaurant.find_by(email: params[:email])

       if restaurant && restaurant.authenticate(params[:password])
            render json: {restaurant: restaurant.email}
       else 
            render json: {error: "Invalid email or password"}
       end

       
    end



end