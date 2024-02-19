function CreateItem({elem}) {
    console.log({elem})
    return (
        <tr class="table__row">
                        <td className="table__name">{elem.name}</td>
                        <td className="table__company">{elem.company}</td>
                        <td className="table__phone">{elem.phone}</td>
                        <td className="table__email">{elem.email}</td>
                        <td className="table__country">{elem.country}</td>
                        <td className="table__status">
                        {elem.status === 'Active' ? (
                            <button className="btn btn--green">{elem.status}</button>
                        ) : (
                            <button className="btn btn--red">{elem.status}</button>
                        )}
                            
                        </td>
        </tr>
    )
}

export default CreateItem