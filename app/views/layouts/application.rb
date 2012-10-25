module Views
  module Layouts
    class Application < ActionView::Mustache
    
      def title
        "SlideCloud"
      end
      
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
    
    end
  end
end