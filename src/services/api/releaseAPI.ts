import axios from "axios";
const token = process.env.REACT_APP_TOKEN;

export class ReleaseAPI {
    static getReleaseDescription = async (releaseId: number | string) => {
        return await axios
            .get(`https://api.discogs.com/releases/${releaseId}`)
    }

    static getReleases = async (searchData: {release: string, page: number | string }) => {
        const { release, page } = searchData;
        return await axios
            .get(`https://api.discogs.com/database/search?token=${token}&page=${page}&per_page=10&type=release&q=${release}`)
    }
}
