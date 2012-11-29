class ImagesController < ApplicationController
  before_filter :get_current_user 

  def new
    @image = Image.new
    @user.images << @image

    respond_to do |format|
      format.html # new.html.erb
      format.json { render json: @image }
    end
  end
  
  def edit
    @image = @user.images.find(params[:id])
  end
  
  def create
    @image = Image.create(params[:image])
    @user.images << @image
  end

  def update
    @image = @user.images.find(params[:id])
    @user.images << @image
  end

  def destroy
    @image = @user.images.find(params[:id])
    #@image = Image.find(params[:id])
    @image.destroy
  end

  private
  
  def get_current_user
    @user = current_user
  end

end
