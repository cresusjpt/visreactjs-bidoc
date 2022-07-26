function MyNavbar(){
    return (
        <nav className="sidebar sidebar-offcanvas" id="sidebar">
            <ul className="nav">
                <li className="nav-item">
                <a className="nav-link" href="index.html">
                    <span className="menu-title">Dashboard</span>
                    <i className="mdi mdi-home menu-icon"></i>
                </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" data-bs-toggle="collapse" href="#ui-basic" aria-expanded="false" aria-controls="ui-basic">
                        <span className="menu-title">ETL</span>
                        <i className="menu-arrow"></i>
                        <i className="mdi mdi-crosshairs-gps menu-icon"></i>
                    </a>
                    <div className="collapse" id="ui-basic">
                        <ul className="nav flex-column sub-menu">
                            <li className="nav-item"> <a className="nav-link" href="pages/ui-features/buttons.html">Fait Vente</a></li>
                            <li className="nav-item"> <a className="nav-link" href="pages/ui-features/buttons.html">Fait CBN</a></li>
                            <li className="nav-item"> <a className="nav-link" href="pages/ui-features/buttons.html">Fait Achat</a></li>
                        </ul>
                    </div>
                </li>
                <li className="nav-item">
                    <a className="nav-link" data-bs-toggle="collapse" href="#ui-basic" aria-expanded="false" aria-controls="ui-basic">
                        <span className="menu-title">Connect</span>
                        <i className="menu-arrow"></i>
                        <i className="mdi mdi-crosshairs-gps menu-icon"></i>
                    </a>
                    <div className="collapse" id="ui-basic">
                        <ul className="nav flex-column sub-menu">
                            <li className="nav-item"> <a className="nav-link" href="pages/ui-features/buttons.html">Distribution</a></li>
                        </ul>
                    </div>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="pages/icons/mdi.html">
                    <span className="menu-title">Icons</span>
                    <i className="mdi mdi-contacts menu-icon"></i>
                </a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="pages/forms/basic_elements.html">
                    <span className="menu-title">Forms</span>
                    <i className="mdi mdi-format-list-bulleted menu-icon"></i>
                </a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="pages/charts/chartjs.html">
                    <span className="menu-title">Indicateur de performance</span>
                    <i className="mdi mdi-chart-bar menu-icon"></i>
                </a>
                </li>
            </ul>
        </nav>
    );
}

export default MyNavbar