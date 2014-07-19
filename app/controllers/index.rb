get "/" do
  redirect "/stories"
end

get "/stories" do
  @stories = Story.all
  erb :stories
end

get "/stories/new" do
  erb :new
end

put "/stories/update" do
  # update story
end

get "/stories/:id" do
  @story = Story.find(params[:id])
  # also read the story
  erb :story
end

post "/stories" do
  story = Story.create(params)
  redirect "stories/#{story.id}"
end

get "/stories/:id/edit" do
  # form for editing story
end

delete "/stories/:id" do
  #delete story
end
