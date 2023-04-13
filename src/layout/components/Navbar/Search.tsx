import classNames from "classnames/bind";
import styles from "./Navbar.module.scss";
import { navData } from "../../../data/";
import { NavLink } from "react-router-dom";
import { DeliveryIcon, SearchIcon } from "../../../assets/icon/icon";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setMenuClose, setMenuOpen } from "../../../redux/slice/globalSlice";
const cx = classNames.bind(styles);
interface Search {
    className: string;
}

function Search({ className }: Search) {
    const dispatch = useDispatch();
    const [menuIsOpen, setMenuIsOpenState] = useState<boolean>(false);

    const handleMenuIsOpen = (value: boolean): void => {
        if (value) {
            dispatch(setMenuOpen());
        } else {
            dispatch(setMenuClose());
        }
        setMenuIsOpenState(value);
    };

    return (
        <div className={cx(className)}>
            <div className={cx("row g-0", "nav-search-desktop")}>
                <div className={cx("col-8", "search-container")}>
                    <SearchOutlinedIcon className={cx("search")} />
                    <input type="text" />
                </div>

                <NavLink
                    className={cx("col-4", "link")}
                    to={navData[navData.length - 1].to}
                >
                    <DeliveryIcon className={cx("nav-icon")} />
                    {navData[navData.length - 1].title}
                </NavLink>
            </div>
            <div className={cx("nav-search-mobile")}>
                <ul className={cx("search-mobile_container")}>
                    <li className={cx("nav-item")}>
                        <SearchIcon className={cx("nav-icon", "icon-mb")} />
                    </li>
                    <li className={cx("nav-item")}>
                        <DeliveryIcon className={cx("nav-icon", "icon-mb")} />
                    </li>
                    <li
                        className={cx("menu", "nav-item")}
                        onClick={() => handleMenuIsOpen(!menuIsOpen)}
                    >
                        <span
                            className={cx("menu-line", "icon-mb", {
                                "line-active": menuIsOpen,
                            })}
                        ></span>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Search;
