class SlidesController < ApplicationController
 
  def create

  	@slideshow = Slideshow.find(params[:id])
  	@slide = Slide.new(params[:slide])
  	@slideshow.slides << @slide

  	respond_to do |format|
      if @slide.save
        format.html { redirect_to slideshows_path, notice: 'Slide was successfully created.' }
        format.json { render json: @slide, status: :created, location: @slideshow }
      else
        format.html {  }
        format.json { render json: @slide.errors, status: :unprocessable_entity }
      end
    end

  end

  def destroy
  end
end
