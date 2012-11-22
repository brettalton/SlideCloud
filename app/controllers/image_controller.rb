class ImageController < ApplicationController
  before_filter :get_assetmanager 

  def new
    @image = Image.new
    @assetmanager.images << @image
  end
  
  def edit
    @image = @assetmanager.images.find(params[:id])
  end
  
  def create
    @image = Image.new(params[:image])
    @assetmanager.images << @image
  end

  def update
    @image = @assetmanager.images.find(params[:id])
    @assetmanager.images << @image
  end

  def destroy
    #@image = @assetmanager.slideshows.find(params[:id])
    @image = Image.find(params[:id])
    @image.destroy
  end

  private
  
  def get_assetmanager
    @assetmanager = Assetmanager.instance
  end

end
