class MenusController < ApplicationController

    def create 
        menu = Menu.new(menu_params)
        if menu.valid? 
            menu.save
            render json: {user: MenuSerializer.new(menu)}, status: :created
        else
            render json: {error: "Failed to create menu"}, status: :not_acceptable
        end
    end

    private 

    def menu_params
        params.permit(:name, :description, :img_url, :restaurant_id)
    end


end
