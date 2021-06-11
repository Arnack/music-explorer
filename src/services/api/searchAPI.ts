import axios from "axios";

const token = 'rxdPcTSCazkeakCCdoniSEbUClXWfTtlsemLLnmR'

export class SearchAPI {
    static getArtistReleases = async (artist: string) => {
        return await axios
            .get(`https://api.discogs.com/database/search?token=${token}&per_page=20&artist=${artist}`)
    }
    static getTracks = async (track: string) => {
        return await axios
            .get(`https://api.discogs.com/database/search?token=${token}&per_page=20&track=${track}`)
    }

    static getReleases = async (release: string) => {
        return await axios
            .get(`https://api.discogs.com/database/search?token=${token}&per_page=20&type=release&q=${release}`)
    }
}