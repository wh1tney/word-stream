get "/" do
  # redirect to /stories
  redirect "/stories"
end

get "/stories" do
  # get list of all stories
end

get "/stories/:id" do
  # get a specific story
  # also read the story
end

post "/stories" do
  # new story
end

get "/stories/new" do
  # form for creating new story
end

get "/stories/:id/edit" do
  # form for editing story
end

put "/stories/update" do
  # update story
end

delete "/stories/:id" do
  #delete story
end