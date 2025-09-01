import { useState } from "react";
import Icon from "../../Icons/notification";
import { Link } from "react-router-dom";
import { Dropdown } from "react-bootstrap";
import "./NotificationsDropdown.scss";

const initialNotifications = [
  {
    notification: "Your campaign is live!",
    hour: "3h",
    icon: "campaign",
    category: "unchecked",
    notifId: 1,
    link: "/campaigns/details",
  },
  {
    notification: "Preselect your creators",
    hour: "4h",
    icon: "creators",
    category: "unchecked",
    notifId: 2,
    link: "/campaigns/details",
  },
  {
    notification: "Campaign report is ready",
    hour: "4 days ago",
    icon: "campaign-report",
    category: "checked",
    notifId: 3,
    link: "/campaigns/",
  },
  {
    notification: "Your campaign is live!",
    hour: "2 weeks ago",
    icon: "campaign",
    category: "checked",
    notifId: 4,
    link: "/campaigns/details",
  },
  {
    notification: "Preselect your creators",
    hour: "2 weeks ago",
    icon: "creators",
    category: "checked",
    notifId: 5,
    link: "/campaigns/details",
  },
];

const BellIconClosed = ({ count, screen }) => {
  const isMobile = screen === "mobile";
  return count > 0 ? (
    <svg
      id="Group_2834"
      data-name="Group 2834"
      xmlns="http://www.w3.org/2000/svg"
      width={isMobile ? "25.9" : "20.48"}
      height={isMobile ? "25.95" : "20.48"}
      viewBox="0 0 41.833 41.913"
    >
      <defs>
        <clipPath id="clip-path">
          <rect
            id="Rectangle_1224"
            data-name="Rectangle 1224"
            width="41.833"
            height="41.913"
            fill="none"
          />
        </clipPath>
      </defs>
      <g
        id="Group_2834-2"
        data-name="Group 2834"
        transform="translate(0 0)"
        clipPath="url(#clip-path)"
      >
        <path
          id="Path_1005"
          data-name="Path 1005"
          d="M39.627,28.44c-1.383,0-3.742-1.155-3.742-5.149v-7.11a17.822,17.822,0,0,0-.36-3.545,6.151,6.151,0,0,1-3.763,1.283c-.189,0-.375-.012-.559-.028a13.836,13.836,0,0,1,.191,2.289v7.11a11.108,11.108,0,0,0,1.159,5.149H9.281a11.108,11.108,0,0,0,1.159-5.149v-7.11C10.439,9.8,14.744,4.49,20.916,4.49A9.823,9.823,0,0,1,25.88,5.809,6.2,6.2,0,0,1,28.793,2.3,14.171,14.171,0,0,0,20.916,0C11.657,0,5.948,7.978,5.948,16.181v7.11c0,3.994-2.359,5.149-3.742,5.149a2.245,2.245,0,0,0,0,4.49H39.627a2.245,2.245,0,0,0,0-4.49"
          transform="translate(0 0)"
          fill="#636363"
          fillRule="evenodd"
        />
        <path
          id="Path_1006"
          data-name="Path 1006"
          d="M44,4.24a4.814,4.814,0,1,1-4.814,4.814A4.814,4.814,0,0,1,44,4.24"
          transform="translate(-12.235 -1.324)"
          fill="#ff3030"
        />
        <path
          id="Path_1007"
          data-name="Path 1007"
          d="M23.705,51.155a2.246,2.246,0,0,0-3.923,2.19c.014.025.028.05.043.074a8.327,8.327,0,0,0,14.358,0,2.246,2.246,0,0,0-3.88-2.263,3.835,3.835,0,0,1-6.6,0"
          transform="translate(-6.088 -15.614)"
          fill="#636363"
        />
      </g>
    </svg>
  ) : (
    <svg
      id="bell-svgrepo-com_1_"
      data-name="bell-svgrepo-com (1)"
      xmlns="http://www.w3.org/2000/svg"
      width={isMobile ? "25.9" : "20.48"}
      height={isMobile ? "25.95" : "20.48"}
      viewBox="0 0 20.48 20.48"
    >
      <path
        id="Path_1003"
        data-name="Path 1003"
        d="M18.555,12.381c0,1.951,1.153,2.516,1.829,2.516a1.1,1.1,0,1,1,0,2.194H2.1a1.1,1.1,0,1,1,0-2.194c.676,0,1.829-.565,1.829-2.516V8.907C3.926,4.9,6.716,1,11.24,1s7.314,3.9,7.314,7.907ZM6.12,8.907c0-3.116,2.1-5.713,5.12-5.713s5.12,2.6,5.12,5.713v3.474a5.431,5.431,0,0,0,.566,2.516H5.554a5.431,5.431,0,0,0,.566-2.516Z"
        transform="translate(-1 -1)"
        fill="#636363"
        fillRule="evenodd"
      />
      <path
        id="Path_1004"
        data-name="Path 1004"
        d="M7.545,13.044a1.1,1.1,0,0,0-1.9,1.106,4.069,4.069,0,0,0,7.016,0,1.1,1.1,0,0,0-1.9-1.106,1.874,1.874,0,0,1-3.224,0Z"
        transform="translate(1.083 4.323)"
        fill="#636363"
      />
    </svg>
  );
};

const BellIconOpen = ({ screen }) => {
  const isMobile = screen === "mobile";
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={isMobile ? "25.9" : "20.48"}
      height={isMobile ? "25.95" : "20.48"}
      viewBox="0 0 20.48 20.48"
    >
      <g
        id="Group_2833"
        data-name="Group 2833"
        transform="translate(-1207.76 -28.76)"
      >
        <g
          id="bell-svgrepo-com_1_"
          data-name="bell-svgrepo-com (1)"
          transform="translate(1206.76 27.76)"
        >
          <path
            id="Path_1003"
            data-name="Path 1003"
            d="M18.555,12.381c0,1.951,1.153,2.516,1.829,2.516a1.1,1.1,0,0,1,0,2.194H2.1a1.1,1.1,0,0,1,0-2.194c.676,0,1.829-.565,1.829-2.516V8.907C3.926,4.9,6.716,1,11.24,1s7.314,3.9,7.314,7.907Z"
            transform="translate(0)"
            fill="#636363"
            fillRule="evenodd"
          />
          <path
            id="Path_1004"
            data-name="Path 1004"
            d="M7.545,13.044a1.1,1.1,0,1,0-1.9,1.106,4.069,4.069,0,0,0,7.016,0,1.1,1.1,0,1,0-1.9-1.106,1.874,1.874,0,0,1-3.224,0Z"
            transform="translate(2.083 5.323)"
            fill="#636363"
          />
        </g>
      </g>
    </svg>
  );
};

const NotificationDropdown = ({ screen }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [notifications, setNotifications] = useState(initialNotifications);
  const [showModal, setShowModal] = useState(false);

  const handleToggle = (isOpen) => {
    setIsOpen(isOpen);
  };

  const handleNotificationClick = (id) => {
    const updatedNotifications = notifications.map((notification) => {
      if (
        notification.notifId === id &&
        notification.category === "unchecked"
      ) {
        return { ...notification, category: "checked" };
      }
      return notification;
    });
    setNotifications(updatedNotifications);
    if (screen === "pc") {
      setIsOpen(false);
    }

    if (screen === "mobile") {
      setShowModal(false);
    }
  };

  const unreadCount = notifications.filter(
    (notification) => notification.category === "unchecked"
  ).length;

  const renderNotifications = (filterCategory) =>
    notifications
      .filter((notification) => notification.category === filterCategory)
      .map((notification) => (
        <Link
          key={notification.notifId}
          to={notification.link}
          className="d-flex gap-3 align-items-center notification-dropdown-item-padding notification-dropdown-item"
          onClick={() => handleNotificationClick(notification.notifId)}
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <Icon
            name={
              screen === "mobile"
                ? `${notification.icon}-${notification.category}-mobile`
                : `${notification.icon}-${notification.category}`
            }
          />
          <div>
            <div className="fw-semibold notification-primary-text">
              {notification.notification}
            </div>
            <div className="notification-secondary-text">
              {notification.hour}
            </div>
          </div>
        </Link>
      ));
  return (
    <>
      {screen === "mobile" ? (
        <>
          <button
            className="btn p-0 border-0"
            onClick={() => setShowModal(true)}
            aria-label="Open contact form modal"
            aria-controls="contactFormModal"
          >
            <BellIconClosed count={unreadCount} screen={screen} />
          </button>
          {showModal && (
            <div id="contactFormModal" className="custom-fullscreen-modal">
              <div className="custom-modal-header">
                <h5 className="notifications-modal-main-title">
                  Notifications
                </h5>
                <div
                  role="button"
                  tabIndex={0}
                  aria-label="Close"
                  onClick={() => setShowModal(false)}
                  style={{
                    cursor: "pointer",
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="19.092"
                    height="19.092"
                    viewBox="0 0 19.092 19.092"
                  >
                    <g
                      id="Group_2867"
                      data-name="Group 2867"
                      transform="translate(16079.255 -4303.098) rotate(45)"
                    >
                      <line
                        id="Line_148"
                        data-name="Line 148"
                        y2="21"
                        transform="translate(-8313.5 14402)"
                        fill="none"
                        stroke="#515151"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="3"
                      />
                      <line
                        id="Line_149"
                        data-name="Line 149"
                        y2="21"
                        transform="translate(-8303 14412.501) rotate(90)"
                        fill="none"
                        stroke="#515151"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="3"
                      />
                    </g>
                  </svg>
                </div>
              </div>
              <div className="custom-modal-body">
                <div>
                  <div className="notifications-modal-title fw-semibold notification-dropdown-item-padding notification-primary-text">
                    Today
                  </div>
                </div>
                {renderNotifications("unchecked")}
                <div>
                  <div className="notifications-modal-title fw-semibold notification-dropdown-item-padding notification-primary-text">
                    Earlier
                  </div>
                </div>
                {renderNotifications("checked")}
              </div>
            </div>
          )}
        </>
      ) : (
        <Dropdown
          show={isOpen}
          onToggle={handleToggle}
          className="margin-right-20 d-none d-lg-block"
        >
          <Dropdown.Toggle
            as="button"
            className="btn p-0 dropdown-toggle border-0"
            aria-label={
              isOpen
                ? "Close notifications dropdown"
                : "Open notifications dropdown"
            }
          >
            {isOpen ? (
              <BellIconOpen screen={screen} />
            ) : (
              <BellIconClosed count={unreadCount} screen={screen} />
            )}
          </Dropdown.Toggle>
          <Dropdown.Menu className="custom-dropdown-menu">
            <div className="d-flex gap-3 align-items-center width-notification">
              <div className="notifications-title fw-semibold border-bottom">
                Notifications
              </div>
            </div>
            <div className="d-flex gap-3 align-items-center">
              <div className="notification-primary-text fw-semibold notification-dropdown-item-padding">
                Today
              </div>
            </div>
            {renderNotifications("unchecked")}
            <div className="d-flex gap-3 align-items-center notification-dropdown-item-padding">
              <div className="notification-primary-text fw-semibold">
                Earlier
              </div>
            </div>
            {renderNotifications("checked")}
          </Dropdown.Menu>
        </Dropdown>
      )}
    </>
  );
};

export default NotificationDropdown;
