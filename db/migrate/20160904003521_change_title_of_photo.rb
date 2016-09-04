class ChangeTitleOfPhoto < ActiveRecord::Migration[5.0]
  def change
    change_column :photos, :title, :string, :null => true

  end
end
