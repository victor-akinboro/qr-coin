import React from 'react';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import arrowAltIcon from '../../Assets/arrowAlt.svg';

export default function Withdraw() {
    return (
        <div>

            <div className="withdraw-wrap">
                <div className="withdraw-header">
                    <span className="widrawTitle">Send Ethereum</span>
                </div>
                <div className="withdraw-header header-address">
                    <span className="to-address">TO ADDRESS</span>
                    <div className="line-under-1"></div>
                </div>

                <div className="withdraw-info">
                    <p>Select the account to withdraw the funds to. Enter the amount
                        and submit.</p>

                </div>
                <form>
                    <div className="add-wallet-address-1">
                        <input type="text" name="address" placeholder="Address" className="input-address-1" />
                        <span className="widrawPlus-1"><FontAwesomeIcon icon={faPlus} size="1x" /> Add Address</span>
                    </div>

                    <div className="add-ammount-1">
                        <span className="input-ammount-btn">ETH</span>
                        <input type="text" name="address" placeholder="Enter amount" className="input-ammount-1" />
                        <span className="input-ammount-icon">
                            <img src={arrowAltIcon} alt="arrow" className="arrow-alt-1" />
                        </span>
                        <span className="widrawPlus-1">Send all</span>
                    </div>
                    <div className="crypto-bal-1">
                        <span>Balance: ETH 0.00</span>
                    </div>


                    <div className="input-withdraw-wrap">

                        <input placeholder="Note (optional)" type="text" />

                    </div>

                    <div className="send-wthdraw-btn">
                        <button className="upgrade-limit-btn">Upgrade Your Limits</button>
                        <button className="send-now-btn">Continue</button>
                    </div>

                </form>

            </div>

        </div>
    )
}
