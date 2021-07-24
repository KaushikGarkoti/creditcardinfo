import { useRef, useState } from "react"
import Card from "./Card"
import './CardList.css'
let cards = [];
const CardList = (props) => {
    cards = props.cards
    const ulRef = useRef()
    const[numCards, setNumCards] = useState(cards.length);
    const deleteEntry = (id) => {
        console.log(id)
        cards.splice(id, 1)
        setNumCards(numCards - 1)
    }

    return (
        <>
        <h3>Saved Cards</h3>
        {cards.length < 1 ? 
        (<h3>No cards Saved</h3>) : 
        (
            <ul ref = {ulRef} className = "cardList">
            {
                cards.map((card,i) => {
                    return <Card deleteCard = {deleteEntry} key = {i} card = {card} cardId = {i}></Card>
                })
            }
            </ul>
        )}
            
        </>
    )
}
export default CardList;