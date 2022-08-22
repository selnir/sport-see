import PropTypes from 'prop-types'


/**
 * Indicator
 * @param {string} img address of the icone
 * @param {string} name name of the item
 * @param {number} value value of the itemnpm run jsdoc

 */

function Indicator(props) {
    return <div className="indicator"><img src={props.img} alt={props.name}></img><div className="wrapper_detais"><h1 className="value">{props.value}</h1><p className="name">{props.name}</p></div></div>;
  }

  Indicator.propTypes = {
    img: PropTypes.string,
    name: PropTypes.string,
    value: PropTypes.number,
}
  export default Indicator;