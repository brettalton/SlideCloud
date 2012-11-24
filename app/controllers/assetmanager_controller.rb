class AssetmanagerController < ApplicationController
  include Singleton
  before_filter :authenticate_user!
  before_filter :get_current_user
  before_filter :get_images


  def index
  end

  private 

  def get_current_user
  	@user = current_user
  end

  def get_images
  	@images = @user.images
  end

end
