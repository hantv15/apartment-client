import instance from "./instance";

export const get = (id) => {
    const url = `/user/${id}`;
    return instance.get(url);
}
