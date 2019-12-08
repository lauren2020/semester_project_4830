class AuthenticationController < ApplicationController
    skip_before_action :verify_authenticity_token
   
    def authenticate

        email, password = params.values_at :email, :password
        puts "Passed Email and Pass"
        puts email
        puts password
        if (user = User.find_by_email(email)&.authenticate(password))
            token = token_manager.generate_token(user.id)

            cookies.signed['X-Access-Token'] = {value:  token, httponly: true, expires: 2.hour.from_now}
    
            redirect_to :controller => 'users', :action => 'show', id: user.id
        else
            @error_message = "Username or password is incorrect."
            render 'authentication/error', status: :unauthorized
        end
    end

    def login
        respond_to do |format|
            format.html { render :file => "authentication/login", status: 200 }
        end
    end

    def create_account
    end
end