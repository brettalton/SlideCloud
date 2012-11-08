module Views
  module Devise
    module Sessions
      class New < Layouts::Application
   
        #TODO here should be the deviseSession View! please refactor
        
        def form_for(resource, :as => resource_name, :url => session_path(resource_name)) do |f| 
        
          f.label :email
          f.email_field :email
        
          f.label :password
          f.password_field :password
        

          if devise_mapping.rememberable?
            f.check_box :remember_me
            f.label :remember_me
          end

          f.submit "Sign in"
        end
   
        
      end
    end
  end
end
