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

export interface IReleaseDescription extends IRelease {
    released?: string;
    artists: { name: string }[];
    artists_sort?: string;

    country?: string;
    formats: { name: string }[];
    labels: { name: string }[];
    genres: { name: string }[];
    styles: { name: string }[];
    notes?: string;
    videos: {
        "uri": string,
        "title": string,
        "embed": boolean
    }[];
}
