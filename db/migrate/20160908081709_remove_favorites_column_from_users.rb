class RemoveFavoritesColumnFromUsers < ActiveRecord::Migration[5.0]
  def change
    remove_column :photos, :favorites
  end
end
