export const getUserQuery = `
    query GetUser($email: String!) {
        user(by: {email: $email}) {
            ie
            name
            email
            avatarUrl
            description
        }
    }

`