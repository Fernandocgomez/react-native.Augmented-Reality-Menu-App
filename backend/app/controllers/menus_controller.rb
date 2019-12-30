class MenusController < ApplicationController
    
    def index 
        menus = Menu.all
        render :json => menus.to_json( :include => [:items] )
    end

    def show 
        menu = Menu.find_by(id: params[:id])
        render :json => menu.to_json( :include => [:items] )
    end

    def create 
        menu = Menu.new(menu_params)
        if menu.valid? 
            menu.save
            render json: {menu: MenuSerializer.new(menu)}, status: :created
        else
            render json: {error: "Failed to create menu"}, status: :not_acceptable
        end
    end


    def destroy
        menu = Menu.find(params[:id])
        menu.destroy
    end

    private 

    def menu_params
        params.permit(:name, :description, :img_url, :restaurant_id)
    end


end
