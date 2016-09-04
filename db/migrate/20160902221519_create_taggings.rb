class CreateTaggings < ActiveRecord::Migration[5.0]
  def change
    create_table :taggings do |t|
      t.integer :photo_id
      t.integer :tag_id
      t.timestamps
    end

    add_index :taggings, :photo_id
    add_index :taggings, :tag_id
  end
end
