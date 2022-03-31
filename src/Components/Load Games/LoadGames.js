import './LoadGames.css'
import IndividualGame from '../IndividualGame/IndividualGame';
import Cart from '../Cart/Cart';
import RandomItem from '../Random Item/RandomItem';
import AlertModal from '../AlertModal/AlertModal';

const LoadGames = (props) => {

    // useEffect(() => {
    //     const localCart = JSON.parse(localStorage.getItem('cart'));
    //     // console.log(localCart);
    //     if (localCart !== null) {
    //         const NewItem = localCart[Math.floor(Math.random() * localCart.length)];

    //         // console.log(NewItem);
    //         let newCart = [];
    //         newCart.push(NewItem);
    //         setRandom(newCart);
    //     }
    // }, [])
    
    const {addToCart, DeleteItem, ramdomAdd, emptyCart, alert, cart, random, data} = props;


    return (
        <div className='row LoadGames'>
            <div className="col-lg-3">
                <AlertModal alert={alert}></AlertModal>
                <Cart cart={cart} fullCart={data} DeleteItem={DeleteItem} ramdomAdd={ramdomAdd} emptyCart={emptyCart}></Cart>
                <RandomItem random={random}></RandomItem>
            </div>
            <div className="col col-md-12 col-lg-9 order-md-first">
                <IndividualGame games={data} addToCart={addToCart}></IndividualGame>
            </div>
        </div>
    );
};

export default LoadGames;