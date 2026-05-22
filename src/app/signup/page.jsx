import { authClient } from "@/lib/auth-client"; //import the auth client
const { data, error } = await authClient.signUp.email({
        email, // user email address
        password, // user password -> min 8 characters by default
    }

);