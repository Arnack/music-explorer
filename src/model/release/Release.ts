export interface IRelease {
    id: number;
    title: string;
    year: string;
    country?: string;
    format: string[];
    label: string[];
    genre: string[];
    style: string[];

    thumb: string;
    cover_image: string;
    resource_url: string;
}

export interface IReleaseDescription extends IRelease{
    released?: string;
    artists: { name: string }[];
    artists_sort?: string;

    country?: string;
    formats: string[];
    labels: string[];
    genres: string[];
    styles: string[];
    videos: {
        "uri": string,
        "title": string,
        "embed": boolean
    }[]

}