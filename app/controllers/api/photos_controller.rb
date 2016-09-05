class Api::PhotosController < ApplicationController

  def search

    # @photos = Photo.where(title: params[:search])
    if params[:search]

      @photos = []

      if params[:search] == "wide"
        @photos = Photo.where("width / height >= 1.33").to_a
      elsif params[:search] == "square"
        @photos = Photo.where("width / height <= 1.33 AND width / height >= .75").to_a
      elsif params[:search] == "narrow"
        @photos = Photo.where("width / height <= .75").to_a
      else
        Tag.where("name LIKE ?", "%#{params[:search]}%").to_a.each do |tag| 
          @photos.concat(tag.photos)
        end

      end


      @photos = @photos.uniq { |photo_ar| photo_ar.id }
      # Photo.where("title LIKE ?", "%#{params[:search]}%")
    else
      @photos = Photo.all
    end

    render :index

  end

  def show
    puts "hey"
    p params
    @photo = Photo.find_by_id(params[:id])
  end

end
