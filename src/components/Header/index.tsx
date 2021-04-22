import styles from './styles.module.scss';
import format from 'date-fns/format'
import enGB from 'date-fns/locale/en-GB'

export function Header() {
    const currentDate = format(new Date(), 'EEEEEE, d MMMM', {
        locale: enGB
    });

    return (
        <header className={styles.headerContainer}>
            <img src="/logo.svg" alt="Podcastr" />

            <p>The best for you to hear, always</p>

            <span>{currentDate}</span>
        </header>
    )
}