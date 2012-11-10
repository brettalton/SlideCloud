module Views
  module Slideshows
    class Index < Layouts::Application

    	def link_new
    		link_to 'New Slideshow', new_slideshow_path
    	end

    	def slideshows
    		@slideshows.map do |s|
    			{
    				:title => s.title,
                    :url => s.url
    			}
    		end
    	end

    	# def link_show
    	# 	link_to 'Show', slideshow
    	# end

    	# def link_edit
    	# 	link_to 'Edit', edit_slideshow_path(slideshow)
    	# end

    	# def link_destroy
    	# 	link_to 'Destroy', slideshow, method: :delete, data: { confirm: 'Are you sure?' }
    	# end

    end
  end
end

