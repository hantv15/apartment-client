import instance from "./instance";

export const get = (id) => {
    const url = `/apartment/${id}`;
    return instance.get(url);
}
export const getBillDetail = (id, param) => {
    const url = `/apartment/${id}/finance?${id}/bill-detail`;
    return instance.get(url);
}
export const getService = (id, param) => {
    const url = `/service/${id}`;
    return instance.get(url);
}

export const NoGetPage = (param) => {
    const url = `/apartment?${param}`;
    return instance.get(url);
}