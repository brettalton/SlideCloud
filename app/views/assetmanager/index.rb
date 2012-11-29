module Views
  module Assetmanager
    class Index < Layouts::Application

    	def images_list
    		@user.images.each
    	end
      
      def destroy_image
        link_to 'Delete',  images_delete_path, { :controller => "images", :action => "destroy", :method => :delete, :confirm => "Really?", :remote => true}
      end
      
    	def form
    		"#{render 'form'}".html_safe
    	end

    end
  end
end
