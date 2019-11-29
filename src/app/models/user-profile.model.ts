import { UserLoginDetail } from './user-login-detail.model';

export interface UserProfile {
    id?: number,
    code?: string,
    org_code?: string,
    user_code?: string,
    profile_short_code?: string,
    first_name: string,
    middle_name?: string,
    last_name: string,
    salutation?: string,
    email?: string,
    username: string,
    date_of_birth?: Date,
    gender_code?: string,
    profile_filename?; string,
    created_by?: string
    status?: boolean,

    created_at?: Date,
    updated_at?: Date,
    deleted_at?: Date

    UserLoginDetail: any
}