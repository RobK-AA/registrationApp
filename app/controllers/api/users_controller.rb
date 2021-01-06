class Api::UsersController < ApplicationController
    def index
        @users = User.all
        render :index
    end

    def create
        @user = User.new(user_params)
        if @user.save
            
        else
            render json: @user.errors.full_messages, status: 422
        end
    end

    private

    def user_params
        params.require(:user).permit(
            :first_name, 
            :last_name, 
            :address_1, 
            :address_2, 
            :city, 
            :state, 
            :zip, 
            :country) 
    end
end