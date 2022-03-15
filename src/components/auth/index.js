import instance from "../api/instance";

export const signIn = (data) => {
    const url = "/login";

    return instance.post(url, data);
}

export const authenticate = (client) => {
    if (typeof window != undefined) {
        localStorage.setItem("client", JSON.stringify(client));
    }
};
export const isAuthenticated = () => {
    if (typeof window === "undefined") return false;

    if (localStorage.getItem("client")) {
        return JSON.parse(localStorage.getItem("client"));
    } else {
        return false;
    }
};

export const logOut = (next) => {
    if (typeof window !== 'undefined') {
        localStorage.removeItem('user')
    }
}