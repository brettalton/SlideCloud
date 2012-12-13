class SlidesController < ApplicationController
 
  def create

  	@slideshow = Slideshow.find(params[:id])
  	@slide = Slide.new(params[:slide])
  	@slideshow.slides << @slide

  	respond_to do |format|
      format.js { render :layout => false }
    end

  end

  def destroy
  end
end
