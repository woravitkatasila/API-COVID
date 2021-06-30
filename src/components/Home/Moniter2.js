import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Moniter2(props) {
    let dataCovid = props.data.Countries
    let listCovid = props.list
    const [data, setData] = useState(getReg(dataCovid,""))


    const setTableLess=(id) =>{
        // ลศ 0 ขึ้น น้อยไปมาก   Aless
        let mockData = data;
        if (id === "NewConfirmed") {
            mockData.sort((firstItem, secondItem) => firstItem.NewConfirmed - secondItem.NewConfirmed);
         
        }
        if (id === "TotalConfirmed") {
            mockData.sort((firstItem, secondItem) => firstItem.TotalConfirmed - secondItem.TotalConfirmed);
         
        }
        if (id === "NewDeaths") {
            mockData.sort((firstItem, secondItem) => firstItem.NewDeaths - secondItem.NewDeaths);
   
        }
        if (id === "TotalDeaths") {
            mockData.sort((firstItem, secondItem) => firstItem.TotalDeaths - secondItem.TotalDeaths);
      
        }
        if (id === "NewRecovered") {
            mockData.sort((firstItem, secondItem) => firstItem.NewRecovered - secondItem.NewRecovered);
      
        }
        if (id === "TotalRecovered") {
            mockData.sort((firstItem, secondItem) => firstItem.TotalRecovered - secondItem.TotalRecovered);
            
        }
        return mockData
    }
    const setTableThan=(id)=> {
        let mockData = data;
        if (id === "NewConfirmed") {
            mockData.sort((firstItem, secondItem) => secondItem.NewConfirmed - firstItem.NewConfirmed);
        }
        if (id === "TotalConfirmed") {
            mockData.sort((firstItem, secondItem) => secondItem.TotalConfirmed - firstItem.TotalConfirmed);
        }
        if (id === "NewDeaths") {
            mockData.sort((firstItem, secondItem) => secondItem.NewDeaths - firstItem.NewDeaths);
        }
        if (id === "TotalDeaths") {
            mockData.sort((firstItem, secondItem) => secondItem.TotalDeaths - firstItem.TotalDeaths);
        }
        if (id === "NewRecovered") {
            mockData.sort((firstItem, secondItem) => secondItem.NewRecovered - firstItem.NewRecovered);
        }
        if (id === "TotalRecovered") {
            mockData.sort((firstItem, secondItem) => secondItem.TotalRecovered - firstItem.TotalRecovered);
        }
        return mockData

    }
    const menuToggle=(e)=> {
      
        // ลศ 0 ขึ้น น้อยไปมาก   Aless  ลศ 1 ลง มากไปน้อย  Athan

        for (let x = 0; x < listCovid.length; x++) {
            if (e.target.id !== listCovid[x]) {
                let eleTableHead = document.getElementById(listCovid[x])
                eleTableHead.classList = "";
                eleTableHead.children[0].classList = ""
                eleTableHead.children[1].classList = ""
            }
        }
        if (e.target.className === "spanThan") {
            e.target.className = "spanLess";
            e.target.children[1].classList = ""
            e.target.children[0].classList = "active"
            setData(setTableLess(e.target.id))
        } else {
            e.target.className = "spanThan";
            e.target.children[0].classList = ""
            e.target.children[1].classList = "active"
            setData(setTableThan(e.target.id))
        }

    }
    const searchChange=(e)=> {
        setData(getReg(dataCovid, e.target.value))
    }
    function getReg(data, txt) {
        var reg = new RegExp(txt, "i");
        let result = data.filter(data => data.Country.match(reg))
        return result
    }

    const addCommas=(nStr) =>{
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

    const chkNum=(num)=> {
        if (num !== 0 && num > 0) {
            return addCommas(parseFloat(num))
        } else {
            return "unreported";

        }
    }

    const  conDate = (date)=> {
        let dateArr1 = date.split("T")
        let dateArr2 = dateArr1[0].split("-")
        let resaultDate = dateArr2[2] + "/" + dateArr2[1] + "/" + dateArr2[0]
        return resaultDate
    }

    return (
     
        <div>
            <div className="contianer block1 bgBlue2" >
                <div className="row mr-0">
                    <div className=" col-12 text-center text-white">
                        <h1 >Search</h1>
                    </div>
                </div>
                <div className="row mr-0 mt-5">
                    <div className="col-2"></div>
                    <div className="col-8">
                        <div className="search-container">
                            <input type="text" placeholder="Search.." onKeyUp={searchChange} />
                            <button type="submit"><FontAwesomeIcon icon={['fa', 'search']} /></button>
                        </div>
                    </div>
                    <div className="col-2"></div>
                </div>
                <div className="row mr-0 mt-5">
                    <div className="col-12">
                        <div className="overflow-x">
                            <table className="aTable">
                                <thead>
                                    <tr className="aTable-head table">
                                        <td>Date</td>
                                        <td>Country</td>
                                        <td onClick={menuToggle} id="NewConfirmed">NewConfirmed &nbsp;
                                            <span className="spanThan"><FontAwesomeIcon icon={['fa', 'long-arrow-alt-up']} /></span>
                                            <span className="spanLess"> <FontAwesomeIcon icon={['fa', 'long-arrow-alt-down']} /></span>
                                        </td>
                                        <td onClick={menuToggle} id="TotalConfirmed" >TotalConfirmed &nbsp;
                                            <span className="spanThan"><FontAwesomeIcon icon={['fa', 'long-arrow-alt-up']} /></span>
                                            <span className="spanLess"> <FontAwesomeIcon icon={['fa', 'long-arrow-alt-down']} /></span>
                                        </td>
                                        <td onClick={menuToggle} id="NewRecovered" >NewRecovered &nbsp;
                                            <span className="spanThan"><FontAwesomeIcon icon={['fa', 'long-arrow-alt-up']} /></span>
                                            <span className="spanLess"> <FontAwesomeIcon icon={['fa', 'long-arrow-alt-down']} /></span>
                                        </td>
                                        <td onClick={menuToggle} id="TotalRecovered" >TotalRecovered &nbsp;
                                            <span className="spanThan"><FontAwesomeIcon icon={['fa', 'long-arrow-alt-up']} /></span>
                                            <span className="spanLess"> <FontAwesomeIcon icon={['fa', 'long-arrow-alt-down']} /></span>
                                        </td>
                                        <td onClick={menuToggle} id="NewDeaths" >NewDeaths &nbsp;
                                            <span className="spanThan"><FontAwesomeIcon icon={['fa', 'long-arrow-alt-up']} /></span>
                                            <span className="spanLess"> <FontAwesomeIcon icon={['fa', 'long-arrow-alt-down']} /></span>
                                        </td>
                                        <td onClick={menuToggle} id="TotalDeaths" >TotalDeaths &nbsp;
                                            <span className="spanThan"><FontAwesomeIcon icon={['fa', 'long-arrow-alt-up']} /></span>
                                            <span className="spanLess"> <FontAwesomeIcon icon={['fa', 'long-arrow-alt-down']} /></span>
                                        </td>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                         data.map(i =>
                                            <tr key={i.ID} className='aTable-body'>
                                                <td>{conDate(i.Date)}</td>
                                                <td>{i.Country}</td>
                                                <td>{chkNum(i.NewConfirmed)}</td>
                                                <td>{chkNum(i.TotalConfirmed)}</td>
                                                <td>{chkNum(i.NewRecovered)}</td>
                                                <td>{chkNum(i.TotalRecovered)}</td>
                                                <td>{chkNum(i.NewDeaths)}</td>
                                                <td>{chkNum(i.TotalDeaths)}</td>
                                            </tr>)
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Moniter2;