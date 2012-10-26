module Views
  module Home
    class Index < Layouts::Application

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