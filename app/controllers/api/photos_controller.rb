class Api::PhotosController < ApplicationController

  def search

    # @photos = Photo.where(title: params[:search])
    if params[:search]

      @photos = []
      Tag.where("name LIKE ?", "%#{params[:search]}%").to_a.each do |tag| 
        @photos.concat(tag.photos)
      end

      @photos = @photos.uniq { |photo_ar| photo_ar.id }
      # Photo.where("title LIKE ?", "%#{params[:search]}%")
    else
      @photos = Photo.all
    end

    render :index

  end

end
