import { useState } from "react";

const SearchEngine = () => {
    const [dropdownVisible, setDropdownVisible] = useState(false);
    const [selectedTab, setSelectedTab] = useState('One Way');

    const toggleDropdown = () => {
        setDropdownVisible(!dropdownVisible);
    };

    const handleTabChange = (tab: string) => {
        setSelectedTab(tab);
    };
    return (
        <div className="row mt-0 mt-lg-4">
            <div className="col-12 col-lg-10 offset-lg-1 mb-5 text-center position-relative">
                <ul className="nav nav-pills cust-pills" id="pills-tab" role="tablist">
                    {
                        ['One Way', 'Round Trip', 'Multi City'].map((city, index) => (
                            <li className="nav-item" role="presentation" key={index}>
                                <button className={`nav-link ${selectedTab === city ? 'active' : ''}`} onClick={() => handleTabChange(city)} aria-current="true">
                                    <span className="d-inline-block p-2 rounded-circle bg-white align-middle me-2"></span>
                                    {city}</button>
                            </li>
                        ))
                    }
                </ul>

                <div className="row">
                    <div className="col-12">
                        <div className="search-pan row mx-0 theme-border-radius">
                            <div className="col-12 col-lg-3 col-xl-2 ps-0 mb-2 mb-xl-0 pe-0 pe-lg-2">
                                <div className="form-group">
                                    <label htmlFor="exampleDataList13" className="form-label">Depart From</label>
                                    <input className="form-control" list="datalistOptions14" id="exampleDataList13" placeholder="New Delhi" />
                                    <datalist id="datalistOptions14">
                                        <option value="San Francisco" />
                                        <option value="New York" />
                                        <option value="Seattle" />
                                        <option value="Los Angeles" />
                                        <option value="Chicago " />
                                    </datalist>
                                </div>
                            </div>
                            <div className="col-12 col-lg-3 col-xl-2 ps-0 mb-2 mb-xl-0 pe-0 pe-lg-2">
                                <div className="form-group">
                                    <label htmlFor="exampleDataList4" className="form-label">Arrival To</label>
                                    <input className="form-control" list="datalistOptions5" id="exampleDataList4" placeholder="London" />
                                    <datalist id="datalistOptions5">
                                        <option value="San Francisco" />
                                        <option value="New York" />
                                        <option value="Seattle" />
                                        <option value="Los Angeles" />
                                        <option value="Chicago" />
                                    </datalist>
                                </div>
                            </div>
                            <div className={`col-12  ps-0 mb-2 mb-xl-0 pe-0 pe-lg-0 pe-xl-2 
                            ${selectedTab == 'Round Trip' ? 'col-lg-6 col-xl-3' : 'col-lg-5 col-xl-2'} `}>
                                <div className="form-group">
                                    <label className="form-label">{selectedTab == 'Round Trip' && 'Arrival -'} Departure Date </label>
                                    <input type="date" className="form-control" placeholder="Wed 2 Mar" />
                                </div>
                            </div>
                            <div className="col-12 col-lg-6 col-xl-3 ps-0 mb-2 mb-lg-0 mb-xl-0 pe-0 pe-lg-2">
                                <div className="form-group border-0">
                                    <label className="form-label">{`Traveller's`}</label>
                                    <div className="dropdown" id="myDD3">
                                        <button className="dropdown-toggle form-control" type="button" id="travellerInfoOneway21"
                                            data-bs-toggle="dropdown" aria-expanded="false" onClick={toggleDropdown}>
                                            <span className="text-truncate">2 adults - 1childeren - 1 Infants</span>
                                        </button>
                                        <div className={`dropdown-menu ${dropdownVisible ? 'show' : ''}`} aria-labelledby="travellerInfoOneway21">
                                            <ul className="drop-rest">
                                                <li>
                                                    <div className="d-flex small">Adults </div>
                                                    <div className="ms-auto input-group plus-minus-input">
                                                        <div className="input-group-button">
                                                            <button type="button" className="circle" data-quantity="minus" data-field="onewayAdult">
                                                                <i className="bi bi-dash"></i>
                                                            </button>
                                                        </div>
                                                        <input className="input-group-field" type="number" name="onewayAdult" value="0" />
                                                        <div className="input-group-button">
                                                            <button type="button" className="circle" data-quantity="plus" data-field="onewayAdult">
                                                                <i className="bi bi-plus"></i>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="d-flex small">Child </div>
                                                    <div className="ms-auto input-group plus-minus-input">
                                                        <div className="input-group-button">
                                                            <button type="button" className="circle" data-quantity="minus" data-field="onewayChild">
                                                                <i className="bi bi-dash"></i>
                                                            </button>
                                                        </div>
                                                        <input className="input-group-field" type="number" name="onewayChild" value="0" />
                                                        <div className="input-group-button">
                                                            <button type="button" className="circle" data-quantity="plus" data-field="onewayChild">
                                                                <i className="bi bi-plus"></i>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="d-flex small">Infants   </div>
                                                    <div className="ms-auto input-group plus-minus-input">
                                                        <div className="input-group-button">
                                                            <button type="button" className="circle" data-quantity="minus" data-field="onewayInfant">
                                                                <i className="bi bi-dash"></i>
                                                            </button>
                                                        </div>
                                                        <input className="input-group-field" type="number" name="onewayInfant" value="0" />
                                                        <div className="input-group-button">
                                                            <button type="button" className="circle" data-quantity="plus" data-field="onewayInfant">
                                                                <i className="bi bi-plus"></i>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={`col-12  px-0 ${selectedTab == 'Multi City' ? 'col-lg-6 col-xl-3' : 'col-lg-5 col-xl-2'}`}>
                                <div className="d-flex">
                                    {
                                        selectedTab == 'Multi City' && <button type="button" className="btn sector-add me-1">+ Add Sector</button>
                                    }

                                    <button type="submit" className="btn btn-search" >
                                        <span className="fw-bold"><i className="bi bi-search me-2"></i>Search</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                        {/* <!-- add sector form --> */}
                        {
                            selectedTab == 'Multi City' &&
                            <div className="row mt-4">
                                <div className="col-12 col-lg-6">
                                    <div className="search-pan row mx-0 theme-border-radius">
                                        <div className="col-12 col-lg-4 col-xl-4 ps-0 mb-2 mb-xl-0 pe-0 pe-lg-2">
                                            <div className="form-group">
                                                <label htmlFor="exampleDataList5" className="form-label">Depart From</label>
                                                <input className="form-control" list="datalistOptions24" id="exampleDataList5" placeholder="New Delhi" />
                                                <datalist id="datalistOptions24">
                                                    <option value="San Francisco" />
                                                    <option value="New York" />
                                                    <option value="Seattle" />
                                                    <option value="Los Angeles" />
                                                    <option value="Chicago" />
                                                </datalist>
                                            </div>
                                        </div>
                                        <div className="col-12 col-lg-4 col-xl-4 ps-0 mb-2 mb-xl-0 pe-0 pe-lg-2">
                                            <div className="form-group">
                                                <label htmlFor="exampleDataList6" className="form-label">Arrival To</label>
                                                <input className="form-control" list="datalistOptions16" id="exampleDataList6" placeholder="London" />
                                                <datalist id="datalistOptions16">
                                                    <option value="San Francisco" />
                                                    <option value="New York" />
                                                    <option value="Seattle" />
                                                    <option value="Los Angeles" />
                                                    <option value="Chicago" />
                                                </datalist>
                                            </div>
                                        </div>
                                        <div className="col-12 col-lg-4 col-xl-4 ps-0 mb-2 mb-xl-0 pe-0 pe-lg-0 pe-xl-2">
                                            <div className="form-group border-0">
                                                <label className="form-label">Departure Date</label>
                                                <input type="date" className="form-control" placeholder="Wed 2 Mar" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        }
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 mt-4">
                        <div className="d-flex flex-sm-row flex-column">
                            <div className="me-2 mb-2 mb-lg-0">
                                <div className="switch mode-switch">
                                    <input type="checkbox" name="stop_mode" id="stop_mode" value="1" />
                                    <label htmlFor="stop_mode" data-on="NonStop" data-off="Stop" className="mode-switch-inner" />
                                </div>
                            </div>
                            <div className="me-2">
                                <div className="switch mode-switch">
                                    <input type="checkbox" name="class_mode" id="class_mode" value="1" />
                                    <label htmlFor="class_mode" data-on="Premium" data-off="Economy" className="mode-switch-inner" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchEngine