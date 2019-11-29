export interface UserLoginDetail {
    id?: number,
    code?: string,
    org_code?: string,
    user_code: string,
    password: string,
    salt_1?: string,
    salt_2?: string,
    salt_3?: string,
    is_active?: number,
    confirmed?: number,
    can_login?: number,
    
    created_by?: string,
    created_at?: Date,
    updated_at?: Date,
    deleted_at?: Date
}