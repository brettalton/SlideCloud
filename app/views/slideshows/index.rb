module Views
  module Slideshows
    class Index < Layouts::Application

      def user_email
        @user.email
      end

    	def link_new
    		link_to 'New Slideshow', new_slideshow_path
    	end

    	def slideshows
    		@slideshows.map do |s|
    			{
    				:title => s.title,
            :desc => s.desc,
            :thumbnail => s.thumbnail,
            :edit_path => edit_slideshow_path(s),
            :show_btn => show(s),
            :destroy_btn => destroy(s)
          }
        end
      end

      def show slideshow
        link_to 'Show', slideshow, :class => "btn btn-primary"
      end

    	def destroy slideshow
        link_to 'Destroy', slideshow, method: :delete, data: { confirm: 'Are you sure?' }, :class =>'btn'
    	end

    end
  end
end

