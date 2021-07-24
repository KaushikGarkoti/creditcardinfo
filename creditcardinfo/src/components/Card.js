import './Card.css';
const Card = (props) => {
    return (
        <li className = "cardContainer">
            <div className = "card">
                <h4>{props.cardId + 1}</h4>
                <div className = "cardContent">
                    <h3 className = "cardNum">{props.card}</h3> 
                </div>
                <div className = "cardAction">
                    <a onClick = {() => {props.deleteCard(props.cardId)}}><i className="fa fa-minus-circle" aria-hidden="true"></i></a>
                </div>
            </div>
        </li>
    )
}
export default Card