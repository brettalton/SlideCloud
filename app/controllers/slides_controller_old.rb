class SlidesController < ApplicationController
 
  def create

  	@slideshow = Slideshow.find(params[:slideshow_id])
  	@slide = Slide.new(params[:slide])
  	@slideshow.slides << @slide
    @slide.update_attributes(:stage => params[:stage]) 

  	respond_to do |format|
      format.json { render json: @slide.id }
    end

  end

  def update_stage
    @slideshow = Slideshow.find(params[:id])
    @slide = @slideshow.slides.find(params[:slide_id])
    @slide.update_attributes(:stage => params[:stage])

    respond_to do |format|
      format.json { head :ok }
    end
  end

  def destroy
  end

  def stage
    @slideshow = Slideshow.find(params[:id])
    @slide = @slideshow.slides.find(params[:slide_id])
    
    respond_to do |format|
      format.json { render json: @slide.stage }
    end
  end

end
