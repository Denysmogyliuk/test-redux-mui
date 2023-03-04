export type Credentials = {
    username: string,
    password: string,
}

export type InitialState = {
    isAuthenticated: boolean,
    error: boolean,
    inAuthorizing: boolean,
};