require 'sinatra/base'

class MyAPI < Sinatra::Base

  enable :sessions
  set :session_secret, ENV.fetch('SESSION_SECRET') { SecureRandom.hex(20) }

  helpers do
    def assert_temp
      if File.exist?('./savetemp.txt')
        @temperature = File.read('./savetemp.txt')
        @temperature
      else
        @temperature = 20
      end
      @temperature
    end

    def assert_powersave
      if File.exist?('./savepsm.txt')
        @powersave = File.read('./savepsm.txt')
        @powersave
      else
        @powersave = true
      end
    end
    @powersave  
  end

  before do
    p assert_temp
    p assert_powersave
  end


  get '/' do
    erb :thermostat
  end

  get '/temperature' do
    body @temperature.to_s
  end

  get '/powersave' do
    body @powersave.to_s
  end


  post '/temperature' do
    File.delete('./savetemp.txt') if File.exist?('./savetemp.txt')
    file = File.new('./savetemp.txt', 'w')
    file << params[:temperature]
    file.close
  end

  post '/powersave' do
    File.delete('./savepsm.txt') if File.exist?('./savepsm.txt')
    file = File.new('./savepsm.txt', 'w')
    file << params[:powersave]
    file.close
  end

end
