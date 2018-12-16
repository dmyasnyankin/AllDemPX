class Photo < ApplicationRecord
    validates :title, :author_id, :image_url, presence: true

    belongs_to :user
end
