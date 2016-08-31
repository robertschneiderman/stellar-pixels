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

  # def search

  #   tags: [
  #     "snow",
  #     "16:9"
  #   ]

  #   @photos = Photo.joins(:tags).where(tags.name in ["snow", "16:9"])

  # render :index

  # json.extract! photo, url, tag


  private

  def user_params
    params.require(:user).permit(:email, :password)
  end

end
