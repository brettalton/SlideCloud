module Views
  module Home
    class Index < Layouts::Application


      def login
        link_to 'All you have to do is signing up', user_session_path, :class => "btn btn-large btn-info", :style => "text-align: center;" 
      end

      def logged_in
        if user_signed_in?
          "Gratz You have logged in! Enjoy!"
        else
          "Sign Up to access all the cool features of this app"
        end
      end

      def slideshows
        @slideshows.map do |s|
          {
            :title => s.title,
            :desc => s.desc,
            :thumbnail => s.thumbnail,
            :show_path => slideshow_path(s)
          }
        end
      end

    end
  end
end