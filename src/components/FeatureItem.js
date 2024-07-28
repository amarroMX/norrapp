


function featureItem(props){
    return(
        <div className="d-flex flex-column text-center gap-2">
            <div className="px-1 border border-2 border-top-0 border-bottom-0 border-primary rounded-lg">
                 {props.children}
            </div>
            <p style={{color: '#007a78'}} className="fw-bold fs-6 text-uppercase">{props.title}</p>
        </div>
    )
}

export default featureItem;