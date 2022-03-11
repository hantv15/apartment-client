import instance from "./instance";


// export const getAll = () => {
//     const url = '/departments';
//     return instance.get(url);
// }

export const get = (id) => {
    const url = `/user/${id}`;
    return instance.get(url);
}
