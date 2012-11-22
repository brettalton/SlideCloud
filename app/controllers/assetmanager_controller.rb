require 'singleton'


class AssetmanagerController < ApplicationController
  include Singleton
  
  # TODO Assetmanager an User hägen!
  
  def index
    @images = Assetmanager.instance.images
  end
end
