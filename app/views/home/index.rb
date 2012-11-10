module Views
  module Home
    class Index < Layouts::Application


      def login
        link_to 'Sign In', user_session_path, :class => "btn btn-large btn-primary", :style => "text-align: center;" 
      end

      def logged_in
        if user_signed_in?
          "Gratz You have logged in! Enjoy!"
        else
          "Sign Up to access all the cool features of this app"
        end
      end

    end
  end
end