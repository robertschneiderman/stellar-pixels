class AddWidthToPhotos < ActiveRecord::Migration[5.0]
  def change
    add_column :photos, :width, :integer, null: false
  end
end
