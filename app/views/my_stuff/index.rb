module Views
  module MyStuff
    class Index < Layouts::Application

      def sign_out
        if user_signed_in?
          link_to 'Sign Out', destroy_user_session_path, :method => :delete 
        else
          link_to 'You shouldnt be here! something went wrong :(', user_session_path
        end
      end

    end
  end
end
