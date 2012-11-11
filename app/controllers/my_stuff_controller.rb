class MyStuffController < ApplicationController
  before_filter :authenticate_user!
  def index
   @graph = Koala::Facebook::GraphAPI.new(current_user.token)
  end
  
end
