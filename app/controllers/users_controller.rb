class UsersController < ApplicationController
    skip_before_action :verify_authenticity_token

    def list_all
        @users = User.all
        render json: {
            users: @users
        }
    end

    def show
        show_user(:id => params[:id])
    end

    def show_user(id)
        @user = User.find_by_id(params[:id])
        redirect_to :controller => 'users', :action => 'feed', params: {id: id}
    end

    def update
    end

    def create
        first_name, last_name, email, username, password, confirm_password, profile_url = params.values_at :first_name, :last_name, :email, :username, :password, :confirm_password, :profile_url
        @new_user = User.new(:first_name => first_name, :last_name => last_name, :email => email, :username => username, :password => password, :profile_url => profile_url)

        if @new_user.save
            show_user(:id => @new_user.id)
        else
            render plain: "Error creating user!"
        end
    end

    def login
    end

    def sign_up
    end

    def logout
        redirect_to root_path() #, :action => '/'
    end

    def feed
        @user = User.find_by_id(params[:id])
        #TODO: Calculate user feed
        post0 = {id: "0", date: "10-22-2019", user: {first_name: "Michael", last_name: "Scott", profile_url: "https://thenypost.files.wordpress.com/2019/06/the-office-1390.jpg?quality=90&strip=all&w=618&h=410&crop=1"}, body: "Colorado has been amazing, hiking with holly in the rockies this weekend", comments: [], likes: ["1"], public: true, groups: [], people: []}
  
        @feed = [post0]

        @file = "users/feed"
        respond_to do |format|
            format.html { render :file => "users/home", status: 200 }
        end
    end

    def groups
        @user = User.find_by_id(params[:id])
        owned_groups = Group.where(:user_id => @user.id)
        #@user.groups << Group.find_by_id(2)
        groups_joined = @user.groups
        @groups = owned_groups | groups_joined

        @file = "users/groups"
        respond_to do |format|
            format.html { render :file => "users/home", status: 200 }
        end
    end
    
    def connections
        @user = User.find_by_id(params[:id])

        @connections = @user.connections

        @file = "users/connections"
        respond_to do |format|
            format.html { render :file => "users/home", status: 200 }
        end
    end

    def privacy_settings
        @user = User.find_by_id(params[:id])
        @privacy_settings = []

        @file = "users/privacy_settings"
        respond_to do |format|
            format.html { render :file => "users/home", status: 200 }
        end
    end

    def add_connection
        @initiating_user = User.find_by_id(params[:user_id])
        @accepting_user = User.find_by_id(params[:id])

        @initiating_user.connections << @accepting_user
        @accepting_user.connections << @initiating_user

        if @initiating_user.save && @accepting_user.save
            render json: @accepting_user
        else
            render plain: "There was an error adding connection!"
        end
    end
end