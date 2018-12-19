class RemoveColumnFromPhotos < ActiveRecord::Migration[5.2]
  def change
    remove_column :photos, :image_url
  end
end
