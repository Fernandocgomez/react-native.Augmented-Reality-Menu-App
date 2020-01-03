class ItemsController < ApplicationController

    def create 
        item = Item.new(item_params)
        if item.valid? 
            item.save
            render json: {item: ItemSerializer.new(item)}, status: :created
        else
            render json: {error: "Failed to create item"}, status: :not_acceptable
        end
    end

    def destroy
        item = Item.find(params[:id])
        item.destroy
    end

    def update
        item = Item.find(params[:id])
        item.update(item_params)
        render json: {item: ItemSerializer.new(item), message: "item was edited"}

    end

    private 

    def item_params
        params.permit(:itemName, :itemDescription, :texture_url, :obj_url, :mtl_url, :category, :img_2D_url, :menu_id)
    end
end
