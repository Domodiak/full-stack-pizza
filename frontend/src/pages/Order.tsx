import Sidebar from "../components/Sidebar"
import Menu from "../components/Menu"
import Cart from "../components/Cart"
import Header from "../components/Header"

function Order() {
    return (
        <>
            <Sidebar />
            <div>
                {/* vertical */}
                <Header />
                <div>
                    <Menu />
                    <Cart />
                </div>
            </div>
        </>
    )
}

export default Order