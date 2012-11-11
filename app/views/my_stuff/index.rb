module Views
  module MyStuff
    class Index < Layouts::Application

      def sign_out
        if user_signed_in?
          link_to(current_user.email, destroy_user_session_path, :method => :delete) 
        else
          link_to 'You shouldnt be here! something went wrong :(', user_session_path
        end
      end
      
      
      # def fb_profile_picture
      #        profile = @graph.get_picture("me", {:type => 'small'})
      #      end
      #      
      #      def fb_user_name
      #        profile = @graph.get_object("me", {:fields => 'first_name'}).first[1]
      #      end

    end
  end
end
