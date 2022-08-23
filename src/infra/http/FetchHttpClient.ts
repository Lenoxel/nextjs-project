import IHttpGetClient from "../../application/data/IHttpGetClient";

export default class FetchHttpClient implements IHttpGetClient {
    async get(url: string) {
        return fetch(url).then((response) => {
            return response.json();
        }).catch((err) => {
            console.log(err);
            return err?.message || 'Erro na chamada da API';
        });
    }
}