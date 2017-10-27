module API::V1
  class UsersController < ApiController
    def index
      @users = User.all
      render json: @users
    end

    def show
      # @user = User.find(params[:id])
      # render json: @user
      respond_with User.find(params[:id])
    end

    def create
      respond_with User.create(name: params[:name], email: params[:email], password: params[:password], password_confirmation: params[:password_confirmation])

      # user = User.new(user_params)
      if user.save
        # session[:user_id] = user.id
      else

      end

    end

    private
    def user_params
      params.require(:user).permit(
        :name,
        :email,
        :password,
        :password_confirmation
      )
    end
  end
end