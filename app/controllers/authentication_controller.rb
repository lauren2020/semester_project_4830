class AuthenticationController < ApplicationController
    #skip_before_action :authenticate_request
    #after_action: 
    skip_before_action :verify_authenticity_token
   
    def authenticate
    #   command = AuthenticateUser.call(params[:email], params[:password])
   
    #   if command.success?
    #     puts command.result
    #     # response.set_header('X-Access-Token', 'testfromauth')
    #     # request.set_header('X-Access-Token', 'testfromauth')
    #     #headers["X-Access-Token"] = command.result
    #     #render json: { auth_token: command.result }
        #user = User.find_by_email(params[:email])
        redirect_to :controller => 'users', :action => 'show', id: 1 #user.id #, token: command.result
    #     #redirect_to action: 'show', id: @new_user.id
    #   else
    #     render json: { error: command.errors }, status: :unauthorized
    #   end
    end

    def login
        respond_to do |format|
            format.html { render :file => "authentication/login", status: 200 }
        end
    end

    def create_account
    end
end