class EditorController < ApplicationController
  
  
  def index

    @slideshows = @user.slideshows
    
    @graph = Koala::Facebook::GraphAPI.new(current_user.token)
    
    respond_to do |format|
      format.html # index.html.erb
      format.json { render json: @slideshows }
    end
    
  end

  # GET /slideshows/1
  # GET /slideshows/1.json
  def show
    @slideshow = Slideshow.find(params[:id])

    respond_to do |format|
      format.html # show.html.erb
      format.json { render json: @slideshow }
    end
  end

  # GET /slideshows/new
  # GET /slideshows/new.json
  def new
    @slideshow = Slideshow.new
    @user.slideshows << @slideshow
 
    respond_to do |format|
      format.html # new.html.erb
      format.json { render json: @slideshow }
    end
  end

  # GET /slideshows/1/edit
  def edit
    @slideshow = @user.slideshows.find(params[:id])
    #@slides = @slideshows.slides
  end

  # POST /slideshows
  # POST /slideshows.json
  def create
    @slideshow = Slideshow.new(params[:slideshow])
    @user.slideshows << @slideshow

    respond_to do |format|
      if @slideshow.save
        format.html { redirect_to @slideshow, notice: 'Slideshow was successfully created.' }
        format.json { render json: @slideshow, status: :created, location: @slideshow }
      else
        format.html { render action: "new" }
        format.json { render json: @slideshow.errors, status: :unprocessable_entity }
      end
    end
  end

  # PUT /slideshows/1
  # PUT /slideshows/1.json
  def update
    @slideshow = @user.slideshows.find(params[:id])
    @user.slideshows << @slideshow

    respond_to do |format|
      if @slideshow.update_attributes(params[:slideshow])
        format.html { redirect_to @slideshow, notice: 'Slideshow was successfully updated.' }
        format.json { head :no_content }
      else
        format.html { render action: "edit" }
        format.json { render json: @slideshow.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /slideshows/1
  # DELETE /slideshows/1.json
  def destroy
    #@slideshow = @user.slideshows.find(params[:id])
    @slideshow = Slideshow.find(params[:id])
    @slideshow.destroy

    respond_to do |format|
      format.html { redirect_to slideshows_url }
      format.json { head :no_content }
    end
  end

  private

  def get_current_user
    @user = current_user
  end

end


end
