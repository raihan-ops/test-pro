const MenuIcon = ({toggleMenu, toggle = false}) => {
    return (
        <div
            className={`menu-icon lg:hidden ${toggle ? "toggle" : ""}`}
            onClick={() => {
                if (toggleMenu) {
                    toggleMenu();
                }
            }}
            role="button"
            aria-label="menu_icon"
        >
            <div className="bar1"/>
            <div className="bar2"/>
            <div className="bar3"/>
        </div>
    );
};

export default MenuIcon;