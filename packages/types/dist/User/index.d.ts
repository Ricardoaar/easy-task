export declare enum UserRole {
    Admin = "admin",
    User = "user"
}
export interface UserSettings {
    theme: string;
    notifications: boolean;
    language: string;
}
export interface User {
    id: string;
    username: string;
    password: string;
    email: string;
    fullName: string;
    avatar?: string;
    role: UserRole;
    createdAt: Date;
    updatedAt: Date;
    isActive: boolean;
    lastLogin?: Date;
    settings?: UserSettings;
}
