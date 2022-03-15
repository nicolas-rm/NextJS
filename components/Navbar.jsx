
import { ActiveLink } from './ActiveLink';
import styles from './Navbar.module.css';

export const Navbar = () => {
    /**
     * TODO: Creacion de nav con las rutas.
     */
    return (
        <nav className={styles['menu-container']}>
            <ActiveLink href="/" text="Home"></ActiveLink>
            <ActiveLink href="/about" text="About"></ActiveLink>
            <ActiveLink href="/contact" text="Contact"></ActiveLink>
        </nav>
    )
}