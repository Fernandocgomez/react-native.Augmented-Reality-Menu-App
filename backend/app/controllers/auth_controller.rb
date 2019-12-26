class AuthController < ApplicationController

     skip_before_action :check_authentication, only: [:create]

    def create 
       restaurant = Restaurant.find_by(email: params[:email])

       if restaurant && restaurant.authenticate(params[:password])
            render json: {restaurant_emai: restaurant.email, token: encode_token({restaurant_id: restaurant.id}), restaurant: restaurant}
       else 
            render json: {error: "Invalid email or password"}
       end

       
    end



end