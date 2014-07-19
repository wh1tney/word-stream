get "/" do
  @variable = "hello"
  erb :index
end

post "/url" do
  #do something
  redirect "/"
end