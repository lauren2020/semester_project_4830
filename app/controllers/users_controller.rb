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
        groups_joined = @user.groups
        @groups = owned_groups | groups_joined
        @connections = @user.connections

        @file = "users/groups"
        respond_to do |format|
            format.html { render :file => "users/home", status: 200 }
        end
    end
    
    def connections
        @user = User.find_by_id(params[:id])
        puts "User In Connections:"
        puts @user.first_name
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

    def send_connection_invite_by_username
        puts params[:invited_username]
        puts params[:inviting_user_id]
        @invited_user = User.find_by_username(params[:invited_username])
        @inviting_user = User.find_by_id(params[:inviting_user_id])

        puts @invited_user.first_name
        puts @inviting_user.last_name

        invite = {
            invited_user: {
                id: @invited_user.id,
                name: @invited_user.first_name + " " + @invited_user.last_name,
                profile_url: @invited_user.profile_url
            },
            inviting_user: {
                id: @inviting_user.id,
                name: @inviting_user.first_name + " " + @inviting_user.last_name,
                profile_url: @inviting_user.profile_url
            },
            date_invited: Date.today
        }

        @inviting_user.sent_connection_requests << invite
        @invited_user.connection_requests << invite

        if @inviting_user.save && @invited_user.save
            render json: {
                inviting_user: @inviting_user
            }  
        else
            render json: {
                error: "Unable to send invite."
            }, status: 422
        end
    end

    def send_connection_invite
        @invited_user = User.find_by_id(params[:invited_user_id])
        @inviting_user = User.find_by_id(params[:inviting_user_id])

        invite = {
            invited_user: {
                id: @invited_user.id,
                name: @invited_user.first_name + " " + @invited_user.last_name,
                profile_url: @invited_user.profile_url
            },
            inviting_user: {
                id: @inviting_user.id,
                name: @inviting_user.first_name + " " + @inviting_user.last_name,
                profile_url: @inviting_user.profile_url
            },
            date_invited: Date.today
        }

        @inviting_user.sent_connection_requests << invite
        @invited_user.connection_requests << invite

        if @inviting_user.save && @invited_user.save
            render json: @inviting_user
        else
            render json: {
                error: "Unable to send invite."
            }, status: 422
        end
    end

    def accept_connection_invite
        @inviting_user = User.find_by_id(params[:inviting_user_id])
        @invited_user = User.find_by_id(params[:invited_user_id])

        valid_sent_invites = Array(nil)
        valid_recieved_invites = Array(nil)

        @inviting_user.sent_connection_requests.each do |invite|
            if (invite["invited_user"]["id"] != @invited_user.id)
                valid_sent_invites << invite
            end
        end

        @invited_user.connection_requests.each do |invite|
            if (invite["inviting_user"]["id"] != @inviting_user.id)
                valid_recieved_invites << invite
            end
        end

        @inviting_user.sent_connection_requests = valid_sent_invites
        @invited_user.connection_requests = valid_recieved_invites

        if @inviting_user.save && @invited_user.save
            # user_id = @invited_user.id
            # group_id = @group.id
           process_add_connection(@inviting_user.id, @invited_user.id)
        else
            render json: {
                error: "There was an error accepting the invite."
            }
        end
    end

    def process_add_connection(inviting_user_id, invited_user_id)
        @initiating_user = User.find_by_id(inviting_user_id)
        @accepting_user = User.find_by_id(invited_user_id)

        # connection1 = Connection.new(connection_id: @accepting_user.id, user_id: @initiating_user.id)
        # connection2 = Connection.new(connection_id: @initiating_user.id, user_id: @accepting_user.id)

        #@connection = @initiating_user.connections.build(:connection_id => @accepting_user.id)
        puts @initiating_user.first_name
        puts @accepting_user.first_name

        @initiating_user.connections << @accepting_user #connection1
        @accepting_user.connections << @initiating_user #connection2

        if @initiating_user.save && @accepting_user.save
            render json: @accepting_user
        else
            render plain: "There was an error adding connection!"
        end
    end

    def add_connection
        @initiating_user = User.find_by_id(params[:user_id])
        @accepting_user = User.find_by_id(params[:id])

        # connection1 = Connection.new(connection_id: @accepting_user.id, user_id: @initiating_user.id)
        # connection2 = Connection.new(connection_id: @initiating_user.id, user_id: @accepting_user.id)

        #@connection = @initiating_user.connections.build(:connection_id => @accepting_user.id)
        puts @initiating_user.first_name
        puts @accepting_user.first_name

        @initiating_user.connections << @accepting_user #connection1
        @accepting_user.connections << @initiating_user #connection2

        if @initiating_user.save && @accepting_user.save
            render json: @accepting_user
        else
            render plain: "There was an error adding connection!"
        end
    end
end