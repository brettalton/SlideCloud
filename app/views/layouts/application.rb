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

      def sign_in
        if user_signed_in?
          link_to 'Log out!', destroy_user_session_path, :method => :delete
        else
          link_to 'Sign In!', user_session_path
        end
      end

      def notice_message
        unless notice.nil?
          content_tag(:p, notice, :class => 'notice') unless alert.nil?
        end
      end

      def alert_message
          content_tag(:p, alert, :class => 'alert') unless alert.nil?
      end
    
    end
  end
end