class Api::PhotosController < ApplicationController

  def search
    unless params[:search] == ''
      @photos = Photo.joins(:tags).where("name LIKE ?", "%#{params[:search]}%").includes(:user).distinct      
    else
      @photos = Photo.all
    end
      @photos = @photos.page(params[:page]).per(10)

    render :index

  end

  def feed
    broadcaster_ids = current_user.broadcasters.map(&:id)

    unless broadcaster_ids.empty?
      @photos = Photo.where('broadcaster_id in ?', broadcaster_ids)
    else
      @photos = Photo.all.limit(20)
    end

    render :index

  end

  # followings - follower_id, broadcaster_id

  def create
    p params
    @photo = Photo.new(photo_params)
    @photo.user_id = current_user.id

    if (@photo.save)

      tags.each do |tag_name|
        tag = Tag.find_by_name(tag_name) || Tag.create(name: tag_name)
        Tagging.create(photo_id: @photo.id, tag_id: tag.id)
      end

      #tag can silently fail!!!

      render :show
    else
      render json: @photo.errors.full_messages, status: 404
    end
  end


  def show
    debugger
    @photo = Photo.find_by_id(params[:id])
  end

  def photo_params
    params.require(:image).permit(:url, :title, :description, :width, :height)
  end

  def tags
    params.require(:image).permit(tags: [])
  end


end

    # if params[:filter]
    #   if params[:filter] == "wide"
    #     @photos = @photos.where("width / height >= 1.33").to_a
    #   elsif params[:filter] == "square"
    #     @photos = @photos.where("width / height <= 1.33 AND width / height >= .75").to_a
    #   elsif params[:filter] == "narrow"
    #     @photos = @photos.where("width / height <= .75").to_a
    #   end
    # end   
