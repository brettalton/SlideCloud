module Views
  module Assetmanager
    class Index < Layouts::Application
      
    	def form
    		"#{render 'form'}".html_safe
    	end
      
      
      
    end
  end
end
