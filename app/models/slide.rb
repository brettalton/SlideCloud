class Slide
  include Mongoid::Document
  embedded_in :slideshow
  field :layer, type: Hash
  field :img_src, type: String
  field :slide_count, type: Integer
  attr_accessible :layer, :img_src, :slide_count
end
