import { useState } from "react";
<div className="table-responsive"></div>
function NodesDetail() {
    let globale = <>
        <table className="table">
            <thead>
            <tr>
                <th> Champs référence </th>
                <th> Type </th>
                <th> TARNOS </th>
                <th> CHANTELOUP </th>
                <th> MARIGNIER </th>
                <th> HIRSCHLER </th>
                <th> PESSAC </th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>DOSSIER</td>
                <td>VARCHAR</td>
                <td>TRS</td>
                <td>CLV</td>
                <td>MRG</td>
                <td>HIR</td>
                <td>PSC</td>
            </tr>
            <tr>
                <td>LIVEDATA</td>
                <td>VARCHAR</td>
                <td>NON</td>
                <td>NON</td>
                <td>NON</td>
                <td>NON</td>
                <td>NON</td>
            </tr>
            <tr>
                <td>DATE_DOCUMENT</td>
                <td>Date</td>
                <td>AFFAIRE.DATEAF</td>
                <td>C_CMD_LG.DATE_CREATACTE</td>
                <td>ATEN_SALE_COMMACTL_SORD.AT_DATECREAT.</td>
                <td>-</td>
                <td>AFFAIRE.DATEAF</td>
            </tr>
            <tr>
                <td>NO_PIECE</td>
                <td>VARCHAR</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
            </tr>
            </tbody>
        </table>
    </>
    let [actualView, setActualView] = useState("Vue globale");
    let [selectedView, setSelectedView] = useState(globale);
    let actual = <>
        <div className="table-responsive">
            <table className="table">
                <thead>
                    <tr>
                        <th>Sources</th>
                        <th>Extraction</th>
                        <th>Destination</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>AFFAIRE, ARTICLEM, ADRESSE, ART</td>
                        <td>Select * from articlem, ...</td>
                        <td>F_VENTE</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <br />
        <div className="table-responsive">
            <table className="table">
                <thead>
                    <tr>
                        <th>Champs référence</th>
                        <th>Type</th>
                        <th>MAPPING</th>
                        <th>Observations</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>MT_HT_CDE</td>
                        <td>DOUBLE</td>
                        <td>cast(MTCDE as float)/1000000</td>
                        <td>une erreur avec inside parfois sur des nombres à virgules</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </>

    function updateView(e, view) {
        e.preventDefault();
        setActualView(view);
        if (view === 'Vue globale')
            setSelectedView(globale);
        else setSelectedView(actual);
    }
    return (
        <>
            <div className="row">
                <div className="template-demo div-center">
                    <button className="btn btn-info btn-rounded" onClick={(e)=>updateView(e,"Vue globale")}>Vue globale</button>
                    <button className="btn btn-info btn-rounded" onClick={(e)=>updateView(e,"Tarnos")}>TRS</button>
                    <button className="btn btn-info btn-rounded" onClick={(e)=>updateView(e,"Chanteloup")}>CLV</button>
                    <button className="btn btn-info btn-rounded" onClick={(e)=>updateView(e,"Marignier")}>MRG</button>
                    <button className="btn btn-info btn-rounded" onClick={(e)=>updateView(e,"Hirschler")}>HIR</button>
                </div>
            </div>
            <div className="row">
                <div className="col-12 grid-margin">
                    <div className="card">
                    <div className="card-body">
                        <h4 className="card-title">{actualView}</h4>
                        {selectedView}
                    </div>
                    </div>
                </div>
            </div> 
        </>  
    );
}

export default NodesDetail;