class Page < ApplicationRecord
  has_many :blocks, as: :blockable, -> { order(position: :asc) }
  has_many :images, as: :imageable, -> { order(position: :asc) }
end
