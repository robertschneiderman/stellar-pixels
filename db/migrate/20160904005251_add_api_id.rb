class AddApiId < ActiveRecord::Migration[5.0]
  def change
    add_column :photos, :api_id, :integer
    add_index :photos, :api_id
  end
end
