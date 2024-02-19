
function CreateBnt ({elem}) {
   
    return (
        <li className="navigation__item">
                    <a href="#">
                        <span className="navigation__text">
                            {elem}
                        </span>
                    </a>
        </li>
    )
}

export default CreateBnt