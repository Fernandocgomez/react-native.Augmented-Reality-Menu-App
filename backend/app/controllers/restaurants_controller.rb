class RestaurantsController < ApplicationController

    def index
        restaurants = Restaurant.all
        render :json => restaurants.to_json(:include => { :menu => {:include =>:items} })
    end


end
