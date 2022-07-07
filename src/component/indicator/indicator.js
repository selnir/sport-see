function Indicator(props) {
    return <div className="indicator"><img src={props.img} alt={props.name}></img><div className="wrapper_detais"><h1 className="value">{props.value}</h1><p className="name">{props.name}</p></div></div>;
  }
  export default Indicator;