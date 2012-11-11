module Views
  module Slideshows
    class Index < Layouts::Application


      def sign_out
        if user_signed_in?
          link_to(current_user.email, destroy_user_session_path, :method => :delete) 
        else
          link_to 'You shouldnt be here! something went wrong :(', user_session_path
        end
      end
      

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

