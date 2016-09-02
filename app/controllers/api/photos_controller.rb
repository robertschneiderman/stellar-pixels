class Api::PhotosController < ApplicationController

  def search

    # @photos = Photo.where(title: params[:search])
    if params[:search]
      # debugger
      # @photos = Photo.where(title: 'red')
      @photos = Photo.where("title LIKE ?", "%#{params[:search]}%")
    else
      @photos = Photo.all
    end

    # tags: [
    #   "snow",
    #   "16:9"
    # ]

    # @photos = Photo.joins(:tags).where(tags.name in ["snow", "16:9"])
    render :index

  end

end
