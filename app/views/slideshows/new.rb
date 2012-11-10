module Views
  module Slideshows
    class New < Layouts::Application

    	def form
    		"#{render 'form'}".html_safe
    	end

    	def link_back
    		link_to 'Back', slideshows_path
    	end

    end
  end
end
