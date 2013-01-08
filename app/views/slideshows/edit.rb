module Views
  module Slideshows
    class Edit < Layouts::Application

    	def create_slide_btn
    		link_to "Create", slides_create_path(@slideshow.id), 
          :method => :post, 
          :remote => true, 
          :class => "btn btn-small"
    	end

      def save_slide_btn

      end
      
    	def images_list
    		@user.images.each
    	end

    	def slides
    		@slideshow.slides
    	end

    end
	end
end
