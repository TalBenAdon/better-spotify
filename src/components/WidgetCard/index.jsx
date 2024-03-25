import React from 'react'
import styles from './styles.module.css'
import WidgetEntry from '../WidgetEntry';
import { FiChevronRight } from 'react-icons/fi'
import { useNavigate } from 'react-router-dom';
import timeFormat from '../../helpers/timeFormat';
export default function WidgetCard({ title, widgetState, url }) {

    const trimmedWidgetState = widgetState.slice(0, 3)
    const nav = useNavigate()
    const handleOnclick = (title, url, widgetState) => {
        switch (title) {
            case 'Similar Artists':
                console.log(url);
                nav('/feed/related-artists', { state: { url: url } })

                break;
            case 'Made For You':
                nav('/trending/playlists', { state: widgetState })

                break;
            case 'New Releases':
                nav('/trending/new-releases', { state: widgetState })

                break;
            case 'Top Songs':
                nav('top-songs')
                break;
            case 'Artist Albums':
                nav('albums')
            default:
                break;
        }

    }

    const getKey = (item) => {

        switch (title) {
            case 'Similar Artists':
                return {
                    title: item?.name,
                    subtitle: `${item?.followers.total} Followers`,
                    image: item?.images[2]?.url
                }
            case 'Made For You':
                return {
                    title: item?.name,
                    subtitle: `${item?.tracks.total} track(s)`,
                    image: item?.images[0]?.url
                }
            case 'New Releases':
                return {
                    title: item?.name,
                    subtitle: item?.artists[0]?.name,
                    image: item?.images[0]?.url
                }
            case 'Top Songs':
                return {
                    title: item?.name,
                    subtitle: timeFormat.formatDuration(item?.duration_ms),
                    image: item?.album?.images[0]?.url
                }
            case 'Artist Albums':
                return {
                    title: item?.name,
                    subtitle: item?.album_type,
                    image: item?.images[0]?.url
                }
            default:
                break;
        }
    }
    return (
        <div className={styles.WidgetCardBody} onClick={() => handleOnclick(title, url, widgetState)}>
            <p className={styles.WidgetTitle}>{title}</p>
            {widgetState ? trimmedWidgetState.map((item, index) => {
                const { title, subtitle, image } = getKey(item)
                return <WidgetEntry key={index} title={title} subtitle={subtitle} image={image} />
            }) : null}
            <div className={styles.fade}>
                <div className={styles.arrow}>
                    <FiChevronRight />
                </div>
            </div>
        </div>
    )
}
