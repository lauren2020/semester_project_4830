class LandingController < ApplicationController
    def index
    end

    def go_to_login
        redirect_to controller: 'authentication', action: 'login'
    end
end