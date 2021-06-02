import React, { useState } from 'react';
import {
    MdMailOutline,
    MdTextFormat,
    MdFace,
    MdFileDownload,
    MdAttachFile,
    MdImage,
    MdLink,
    MdStarBorder,
    MdDelete
} from "react-icons/md";
import {
    FaMinus,
    FaExpandAlt,
    FaWindowClose,
    FaArrowCircleLeft,
    FaArrowCircleRight
} from "react-icons/fa";
import './email.scss';
import CONSTANTS from "../../assets/constants/Constants";
import { useMediaQuery } from 'react-responsive';

function Email(props) {

    const [selectedFromAccount, setSelectedFromAccount] = useState(
        (CONSTANTS.hasOwnProperty('FROM_ACCOUNTS')) ?
            (CONSTANTS.FROM_ACCOUNTS[0]) : "");

    const [selectedSubject, setSelectedSubject] = useState(
        (CONSTANTS.hasOwnProperty('MAIL_SUBJECT')) ?
            (CONSTANTS.MAIL_SUBJECT[0]) : "");

    const [selectedBodyIndex, setSelectedBodyIndex] = useState(0);

    const [arrowPosition, setArrowPosition] = useState(0);

    const PopulateAccounts = () => {
        return (
            <select name="from-account"
                id="from-account"
                className="dropdown"
                value={selectedFromAccount}
                onChange={e => setSelectedFromAccount(e.target.value)}>
                {CONSTANTS.FROM_ACCOUNTS.map((account, index) => (
                    <option value={account}
                        key={`${account + index}`}>
                        {account}
                    </option>
                ))}
            </select>
        )
    }

    const PopulateSubject = () => {
        return (
            <select name="subject"
                id="subject"
                className="dropdown"
                value={selectedSubject}
                onChange={e => setSelectedSubject(e.target.value)}>
                {CONSTANTS.MAIL_SUBJECT.map((account, index) => (
                    <option value={account}
                        key={`${account + index}`}>
                        {account}
                    </option>
                ))}
            </select>
        )
    }

    const handleArrowClick = (DIRECTION_OBJ, event) => {
        const DIRECTION = DIRECTION_OBJ.ARROW;
        if (DIRECTION === "LEFT" && arrowPosition !== 0) {
            setArrowPosition(arrowPosition - 1);
            setSelectedBodyIndex(arrowPosition - 1);
        }
        else if (DIRECTION === "RIGHT") {
            if (arrowPosition + 1 >= CONSTANTS.MAIL_BODY.length) { setArrowPosition(0); setSelectedBodyIndex(0) }
            else { setArrowPosition(arrowPosition + 1); setSelectedBodyIndex(arrowPosition + 1); }
        }
    }

    const PopulateBody = () => {
        return (
            <p className="email__body-text">
                Dear User, <br />
                {CONSTANTS.MAIL_BODY[selectedBodyIndex]}
            </p>
        )
    }

    const populatedResponse = {
        "FROM": selectedFromAccount,
        "SUBJECT": selectedSubject,
        "BODY_INDEX": selectedBodyIndex
    };

    const isTablet = useMediaQuery({ query: '(max-width: 1224px' });

    return (
        <div className={!isTablet ? "email" : "email--tablet"}>
            <div className="email__system-tray">
                <MdMailOutline className="md-outline-style" />
                <p className="email__header-text">New Message</p>
                <div className="email__system-tray-actions">
                    <FaMinus className="fa-minus-style" />
                    <FaExpandAlt className="fa-minus-style" />
                    <FaWindowClose className="fa-minus-style" />
                </div>
            </div>
            <div className="email__content">
                <div className="email__from-account">
                    <label for="from-account" className="email-label">
                        From:
                    </label>
                    <PopulateAccounts />
                </div>
                <div className="email__to-account">
                    <p className="email-label">
                        To: sarahsmith@roxxon.com
                    </p>
                </div>
                <div className="email__subject">
                    <label for="subject" className="email-label">
                        Subject:
                    </label>
                    <PopulateSubject />
                </div>
                <div className="email__content--body">
                    <PopulateBody />
                </div>
                <div className="email__navigate-body-text">
                    <FaArrowCircleLeft className="fa-arrow-style"
                        onClick={(e) => handleArrowClick({ "ARROW": "LEFT" })} />
                    <FaArrowCircleRight className="fa-arrow-style"
                        onClick={(e) => handleArrowClick({ "ARROW": "RIGHT" })} />
                </div>
                <div className="email__footer">
                    <button className="email__footer--send-btn"
                        onClick={() => props.handleSend(populatedResponse)}>
                        Send
                    </button>
                    <MdTextFormat className="email__footer--icon-styles" />
                    <MdFace className="email__footer--icon-styles" />
                    <MdFileDownload className="email__footer--icon-styles" />
                    <MdAttachFile className="email__footer--icon-styles" />
                    <MdImage className="email__footer--icon-styles" />
                    <MdLink className="email__footer--icon-styles" />
                    <MdStarBorder className="email__footer--icon-styles" />
                    <MdDelete className="email__footer--icon-styles" />
                </div>
            </div>
        </div >
    )
}

export default Email;