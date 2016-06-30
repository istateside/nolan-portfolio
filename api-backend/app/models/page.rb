class Page < ApplicationRecord
  has_many :blocks, -> { order(position: :asc) }, as: :blockable
  has_many :images, -> { order(position: :asc) }, as: :imageable
  attr_accessor :name, :presentation, :is_published, :is_in_header
end
