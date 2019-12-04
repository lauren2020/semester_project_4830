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
        redirect_to("http://localhost:4000/user/" + id[:id].to_s + "/feed", {})
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

    def map_comments(comments)
        @mapped_comments = []
        comments.each do |comment|
            comment_object = {
                content: comment,
                user: {
                    first_name: comment.user.first_name,
                    last_name: comment.user.last_name,
                    profile_url: comment.user.profile_url
                },
                date: comment.created_at
            }
            @mapped_comments << comment_object
        end
        return @mapped_comments
    end

    def map_posts(posts)
        @mapped_posts = []
        posts.each do |post|
            post_object = {
                content: post,
                user: {
                    first_name: post.user.first_name,
                    last_name: post.user.last_name,
                    profile_url: post.user.profile_url
                },
                date: post.created_at,
                shared_to_group: post.shared_to_group,
                shared_to_user: post.shared_to_user,
                comments: map_comments(post.comments)
            }
            @mapped_posts << post_object
        end
        return @mapped_posts
    end

    def feed
        @user = User.find_by_id(params[:id])
        @feed = map_posts(@user.posts) 

        owned_groups = Group.where(:user_id => @user.id)
        groups_joined = @user.groups
        @groups = owned_groups | groups_joined
        @connections = @user.connections

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

        @group_posts = {}
        
        @groups.each do |group|
            @selected_posts = map_posts(Array(Post.where(:shared_to_group => group)))
            @group_posts[group.id] = @selected_posts
        end

        @file = "users/groups"
        respond_to do |format|
            format.html { render :file => "users/home", status: 200 }
        end
    end
    
    def connections
        @user = User.find_by_id(params[:id])

        owned_groups = Group.where(:user_id => @user.id)
        groups_joined = @user.groups
        @groups = owned_groups | groups_joined
        @connections = @user.connections

        @connection_posts = {}

        @connections.each do |connection|
            @selected_posts = Post.where(:shared_to_user => connection, :user => @user) | Post.where(:shared_to_user => @user, :user => connection)
            @connection_posts[connection.id] = map_posts(Array(@selected_posts))
        end

        @file = "users/connections"
        respond_to do |format|
            format.html { render :file => "users/home", status: 200 }
        end
    end

    def privacy_settings
        @user = User.find_by_id(params[:id])
        @privacy_settings = @user.privacy_settings
        
        owned_groups = Group.where(:user_id => @user.id)
        groups_joined = @user.groups
        @groups = owned_groups | groups_joined
        @connections = @user.connections

        @file = "users/privacy_settings"
        respond_to do |format|
            format.html { render :file => "users/home", status: 200 }
        end
    end

    def send_connection_invite_by_username
        @invited_user = User.find_by_username(params[:invited_username])
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

        @initiating_user.connections << @accepting_user
        @accepting_user.connections << @initiating_user

        if @initiating_user.save && @accepting_user.save
            render json: @accepting_user
        else
            render plain: "There was an error adding connection!"
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

    def change_privacy_settings 
        defaultPostVisibility, allowConnectionToViewInCommon, allowUsersToSearchProfile, allowConnectionsToAddMeToGroup, defaultAllowOthersInGroupToViewProfile = params.values_at :defaultPostVisibility, :allowConnectionToViewInCommon, :allowUsersToSearchProfile, :allowConnectionsToAddMeToGroup, :defaultAllowOthersInGroupToViewProfile
        
        puts "FOUND:"
        puts defaultPostVisibility
        puts allowConnectionToViewInCommon
        puts allowUsersToSearchProfile
        puts allowConnectionsToAddMeToGroup
        puts defaultAllowOthersInGroupToViewProfile
        @user = User.find_by_id(params[:user_id])
        if (defaultPostVisibility != nil)
            puts "defaultPostVisibility"
            @user.privacy_settings["defaultPostVisibility"] = defaultPostVisibility
        end
        if (allowConnectionToViewInCommon != nil)
            puts "2"
            @user.privacy_settings["allowConnectionToViewInCommon"] = allowConnectionToViewInCommon
        end
        if (allowUsersToSearchProfile != nil)
            puts "3"
            @user.privacy_settings["allowUsersToSearchProfile"] = allowUsersToSearchProfile
        end
        if (allowConnectionsToAddMeToGroup != nil)
            puts "4"
            @user.privacy_settings["allowConnectionsToAddMeToGroup"] = allowConnectionsToAddMeToGroup
        end
        if (defaultAllowOthersInGroupToViewProfile != nil)
            puts "5"
            @user.privacy_settings["defaultAllowOthersInGroupToViewProfile"] = defaultAllowOthersInGroupToViewProfile
        end

        if @user.save
            render json: @user
        else
            render json: {
                error: "Could not update privacy settings"
            }
        end
    end
end