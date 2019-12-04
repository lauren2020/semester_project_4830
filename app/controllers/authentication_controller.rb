class AuthenticationController < ApplicationController
    skip_before_action :verify_authenticity_token
   
    def authenticate
        user = User.find_by_email(params[:email])
        redirect_to :controller => 'users', :action => 'show', id: user.id #, token: command.result
    end

    def login
        respond_to do |format|
            format.html { render :file => "authentication/login", status: 200 }
        end
    end

    def create_account
    end
end