class AddHeightToPhotos < ActiveRecord::Migration[5.0]
  def change
    add_column :photos, :height, :integer, null: false
  end
end
