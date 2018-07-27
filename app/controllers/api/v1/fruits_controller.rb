class Api::V1::FruitsController < ApplicationController
  
  def index 
    @fruits = Fruit.all
    render json: @fruits, status:200
  end

  def show 
    @fruit = Fruit.find(params[:id])
    render json: @fruit, status:200
  end


  def create
    @fruit = Fruit.create(fruit_params)
    if @fruit.save
      render json: @fruit
    else
      render json: {message: fruit.errors}, status:400
    end
  end
  
  def update 
    @fruit = Fruit.find(params[:id])
    if fruit.update(fruit_params)
      render json: @fruit, status:200
    else
      render json: {message:fruit.errors}, status:400
    end
  end

  def destroy
    @fruit = Fruit.find(params[:id])
    @fruit.delete
    render json: {fruitId: @fruit.id}
  end

  private

  def fruit_params
    params.require(:fruit).permit(:id, :name, :description)
  end
     
end