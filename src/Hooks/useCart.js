import { useEffect, useState } from "react";
import { getGames } from "../Fake Data/FakeStorage";

const useCart = () => {
    const [cart, setCart] = useState([]);
    useEffect(() => {
        const storedCart = getGames();
        setCart(storedCart);
    }, []);

    return [cart, setCart];
}
export default useCart;