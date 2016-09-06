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
      @photos = Photo.page(params[:page]).per(20)
    end

    if params[:filter]
      if params[:filter] == "wide"
        @photos = @photos.where("width / height >= 1.33").to_a
      elsif params[:filter] == "square"
        @photos = @photos.where("width / height <= 1.33 AND width / height >= .75").to_a
      elsif params[:filter] == "narrow"
        @photos = @photos.where("width / height <= .75").to_a
      end
    end

    # @photos = @photos.page(1).per(20)
    # @photos = @photos.take(10)

    render :index

  end

  def create

    #render :show
  end


  def show
    @photo = Photo.find_by_id(params[:id])
  end


end
