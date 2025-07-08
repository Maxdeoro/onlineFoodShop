import Header from "../../components/header/Header";
import Search from '../../components/search/Search';
import styles from './Menu.module.css';

export function Menu() {
    return <>
        <div className={styles['head']}>
            <Header>Menu</Header>
            <Search placeholder="Search"/>
        </div>
    </>;
};