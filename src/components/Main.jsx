import { Link } from "react-router-dom";
import MyDoc from "./MyDoc";
import VisReact from "./VisReact";

function Main() {
    return (
        <div>
            <div className="row">
                <div className="col-9 grid-margin stretch-card">
                    <div className="card">
                        <div className="card-body">
                            <h4 className="card-title">Fait Vente</h4>
                            <div className="d-flex">
                            </div>
                            <div className="row mt-3">
                                <div className="col-12 pe-1">
                                    <VisReact />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 grid-margin stretch-card">
                    <div className="card">
                        <div className="card-body">
                            <h4 className="card-title">Détail</h4>
                            <Link to="/details" className="btn btn-block btn-lg btn-outline-info mt-4 ">Voir par site</Link>
                            <div className="table-responsive">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th>Nom</th>
                                            <th>Type</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>DOSSIER</td>
                                            <td>String</td>
                                        </tr>
                                        <tr>
                                            <td>LIVEDATA</td>
                                            <td>String</td>
                                        </tr>
                                        <tr>
                                            <td>LANGUE</td>
                                            <td>String</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-4 stretch-card grid-margin">
                    <div className="card bg-gradient-danger card-img-holder text-white">
                        <div className="card-body">
                            <img src="assets/images/dashboard/circle.svg" className="card-img-absolute" alt="circle" />
                            <h4 className="font-weight-normal mb-3">Weekly Sales <i className="mdi mdi-chart-line mdi-24px float-right"></i>
                            </h4>
                            <h2 className="mb-5">$ 15,0000</h2>
                            <h6 className="card-text">Increased by 60%</h6>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 stretch-card grid-margin">
                    <div className="card bg-gradient-info card-img-holder text-white">
                        <div className="card-body">
                            <img src="assets/images/dashboard/circle.svg" className="card-img-absolute" alt="circle" />
                            <h4 className="font-weight-normal mb-3">Weekly Orders <i className="mdi mdi-bookmark-outline mdi-24px float-right"></i>
                            </h4>
                            <h2 className="mb-5">45,6334</h2>
                            <h6 className="card-text">Decreased by 10%</h6>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 stretch-card grid-margin">
                    <div className="card bg-gradient-success card-img-holder text-white">
                        <div className="card-body">
                            <img src="assets/images/dashboard/circle.svg" className="card-img-absolute" alt="circle" />
                            <h4 className="font-weight-normal mb-3">Visitors Online <i className="mdi mdi-diamond mdi-24px float-right"></i>
                            </h4>
                            <h2 className="mb-5">95,5741</h2>
                            <h6 className="card-text">Increased by 5%</h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Main