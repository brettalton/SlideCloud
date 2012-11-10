module Views
  module Slideshows
    class Show < Layouts::Application

    	def display_notice
    		notice
    	end

    	def link_edit
    		link_to 'Edit', edit_slideshow_path(@slideshow) 
    	end

    	def link_back
			  link_to 'Back', slideshows_path
		  end

    end
	end
end
