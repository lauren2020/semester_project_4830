require 'token_manager'

class ApplicationController < ActionController::Base
    layout "application"
    include ::ActionController::Cookies

  private

  def authenticate_user
    token = cookies.signed['X-Access-Token']
    user_id = TokenManager.validate_token(token)
    if (user_id)
      @current_user = User.find_by_id(user_id)
      puts "Current User:"
      puts @current_user.id
    else
      throw :halt
    end
  rescue
    @error_message = "Your session has expired, please login"
    render 'authentication/error', status: :unauthorized
    false
  end

  def token_manager
    @_token_manager = TokenManager
  end
end
