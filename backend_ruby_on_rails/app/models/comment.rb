class Comment < ApplicationRecord
  belongs_to :post

  #validates :content, presence: true, length: { minimim: 140 }
end
