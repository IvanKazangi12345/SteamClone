import { WishlistGameCard } from "./WishlistGameCardComponent";

export function WishlistContent({ games }) {
    return (
        <>
            {games.map((game, index) => (
                <WishlistGameCard key={index} game={game} />
            ))}
        </>
    );
}