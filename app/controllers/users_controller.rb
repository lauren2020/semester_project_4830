class UsersController < ApplicationController
    def show
        @file = "users/feed"
        respond_to do |format|
            format.html { render :file => "users/home", status: 200 }
        end
    end

    def update
    end

    def create
        new_user = User.new
        new_user.first_name = params[:first_name]
        new_user.last_name = params[:last_name]
        new_user.email = params[:email]
        new_user.username = params[:username]
        new_user.profile_url = params[:profile_url]

        if new_user.save
            show(new_user.id)
        else
            render plain: "Error creating user!"
        end
    end

    def login
    end

    def sign_up
    end

    def feed
        # @user = User.find_by_id(params[:id])
        # @feed = []

        @file = "users/feed"
        respond_to do |format|
            format.html { render :file => "users/home", status: 200 }
        end
    end

    def groups
        # @user = User.find_by_id(params[:id])
        # @file = "users/groups"

        respond_to do |format|
            format.html { render :file => "users/home", status: 200 }
        end
    end
    
    def connections
        @file = "users/connections"
        respond_to do |format|
            format.html { render :file => "users/home", status: 200 }
        end
    end

    def privacy_settings
        @file = "users/privacy_settings"
        respond_to do |format|
            format.html { render :file => "users/home", status: 200 }
        end
    end
end