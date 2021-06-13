import React, {FC} from "react";
import {IRelease} from "../../../model/release/Release";
import "./ListItem.scss";

interface IProps {
    release: IRelease;
    selected?: boolean;
    handleSelect: (id: number) => void;
}

export const ListItem: FC<IProps> = ({ release, selected, handleSelect }) => {
    return <div className={`list-item ${selected ? 'selected' : ''}`}
                onClick={() => handleSelect(release.id)}>
        <div className="thumb-container">
            <img className="release-thumb" src={release.thumb ? release.thumb : ""} alt="release thumb" />
        </div>
        <div className="content-container">
            <div className="heading">
                <span className="title">
                    {release.title}
                </span>
                <span className="year">
                    {release.year}
                </span>
            </div>

            <div className="genres">
                {
                    Array.isArray(release.genre) ? release.genre.join(", ") : release.genre
                }
            </div>

            <div className="labels">
                {
                    Array.isArray(release.label) ? release.label.join(", ") : release.label
                }
            </div>
        </div>
    </div>
}