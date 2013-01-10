module Views
  module Slideshows
    class Index < Layouts::Application

      def user_email
        @user.email
      end
      
      def headline
        if @slideshows.empty?
          "Create a new Slideshow!"
        else
          "Your Slideshows"
        end
      end

    	def link_new
    		link_to '... a new Slideshow!', new_slideshow_path, :class => "breadcrump lead"
    	end

    	def slideshows
    		@slideshows.map do |s|
    			{
    				:title => s.title,
            :desc => s.desc,
            :thumbnail => s.thumbnail,
            :edit_path => edit_slideshow_path(s),
            :show_btn => show(s),
            :destroy_btn => destroy(s),
            :edit_btn => edit(s)
          }
        end
      end
 
      def show slideshow
        link_to 'Show', slideshow, :class => "btn btn-primary btn-small"
      end
      
      def edit slideshow
        link_to 'Edit', edit_slideshow_path(slideshow), :class => 'btn btn-small'
      end

    	def destroy slideshow
        link_to 'Destroy', slideshow, method: :delete, data: { confirm: 'Are you sure?' }, :class =>'btn btn-danger btn-small'
    	end
      
      
      # def fb_profile_picture
      #                    profile = @graph.get_picture("me", {:type => 'small'})
      #                  end
      #                  
      #                  def fb_user_name
      #                    profile = @graph.get_object("me", {:fields => 'first_name'}).first[1]
      #                  end

    end
  end
end

