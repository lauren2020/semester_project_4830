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
        @new_group = Group.new(:name => name, :profile_url => profile_url, :user_id => user_id)

        if @new_group.save
            render json: @new_group
        else
            render json: {
                error: "There was an error creating group!"
            }
        end
    end

    def change_profile_image
        @group = Group.find_by_id(params[:id])
        @group.profile_url = params[:profile_url]

        if @group.save
            render json: @group
        else
            render plain: "There was an error updating group!"
        end
    end

    def add_member_to_group
        process_add_member_to_group(user_id: params[:user_id], group_id: params[:id])
    end

    def process_add_member_to_group(user_id, group_id)
        @user = User.find_by_id(user_id)
        @group = Group.find_by_id(group_id)

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

    def accept_invite
        @group = Group.find_by_id(params[:group_id])
        @invited_user = User.find_by_id(params[:invited_user_id])

        valid_group_invites = Array(nil)
        valid_user_invites = Array(nil)

        @group.sent_invites.each do |invite|
            if (invite["invited_user"]["id"] != @invited_user.id)
                valid_group_invites << invite
            end
        end

        @invited_user.group_invites.each do |invite|
            if (invite["group"]["id"] != @group.id)
                valid_user_invites << invite
            end
        end

        @group.sent_invites = valid_group_invites
        @invited_user.group_invites = valid_user_invites

        if @group.save && @invited_user.save
            user_id = @invited_user.id
            group_id = @group.id
           process_add_member_to_group(user_id, group_id)
        else
            render json: {
                error: "There was an error accepting the invite."
            }
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
            render json: {
                group: @group
            }
        else
            render json: {
                error: "Unable to send invite."
            }, status: 422
        end
    end
end