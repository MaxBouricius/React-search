import { useState } from "react";
import { useDispatch } from "react-redux";
import { filterGamesByTitle, filterGamesByPlatform, filterGamesByGenre } from "../../helpers/filterGames";
import { games } from "../../data/games";
import "./Form.css"
const Form = () => {

    const [inputs, setInputs] = useState([
        {
            id: "title",
            value: "",
            label: "Title",
            filter: filterGamesByTitle
        },
        {
            id: "platforms",
            value: "",
            label: "Platform",
            filter: filterGamesByPlatform
        },
        {
            id: "genre",
            value: "",
            label: "Genre",
            filter: filterGamesByGenre
        },
    ])

    let dispatch = useDispatch();

    const onInputChanged = (event) => {
        let copy = [...inputs];
        copy.map(input => {
            if (input.id === event.target.id) {
                input.value = event.target.value;
            }
        })
        setInputs(copy);
    }

    const inputsToBeRendered = inputs.map(objectFromStateArray => {
        return (
            <div key={objectFromStateArray.id}className="form__wrapper">
                <label className="form__label" htmlFor={objectFromStateArray.id}>{objectFromStateArray.label}</label>
                <input className="form__input" onChange={onInputChanged} id={objectFromStateArray.id} type="text" value={objectFromStateArray.value} />
            </div>
        )

    })

    const submit = (event) => {
        event.preventDefault();
        let result = games;
        inputs.forEach(input => {
            result = input.filter(input.value, result)
        })
        dispatch({
            type: "FILTEREDGAMES",
            payload: result
        })
    }
    return (
        <form className="form" onSubmit={submit}>
            <div className="form__inputsWrapper">
                {inputsToBeRendered}
            </div>
            
            <button className="form__search" onClick={submit}>zoeken</button>
        </form>
    )



}
export default Form;