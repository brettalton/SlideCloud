module Views
  module Assetmanager
    class Index < Layouts::Application

    	def images_list
    		@user.images.each
    	end
      
    	def form
    		"#{render 'form'}".html_safe
    	end

    end
  end
end
