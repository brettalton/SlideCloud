module Views
  module Slideshows
    class Edit < Layouts::Application
<<<<<<< HEAD
=======

    	def create_slide_btn
    		link_to "Create new slide", slides_create_path(@slideshow.id), 
          :method => :post, 
          :remote => true, 
          :class => "btn btn-small"
    	end

      def save_slide_btn

      end
>>>>>>> 55dffe869322012a67e9fb207870adfd2f135a3e
      
    	def images_list
    		@user.images.each
    	end

    	def slides
    		@slideshow.slides
    	end

      def self
        @slideshow
      end

    end
  end
end
