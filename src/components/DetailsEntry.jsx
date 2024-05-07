function DetailsEntry(){
    return(
        <>
        <div style={{marginLeft: '90px',fontSize:'14px',marginTop:'40px'}}><a style={{textDecoration: "none",color: "gray"}} href="/">Home </a><a style={{textDecoration: "none",color: "gray"}} href="/">- Flights</a><span style={{color: "rgb(0,0,93)"}}> - ConfirmDetails</span></div>
            <h1 className="bookingtitle">Confirm your details</h1>
        <div className="displayflight">
            <div>
            <input type="text" placeholder="First Name"></input>
            <input type="text" placeholder="Last Name" />
            </div>
            <input type="text" placeholder="Mobile Number"></input>
            <input type="text" placeholder=""></input>
        </div>
        </>
    )
}

export default DetailsEntry;