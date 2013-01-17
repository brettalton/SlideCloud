class Slide
  include Mongoid::Document
  embedded_in :slideshow
  field :stage, type: Hash
  field :img_src, type: String
  field :slide_count, type: Integer
  attr_accessible :stage, :img_src, :slide_count
end
