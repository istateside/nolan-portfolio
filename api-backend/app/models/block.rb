class Block < ApplicationRecord
  belongs_to :blockable, polymorphic: true
  has_many :child_blocks, -> { order(position: :asc) }, as: :blockable
  has_many :images, -> { order(position: :asc) }, as: :imageable
  acts_as_list scope: :blockable
  
  attr_accessor :title, :size, :shape, :text, :position, :is_published
end
