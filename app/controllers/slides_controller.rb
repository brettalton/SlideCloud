class SlidesController < ApplicationController
  before_filter :find_slideshow

  # GET /slides
  # GET /slides.json
  def index
    @slides = @slideshow.slides

    respond_to do |format|
      format.html # index.html.erb
      format.json { render json: @slides }
    end
  end

  # GET /slides/1
  # GET /slides/1.json
  def show
    @slide = @slideshow.slides.find(params[:id])

    respond_to do |format|
      format.html # show.html.erb
      format.json { render json: @slide }
    end
  end

  # GET /slides/new
  # GET /slides/new.json
  def new
    @slide = Slide.new
    @slideshow.slides << @slide

    respond_to do |format|
      format.json { render json: @slide }
    end
  end

  # POST /slides
  # POST /slides.json
  def create
    
    @slide = Slide.new(params[:slide])
    @slideshow.slides << @slide

    respond_to do |format|
      if @slide.save
        format.json { render json: @slide, status: :created }
      else
        format.json { render json: @slide.errors, status: :unprocessable_entity }
      end
    end
  end

  # PUT /slides/1
  # PUT /slides/1.json
  def update
    @slide = @slideshow.slides.find(params[:id])

    respond_to do |format|
      if @slide.update_attributes(params[:slide])
        format.json { head :no_content }
      else
        format.json { render json: @slide.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /slides/1
  # DELETE /slides/1.json
  def destroy
    @slide = @slideshow.slides.find(params[:id])
    @slide.destroy

    respond_to do |format|
      format.json { head :no_content }
    end
  end

  private

  def find_slideshow
    @slideshow = Slideshow.find(params[:slideshow_id])
  end
end
