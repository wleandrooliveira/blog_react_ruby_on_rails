require 'rails_helper'

RSpec.describe Post, type: :model do

  # it do
  #   expect(1 + 200).to eq(201)
  # end

  describe 'default Post details' do
    let (:post) { create :post}

    it 'should initialize post with title and content' do
      expect(post.title).to eq("ReactJS")
      expect(post.content).to eq("Esse Framework é muito bom!")
    end
  end

  describe 'default post details' do
    before do
      create :post
    end

    it 'should initialize post title and content' do
      expect(Post.count).to eq 1

      p = Post.last

      expect(p.title).to eq("ReactJS")
      expect(p.content).to eq("Esse Framework é muito bom!")
    end
  end
end
