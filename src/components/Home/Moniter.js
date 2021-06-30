import React from "react";


function Moniter(props) {

    let TotalConfirmed = chkNum(props.data.Global.TotalConfirmed)
    let NewConfirmed = chkNum(props.data.Global.NewConfirmed)
    let NewRecovered = chkNum(props.data.Global.NewRecovered)
    let TotalRecovered = chkNum(props.data.Global.TotalRecovered)
    let TotalDeaths = chkNum(props.data.Global.TotalDeaths)
    let Date = conDate(props.data.Global.Date)


    function addCommas(nStr) {
        nStr += '';
        let x = nStr.split('.');
        let x1 = x[0];
        let x2 = x.length > 1 ? '.' + x[1] : '';
        let rgx = /(\d+)(\d{3})/;
        while (rgx.test(x1)) {
            x1 = x1.replace(rgx, '$1' + ',' + '$2');
        }
        return x1 + x2;
    }

    function chkNum(num) {
        if (num !== 0 && num > 0) {
            return addCommas(parseFloat(num))
        } else {
            return "unreported";

        }
    }
    
    function conDate(date) {
        let dateArr1 = date.split("T")
        let dateArr2 = dateArr1[0].split("-")
        let resaultDate = dateArr2[2] + "/" + dateArr2[1] + "/" + dateArr2[0]
        return resaultDate
    }
    return (

        <div>
            <div className="contianer block1 bgBlue" >
                <div className="row mr-0">
                    <div className="col-lg-5 col-12">
                        <div className="block4">
                            <h1 ><span style={{ fontSize: "45px", color: "#EA5771", fontWeight: "bold" }}>COVID-19</span> infected people</h1>
                            <h5 >Date {Date}</h5>
                        </div>
                    </div>
                    <div className="col-lg-7 col-12 ">
                        <div className="block2">
                            <h5>TotalConfirmed</h5>
                            <h1 >{TotalConfirmed}</h1>
                        </div>
                    </div>
                </div>
                <div className="row mr-0">
                    <div className="col-lg-3 col-md-6 col-12 ">
                        <div className="block5">
                            <h5>NewConfirmed</h5>
                            <h1 >{NewConfirmed} </h1>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-12">
                        <div className="block6">
                            <h5>NewRecovered</h5>
                            <h1 >{NewRecovered}</h1>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-12">
                        <div className="block7">
                            <h5>TotalRecovered</h5>
                            <h1 >{TotalRecovered} </h1>
                        </div>
                    </div>
                    <div className="col-lg-3  col-md-6 col-12">
                        <div className="block8">
                            <h5>TotalDeaths</h5>
                            <h1 >{TotalDeaths} </h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}
export default Moniter;