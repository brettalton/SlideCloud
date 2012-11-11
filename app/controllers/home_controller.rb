class HomeController < ApplicationController
  def index
  	@slideshows = Slideshow.all
  end
end
