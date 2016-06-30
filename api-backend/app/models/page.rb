class Page < ApplicationRecord
  has_many :blocks, as: :blockable, -> { order(position: :asc) }
end
