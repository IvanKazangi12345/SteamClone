export function WishlistNotification() {
    return (
        <div id="notificationDivq">
            <div id="greenNotificationDivq">
                <p>!</p>
            </div>
            <div id="mailSwitchDivq">
                <div id="mailNotificationDivq">
                    <img src="/images/imagesWishlist/imgIconMainGreen.png" alt="Notification Icon" />
                    <p id="notificationP">
                        Get notified when your wishlisted games go on sale, or are available for purchase or pre-purchase.
                    </p>
                </div>
                <label className="switch">
                    <input type="checkbox" id="toggleSwitch" />
                    <span className="slider round">
                        <span className="text"></span>
                    </span>
                </label>
            </div>
        </div>
    );
}
