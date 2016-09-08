class Api::UsersController < ApplicationController

  def create
    # debugger
    @user = User.new(user_params)

    if @user.save
      login(@user)
      render "api/users/show"
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def show
    @user = User.find_by_id(params[:id])
  end


  def follow
    # debugger
    broadcaster_id = params[:id]
    following = Following.find_by_follower_id_and_broadcaster_id(current_user.id, broadcaster_id)
    if following
      Following.delete(following)
    else
      Following.create(follower_id: current_user.id, broadcaster_id: broadcaster_id)
    end

    @user = User.find(current_user.id)

    render :show
  end

  private

  def user_params
    params.require(:user).permit(:email, :password)
  end

end
