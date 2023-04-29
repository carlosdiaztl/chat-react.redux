import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {
  actionLoginAsync,
  actionLogoutSync,
} from "../redux/actions/userActions";
import "../css/core.css";
import "../css/theme-default.css";
import "../js/perfect-scrollbar/perfect-scrollbar.css";
import "../css/app-chat.css";
import img1 from "../assets/1.png";
import img2 from "../assets/3.png";
import img3 from "../assets/5.png";
import { actionGetchatsAsync } from "../redux/actions/chatActions";

const Home = () => {
  const chat = useSelector((state) => state.chat);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actionGetchatsAsync());
    console.log(chat);
  }, [dispatch]);

  return (
    <div>
      <div className="container-xxl flex-grow-1 container-p-y">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <button
            className="btn btn-success mx-2  "
            onClick={() => dispatch(actionLogoutSync())}
          >
            Logout
          </button>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav"></ul>
          </div>
        </nav>
        <div className="app-chat card overflow-hidden">
          <div className="row g-0">
            <div
              className="col app-chat-contacts app-sidebar flex-grow-0 overflow-hidden border-end"
              id="app-chat-contacts"
            >
              <div className="sidebar-header">
                <div className="d-flex align-items-center me-3 me-lg-0">
                  <div
                    className="flex-shrink-0 avatar avatar-online me-3"
                    data-bs-toggle="sidebar"
                    data-overlay="app-overlay-ex"
                    data-target="#app-chat-sidebar-left"
                  >
                    <img
                      className="user-avatar rounded-circle cursor-pointer"
                      src={img1}
                      alt="Avatar"
                    />
                  </div>
                  <div className="flex-grow-1 input-group input-group-merge rounded-pill">
                    <span
                      className="input-group-text"
                      id="basic-addon-search31"
                    >
                      <i className="ti ti-search"></i>
                    </span>
                    <input
                      type="text"
                      className="form-control chat-search-input"
                      placeholder="Search..."
                      aria-label="Search..."
                      aria-describedby="basic-addon-search31"
                    />
                  </div>
                </div>
                <i
                  className="ti ti-x cursor-pointer d-lg-none d-block position-absolute mt-2 me-1 top-0 end-0"
                  data-overlay
                  data-bs-toggle="sidebar"
                  data-target="#app-chat-contacts"
                ></i>
              </div>
              <hr className="container-m-nx m-0" />
              <div className="sidebar-body overflow-auto">
                <div className="chat-contact-list-item-title">
                  <h5 className="text-primary mb-0 px-4 pt-3 pb-2">Chats</h5>
                </div>

                <ul className="list-unstyled chat-contact-list" id="chat-list">
                  <li className="chat-contact-list-item chat-list-item-0 d-none">
                    <h6 className="text-muted mb-0">No Chats Found</h6>
                  </li>
                  <li className="chat-contact-list-item">
                    <a className="d-flex align-items-center">
                      <div className="flex-shrink-0 avatar avatar-online">
                        <img
                          src={img3}
                          alt="Avatar"
                          className="rounded-circle"
                        />
                      </div>
                      <div className="chat-contact-info flex-grow-1 ms-2">
                        <h6 className="chat-contact-name text-truncate m-0">
                          Waldemar Mannering
                        </h6>
                        <p className="chat-contact-status text-muted text-truncate mb-0">
                          Refer friends. Get rewards.
                        </p>
                      </div>
                      <small className="text-muted mb-auto">5 Minutes</small>
                    </a>
                  </li>
                  <li className="chat-contact-list-item active">
                    <a className="d-flex align-items-center">
                      <div className="flex-shrink-0 avatar avatar-offline">
                        <img
                          src={img2}
                          alt="Avatar"
                          className="rounded-circle"
                        />
                      </div>
                      <div className="chat-contact-info flex-grow-1 ms-2">
                        <h6 className="chat-contact-name text-truncate m-0">
                          Carlos Diaz
                        </h6>
                        <p className="chat-contact-status text-muted text-truncate mb-0">
                          I will purchase it for sure. 👍
                        </p>
                      </div>
                      <small className="text-muted mb-auto">30 Minutes</small>
                    </a>
                  </li>
                  <li className="chat-contact-list-item">
                    <a className="d-flex align-items-center">
                      <div className="flex-shrink-0 avatar avatar-busy">
                        <span className="avatar-initial rounded-circle bg-label-success">
                          CM
                        </span>
                      </div>
                      <div className="chat-contact-info flex-grow-1 ms-2">
                        <h6 className="chat-contact-name text-truncate m-0">
                          Calvin Moore
                        </h6>
                        <p className="chat-contact-status text-muted text-truncate mb-0">
                          If it takes long you can mail inbox user
                        </p>
                      </div>
                      <small className="text-muted mb-auto">1 Day</small>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col app-chat-history bg-body ">
              <div className="chat-history-wrapper">
                <div className="chat-history-header border-bottom">
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="d-flex overflow-hidden align-items-center">
                      <i
                        className="ti ti-menu-2 ti-sm cursor-pointer d-lg-none d-block me-2"
                        data-bs-toggle="sidebar"
                        data-overlay
                        data-target="#app-chat-contacts"
                      ></i>
                      <div className="flex-shrink-0 avatar">
                        <img
                          src={img2}
                          alt="Avatar"
                          className="rounded-circle"
                          data-bs-toggle="sidebar"
                          data-overlay
                          data-target="#app-chat-sidebar-right"
                        />
                      </div>
                      <div className="chat-contact-info flex-grow-1 ms-2">
                        <h6 className="m-0">Carlos Diaz</h6>
                        <small className="user-status text-muted">
                          Next react JS developer
                        </small>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="chat-history-body bg-body overflow-auto">
                  <ul className="list-unstyled chat-history">
                    {chat && chat.length
                      ? chat.map((item, index) => (
                          <li
                            key={index}
                            className={`chat-message ${
                              item.sender === "agent"
                                ? "chat-message-right"
                                : ""
                            }`}
                          >
                            <div className="d-flex overflow-hidden">
                              {item.sender === "agent" ? (
                                <>
                                  <div className="chat-message-wrapper flex-grow-1 ">
                                    <div className="chat-message-text text-dark">
                                      <p className="mb-0 ">{item.message}</p>
                                    </div>
                                    <div className="text-end text-muted mt-1">
                                      <i className="ti ti-checks ti-xs me-1 text-success"></i>
                                      <small>{item.timeStamp}</small>
                                    </div>
                                  </div>
                                  <div className="user-avatar flex-shrink-0 ms-3">
                                    <div className="avatar avatar-sm">
                                      <img
                                        src={img2}
                                        alt="Avatar"
                                        className="rounded-circle"
                                      />
                                    </div>
                                  </div>
                                </>
                              ) : (
                                <>
                                  <div className="user-avatar flex-shrink-0 me-3">
                                    <div className="avatar avatar-sm">
                                      <img
                                        src={img1}
                                        alt="Avatar"
                                        className="rounded-circle"
                                      />
                                    </div>
                                  </div>
                                  <div className="chat-message-wrapper flex-grow-1">
                                    <div className="chat-message-text bg-secondary">
                                      <p className="mb-0">{item.message}</p>
                                    </div>
                                    <div className="text-muted mt-1">
                                      <small>{item.timeStamp}</small>
                                    </div>
                                  </div>
                                </>
                              )}
                            </div>
                          </li>
                        ))
                      : "... cargando"}
                  </ul>
                </div>

                <div className="chat-history-footer shadow-sm">
                  <form className="form-send-message d-flex justify-content-between align-items-center">
                    <input
                      className="form-control message-input border-0 me-3 shadow-none"
                      placeholder="Type your message here"
                    />
                    <div className="message-actions d-flex align-items-center">
                      <i className="speech-to-text ti ti-microphone ti-sm cursor-pointer"></i>
                      <label className="form-label mb-0">
                        <i className="ti ti-photo ti-sm cursor-pointer mx-3"></i>
                        <input type="file" id="attach-doc" hidden />
                      </label>
                      <button className="btn btn-primary d-flex send-msg-btn">
                        <i className="ti ti-send me-md-1 me-0"></i>
                        <span className="align-middle d-md-inline-block d-none">
                          Send
                        </span>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
