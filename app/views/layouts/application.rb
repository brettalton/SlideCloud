module Views
  module Layouts
    class Application < ActionView::Mustache
      
      def asset
              {
                :style => {
                  :application_css => stylesheet_link_tag('application.css'),
                },
                :js => {
                  :application_js => javascript_include_tag('application.js'),          
                }
              }
      end

      def title
        "SlideCloud"
      end

      def sign_up
        if user_signed_in?
          link_to "Log out!", destroy_user_session_path
        else
          link_to "Sign Up!", user_session_path
        end
      end
    
    end
  end
end