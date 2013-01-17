module Views
  module Slideshows
    class Edit < Layouts::Application
      
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
