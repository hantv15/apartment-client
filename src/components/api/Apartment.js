import instance from "./instance";

export const get = (param) => {
    const url = `/apartment?${param}`;
    return instance.get(url);
}
export const getBillDetail = (id, param) => {
    const url = `/apartment?${param}/finance/${id}/bill-detail`;
    return instance.get(url);
}
export const getService = (id, param) => {
    const url = `/apartment?${param}/${id}/service`;
    return instance.get(url);
}

export const NoGetPage = (param) => {
    const url = `/apartment?${param}`;
    return instance.get(url);
}