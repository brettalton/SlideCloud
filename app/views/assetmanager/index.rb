module Views
  module Assetmanager
    class Index < Layouts::Application

    	def images_list
    		@user.images.each
    	end
      
      def destroy_image
        link_to 'Delete',  images_delete_path, { :controller => "images", :action => "destroy", :method => :delete, :confirm => "Really?", :remote => true}
      end
      
      def destroy_all_selected_images
        link_to_function 'Delete all Selected Images', 'javascript:destroySelectedImages()'
      end
      
    	def form
    		"#{render 'form'}".html_safe
    	end

    end
  end
end
