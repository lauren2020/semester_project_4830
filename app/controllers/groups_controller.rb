class GroupsController < ApplicationController
    skip_before_action :verify_authenticity_token

    def all_groups
        @groups = Group.all 
        render json: {
            groups: @groups
        }
    end

    def create
        name, profile_url, user_id = params.values_at :name, :profile_url, :user_id
        #@new_group = MessageBoard.new(:name => name, :profile_url => profile_url, :user_id => user_id)
        #:profile_url => profile_url,

        puts "IN CREATE:"
        puts name
        puts user_id
        @new_group = Group.new(:name => name, :user_id => user_id)

        if @new_group.save
            render json: @new_group
        else
            render json: {
                error: "There was an error creating group!"
            }
        end
    end

    def change_profile_image
        #@group = MessageBoard.find_by_id(params[:id])
        @group = Group.find_by_id(params[:id])
        @group.profile_url = params[:profile_url]

        if @group.save
            render json: @group
        else
            render plain: "There was an error updating group!"
        end
    end

    def add_member_to_group
        @user = User.find_by_id(params[:user_id])
        @group = Group.find_by_id(params[:id])

        @user.groups << @group
        @group.users << @user

        if @user.save && @group.save
            render json: @group
        else
            render json: {
                error: "There was an error adding member to group!"
            }, status: 422
        end
    end

    def send_invite_to_group
        @group = Group.find_by_id(params[:id])
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
            group: {
                id: @group.id,
                name: @group.name,
                profile_url: @group.profile_url
            },
            date_invited: Date.today
        }

        @group.sent_invites << invite
        @invited_user.group_invites << invite

        if @group.save && @invited_user.save
            render json: @group
        else
            render json: {
                error: "Unable to send invite."
            }, status: 422
        end
    end
end