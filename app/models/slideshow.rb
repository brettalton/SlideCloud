class Slideshow
  include Mongoid::Document
  belongs_to :user
  field :title, type: String
  field :desc, type: String
  field :thumbnail, type: String
end
