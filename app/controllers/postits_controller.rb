class PostitsController < ApplicationController
    skip_before_action :verify_authenticity_token

    def index
    end

    def post_to_group
        body, user_id, group_id = params.values_at :body, :user_id, :group_id

        @posting_user = User.find_by_id(user_id)
        @shared_group = Group.find_by_id(group_id)

        @post = Post.new(:body => body, :title => "Title", :user => @posting_user, :shared_to_group => @shared_group)
        @posting_user.posts << @post

        if @post.save && @posting_user.save
            render json: @post
        else
            render json: {
                message: "There was an error creating post.",
                post_error: @post.errors,
                user_error: @posting_user.errors
            }
        end
    end

    def post_to_user
        body, user_id, shared_user_id = params.values_at :body, :user_id, :shared_user_id

        @posting_user = User.find_by_id(user_id)
        @shared_user = User.find_by_id(shared_user_id)

        @post = Post.new(:body => body, :title => "Title", :user => @posting_user, :shared_to_user => @shared_user)
        @posting_user.posts << @post

        if @post.save && @posting_user.save
            render json: @post
        else
            render json: {
                error: "There was an error creating post."
            }
        end
    end

    def map_comment(comment)
            comment_object = {
                content: comment,
                user: {
                    first_name: comment.user.first_name,
                    last_name: comment.user.last_name,
                    profile_url: comment.user.profile_url
                },
                date: comment.created_at
            }
            return comment_object
    end

    def comment_on_post
        body, user_id, post_id = params.values_at :body, :user_id, :post_id

        @posting_user = User.find_by_id(user_id)
        @post = Post.find_by_id(post_id)

        @comment = Comment.new(:body => body, :user => @posting_user, :post => @post)
        @post.comments << @comment

        if @comment.save && @post.save
            render json: map_comment(@comment)
        else
            render json: {
                error: "There was an error adding comment."
            }
        end
    end

    def like_post
        post_id, user_id = params.values_at :post_id, :user_id

        @post = Post.find_by_id(post_id)
        @post.likes << user_id

        if @post.save 
            render json: @post
        else
            render json: {
                error: "Could not like post"
            }
        end
    end

    def remove_post
        post_id = params.values_at :post_id
        @post = Post.find_by_id(post_id)
        @post.destroy

        render json:   {
            message: "Post destroyed"
        }
    end

    def all_posts
        @posts = Post.all 
        render json: {
            posts: @posts
        }
    end
end