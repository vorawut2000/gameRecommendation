import http from "./http-common";

const getAll = () => {
    return http.get("/");
}

const get =( id )=> {
    return http.get("/")
}

const GameService = {
    getAll,
    get,
}

export default GameService;