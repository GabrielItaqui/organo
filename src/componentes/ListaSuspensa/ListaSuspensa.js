import "./ListaSuspensa.css"

export const ListaSuspensa = (props) => {
    return (
        <div className="lista-suspensa">
            <label>
                {props.label}
            </label>
            <select
                onChange={evento => props.aoAlterado(evento.target.value)}
                required={props.obrigatorio}
            >
                {props.itens.map((item, index) => {
                    return <option key={index}>{item}</option>
                })}
            </select>
        </div>
    )
}