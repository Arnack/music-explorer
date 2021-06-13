import React, {FC, useEffect, useState} from "react";
import {IReleaseDescription} from "../../../model/release/Release";
import {ReleaseAPI} from "../../../services/api/releaseAPI";
import { ArrowLeftOutlined } from '@ant-design/icons';
import {Loader} from "../../loader/Loader";
import "./ReleaseDescription.scss";

interface IProps {
    releaseId: number | null;
    goBackCallback: (arg: boolean) => void;
}

export const ReleaseDescription: FC<IProps> = ({releaseId, goBackCallback}) => {
    const [description, setDescription] = useState<IReleaseDescription | null>(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        if (releaseId) {
            setIsLoading(true);
            ReleaseAPI.getReleaseDescription(releaseId)
                .then(result => {
                    setDescription(result.data)
                })
                .catch(err => {
                    console.error("Unable to fetch release description", err)
                })
                .finally(() => {
                    setIsLoading(false)
                })
        }
    }, [releaseId])

    if (!releaseId) {
        return <div>
            <h2>Select an item to see a description</h2>
            <p>Nothing is selected</p>
        </div>
    }

    if (isLoading) {
        return <Loader/>
    }

    return <div className={"release-description-container"}>
        <h3>{description?.title}</h3>

        <div className="go-back"
             onClick={() => goBackCallback(false)}
        >
            <ArrowLeftOutlined />
        </div>
        {description?.notes && <div className="notes">
            {description?.notes}
        </div>}
        <table>
            <tbody>
            <tr>
                <th>Artists:</th>
                <td>{description?.artists?.map(artist => artist.name).join(", ")}</td>
            </tr>
            <tr>
                <th>Country:</th>
                <td>{description?.country}</td>
            </tr>
            <tr>
                <th>Labels:</th>
                <td>{description?.labels?.map(label => label.name ? label.name : label)
                    .join(", ")}</td>
            </tr>
            <tr>
                <th>Genres:</th>
                <td>{description?.genres?.map(genre => genre.name ? genre.name : genre)
                    .join(", ")}</td>
            </tr>
            <tr>
                <th>Styles:</th>
                <td>{description?.styles?.map(style => style.name ? style.name : style)
                    .join(", ")}</td>
            </tr>
            <tr>
                <th>Formats:</th>
                <td>{description?.formats?.map(format => format.name ? format.name : format)
                    .join(", ")}</td>
            </tr>
            <tr>
                <th>Release Date:</th>
                <td>{description?.year}</td>
            </tr>
            </tbody>
        </table>
        {
            description?.videos?.map((video) => {

                const url = new URL(video.uri);
                const videoId = url.searchParams.get("v");

                if (video.uri.includes('youtube'))
                    return <iframe width="300" src={`https://www.youtube.com/embed/${videoId}`}
                                   title={video.title} frameBorder="0"
                                   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                   allowFullScreen/>
            })
        }
    </div>
}