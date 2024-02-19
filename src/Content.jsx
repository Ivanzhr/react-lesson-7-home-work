import ContextItem from './ContextItem'
import { useContext } from 'react'
import context from './ContentArr'
import CreatePagination from './Pagination';

function Сontent() {
    const contextArr = useContext(context);

    return (
        <div class="content">
        <div class="content__header">
            <p>Hello Evano 👋🏼,</p>
        </div>
        <div class="content__table">
            <div class="content__row content__row--top">
                <div class="content__col">
                    <h2 class="title">
                        All customers
                    </h2>
                    <p class="subtitle">
                        Active Members
                    </p>
                </div>
                <div class="content__col">
                    <div class="search">
                        <input class="search__field" type="search" placeholder = "search"/>
                    </div>                   
                </div>
            </div>
            <div class="content__row">
                <table class="table">
                    <tr class="table__head">
                        <th>Customer Name</th>
                        <th>Company</th>
                        <th>Phone Number</th>
                        <th>Email</th>
                        <th>Country</th>
                        <th>Status</th>
                    </tr>
                    {contextArr.map(elem => {
                        return(<ContextItem key = {elem} elem = {elem}/>)
                    })}
                    
                </table>
            </div>

            <div class="content__row pagination">
                <div class="pagination__text">
                    Showing data 1 to 8 of  256K entries
                </div>
                <CreatePagination/>
            </div>
        </div>
   </div>
    )
}

export default Сontent