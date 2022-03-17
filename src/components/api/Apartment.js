import instance from "./instance";

export const get = (id) => {
    const url = `/apartment/${id}`;
    return instance.get(url);
}
export const getBillDetail = (id, bill_id) => {
<<<<<<< Updated upstream
    const url = `/apartment/${id}/finance/${bill_id}/bill-detail`;
=======
    const url= `/apartment/${id}/finance/${bill_id}/bill-detail`;
>>>>>>> Stashed changes
    return instance.get(url);
}
export const getService = (id) => {
    const url = `/service/${id}`;
    return instance.get(url);
}
export const getApartmentFinace = (id) => {
    const url = `/apartment/${id}/finance`;
    return instance.get(url);
}
export const NoGetPage = (param) => {
    const url = `/apartment?${param}`;
    return instance.get(url);
}

export const getApartmentFinace = (id) => {
    const url = `/apartment/29/finance`;
    return instance.get(url);
}