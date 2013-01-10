class SamplesController < ApplicationController
  def index
  	@slideshows = Slideshow.all
  end
end
