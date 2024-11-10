export interface User {

}


export interface UpdateUserInput extends Partial<User> {
	
}

export interface LoginUserInput {
	username: string;
	password: string;
}

export interface RegisterUserInput {
	username: string;
	email: string;
	password: string
}

export interface ForgotPassInput {
	email: string
}

export interface ResetPassUserInput {
	email: string;
	token: string;
	password: string
}

export interface VerifyForgotPassUserInput {
	token: string;
	email: string
}

export interface ChangePassUserInput {
	oldPassword: string;
	newPassword: string;
}

export interface PassChangeResponse {
	success: boolean;
	message: string;
}

