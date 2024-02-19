import NavigatorItem from './NavigatorItem'
import { useContext } from "react"
import context from "./navigatorArr"

function Nav () {

    const arr = useContext(context)

    return (
        <div className="navigation">
       <div className="navigation__header">
            <h2 class="title">
                <span class="title__text">
                    Dashboard
                </span>
                <span>v.01</span>
            </h2>
       </div>
       

       <div className="navigation__menu">
            <ul className="navigation__items">
                {arr.map(elem => {
                        return <NavigatorItem elem={elem} key={elem} />;
                })}
            </ul>
       </div>

       <div className="navigation__user">
            <div className="user">
                <div className="user__avatar">
                    <img src="img/avatar.png" alt=""/>
                </div>
                <div className="user__content">
                    <p className="user__name">Evano</p>
                    <p className="user__job">Project manager</p>
                </div>
            </div>
       </div>
    </div>
    )
}

export default Nav