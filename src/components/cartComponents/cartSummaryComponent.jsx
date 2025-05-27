import React, { useState } from 'react';
import { useMediaQuery } from 'react-responsive'

function ModalContent({ activeBlock, toggleBlock }) {
    return (
        <>
            <div>
                <h1 className='modalWindowTitle'>CHECKOUT</h1>

                {/* Visa блок */}
                <div className={`cardWrapper ${activeBlock === 'visa' ? 'selected' : activeBlock ? 'not-selected' : ''}`}>
                    <div className='modal-box'>
                        <div className='visaOrMasterCard'>
                            <label>
                                <input
                                    type="checkbox"
                                    className="checkboxCardChoose"
                                    checked={activeBlock === 'visa'}
                                    onChange={() => toggleBlock('visa')}
                                />
                                <span className="checkbox-wrapper"></span>
                            </label>
                            <img src='../images/imagesWishlist/visaLogo.png' />
                            <p className='cardNameCart'>Visa</p>
                        </div>
                    </div>

                    {activeBlock === 'visa' && (
                        <div className="block1">
                            <CardDetails cardType="visa" />
                        </div>
                    )}
                </div>
                <div className={`cardWrapper ${activeBlock === 'block2' ? 'selected' : activeBlock ? 'not-selected' : ''}`}>
                    <div className='modal-box'>
                        <label className='visaOrMasterCard'>
                            <label>
                                <input
                                    type="checkbox"
                                    className="checkboxCardChoose"
                                    checked={activeBlock === 'block2'}
                                    onChange={() => toggleBlock('block2')}
                                />
                                <span className="checkbox-wrapper"></span>
                            </label>
                            <img src='../images/imagesWishlist/master-cardLogo.png' />
                            <p className='cardNameCart'>Mastercard</p>
                        </label>
                    </div>

                    {activeBlock === 'block2' && (
                        <div className="block1">
                            <CardDetails cardType="block2" />
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}

function CardDetails({ cardType }) {
    const handleFocus = (e, shouldShowError) => {
        e.target.classList.add('error');
        e.target.disabled = true;

        if (shouldShowError) {
            const errorText = e.target.parentElement.querySelector('.errorText');
            if (errorText) {
                errorText.classList.remove('hidden');
            }
        }
    };

    const isVisa = cardType === 'visa';
    const isMasterCard = cardType === 'block2';

    return (
        <>
            <div className='inputsForUserCard'>
                <h1 className='cardDeteils'>CARD DETAILS</h1>

                <div>
                    <div className='inputHeader'>
                        <h1 className='infoForInputCard'>Card number</h1>
                        <span className='errorText hidden'>(an error was made)</span>
                    </div>
                    <input
                        className='inputForCardInfo'
                        onFocus={(e) => handleFocus(e, isVisa)}
                    />
                </div>

                <div>
                    <div className='inputHeader'>
                        <h1 className='infoForInputCard'>Name on card</h1>
                        <span className='errorText hidden'>(an error was made)</span>
                    </div>
                    <input
                        className='inputForCardInfo'
                        onFocus={(e) => handleFocus(e, isMasterCard)}
                    />
                </div>

                <div className='twoInputsForInfoCard'>
                    <div>
                        <h1 className='infoForInputCard'>Expiration</h1>
                        <input
                            className='twoInputForCardInfo'
                            onFocus={(e) => e.target.classList.add('error')}
                        />
                    </div>
                    <div>
                        <h1 className='infoForInputCard'>CVV</h1>
                        <input
                            className='twoInputForCardInfo'
                            onFocus={(e) => e.target.classList.add('error')}
                        />
                    </div>
                </div>
            </div>

            <div className='saveChengesCheckBox'>
                <label style={{ position: 'relative', display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer' }}>
                    <input
                        className='inputSaveChangesCard'
                        type='checkbox'
                    />
                    <span className="checkboxCustom"></span>
                </label>
                <h3 className='saveCardText'>Save this payment method for future purchase?</h3>
            </div>

            <p className='paymentInfo'>
                By choosing to save your payment information,
                this payment method will be selected as the default for all purchases made using Epic Games payment,
                including purchases in Fortnite, Rocket League, Fall Guys and the Epic Games Store. You can delete
                your saved payment information anytime on this payment screen or by logging in to your Epic Games
                account, and selecting payment management in your account settings.
            </p>
        </>
    );
}

export function CartSummary({ total, taxPercent }) {
    const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
    const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);

    const [activeBlock, setActiveBlock] = useState(null);

    const toggleBlock = (blockId) => {
        setActiveBlock(prev => (prev === blockId ? null : blockId));
    };

    const handleCloseOrderModal = () => {
        setIsOrderModalOpen(false);
    };

    const placeOrderBtnClass = `placeHolderBtn ${activeBlock ? 'btn-active' : 'btn-disabled'}`;
    const handlePlaceOrder = (e) => {
        e.preventDefault();
        if (!activeBlock) return;
        setIsCheckoutOpen(false);
        setIsOrderModalOpen(true);
    };
    const isMobile = useMediaQuery({ maxWidth: 440 });

    return (
        <>
            <div id="totalTaxDiv">
                <div id="totalDiv">
                    <p id="totalP">Total:</p>
                    <p id="UAHP">{total} UAH</p>
                </div>
                <div id="taxDiv">
                    <p className="taxprecentP">Tax:</p>
                    <p className="taxprecentP">{taxPercent}%</p>
                </div>
                <p id="textTaxP">
                    Of their respective owners in the US and other countries. VAT included in all prices where applicable
                </p>

                <button id="checkOutButton" onClick={() => setIsCheckoutOpen(true)}>Check Out</button>
            </div>

            {/* Модальное окно addaptive */}
            {isCheckoutOpen && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <ModalContent activeBlock={activeBlock} toggleBlock={toggleBlock} setActiveBlock={setActiveBlock} />
                        <div className='rightInfoModal'>
                            <div className='orderSummaryDiv'>
                                <h1 className='orderTitle'>ORDER SUMMARY</h1>
                                <button className="modal-close" onClick={() => setIsCheckoutOpen(false)}>
                                    <img src='../images/imagesWishlist/backLogoModalWindow.png' alt="Back" />
                                </button>
                            </div>

                            <div className='gameAndPrice'>
                                <div className='cardGameAndName'>
                                    <img src='../images/imagesWishlist/gameImgSmall.png' className='smallCardGame' />
                                    <div>
                                        <h1 className='NameGameTextWindow'>The End of the Sun</h1>
                                        <h3 className='infoGameTextWindow'>ZA/UM</h3>
                                        <h4 className='gamePriceWindow'>UAH 390.00</h4>
                                    </div>
                                </div>
                                <div className='priceAndTaxed'>
                                    <div className='priceDiv'>
                                        <h3 className='priceInfoText'>Price</h3>
                                        <h3 className='priceInfoNumber'>UAH 390.00</h3>
                                    </div>
                                    <div className='priceDiv'>
                                        <h3 className='priceInfoText'>Taxed(5%)</h3>
                                        <h3 className='priceInfoNumber'>UAH 19.50</h3>
                                    </div>
                                </div>
                                <hr className='hrRightInfo' />
                                <div className='onlyTaxed'>
                                    <h3 className='taxed'>Taxed(5%)</h3>
                                    <h3 className='taxed'>UAH 19.50</h3>
                                </div>
                            </div>

                            <div className='pravacyAndPolicyDiv'>
                                <div className='checkboxPravicyPolicyAndInfo'>
                                    <label>
                                        <input className="pravacyCheckbox" type="checkbox" />
                                        <span className="checkboxCustom"></span>
                                    </label>
                                    <p className='pravacyCheckboxInfo'>
                                        I am 13 years of age or older and agree to the terms of the Steam Subscriber Agreement and the Valve Privacy Policy.
                                    </p>
                                </div>
                                <hr className='hrRightInfo' />
                                <p className='moreInfoForPlaceOrder'>
                                    You are purchasing a digital license for this product. For full terms, see
                                    <span className='underLineForText'>purchase policy.</span>
                                    <br /><br />
                                    By clicking "Place Order" below, I represent that I am over 18 and an authorized user of this payment method,
                                    I agree to the <span className='underLineForText'>End User License Agreement</span>.
                                </p>

                                <a href='#' className='palceHolderLink'>
                                    <button className={placeOrderBtnClass} onClick={handlePlaceOrder}>
                                        PLACE ORDER
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            {isOrderModalOpen && (
                <div className="modal-overlay">
                    <div className="modal-contentThanks">
                        <button className='spotBtn' onClick={handleCloseOrderModal}>
                            <div className='thanksForOrder'>
                                <img src='../images/imagesWishlist/logoSite.png' />
                                <h1 className='thankTitle'>Thank you for buying our games!</h1>
                                <p className="anEmailSentLetter">An email receipt has been sent to you.</p>
                                <p className="anEmailSentLetter">If there is anything else you need, feel free to browse our shop! </p>
                            </div>
                        </button>
                    </div>
                </div>
            )}

            {!isMobile && (
                <>
                    {isCheckoutOpen && (
                        <div className="modal-overlay">
                            <div className="modal-content">
                                <ModalContent activeBlock={activeBlock} toggleBlock={toggleBlock} setActiveBlock={setActiveBlock} />
                                <div className='rightInfoModal'>
                                    <div className='orderSummaryDiv'>
                                        <h1 className='orderTitle'>ORDER SUMMARY</h1>
                                        <button className="modal-close" onClick={() => setIsCheckoutOpen(false)}>
                                            <img src='../images/imagesWishlist/backLogoModalWindow.png' alt="Back" />
                                        </button>
                                    </div>

                                    <div className='gameAndPrice'>
                                        <div className='cardGameAndName'>
                                            <img src='../images/imagesWishlist/gameImgSmall.png' className='smallCardGame' />
                                            <div>
                                                <h1 className='NameGameTextWindow'>The End of the Sun</h1>
                                                <h3 className='infoGameTextWindow'>ZA/UM</h3>
                                                <h4 className='gamePriceWindow'>UAH 390.00</h4>
                                            </div>
                                        </div>
                                        <div className='priceAndTaxed'>
                                            <div className='priceDiv'>
                                                <h3 className='priceInfoText'>Price</h3>
                                                <h3 className='priceInfoNumber'>UAH 390.00</h3>
                                            </div>
                                            <div className='priceDiv'>
                                                <h3 className='priceInfoText'>Taxed(5%)</h3>
                                                <h3 className='priceInfoNumber'>UAH 19.50</h3>
                                            </div>
                                        </div>
                                        <hr className='hrRightInfo' />
                                        <div className='onlyTaxed'>
                                            <h3 className='taxed'>Taxed(5%)</h3>
                                            <h3 className='taxed'>UAH 19.50</h3>
                                        </div>
                                    </div>

                                    <div className='pravacyAndPolicyDiv'>
                                        <div className='checkboxPravicyPolicyAndInfo'>
                                            <label>
                                                <input className="pravacyCheckbox" type="checkbox" />
                                                <span className="checkboxCustom"></span>
                                            </label>
                                            <p className='pravacyCheckboxInfo'>
                                                I am 13 years of age or older and agree to the terms of the Steam Subscriber Agreement and the Valve Privacy Policy.
                                            </p>
                                        </div>
                                        <hr className='hrRightInfo' />
                                        <p className='moreInfoForPlaceOrder'>
                                            You are purchasing a digital license for this product. For full terms, see
                                            <span className='underLineForText'>purchase policy.</span>
                                            <br /><br />
                                            By clicking "Place Order" below, I represent that I am over 18 and an authorized user of this payment method,
                                            I agree to the <span className='underLineForText'>End User License Agreement</span>.
                                        </p>

                                        <a href='#' className='palceHolderLink'>
                                            <button className={placeOrderBtnClass} onClick={handlePlaceOrder}>
                                                PLACE ORDER
                                            </button>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                    {isOrderModalOpen && (
                        <div className="modal-overlay">
                            <div className="modal-contentThanks">
                                <button className='spotBtn' onClick={handleCloseOrderModal}>
                                    <div className='thanksForOrder'>
                                        <img src='../images/imagesWishlist/logoSite.png' />
                                        <h1 className='thankTitle'>Thank you for buying our games!</h1>
                                        <p className="anEmailSentLetter">An email receipt has been sent to you.</p>
                                        <p className="anEmailSentLetter">If there is anything else you need, feel free to browse our shop! </p>
                                    </div>
                                </button>
                            </div>
                        </div>
                    )}
                </>
            )}
        </>
    );
}
